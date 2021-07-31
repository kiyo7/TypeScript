export {};

//Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

//Recordの第一引数に渡された型は第2引数の型を参照する
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 234 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 3 },
};
