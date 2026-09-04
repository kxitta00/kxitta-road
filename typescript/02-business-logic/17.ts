//17/7 โจทย์ : "ระบบแสดงประวัติกิจกรรมย้อนหลัง" (Reverse Timeline Log)

const userActivities: string[] = ["Login", "Search", "Add to Cart", "Checkout"];

function timeLineUserReverse(activities: string[]): string {
    const sumActivities: string[] = [];
    for (let i = activities.length - 1; i >= 0; i--) {
        sumActivities.push(activities[i]!);
    }
    return sumActivities.join(" -> ")
}

const output = timeLineUserReverse(userActivities)
console.log(output)