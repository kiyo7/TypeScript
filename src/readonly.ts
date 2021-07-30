export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('きよかわ'); ///←readonlyを付けたのでこれ以降は値の変更はできない

console.log(myVisaCard.owner);

// myVisaCard.owner = 'visa';
