export {};

let fooCompatible: any;
let barCompatibele: string = 'TypeScript';

console.log(typeof fooCompatible);
fooCompatible = barCompatibele;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;  stringにnumberはNG

let fooString: string;
let barString: string = 'string';

fooString = barString; //stringにstringはOK

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; //string型に指定した文字列の型もOK

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooString = fooStringLiteral; //number型に指定した数値の型もOK

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'name');
