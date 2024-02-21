const utils = require("./function_test.js");

async function run() {
  let a = 10;
  let b = 5;
  const result = utils.add(a, b);
  return result;
}

try {
  run();
} catch (err) {
  console.log("ERRR occured: ", err);
}

