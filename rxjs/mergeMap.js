const rxjs = require("./a.rxjs.umd.min.js");
const { interval, of, mergeMap, map } = rxjs;

of("a", "b", "c")
  .pipe(
    mergeMap((x) => {
      return interval(1000).pipe(
        map((i) => {
          return x + i;
        })
      );
    }, 2)
  )
  .subscribe((x) => console.log(x));
