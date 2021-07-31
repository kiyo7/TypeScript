export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

//Partialは型を一つずつ取り出して？を与えて返す
type Optional<T> = { [P in keyof T]?: T[P] | undefined };
type OptionalProfile = Optional<Profile>;
