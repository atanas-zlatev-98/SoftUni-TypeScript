"use strict";
//Predicate function to check if a
function checkNumber(value) {
    return typeof value === "number";
}
//** 1. Even Sum **//
function evenSum(a, b, c) {
    if (checkNumber(a) && checkNumber(b) && checkNumber(3)) {
        return (a + b + c) % 2 === 0 ? true : false;
    }
}
// console.log(evenSum(1, 2, 3));
// console.log(evenSum(2, 2, 3));
// ---------------------------------------------------------------------------------- //
//** 2. Day of the Week **//
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
    return day[number] ? day[number] : "error";
}
// console.log(dayOfTheWeek(8));
// ---------------------------------------------------------------------------------- //
//** 3. Format Person **//
function formatPerson(personInfo) {
    return `Hello, my name is ${personInfo[0]} and my age is ${personInfo[1]}`;
}
// console.log(formatPerson(['Ivan', 20]));
// console.log(formatPerson(['Ivan', 30]));
// console.log(formatPerson(['Ivan', '20']));
// console.log(formatPerson(['Ivan', 20, 'Ivanov']));
// ---------------------------------------------------------------------------------- //
//** 4. Convert Arrays **//
function convertArrays(input) {
    let concatenatedStr = "";
    for (const char of input) {
        concatenatedStr += char;
    }
    let result = [concatenatedStr, concatenatedStr.length];
    return result;
}
// console.log(convertArrays(["How", "are", "you?"]));
// console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
// ---------------------------------------------------------------------------------- //
//** 5. Summarize Person **//
var PersonInfo;
(function (PersonInfo) {
    PersonInfo[PersonInfo["id"] = 0] = "id";
    PersonInfo[PersonInfo["firstName"] = 1] = "firstName";
    PersonInfo[PersonInfo["lastName"] = 2] = "lastName";
    PersonInfo[PersonInfo["age"] = 3] = "age";
    PersonInfo[PersonInfo["middleName"] = 4] = "middleName";
    PersonInfo[PersonInfo["hobbies"] = 5] = "hobbies";
    PersonInfo[PersonInfo["workinfo"] = 6] = "workinfo";
})(PersonInfo || (PersonInfo = {}));
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workinfo) {
    const person = {
        id: id,
        fullName: '',
        age: age,
        hobbies: '',
        workInfo: '',
    };
    if (middleName) {
        person.fullName = `${firstName} ${middleName} ${lastName}`;
    }
    else {
        person.fullName = `${firstName} ${lastName}`;
    }
    if (hobbies) {
        person.hobbies = hobbies.join(', ');
    }
    else {
        person.hobbies = '-';
    }
    if (workinfo) {
        person.workInfo = `${workinfo[0]} -> ${workinfo[1]}`;
    }
    else {
        person.workInfo = '-';
    }
    const tuplet = [person.id, person.fullName, person.age, person.hobbies, person.workInfo];
    return tuplet;
}
// console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))
// console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']))
// console.log(summarizePerson(21, 'Joseph', 'Angler', 28))
// console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''))
// ---------------------------------------------------------------------------------- //
//** 6. Reversed Day of the Week **//
var ReversedDaysOfTheWeek;
(function (ReversedDaysOfTheWeek) {
    ReversedDaysOfTheWeek[ReversedDaysOfTheWeek["Monday"] = 1] = "Monday";
    ReversedDaysOfTheWeek[ReversedDaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
    ReversedDaysOfTheWeek[ReversedDaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
    ReversedDaysOfTheWeek[ReversedDaysOfTheWeek["Thursday"] = 4] = "Thursday";
    ReversedDaysOfTheWeek[ReversedDaysOfTheWeek["Friday"] = 5] = "Friday";
    ReversedDaysOfTheWeek[ReversedDaysOfTheWeek["Saturday"] = 6] = "Saturday";
    ReversedDaysOfTheWeek[ReversedDaysOfTheWeek["Sunday"] = 7] = "Sunday";
})(ReversedDaysOfTheWeek || (ReversedDaysOfTheWeek = {}));
function reversedDayOfTheWeek(input) {
    const day = ReversedDaysOfTheWeek;
    for (const [key, value] of Object.entries(day)) {
        if (input === value) {
            return key;
        }
    }
    return 'error';
}
// console.log(reversedDayOfTheWeek('Monday'));
// console.log(reversedDayOfTheWeek('Fridas'));
// console.log(reversedDayOfTheWeek('Invalid'));
// console.log(reversedDayOfTheWeek('Wednesday'));
// ---------------------------------------------------------------------------------- //
//** 7. Unknown Response **//
function unknownResponse(input) {
    const response = input;
    return typeof response.value === 'string' ? response.value : '-';
}
console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknownResponse({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
console.log(unknownResponse({ code: 201, text: 'Created', value: 'Object Created' }));
console.log(unknownResponse({ code: 404, text: 'Not found' }));
console.log(unknownResponse({ code: 500, text: 'Internal Server Error' }));
//# sourceMappingURL=solve.exercise.js.map