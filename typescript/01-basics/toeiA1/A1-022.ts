let inputDay: number = Number(prompt("Day: "));
let inputMonth: number = Number(prompt("Month: "));

if (inputDay >= 1 && inputDay <= 31 && inputMonth >= 1 && inputMonth <= 12) {
    let totalScore: number = (inputMonth * 100) + inputDay;
    if (totalScore >= 1122 && totalScore <= 1221) { // 22/11 ถึง 21/12
        console.log("sagittarius");
    } else if (totalScore >= 1024 && totalScore <= 1121) { // 24/10 ถึง 21/11
        console.log("scorpio");
    } else if (totalScore >= 923 && totalScore <= 1023) { // 23/09 ถึง 23/10
        console.log("libra");
    } else if (totalScore >= 823 && totalScore <= 922) { // 23/08 ถึง 22/09
        console.log("virgo");
    } else if (totalScore >= 723 && totalScore <= 822) { // 23/07 ถึง 22/08
        console.log("leo");
    } else if (totalScore >= 622 && totalScore <= 722) { // 22/06 ถึง 22/07
        console.log("cancer");
    } else if (totalScore >= 521 && totalScore <= 621) { //21/05 ถึง 21/06
        console.log("gemini");
    } else if (totalScore >= 420 && totalScore <= 520) { //20/04 ถึง 20/05
        console.log("taurus");
    } else if (totalScore >= 321 && totalScore <= 419) { //21/03 ถึง 19/04
        console.log("aries");
    } else if (totalScore >= 219 && totalScore <= 320) { //19/02 ถึง 20/03
        console.log("pisces");
    } else if (totalScore >= 20 && totalScore <= 218) { //20/01 ถึง 18/02
        console.log("aquarius");
    } else if (totalScore >= 1222 || totalScore <= 119) { //22/12 ถึง 19/01
        console.log("capricorn");
    } else {
        console.log("unknow");
    }
} else {
    console.log("unknow");
}
