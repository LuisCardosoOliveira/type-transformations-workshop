import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}


// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// This is pretty awesome!
// Here, we are using as as a key mapper. This gives us access to the original key from Attributes, while also allowing us to use it in a template literal.
// Here we use a template literal to add the get prefix and the Capitalize string utility type to remap the key:
type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
