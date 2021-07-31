export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

//既存のタイプのオプショナルな型を宣言
// 型引数にProfileを渡しているため、プロパティの追加、削除等動的に対応してくれる
type PartialType = Partial<Profile>;

//Requiredの型引数に渡すと全て必須のプロパティになる
type RequiredType = Required<Profile>;
