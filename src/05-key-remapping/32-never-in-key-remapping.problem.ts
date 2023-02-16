import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type SearchForId =  `${string}${"id" | "Id"}${string}`;

type OnlyIdKeys<T> = {
    [Key in keyof T as Key extends SearchForId ? Key : never]: T[Key];
};


type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
