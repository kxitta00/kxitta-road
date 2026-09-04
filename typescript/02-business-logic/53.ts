//19/8 โจทย์ข้อที่ 53: ระบบบริหารคลาสและวิเคราะห์รายได้ฟิตเนสคลับ (Smart Fitness Club Analytics Engine)
interface FitnessSession {
  sessionId: string;                                    // รหัสคลาส (เช่น "FIT-01", "FIT-02")
  trainerName: string;                                  // ชื่อเทรนเนอร์ผู้สอน (เช่น "Coach Alex", "Coach Sarah", "Coach John")
  classType: "YOGA" | "SPINNING" | "CROSSFIT";          // ประเภทคลาส (250 | 400 | 600 บาท ต่อผู้เข้าเรียน 1 คน)
  attendeeCount: number;                                // จำนวนผู้เข้าเรียนในคลาสนั้น (คน)
  includesNutritionPlan?: boolean;                      // คลาสนี้มีแพ็กเกจอาหารคลีน/เวย์โปรตีนเสริมหรือไม่ (ถ้า true +300 บาทต่อคลาส!)
  isTrainerAbsent?: boolean;                            // เทรนเนอร์ลาป่วย/คลาสถูกยกเลิกหรือไม่ (ถ้า true ให้ข้าม ไม่คิดเงิน!)
}

interface FitnessReport {
  totalClubRevenue: number;         // รายได้รวมสุทธิทั้งหมดของคลับ (ค่าคลาสตามจำนวนคน + ค่าแพ็กเกจอาหารเสริม)
  totalCompletedClasses: number;    // จำนวนคลาสที่เปิดสอนสำเร็จ
  cancelledClassesCount: number;    // จำนวนคลาสที่ถูกยกเลิก
  totalAttendees: number;           // จำนวนผู้เข้าเรียนรวมทั้งหมดในคลาสที่สำเร็จ (คน)
  nutritionPlanRevenue: number;     // รายได้เฉพาะค่าแพ็กเกจอาหารคลีน/โปรตีนเสริมทั้งหมด
  topGrossingTrainer: string;       // ชื่อเทรนเนอร์ที่สร้างรายได้รวมให้คลับสูงสุดอันดับ 1
}

function generateFitnessReport(sessions: FitnessSession[]): FitnessReport {
  if (sessions.length === 0) {
    return {
      totalClubRevenue: 0,
      totalCompletedClasses: 0,
      cancelledClassesCount: 0,
      totalAttendees: 0,
      nutritionPlanRevenue: 0,
      topGrossingTrainer: "Not Found",
    }
  }


  let totalClubRevenue: number = 0;
  let totalCompletedClasses: number = 0;
  let cancelledClassesCount: number = 0;
  let totalAttendees: number = 0;
  let nutritionPlanRevenue: number = 0;
  let topGrossingTrainer: string = "";
  const trainerRevenueMap: { [name: string]: number } = {};

  for (const session of sessions) {
    let classRate: number = 0;
    let classCost: number = 0;

    if (session.isTrainerAbsent) {
      cancelledClassesCount += 1
      continue
    }
    totalCompletedClasses += 1

    switch (session.classType) {
      case "YOGA":
        classRate = 250;
        break;
      case "SPINNING":
        classRate = 400;
        break;
      case "CROSSFIT":
        classRate = 600;
        break;
    }
    classCost = (classRate * session.attendeeCount);

    if (session.includesNutritionPlan) {
      classCost += 300
      nutritionPlanRevenue += 300;
    }

    totalClubRevenue += classCost;
    totalAttendees += session.attendeeCount;

    if (!trainerRevenueMap[session.trainerName]) {
      trainerRevenueMap[session.trainerName] = 0
    }

    trainerRevenueMap[session.trainerName]! += classCost;
  }
  topGrossingTrainer = "";
  let maxCost = -1;
  let trainerName = Object.keys(trainerRevenueMap)
  for (const name of trainerName) {
    if (maxCost < trainerRevenueMap[name]!) {
      maxCost = trainerRevenueMap[name]!
      topGrossingTrainer = name;
    }
  }

  return {
    totalClubRevenue,
    totalCompletedClasses,
    cancelledClassesCount,
    totalAttendees,
    nutritionPlanRevenue,
    topGrossingTrainer,
  }
}

const dailyFitnessSessions: FitnessSession[] = [
  { sessionId: "FIT-01", trainerName: "Coach Alex", classType: "CROSSFIT", attendeeCount: 5, includesNutritionPlan: true },   // (5*600) + 300 = 3,300 (Alex: 3,300, Nutrition: 300, Attendees: 5)
  { sessionId: "FIT-02", trainerName: "Coach Sarah", classType: "YOGA", attendeeCount: 12, includesNutritionPlan: false },    // (12*250) + 0 = 3,000 (Sarah: 3,000, Attendees: 12)
  { sessionId: "FIT-03", trainerName: "Coach John", classType: "SPINNING", attendeeCount: 8, isTrainerAbsent: true },        // ยกเลิก! (Cancelled +1)
  { sessionId: "FIT-04", trainerName: "Coach Sarah", classType: "SPINNING", attendeeCount: 10, includesNutritionPlan: true }, // (10*400) + 300 = 4,300 (Sarah: 3,000 + 4,300 = 7,300, Nutrition: 300, Attendees: 10)
  { sessionId: "FIT-05", trainerName: "Coach Alex", classType: "YOGA", attendeeCount: 15, includesNutritionPlan: false }      // (15*250) + 0 = 3,750 (Alex: 3,300 + 3,750 = 7,050, Attendees: 15)
];

console.log(generateFitnessReport(dailyFitnessSessions))