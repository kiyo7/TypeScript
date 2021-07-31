export {};

type DebugType = () => void;

type SomeTypes = string | number | DebugType;

//Excludeは第1引数に選択対象の型、第2引数に選択対象から除外したい型
type FunctionType = Exclude<SomeTypes, string | number>;
//DebugTypeを除外
type NunFunctionType = Exclude<SomeTypes, DebugType>;
//関数(Function)を除外
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

//Extractは第1引数に選択対象の型、第2引数に取得したい型
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
//stringとnumberを取る
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
//関数(Function)を全て取得
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;

//nullとundefinedを除外したい時はNonNullableを使う
type NonNullableTypes = NonNullable<NullableTypes>;
