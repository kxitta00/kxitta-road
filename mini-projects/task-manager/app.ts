import type { Priority, Status, Task, TaskState, TaskSummary } from "./types"
import { createTask, updateStatus, deleteTask, filterByStatus, clearCompleted, getTaskSummary } from "./task-engine"
import { loadTasks, saveTask } from "./storage"


//todo ทำความเข้าใจไฟล์นี้ไล่ work flow ให้ 100% และ เรียนรู้ syntax ใหม่ๆ


//จำว่าตอนนี้ทั้งระบบมีงานอะไรอยู่บ้าง (โหลดขึ้นมาจาก LocalStorage ทันทีที่เปิดเว็บ)
let tasks: TaskState = loadTasks();
//จำว่าตอนนี้สายตาผู้ใช้กำลังเลือกดูแท็บไหนอยู่ (ALL, TODO, IN_PROGRESS, DONE)
let currentFilter: Status | "ALL" = "ALL";



// ฟอร์มและอินพุต //เป็นส่วนรับข้อมูลจากผู้ใช้
//เอาไว้ดักฟังเหตุการณ์เมื่อผู้ใช้กด submit เพื่อไม่ให้หน้าเว็บรีเซ็ทตัวเอง
const taskForm = document.getElementById("task-form") as HTMLFormElement;
//เอาไว้ดึกข้อความที่ผู้ใช้พิมพ์(taskInput.value) และสั่งล้างช่องให้ว่างด้วย (taskInput.value = "") หลังเพิ่มงานเสร็จ
const taskInput = document.getElementById("task-input") as HTMLInputElement;
//เอาไว้รับระดับความสำคัญที่ผู้ใช้เลือกมา
const prioritySelect = document.getElementById("priority-select") as HTMLSelectElement;

//พื้นที่แสดงผล
//ต่อเข้ากับ task-list  กล่องว่างๆที่เราเตรียมไว้เพื่อให้โค้ดสั่งสร้างและยัดการ์ดงาน <li class="task-card"> ลงไป
const taskList = document.getElementById("task-list") as HTMLUListElement;

//แถบควบคุม
const filterBtns = document.querySelectorAll<HTMLButtonElement>(".filter-btn");
const clearCompletedBtn = document.getElementById("clear-completed-btn") as HTMLButtonElement;


//การ์ดสถิติ
//kpiTotal, kpiProgress, kpiCompleted, kpiRate: ต่อเข้ากับ <span> บนการ์ด 4 ช่องด้านบน เพื่อสั่งเปลี่ยนตัวเลขสถิติ (เช่น สั่ง .textContent = "5") ทุกครั้งที่งานมีการเปลี่ยนแปลง
const kpiTotal = document.getElementById("kpi-total") as HTMLElement;
const kpiProgress = document.getElementById("kpi-progress") as HTMLElement;
const kpiCompleted = document.getElementById("kpi-completed") as HTMLElement
const kpiRate = document.getElementById("kpi-rate") as HTMLElement

//ฟังก์ชัน render app ล้างหน้าจอใหม่และวาดหน้าจอใหม่จากข้อมูลล่าสุด
function renderApp(): void {
  //1. อัพเดตตัวเลขสถิติ ทั้ง 4 ช่อง
  //ดึงงานทั้งหมดจาก local storage แล้วเอาไปคำณวนในฟังก์ชัน
  const summary = getTaskSummary(tasks);
  kpiTotal.textContent = String(summary.total);
  kpiProgress.textContent = String(summary.inProgress);
  kpiCompleted.textContent = String(summary.completed);
  kpiRate.textContent = `${summary.completionRate}%`;

  //2. กรองงานตามแท็บที่เลือกอยู่
  const filteredTasks = filterByStatus(tasks, currentFilter)

  //3.ล้างรายการเดิมทิ้่ง
  taskList.innerHTML = "";

  //4. กรณีไม่มีงานให้แสดง empty state
  if (filteredTasks.length === 0) {
    taskList.innerHTML = `<li style="text-align: center; color:var(--text-muted); padding: 2rem 0;">ไม่มีรายการงาน</li>`;
    return;
  }

  //5. วนลูปวาดการ์ดงานทีละใบ
  filteredTasks.forEach((t) => {
    const isDone = t.status === "DONE";
    const li = document.createElement("li");
    li.className = isDone ? "task-card completed" : "task-card";

    li.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <select 
          class="status-select" 
          data-id="${t.id}" 
          style="background: var(--bg-main); color: var(--text-main); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 4px 8px; font-size: 0.85rem; cursor: pointer;"
        >
          <option value="TODO" ${t.status === "TODO" ? "selected" : ""}>To DO</option>
          <option value="IN_PROGRESS" ${t.status === "IN_PROGRESS" ? "selected" : ""}>In Progress</option>
          <option value="DONE" ${t.status === "DONE" ? "selected" : ""}>Completed</option>
        </select>
        <span class="task-title">${t.title}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span class="badge badge-${t.priority.toLowerCase()}">${t.priority}</span>
        <button 
          type="button" 
          class="delete-btn" 
          data-id="${t.id}" 
          style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem;"
        >✕</button>
      </div>
    `;
    taskList.appendChild(li);
  })
}

//1. เพิ่มงานใหม่
taskForm.addEventListener("submit", (e) => {
  e.preventDefault() //ห้ามรึเซ็ทหน้าเว็บ

  const title = taskInput.value
  const priority = prioritySelect.value as Priority;

  //ป้องกันการส่งข้อความว่างเปล่า
  if (title.trim().length === 0) return;

  //ส่งให้ engine คำณวน -> เซฟลง Storage -> สั่งวาดจอใหม่
  tasks = createTask(tasks, title, priority);
  saveTask(tasks);
  renderApp();

  //ล้างช่องกรอกข้อความให้ว่าง
  taskInput.value = "";
});

//2. สลับแท็กตัวกรอก 
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter as Status | "ALL";
    if (!filter) return;

    currentFilter = filter;

    //สลับคลาส active ให้สีขาวกระโดนมาที่ปุ่มที่เพิ่งคลิก
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    //วาดหน้าจอใหม่ตามตัวกรองที่เลือก
    renderApp()
  });
});

//3. ล้างงานที่ทำเสร็จแล้วทั้งหมด
clearCompletedBtn.addEventListener("click", () => {
  tasks = clearCompleted(tasks);
  saveTask(tasks);
  renderApp();
});


// 4.1 ดักฟังการเปลี่ยนสถานะจาก Dropdown (ใช้ change event)
taskList.addEventListener("change", (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("status-select")) {
    const select = target as HTMLSelectElement;
    const id = select.dataset.id;
    if (!id) return;

    const newStatus = select.value as Status;
    tasks = updateStatus(tasks, id, newStatus);
    saveTask(tasks);
    renderApp();
  }
});

// 4.2 ดักฟังการกดปุ่มลบ (ใช้ click event)
taskList.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("delete-btn")) {
    const id = target.dataset.id;
    if (!id) return;

    tasks = deleteTask(tasks, id);
    saveTask(tasks);
    renderApp();
  }
});

// 5. สั่งวาดหน้าจอครั้งแรกตอนโหลดเว็บ
renderApp();

