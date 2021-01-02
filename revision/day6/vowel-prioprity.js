function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    let vow = "";
    let str = input[i].trim();
    let cosn = "";
    for (let j = 0; j < str.length; j++) {
      if (/[aeiou]/.test(str[j])) {
        vow += str[j];
      } else {
        cosn += str[j];
      }
    }
    console.log(vow + cosn);
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  eio
  masaischool
  ubcdefghioel
  rhythm`);
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
