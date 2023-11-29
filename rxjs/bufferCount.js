const rxjs = require("./a.rxjs.umd.min.js");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

rxjs
  .from(array)
  .pipe(
    rxjs.bufferCount(2),
    rxjs.concatMap((chunk) => rxjs.from(chunk).pipe(rxjs.delay(2000)))
  )
  .subscribe((x) => console.log(x));
