"use strict";
let firstName = "Atanas";
let lastName = "Zlatev";
let age = 27;
let hasGraduated = true;
let skills = ["JavaScript", "React", "HTML", "CSS", "Node.js"];
let certificatesInfo = ["TypeScript", 2025, true]; //Tuplet
let strNumArr = ["Atanas", 27]; //Mixed Array with strings and numbers only;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
function movePoint(point, moveDirections) {
    if (moveDirections === Directions.Up) {
        return { x: point.x, y: point.y + 1 };
    }
    else if (moveDirections === Directions.Down) {
        return { x: point.x, y: point.y - 1 };
    }
    else if (moveDirections === Directions.Left) {
        return { x: point.x - 1, y: point.y };
    }
    else if (moveDirections === Directions.Right) {
        return { x: point.x + 1, y: point.y };
    }
}
let point = { x: 0, y: 0 };
console.log(movePoint(point, Directions.Right));
function greetUser(username, addHello) {
    if (addHello === true) {
        return `Hello, ${username}`;
    }
    return username;
}
console.log(greetUser("Atanas", true));
// const inputEl = document.getElementById("email");
// console.log((inputEl as HTMLInputElement)!.value);
function isNumber(val) {
    return typeof val === 'number';
}
// function formatData(a: string | number, b: string | number) {
//   if (typeof a === "number" && typeof b === "number") {
//     console.log(a + b);
//   } else {
//     console.log(`${a} < - > ${b}`);
//   }
// }
function formatData(a, b) {
    if (isNumber(a) && isNumber(b)) {
        console.log(a + b);
    }
    else {
        console.log(`${a} < - > ${b}`);
    }
}
formatData(1, 5);
//# sourceMappingURL=solve.js.map