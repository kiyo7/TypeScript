export {};

const kansu = (): number => 11;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
//タイプガードと呼ばれる
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
