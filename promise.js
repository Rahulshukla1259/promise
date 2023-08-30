let fs = require("fs");

//file read unsequencial

fs.readFile("f1.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.readFile("f2.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.readFile("f3.txt", "utf-8", (err, data) => {
  console.log(data);
});

//file read sequencial

let p1 = new Promise((resolve, reject) => {
  resolve();
});

let p2 = new Promise((resolve, reject) => {
  resolve();
});

let p3 = new Promise((resolve, reject) => {
  resolve();
});

p1.then(() => {
  fs.readFile("f1.txt", "utf-8", (err, data) => {
    console.log(data);

    p2.then(() => {
      fs.readFile("f2.txt", "utf-8", (err, data) => {
        console.log(data);

        p3.then(() => {
          fs.readFile("f3.txt", "utf-8", (err, data) => {
            console.log(data);
          });
        });
      });
    });
  });
})

  .then(() => {
    fs.readFile("f2.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  })
  .then(() => {
    fs.readFile("f3.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  });

Promise.reject().then(null, () => {
  console.log("resolved");   //  also runs even after reject because success callback is null
});

Promise.resolve().then(() => {
  console.log("res");
});
