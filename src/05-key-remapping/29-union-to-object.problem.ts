import { Equal, Expect } from "../helpers/type-utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

// The [Property in Route] part looks similar to an index, but it isn't.
// tnstead, it's saying to map over the Route union extract each member into a
// private variable called Property and make it the property's value.
type RoutesObject = {
    [Property in Route]: Property;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
      }
    >
  >,
];
