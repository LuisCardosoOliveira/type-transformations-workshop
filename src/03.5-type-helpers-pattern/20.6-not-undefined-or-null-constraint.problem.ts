// In this solution, we says that T extends an empty {}
// because in TS, an `{}` means anything that is not `null`
// neither `undefined`
export type Maybe<T extends {}> = T | null | undefined;

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">
];
