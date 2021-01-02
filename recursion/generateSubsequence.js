function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[1].trim();
  let res = [];

  function generateSequence(str, i, temp) {
    if (i == str.length) {
      return res.push([...temp].join(""));
    }
    temp.push(str[i]);
    generateSequence(str, i + 1, temp);
    temp.pop();
    generateSequence(str, i + 1, temp);
  }
  generateSequence(str, 0, []);

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let temp = [];
      for (let k = i; k <= j; k++) {
        temp.push(str[k]);
      }
      console.log(temp);
    }
  }

  console.log(res);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  abcd`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
