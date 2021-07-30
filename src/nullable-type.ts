export {};

//一時的にnullを許容したいときはunion型を用いる。 number | nullのとこ

let profile: { name: string; age: number | null } = {
  name: 'kiyo',
  age: null,
};
