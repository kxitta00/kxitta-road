import type { TaskState } from "./types";

const STORAGE_KEY = "TASK_MANAGER_APP_V1";


export function saveTask(state: TaskState): void {
  const jasonString: string = JSON.stringify(state)
  localStorage.setItem(STORAGE_KEY, jasonString);
}


export function loadTasks(): TaskState {
  const raw: string | null = localStorage.getItem(STORAGE_KEY)
  if (raw === null) {
    return []
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.log("ข้อมูลในเครื่องเสียหาย กำลังรีเซ็ตเป็นค่าเริ่มต้น", error);
    return [];
  }
}