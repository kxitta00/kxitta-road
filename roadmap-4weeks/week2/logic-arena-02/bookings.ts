import type { RawBooking } from "./types";


export const rawBookings: RawBooking[] = [
  {
    id: "BK-001",
    client: { name: "Anan Somchai", email: "anan@example.com", phone: "081-234-5678" },
    session: { package: " wedding ", date: "2026-03-15", basePrice: 15000, extraHours: 2, hourlyRate: 1500 },
    deliveryStatus: "DELIVERED",
    review: { rating: 5, comment: "ภาพสวยโทนดีมาก ประทับใจครับ" }
  },
  {
    id: "BK-002",
    client: { name: "Wipha Tech", email: "wipha@tech.io" }, // phone แหว่ง
    session: { package: "PORTRAIT", date: "2026-04-10", basePrice: 4500, extraHours: 0, hourlyRate: 1000 },
    deliveryStatus: "delivered", // ตัวพิมพ์เล็ก
    review: undefined // ยังไม่ได้รีวิว
  },
  {
    id: "BK-003",
    client: { name: "Krit Studio", email: "krit@studio.com", phone: "089-999-8888" },
    session: { package: "Graduation", date: "2026-04-10", basePrice: 3500, extraHours: 1, hourlyRate: 800 },
    deliveryStatus: "DELIVERED",
    review: { rating: 4, comment: "ส่งงานตรงเวลา" }
  },
  {
    id: "BK-004",
    client: { name: "Suda Jane" }, // ไม่มีทั้ง email และ phone
    session: { package: "event", date: "2026-02-01", basePrice: 8000, extraHours: 0, hourlyRate: 1200 },
    deliveryStatus: "CANCELLED", // ยกเลิก
    review: undefined
  },
  {
    id: "BK-005",
    client: { name: "Thanet Look", email: "thanet@photo.com", phone: "082-111-2222" },
    session: { package: " Wedding ", date: "2026-04-10", basePrice: 20000, extraHours: 3, hourlyRate: 2000 },
    deliveryStatus: " pending ", // ยังไม่ส่งงาน และมี space
    review: null
  },
  {
    id: "BK-006",
    client: { name: "Praew Pre-wedding", email: "praew@mail.com" },
    session: { package: "wedding", date: "2026-01-20", basePrice: 18000, extraHours: 0, hourlyRate: 1500 },
    deliveryStatus: "DELIVERED",
    review: { rating: 5, comment: "ดีเยี่ยม แนะนำต่อแน่นอน" }
  }
];
