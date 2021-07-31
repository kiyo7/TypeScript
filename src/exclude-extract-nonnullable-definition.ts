export {};

type MyExclude<T, U> = T extends U ? never : T;

type DebugType = () => void;

type SomeTypes = string | number | DebugType;

//Excludeは第1引数に選択対象の型、第2引数に選択対象から除外したい型
type FunctionType = Exclude<SomeTypes, string | number>;

type MyFunctionType = MyExclude<SomeTypes, string | number>;

//Extractは第1引数に選択対象の型、第2引数に取得したい型
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;

//nullとundefinedを除外したい時はNonNullableを使う
type NonNullableTypes = NonNullable<NullableTypes>;
