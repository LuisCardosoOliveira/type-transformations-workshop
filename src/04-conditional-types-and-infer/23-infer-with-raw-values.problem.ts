import { Equal, Expect } from "../helpers/type-utils";

type GetDataValue<T> = T extends { data: infer TInferredData } ? TInferredData : never;

// This solution does not uses `infer`
// type GetDataValue<T> = T extends { data: any } ? T["data"] : never;

type tests = [
    Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
    Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
    Expect<
        Equal<
            GetDataValue<{ data: { name: "hello"; age: 20 } }>,
            { name: "hello"; age: 20 }
        >
    >,
];
