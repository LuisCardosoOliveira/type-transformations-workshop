import { Equal, Expect } from "../helpers/type-utils";

type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : T extends "goodbye" ? "hello" : undefined;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
