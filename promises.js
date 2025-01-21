const varshith = new Promise(function (resolve, reject) {
  let x = 1;
  if (x == 1) {
    resolve(2);
  } else {
    reject("failed");
  }
});
varshith
  .then(function (result1) {
    console.log(`result1 is ${result1}`);
    return result1;
  })
  .then(function (result2) {
    console.log(`result2 is ${result2}`);
    return result2 * 2;
  })
  .then(function (result3) {
    console.log(`result3 is ${result3}`);
  })
  .catch(function (reason) {
    console.log(reason);
  });
