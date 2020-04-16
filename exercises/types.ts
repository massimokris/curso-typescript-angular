// Basic types 

const isDone: boolean = true

//----------------------------------

const n1: number = 10;
const n2: number = 5;

let result: number;

result  = n1 + n2;

//----------------------------------

let str: string = 'pepe';
let str2: string = 'strillo';

const fullStr: string = str + str2;

//----------------------------------

let anyValue: any = 2;

anyValue = 'manuel';

anyValue = [2, 4, 8, 16];

//----------------------------------

const list: number[] = [1, 2, 3];

const list2: Array<number> = [20, 15, 8];

//----------------------------------

let x: [string, number, boolean];

x = ['pepe', 15, true];

//----------------------------------

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

//----------------------------------

function warnMessage(): void {
    console.log('This is just a warning message');
}

//----------------------------------

let u: undefined = undefined;
let n: null = null;







