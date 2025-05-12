"use strict";
//Predicate function to check if a
function checkNumber(value) {
    return typeof value === "number";
}
// 1. Even Sum
function evenSum(a, b, c) {
    if (checkNumber(a) && checkNumber(b) && checkNumber(3)) {
        return (a + b + c) % 2 === 0 ? true : false;
    }
}
// console.log(evenSum(1, 2, 3));
// console.log(evenSum(2, 2, 3));
// ---------------------------------------------------------------------------------- //
// 2. Day of the Week
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
    DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 4] = "Thursday";
    DaysOfTheWeek[DaysOfTheWeek["Friday"] = 5] = "Friday";
    DaysOfTheWeek[DaysOfTheWeek["Saturday"] = 6] = "Saturday";
    DaysOfTheWeek[DaysOfTheWeek["Sunday"] = 7] = "Sunday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
function dayOfTheWeek(number) {
    const day = DaysOfTheWeek;
    return day[number] ? day[number] : 'error';
}
// console.log(dayOfTheWeek(8));
// ---------------------------------------------------------------------------------- //
// 3. Format Person
function formatPerson(personInfo) {
    return `Hello, my name is ${personInfo[0]} and my age is ${personInfo[1]}`;
}
console.log(formatPerson(['Ivan', 20]));
console.log(formatPerson(['Ivan', 30]));
// console.log(formatPerson(['Ivan', '20']));
// console.log(formatPerson(['Ivan', 20, 'Ivanov']));
//# sourceMappingURL=solve.exercise.js.map