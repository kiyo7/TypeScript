export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('kiyo', 13);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['obaaaaaaa', 77];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
