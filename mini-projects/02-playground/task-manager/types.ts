//types


export type Priority = "LOW" | "MEDIUM" | "HIGH";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  id: string, // id 
  title: string,       //ชื่อ
  priority: Priority,  //ความสำคัญ
  status: Status,       //สถานะ
  createdAt: number,   //สรา้งตอนไหน?
};

export type TaskState = Task[];

export type TaskSummary = {
  total: number, //จำนวนงานทั้งหมด
  completed: number, //สำเร็จแล้ว
  inProgress: number, //กำลังทำ
  todo: number, //ที่ยังไม่เริ่ม
  completionRate: number, //เปอร์เซ็นที่เสร็จแล้ว
}



