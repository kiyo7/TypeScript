export {};

//シグネチャーでdouble関数に来る値はnumberまたはstringと指定している（それ以外の型はエラー）
function double(value: number): number;
function double(value: string): string;

//ここはanyでおｋ(numberかstringしかこないから)
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(false)); ←エラー
