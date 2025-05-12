//Predicate function to check if a
function checkNumber(value: string | number): value is number {
  return typeof value === "number";
}

// 1. Even Sum
function evenSum(a: number, b: number, c: number) {
  if (checkNumber(a) && checkNumber(b) && checkNumber(3)) {
    return (a + b + c) % 2 === 0 ? true : false;
  }
}

// console.log(evenSum(1, 2, 3));
// console.log(evenSum(2, 2, 3));

// ---------------------------------------------------------------------------------- //

// 2. Day of the Week
enum DaysOfTheWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function dayOfTheWeek(number: number) {
  const day = DaysOfTheWeek;
  return day[number] ? day[number] : 'error'
}

// console.log(dayOfTheWeek(8));

// ---------------------------------------------------------------------------------- //

// 3. Format Person


function formatPerson(personInfo: [string, number]){
  return `Hello, my name is ${personInfo[0]} and my age is ${personInfo[1]}`;
}

// console.log(formatPerson(['Ivan', 20]));
// console.log(formatPerson(['Ivan', 30]));
// console.log(formatPerson(['Ivan', '20']));
// console.log(formatPerson(['Ivan', 20, 'Ivanov']));