const rxjs = require("./a.rxjs.umd.min.js");
const { interval, of, mergeMap, map,take } = rxjs;

let o = interval(1000)
o.pipe(
  take(5)
  ).subscribe((x) => console.log('1 '+ x));

o.pipe(
).subscribe((x) => console.log('2 '+ x));