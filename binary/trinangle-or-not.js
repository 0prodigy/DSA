function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 0; i < input.length; i += 2) {
    if (Number(input[i]) > 0) {
      let arr = input[i + 1]
        .trim()
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);
      console.log(triples(arr));
    }
  }
}

function triples(arr) {
  let count = 0;
  for (let i = arr.length - 1; i >= 1; i--) {
    let s = 0;
    let j = i - 1;
    while (s < j) {
      if (arr[s] + arr[j] > arr[i]) {
        count += j - s;
        j--;
      } else {
        s++;
      }
    }
  }
  return count;
}

if (process.env.USERNAME === "Bot") {
  runProgram(`3
  4 2 10
  3
  1 2 3
  4
  5 2 9 6
  0`);
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
