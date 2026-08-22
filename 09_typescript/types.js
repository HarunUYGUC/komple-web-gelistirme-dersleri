let a = 5;
let b = "Hello, TypeScript!";
let c = true;
let d;
let e = [1, 2, 3, 4, 5];
let f = [6, 7, 8, 9, 10];
let g = [1, "two", true, { name: "John" }];
let h = ["Age", 30, true]; // Tuple
const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 5] = "havale";
    Payment[Payment["kapidaOdeme"] = 2] = "kapidaOdeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
let kredi = Payment.kredi;
let havale = Payment.havale;
let kapidaOdeme = Payment.kapidaOdeme;
let eft = Payment.eft;
export {};
