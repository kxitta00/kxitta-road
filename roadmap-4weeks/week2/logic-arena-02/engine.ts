import { type Client, type Session, type Review, type RawBooking, type ProcessedBooking } from "./types";
import { rawBookings } from "./bookings";

export function processBookings(bookings: RawBooking[]): ProcessedBooking[] {
  const deliveryStatus = bookings.filter((oder) => (oder.deliveryStatus.trim().toUpperCase()) === "DELIVERED")
  const processOrders: ProcessedBooking[] = deliveryStatus.map((oder) => {
    return {
      id: oder.id.toUpperCase(),
      clientName: (oder.client.name ?? "").toUpperCase(),
      clientPhone: (oder.client.phone ?? "No_Phone"),
      package: (oder.session.package ?? "").toUpperCase().trim(),
      deliveryDate: oder.session.date ?? "",
      totalPrice: (oder.session.basePrice) + (oder.session.extraHours * oder.session.hourlyRate),
      rating: oder.review?.rating ?? 0,
    }
  })

  const sortedResult = [...processOrders].sort((a, b) => {
    const timeA = new Date(a.deliveryDate).getTime();
    const timeB = new Date(b.deliveryDate).getTime();
    const dateDiff = timeB - timeA;
    if (dateDiff !== 0) {
      return dateDiff;
    }

    return b.rating - a.rating;
  });


  return sortedResult

}


