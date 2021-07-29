export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
Months.February;

enum COLORS {
  RED = '#ff0000',
  WHITE = '#ffffff',
  GREEN = '#008000',
  BLUE = '#0000ff',
  BLACK = '#000000',
}

let green = COLORS.GREEN;

//後から追加も可能
enum COLORS {
  YELLOW = '#ffff00',
  GRAY = '#808080',
}

let yellow = COLORS.YELLOW;

console.log(green);
console.log(yellow);
