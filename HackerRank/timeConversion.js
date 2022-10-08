let s = "07:05:45PM";
let a = "07:05:45AM";
let b = "12:05:45PM";
let c = "12:05:45AM";

function timeConversion(s) {
    if (s.slice(8, 10) == 'AM') {
        if (s.slice(0, 2) == 12) {
            return parseInt(s.slice(0, 2) - 12) + '0' + s.slice(2, 8)
        } else {
            return s.slice(0, 8)
        }

    } else {
        if (s.slice(0, 2) == 12) {
            return s.slice(0, 8)
        } else {
            return parseInt(s.slice(0, 2)) + 12 + s.slice(2, 8)
        }
    }
}
console.log(timeConversion(s))
console.log(timeConversion(a))
console.log(timeConversion(b))
console.log(timeConversion(c))