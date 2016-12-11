// a type with a concat method that is associative
// 
// Sum Example
const Sum = x => ({
  x, 
  concat => o => {
    return Sum(x + o.x);
  }
});

const res = Sum(1).concat(Sum(2));

const All = x => ({
  x, 
  concat => o => {
    return Sum(x && o.x);
  }
});

const res = All(true).concat(All(false)); // false