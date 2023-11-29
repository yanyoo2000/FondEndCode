const rxjs = require("./a.rxjs.umd.min.js");

console.log(1);
rxjs
  .of("测试结束")
  .pipe(
    rxjs.map((res) => {
      console.log(2);
      return res;
    }),
    rxjs.map((res) => {
      console.log(3);
      return res;
    })
  )
  .subscribe((res) => {
    console.log(4);
    console.log(res);
  });
