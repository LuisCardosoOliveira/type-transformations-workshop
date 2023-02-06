import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

// Here we are basically saying: we want that T extends a function that 
// returns a `Promise` that have an object with `props` inside of it
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{props: infer P}> ? P : never;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
