export {};

//別名定義の際は先頭は大文字
type Mojiretu = string;

let message: string = '文字列';

let message2: Mojiretu = '文字列';

const example1 = {
  name: 'kiyo',
  age: 34,
};

//objにも別名つけれるよ
type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'kiyo',
  age: 34,
};

//Profile2はexample1の型を参照できる。example1に変更があった際も動的に変化してくれる
type Profile2 = typeof example1;
