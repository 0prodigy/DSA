function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    findmax(input[i].trim());
  }

  function findmax(str) {
    let currentR = 0;
    let afterFlip = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "R") currentR++;
      if (str[i] == "K") afterFlip++;
      else afterFlip--;
    }
    console.log(currentR, afterFlip);
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
RKKRK
RKKR`);
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
