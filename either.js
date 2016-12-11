const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f,g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f,g) => f(x),
  inspect: () => `Left(${x})`
});

const fromNullable = x => {
  return x !== null ? Right(x) :
  Left(x);
}


const result = Right(2).map(x => x + 1).fold(x => 'error', x => x);


//example
const findColor = name => {
  return fromNullable({red: '#ff4444', blue: '#3b5887', yellow: '#fff68f'})[name];
}

const colorResult =
 findColor('green') // returns a left or right depending on whether value is found
 .map(c => c.slice(1)) // if left ? mapping function not used
 .fold(e => 'no color', c => c.toUpperCase()) // if left ? error function called : value unfolded
