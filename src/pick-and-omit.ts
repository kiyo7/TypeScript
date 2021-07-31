export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

//Pick: 第1引数に選択対象の型、第2引数に欲しい型
type PickProfile = Pick<DetailedProfile, 'name' | 'weight'>;
//Omit: 第1引数に選択対象、第2引数に除外する型
type OmitProfile = Omit<DetailedProfile, 'height'>;
