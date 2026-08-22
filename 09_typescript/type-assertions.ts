let message;

message = "Hello, TypeScript!";

let count = (<string>message).length;
let count2 = (message as string).length;

export {};
