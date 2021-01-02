function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 0; i < input.length; i++) {
    console.log(countt(input[i], 0, "1"));
  }
}

function countt(n, i, temp) {
  if (i == n) {
    return temp;
  }
  let res = "";
  let count = 0;
  if (temp.length > 1) {
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] == temp[j + 1]) {
        count++;
      } else {
        res += count;
      }
    }
  } else {
    return countt(n, i + 1, "11");
  }
  return countt(n, i + 1, res);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`3
  1
  2
  4`);
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
