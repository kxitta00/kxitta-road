//14/09
//logic


import type { Priority, Status, Task, TaskState, TaskSummary } from "./types"


//ระบบจัดการฐานข้อมูลย่อมๆๆแบบทำงานในหน่วยความจำ (ram) โดยใช้หลักการไม่ทำลายของเดิม

//1.ฟังก์ชันดักขยะสร้าง task 
export function createTask(state: TaskState, title: string, priority: Priority): TaskState {
  if (title.trim().length === 0) { //ดักขยะ
    return state
  }

  const newTask: Task = ({ //การสร้างงานใหม่
    id: crypto.randomUUID(), //สุ่มเลข id
    title: title.trim(), //นำชื่อที่กรอกในงานนั้นมาตัดช่องว่าง
    priority: priority,
    status: "TODO", //กำหนดงานเริ่มต้นเป้น TODO เพราะยังไม่ทำแน่นอน
    createdAt: Date.now(), //กำหนดเวลาตามที่สร้าง
  });

  return [...state, newTask]; //สร้างกล่องใหม่ ย้ายของเก่ามา แล้ววางของใหม่ต่อท้าย
}

//2. ฟังก์ชันอัปเดตstatus ใน task นั้นๆ //
export function updateStatus(state: TaskState, id: string, newStatus: Status): TaskState {
  const taskUpdate: TaskState = state.map((task) => {
    if (task.id === id) {
      return { ...task, status: newStatus };
    }

    return task;
  });
  return taskUpdate
}

//3. ฟังก์ชันลบ task ตามที่ระบุุ
export function deleteTask(state: TaskState, id: string): TaskState {
  const taskDeleted: TaskState = state.filter((task) => {
    if (task.id !== id) {
      return true
    } else {
      return false
    };
  });

  return taskDeleted;
}

//4. กรองงานตามสถานะ
export function filterByStatus(state: TaskState, filter: Status | "ALL"): TaskState {
  if (filter === "ALL") {
    return state
  }

  const statusFilter: TaskState = state.filter((s) => s.status === filter);
  return statusFilter
}

//5. เคีลยร์งานที่เสร็จแล้ว 
export function clearCompleted(state: TaskState): TaskState {
  return state.filter((task) => task.status !== "DONE")
}

//6. สรุปหน้าจอ

export function getTaskSummary(tasks: TaskState): TaskSummary {
  const totalTask: number = tasks.length;
  const totalCompleted: number = tasks.filter((task) => task.status === "DONE").length;
  const totalInProgress: number = tasks.filter((task) => task.status === "IN_PROGRESS").length;
  const totalTODO: number = tasks.filter((tasks) => tasks.status === "TODO").length;
  const rate: number = totalTask === 0 ? 0 : Math.round((totalCompleted / totalTask) * 100);
  return {
    total: totalTask ?? 0,
    completed: totalCompleted ?? 0,
    inProgress: totalInProgress ?? 0,
    todo: totalTODO ?? 0,
    completionRate: rate,
  }
}