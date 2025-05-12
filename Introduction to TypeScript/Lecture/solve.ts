let firstName: string = 'Atanas';
let lastName: string = 'Zlatev';
let age: number = 27;
let hasGraduated: boolean = true;
let skills: string[] = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js'];
let certificatesInfo: [string, number, boolean] = ['TypeScript', 2025, true]; //Tuplet
let strNumArr: (string | number)[] = ['Atanas', 27]; //Mixed Array with strings and numbers only;

enum Directions {
    Up,
    Down,
    Left,
    Right
}

function movePoint(point: { x: number, y: number }, moveDirections: Directions) {
    if (moveDirections === Directions.Up) {
        return { x: point.x, y: point.y + 1 }
    } else if (moveDirections === Directions.Down) {
        return { x: point.x, y: point.y - 1 }
    } else if (moveDirections === Directions.Left) {
        return { x: point.x - 1, y: point.y };
    } else if (moveDirections === Directions.Right) {
        return { x: point.x + 1, y: point.y };
    }
}


let point: { x: number, y: number } = { x: 0, y: 0 };

console.log(movePoint(point, Directions.Right));

function greetUser(username: string, addHello?: boolean): string {
    if (addHello === true) {
        return `Hello, ${username}`;
    }
    return username;
}

console.log(greetUser('Atanas', true));
