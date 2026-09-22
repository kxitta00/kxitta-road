//ฟังก์ชันแปลงวินาทีที่รับเข้ามาเป็น mm:ss
export function formatTime(totalSeconds: number): string {
  const minutes: number = Math.floor(totalSeconds / 60);
  const seconds: number = totalSeconds % 60
  const minutesStr: string = String(minutes).padStart(2, "0");
  const secondsStr: string = String(seconds).padStart(2, "0");
  return `${minutesStr}:${secondsStr}`
}



//ฟังก์ชันแปลงนาทีเป็นวินาทีรวม
export function toSeconds(minutes: number): number {
  return minutes * 60
}


//ฟังก์ชันเพิ่มลดเวลาแบบมีขอบเขต
export function adjustMinutes(currentMinutes: number, change: number, minLimit: number, maxLimit: number): number {
  const nextValue = currentMinutes + change;
  if (nextValue < minLimit) {
    return minLimit
  } else if (nextValue > maxLimit) {
    return maxLimit
  } else {
    return nextValue
  }
}

