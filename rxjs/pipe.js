const rxjs = require("./a.rxjs.umd.min.js");

console.log(1);
rxjs
  .from(
    new Promise((resolve, reject) => {
      console.log(2);
      resolve("测试结束");
    })
  )
  .pipe(
    rxjs.map((res) => {
      console.log(3);
      return res;
    })
  )

  .pipe(
    rxjs.map((res) => {
      console.log(3);
      return res;
    })
  )
  .subscribe((res) => {
    console.log(4);
    console.log(res);
  });
