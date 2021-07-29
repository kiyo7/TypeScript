export {};

//これだと後から色々追加できるため、制限が緩い
let profile1: object = { name: 'kiyo' };
profile1 = { birthYear: 2000 };

let profile2: {
  name: string;
} = { name: 'kiyo' };
profile2 = { name: 'nunu' };
