export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

export type UserID = string | number;

export interface UserProfile {
  id: UserID;
  cleanName: String;
  role: Role;
  isActive: boolean;
}