import { Role, type UserID, type UserProfile } from "./user-types";


function cleanName(name: string): string {
  return name.trim().replaceAll("-", " ").replaceAll("_", " ").toUpperCase();
}

function processUser(rawList: string[]): UserProfile[] {
  const result: UserProfile[] = [];

  for (const raw of rawList) {
    const parts = raw.split(",");
    const rawId = parts[0]?.trim();
    const rawName = parts[1];
    const rawRole = parts[2]?.trim().toLowerCase();

    const cleaned = cleanName(rawName!);

    let role: Role = Role.GUEST;
    switch (rawRole) {
      case "admin": role = Role.ADMIN; break;
      case "user": role = Role.USER; break;
      case "guest": role = Role.GUEST; break;
    }

    let id: UserID = "";
    let isActive = false;
    if (rawId !== "") {
      id = Number(rawId);
      isActive = true;
    }

    result.push({
      id: id,
      cleanName: cleaned,
      role: role,
      isActive: isActive,
    });
  }

  return result;


}

const rawUsers = [
  " 101 , somchai_prasert-vip , admin ",
  " 202 , john_doe , user ",
  " , guest_user , guest " // 👈 ตัวนี้ไม่มี ID
];

console.log(processUser(rawUsers));