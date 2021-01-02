function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    let num = input[i].trim().split("").map(Number);
    if (isNaN(num[0])) {
      num = num.sort((a, b) => b - a);
      num[0] = "-";
      console.log(num.join(""));
    } else {
      num = num.sort((a, b) => a - b);
      if (num[0] == 0) {
        let i = 0;
        while (i < num.length) {
          if (num[i] != 0) {
            let temp = num[i];
            num[i] = num[0];
            num[0] = temp;
            break;
          }
          i++;
        }
      }
      console.log(num.join(""));
    }
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
  53334121
  -1002911`);
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
