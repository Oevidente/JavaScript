const data1 = new Date();
const data2 = new Date('October 21 2020 15:50');
const data3 = new Date(2020,09,21,12,47);
data2.setFullYear(2021);
console.log(data2);
console.log(data2.toTimeString());
console.log(data2.toDateString());
console.log(data2.toISOString());