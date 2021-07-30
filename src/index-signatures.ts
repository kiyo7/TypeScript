export {};
//インデックスシグネチャーの書き方
// { [ index: typeForIndex ]: typeForValue }

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'kiyo', underTwenty: false };

profile.name = 'kiyo';
profile.age = 12;
profile.nationality = 'Japan';
