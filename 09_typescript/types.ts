let a: number = 5;
let b: string = "Hello, TypeScript!";
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3, 4, 5];
let f: Array<number> = [6, 7, 8, 9, 10];
let g: any[] = [1, "two", true, { name: "John" }];
let h: [string, number, boolean] = ["Age", 30, true]; // Tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi = 0, havale = 5, kapidaOdeme = 2, eft = 3};

let kredi = Payment.kredi;
let havale = Payment.havale;
let kapidaOdeme = Payment.kapidaOdeme;
let eft = Payment.eft;

export {};
