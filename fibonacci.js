/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// Nabasirye Gertrude, Ssozi Martin Rukundo.
module.exports = function fibonacci(num) {
  let a = num;
  let b = 0;
  let temp;

  while (num >= 0) {
    temp = a;
    a += b;
    b = temp;
    num--;
  }

  return b;
};