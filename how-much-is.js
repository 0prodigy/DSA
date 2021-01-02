function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length - 1; i += 2) {
    let [n, r] = input[i].trim().split(" ");
    let arr = input[i + 1].trim().split(" ").map(Number);
    console.log(find(arr, r));
  }

  function find(arr, r) {
    let current = arr[0];
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > current) {
        current = arr[i];
        count++;
      }
    }
    return count * r;
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
    6 3
    8 2 3 11 11 10
    5 12
    12 20 39 45 89`);
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
