export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Hisa';
  static lastName: string = 'kiyo';

  static work() {
    return `hey, guys! This is ${this.firstName}!!!! Are you interested Typescript? Lets dive into Typescript!`;
  }
}

let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());
