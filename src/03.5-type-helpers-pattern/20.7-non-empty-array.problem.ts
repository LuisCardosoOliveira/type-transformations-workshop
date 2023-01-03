// Here we do something very interesting. We define a tuple in a type
// called `NonEmptyArray` saying that it can be an array of any type T
// but it cannot be empty. The array length must be > 1
// What it says here is: `T` means it should at least have 1 argument
// while `...Array<T>` says it might also have more args
type NonEmptyArray<T> = [T, ...Array<T>];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
