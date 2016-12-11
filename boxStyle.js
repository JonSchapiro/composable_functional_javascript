// Box is the identity functor
// identity is good for unnesting expressions
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});
