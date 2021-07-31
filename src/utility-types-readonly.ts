export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'kiyo',
  age: 12,
};

me.age++;
console.log(me);

//型引数に渡した型が全てReadonlyになる
type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'sige',
  age: 56,
};

// friend.age++;

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
