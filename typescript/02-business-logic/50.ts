// ข้อมูลขาเข้า (Input)
interface TicketBooking {
  bookingId: string;
  movieTitle: string;                    // ชื่อภาพยนตร์ (เช่น "Avatar 3", "Conan", "Oppenheimer")
  seatType: "REGULAR" | "PREMIUM" | "VIP"; // ประเภทที่นั่ง (160 | 220 | 350)
  hasPopcornCombo?: boolean;            // สั่งป๊อปคอร์นคอมโบหรือไม่ (ถ้า true +120 บาท!)
  isRefunded?: boolean;                 // ลูกค้าขอคืนเงิน/ยกเลิกหรือไม่ (ถ้า true ให้ข้าม!)
}

// รายงานสรุปขาออก (Output Object)
interface CinemaReport {
  totalBoxOfficeRevenue: number; // รายได้รวมสุทธิทั้งหมด (ค่าตั๋ว + ค่าป๊อปคอร์น)
  totalSoldTickets: number;      // จำนวนตั๋ว/ที่นั่งที่ขายได้สำเร็จ
  refundedTicketsCount: number;  // จำนวนตั๋วที่ถูกคืนเงิน
  popcornRevenue: number;        // ยอดรายได้เฉพาะค่าป๊อปคอร์นคอมโบทั้งหมด
  topGrossingMovie: string;      // ชื่อภาพยนตร์ที่ทำรายได้เงินรวมสูงสุดอันดับ 1
}

function generateCinemaReport(bookings: TicketBooking[]): CinemaReport {

  //ดักข้อมูล
  if (bookings.length === 0) {
    return {
      totalBoxOfficeRevenue: 0,
      totalSoldTickets: 0,
      refundedTicketsCount: 0,
      popcornRevenue: 0,
      topGrossingMovie: "No Screening"
    }
  }

  //ประกาศตัวแปรไว้เก็บข้อมูลต่างๆ
  let totalBoxOfficeRevenue: number = 0; //เก็บยอดรวมทั้งหมด
  let totalSoldTickets: number = 0; //นับจำนวนตั๋วที่ถูกขายสำเร็จ
  let refundedTicketsCount: number = 0; //นับจำนวนตั๋วที่ขายไม่สำเร็จโดนรีฟัน
  let popcornRevenue: number = 0; //เก็บยอดรวมป๊อบคอนที่ขายไปทั้งหมด 
  const movieRevenueMap: { [nameMovie: string]: number } = {}; //เก็บยอดรวมทั้งหมด แยกตามชื่อภาพยนตร์

  let topGrossingMovie: string = ""; //ชื่อหนังที่ทำเงินได้เยอะที่สุด
  let maxMovieRevenue: number = -1; //รายได้ของภาพยนตร์ที่ทำเงินเยอะที่สุด

  //คำณวนค่าต่างๆ
  for (const booking of bookings) {
    let popcornPrice: number = 0; //เก็บราคาป๊อบคอน
    let seatPrice: number = 0; //เก็บราคาที่นั่ง
    let ticketPrice: number = 0; //ราคารวมของแต่ละตั๋ว (รวมค่าป๊อบคอนแล้วด้วย)
    //กรณีโดน refund
    if (booking.isRefunded) {
      refundedTicketsCount += 1
      continue;
    }
    //กรณีไม่โดน refund
    totalSoldTickets += 1;
    //หาราคาที่นั่ง
    const SEAT_PRICES = { REGULAR: 160, PREMIUM: 220, VIP: 350 };
    seatPrice = SEAT_PRICES[booking.seatType];
    //ตรวจว่ารับป๊อบคอนด้วยมั้ย
    popcornPrice = booking.hasPopcornCombo ? 120 : 0;
    //สะสมยอดขายป๊อบคอนรวมทั้งหมด
    popcornRevenue += popcornPrice;
    //สะสมยอดรวมของตั๋วนี้
    ticketPrice = (seatPrice + popcornPrice);
    totalBoxOfficeRevenue += ticketPrice;
    //หายอดรวม แยกตามชื่อหนัง
    movieRevenueMap[booking.movieTitle] = (movieRevenueMap[booking.movieTitle] || 0) + ticketPrice;
    //END
  }

  //หาภาพยนตร์ทำเงินอันดับ1
  topGrossingMovie = ""; //ชื่อหนังที่ทำเงินได้เยอะที่สุด
  maxMovieRevenue = -1; //รายได้ของภาพยนตร์ที่ทำเงินเยอะที่สุด
  let movieTitleList = Object.keys(movieRevenueMap) //ดึงชื่อหนังทั้งหมดมาไว้ในตัวแปรนี้
  for (const movieTitle of movieTitleList) {
    if (maxMovieRevenue < movieRevenueMap[movieTitle]!) {
      maxMovieRevenue = movieRevenueMap[movieTitle]!
      topGrossingMovie = movieTitle;
    }
  }
  //END

  return {
    totalBoxOfficeRevenue,
    totalSoldTickets,
    refundedTicketsCount,
    popcornRevenue,
    topGrossingMovie
  }
}

const dailyBookings: TicketBooking[] = [
  { bookingId: "T01", movieTitle: "Avatar 3", seatType: "PREMIUM", hasPopcornCombo: true },  // 220 + 120 = 340 (Avatar: 340, Popcorn: 120)
  { bookingId: "T02", movieTitle: "Conan", seatType: "REGULAR", hasPopcornCombo: false },    // 160 + 0 = 160 (Conan: 160)
  { bookingId: "T03", movieTitle: "Avatar 3", seatType: "VIP", isRefunded: true },           // คืนเงิน! (Refunded +1)
  { bookingId: "T04", movieTitle: "Oppenheimer", seatType: "VIP", hasPopcornCombo: true },    // 350 + 120 = 470 (Oppenheimer: 470, Popcorn: 120)
  { bookingId: "T05", movieTitle: "Avatar 3", seatType: "REGULAR", hasPopcornCombo: false }  // 160 + 0 = 160 (Avatar: 340 + 160 = 500)
];

console.log(generateCinemaReport(dailyBookings));
/* 📤 ผลลัพธ์ที่ต้องการ (Expected Output Object):
{
  totalBoxOfficeRevenue: 1130,      // (340 + 160 + 470 + 160)
  totalSoldTickets: 4,              // ขายสำเร็จ 4 ที่นั่ง
  refundedTicketsCount: 1,          // คืนเงิน 1 ที่นั่ง (T03)
  popcornRevenue: 240,              // ค่าป๊อปคอร์น (120 + 120)
  topGrossingMovie: "Avatar 3"      // Avatar 3 ทำเงินสูงสุด (500 บาท)
}
*/
