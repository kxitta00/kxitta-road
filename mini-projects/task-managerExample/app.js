// task-engine.ts
function createTask(state, title, priority) {
  if (title.trim().length === 0) {
    return state;
  }
  const newTask = {
    id: crypto.randomUUID(),
    title: title.trim(),
    priority,
    status: "TODO",
    createdAt: Date.now()
  };
  return [...state, newTask];
}
function updateStatus(state, id, newStatus) {
  const taskUpdate = state.map((task) => {
    if (task.id === id) {
      return { ...task, status: newStatus };
    }
    return task;
  });
  return taskUpdate;
}
function deleteTask(state, id) {
  const taskDeleted = state.filter((task) => {
    if (task.id !== id) {
      return true;
    } else {
      return false;
    }
  });
  return taskDeleted;
}
function filterByStatus(state, filter) {
  if (filter === "ALL") {
    return state;
  }
  const statusFilter = state.filter((s) => s.status === filter);
  return statusFilter;
}
function clearCompleted(state) {
  return state.filter((task) => task.status !== "DONE");
}
function getTaskSummary(tasks) {
  const totalTask = tasks.length;
  const totalCompleted = tasks.filter((task) => task.status === "DONE").length;
  const totalInProgress = tasks.filter((task) => task.status === "IN_PROGRESS").length;
  const totalTODO = tasks.filter((tasks2) => tasks2.status === "TODO").length;
  const rate = totalTask === 0 ? 0 : Math.round(totalCompleted / totalTask * 100);
  return {
    total: totalTask ?? 0,
    completed: totalCompleted ?? 0,
    inProgress: totalInProgress ?? 0,
    todo: totalTODO ?? 0,
    completionRate: rate
  };
}

// storage.ts
var STORAGE_KEY = "TASK_MANAGER_APP_V1";
function saveTask(state) {
  const jasonString = JSON.stringify(state);
  localStorage.setItem(STORAGE_KEY, jasonString);
}
function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    return [];
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.log("ข้อมูลในเครื่องเสียหาย กำลังรีเซ็ตเป็นค่าเริ่มต้น", error);
    return [];
  }
}

// app.ts
var tasks = loadTasks();
var currentFilter = "ALL";
var taskForm = document.getElementById("task-form");
var taskInput = document.getElementById("task-input");
var prioritySelect = document.getElementById("priority-select");
var taskList = document.getElementById("task-list");
var filterBtns = document.querySelectorAll(".filter-btn");
var clearCompletedBtn = document.getElementById("clear-completed-btn");
var kpiTotal = document.getElementById("kpi-total");
var kpiProgress = document.getElementById("kpi-progress");
var kpiCompleted = document.getElementById("kpi-completed");
var kpiRate = document.getElementById("kpi-rate");
function renderApp() {
  const summary = getTaskSummary(tasks);
  kpiTotal.textContent = String(summary.total);
  kpiProgress.textContent = String(summary.inProgress);
  kpiCompleted.textContent = String(summary.completed);
  kpiRate.textContent = `${summary.completionRate}%`;
  const filteredTasks = filterByStatus(tasks, currentFilter);
  taskList.innerHTML = "";
  if (filteredTasks.length === 0) {
    taskList.innerHTML = `<li style="text-align: center; color:var(--text-muted); padding: 2rem 0;">ไม่มีรายการงาน</li>`;
    return;
  }
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
  });
}
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = taskInput.value;
  const priority = prioritySelect.value;
  if (title.trim().length === 0)
    return;
  tasks = createTask(tasks, title, priority);
  saveTask(tasks);
  renderApp();
  taskInput.value = "";
});
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    if (!filter)
      return;
    currentFilter = filter;
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderApp();
  });
});
clearCompletedBtn.addEventListener("click", () => {
  tasks = clearCompleted(tasks);
  saveTask(tasks);
  renderApp();
});
taskList.addEventListener("change", (e) => {
  const target = e.target;
  if (target.classList.contains("status-select")) {
    const select = target;
    const id = select.dataset.id;
    if (!id)
      return;
    const newStatus = select.value;
    tasks = updateStatus(tasks, id, newStatus);
    saveTask(tasks);
    renderApp();
  }
});
taskList.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("delete-btn")) {
    const id = target.dataset.id;
    if (!id)
      return;
    tasks = deleteTask(tasks, id);
    saveTask(tasks);
    renderApp();
  }
});
renderApp();
