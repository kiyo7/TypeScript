export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};
// 引数が渡ってこなかった場合のデフォルト値を指定
console.log(nextYearSalary(1000));
