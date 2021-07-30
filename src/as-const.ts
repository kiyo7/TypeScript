export {};

let name = 'kiyo';

name = 'aaa';

//末尾のas constで値を変えられないようにする
let nickname = 'kiki' as const;

// nickname = 'aaa'; ← 別の値を代入不可

let profile = { name: 'attan', height: 158 } as const;

// profile.name = 'kiyo';← 別の値を代入不可

// profile.height = 309;← 別の値を代入不可
