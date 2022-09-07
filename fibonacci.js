/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// Nabasirye Gertrude, Ssozi Martin Rukundo.
module.exports = function fibonacci(num) {
  let a = 0;
  let b = 1;
  let c = num;

  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};
