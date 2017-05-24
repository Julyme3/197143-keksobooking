'use strict'

function write(n) {
  console.log(n);
  write(n-1);
};
write(2);