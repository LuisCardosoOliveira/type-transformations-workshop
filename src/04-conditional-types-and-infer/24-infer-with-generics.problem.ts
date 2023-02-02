import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;


// This is a pretty cool trick. We can infer the type of `Point` here passing 
// it position slot (in this case `4`). 
type GetPoint<T> = T extends MyComplexInterface<unknown, unknown, unknown, infer TPoint> ? TPoint : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
