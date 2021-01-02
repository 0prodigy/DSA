function runProgram(input) {
  input = input.trim().split("\n");

  let arr = input[1].trim().split(" ").map(Number);
  //   arr = new Set(...arr);
  let map = new Set(arr);
  //   arr.forEach((element) => {
  //     map.add(element);
  //   });
  arr = [...map].sort((a, b) => a - b);
  if (arr.length < 3) {
    console.log("Not Possible");
    console.log("Not Possible");
  } else {
    console.log(arr.slice(0, 3).join(" "));
    console.log(arr[arr.length - 3], arr[arr.length - 2], arr[arr.length - 1]);
  }
  //   console.log(arr);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`8
  1 2 3 4 2 1 6 5`);
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
