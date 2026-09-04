// 10/8 📝 โจทย์ข้อ 44: "ระบบจัดอันดับ 3 โรงแรมยอดนิยมที่มีคะแนนรีวิวเฉลี่ยสูงสุด (Top Rated Hotels Analytics)"
interface HotelReview {
    hotelName: string;    //ชื่อโรงแรม
    score: number;        //คะแนนรีวิว
    isVerified: boolean; // ยืนยันตัวตนหรือไม่ ถ้า false คือ รีวิวสแปม ให้ข้าม!
}

function findTop3Hotels(hotelList: HotelReview[]): string {
    //ส่วนเช็คข้อมูล
    const hotelNameList: string[] = [];
    for (const hotel of hotelList) {
        if (hotel.isVerified === true) {
            if (!hotelNameList.includes(hotel.hotelName)) {
                hotelNameList.push(hotel.hotelName);
            }
        }
    }
    //END LOOP
    if (hotelNameList.length < 3) {
        return "Insufficient Hotel Data"
    }
    //-----//

    //ส่วนคำณวนคะแนนรีวิวและหาค่าเฉลี่ยน
    const totalScore: { [name: string]: number } = {};
    const reviewCount: { [key: string]: number } = {};
    for (const find of hotelList) {
        if (find.isVerified === true) {
            let reviewScore: number = find.score
            if (!totalScore[find.hotelName] && !reviewCount[find.hotelName]) {
                totalScore[find.hotelName] = reviewScore;
                reviewCount[find.hotelName] = reviewCount[find.hotelName] = 1;
            } else {
                totalScore[find.hotelName]! += reviewScore;
                reviewCount[find.hotelName]! += 1
            }
        }
    }
    //END LOOP

    //่จัดอันดับ
    let top1ReviewAvgScore = -1;
    let top1ReviewName = "";

    let top2ReviewAvgScore = -1;
    let top2ReviewName = "";

    let top3ReviewAvgScore = -1;
    let top3ReviewName = "";

    for (const name of hotelNameList) {
        let avgScore = totalScore[name]! / reviewCount[name]!;
        if (top1ReviewAvgScore < avgScore) {
            top3ReviewAvgScore = top2ReviewAvgScore;
            top3ReviewName = top2ReviewName;
            top2ReviewAvgScore = top1ReviewAvgScore;
            top2ReviewName = top1ReviewName;
            top1ReviewAvgScore = avgScore;
            top1ReviewName = name;
        } else if (top2ReviewAvgScore < avgScore) {
            top3ReviewAvgScore = top2ReviewAvgScore;
            top3ReviewName = top2ReviewName;
            top2ReviewAvgScore = avgScore;
            top2ReviewName = name;
        } else if (top3ReviewAvgScore < avgScore) {
            top3ReviewAvgScore = avgScore
            top3ReviewName = name
        }
    }
    //END LOOP



    return (`🏨 1st: ${top1ReviewName} (${top1ReviewAvgScore.toFixed(2)} ⭐) | 🥈 2nd: ${top2ReviewName} (${top2ReviewAvgScore.toFixed(2)} ⭐) | 🥉 3rd: ${top3ReviewName} (${top3ReviewAvgScore.toFixed(2)}) ⭐`)
}

const hotelReviews: HotelReview[] = [
    { hotelName: "Grand Palace", score: 5, isVerified: true },
    { hotelName: "Seaside Resort", score: 5, isVerified: true },
    { hotelName: "Grand Palace", score: 1, isVerified: false },  // ข้าม! (สแปม)
    { hotelName: "Grand Palace", score: 4, isVerified: true },   // Grand Palace: รวม 9 / 2 รีวิว = 4.50
    { hotelName: "Mountain View", score: 3, isVerified: true },
    { hotelName: "Seaside Resort", score: 5, isVerified: true },  // Seaside Resort: รวม 10 / 2 รีวิว = 5.00
    { hotelName: "Mountain View", score: 4, isVerified: true },   // Mountain View: รวม 7 / 2 รีวิว = 3.50
    { hotelName: "City Inn", score: 4, isVerified: true },        // City Inn: รวม 4 / 1 รีวิว = 4.00
    { hotelName: "City Inn", score: 2, isVerified: false }        // ข้าม! (สแปม)
];

console.log(findTop3Hotels(hotelReviews));
// Output: 🏨 1st: Seaside Resort (5.00 ⭐) | 🥈 2nd: Grand Palace (4.50 ⭐) | 🥉 3rd: City Inn (4.00 ⭐)

// console.log(findTop3Hotels([
//     { hotelName: "Grand Palace", score: 5, isVerified: true },
//     { hotelName: "Seaside Resort", score: 4, isVerified: false }
// ]));
// Output: Insufficient Hotel Data
