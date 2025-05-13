//Predicate function to check if a
function checkNumber(value: string | number): value is number {
  return typeof value === "number";
}

//** 1. Even Sum **//
function evenSum(a: number, b: number, c: number) {
  if (checkNumber(a) && checkNumber(b) && checkNumber(3)) {
    return (a + b + c) % 2 === 0 ? true : false;
  }
}

// console.log(evenSum(1, 2, 3));
// console.log(evenSum(2, 2, 3));

// ---------------------------------------------------------------------------------- //

//** 2. Day of the Week **//

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
  return day[number] ? day[number] : "error";
}

// console.log(dayOfTheWeek(8));

// ---------------------------------------------------------------------------------- //

//** 3. Format Person **//

function formatPerson(personInfo: [string, number]) {
  return `Hello, my name is ${personInfo[0]} and my age is ${personInfo[1]}`;
}

// console.log(formatPerson(['Ivan', 20]));
// console.log(formatPerson(['Ivan', 30]));
// console.log(formatPerson(['Ivan', '20']));
// console.log(formatPerson(['Ivan', 20, 'Ivanov']));

// ---------------------------------------------------------------------------------- //

//** 4. Convert Arrays **//

function convertArrays(input: string[]) {
  let concatenatedStr: string = "";

  for (const char of input) {
    concatenatedStr += char;
  }

  let result: [string, number] = [concatenatedStr, concatenatedStr.length];

  return result;
}

// console.log(convertArrays(["How", "are", "you?"]));
// console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));

// ---------------------------------------------------------------------------------- //

//** 5. Summarize Person **//
enum PersonInfo{
  id,
  firstName,
  lastName,
  age,
  middleName,
  hobbies,
  workinfo,
}
function summarizePerson(id:number,firstName:string,lastName:string,age:number,middleName?:string,hobbies?:string[],workinfo?:[string,number]){
  
  const person:{id:number, fullName:string, age:number, hobbies:string, workInfo:string} = {
    id:id,
    fullName:'',
    age: age,
    hobbies: '',
    workInfo: '',
  };

  if(middleName) {
    person.fullName = `${firstName} ${middleName} ${lastName}`
  }else {
    person.fullName = `${firstName} ${lastName}`
  }

  if(hobbies) {
    person.hobbies = hobbies.join(', ');
  }else {
    person.hobbies = '-'
  }

  if(workinfo){
    person.workInfo = `${workinfo[0]} -> ${workinfo[1]}`;
  }else {
    person.workInfo = '-'
  }
  
  const tuplet:(number | string)[] = [person.id,person.fullName,person.age,person.hobbies,person.workInfo];

  return tuplet;
}

// console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))
// console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']))
// console.log(summarizePerson(21, 'Joseph', 'Angler', 28))
// console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''))

// ---------------------------------------------------------------------------------- //

//** 6. Reversed Day of the Week **//

enum ReversedDaysOfTheWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function reversedDayOfTheWeek(input:string){

  const day = ReversedDaysOfTheWeek;
  
  for(const [key,value] of Object.entries(day)){
     if(input === value){
      return key
     }
  }

  return 'error'
 
}

// console.log(reversedDayOfTheWeek('Monday'));
// console.log(reversedDayOfTheWeek('Fridas'));
// console.log(reversedDayOfTheWeek('Invalid'));
// console.log(reversedDayOfTheWeek('Wednesday'));

// ---------------------------------------------------------------------------------- //

//** 7. Unknown Response **//

function unknownResponse(input:unknown){
  const response = input as {code:number,text:string,value:unknown}
  return typeof response.value === 'string' ? response.value : '-'
}

console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }))
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }))
console.log(unknownResponse({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }))
console.log(unknownResponse({ code: 201, text: 'Created', value: 'Object Created' }))
console.log(unknownResponse({ code: 404, text: 'Not found' }))
console.log(unknownResponse({ code: 500, text: 'Internal Server Error'}))