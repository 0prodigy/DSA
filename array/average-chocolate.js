function runProgram(input) {
  input = input.trim().split("\n");
  let n = input[0];
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let average = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    average.push(sum / (i + 1));
  }
  //   console.log(average);
  for (let i = 3; i < input.length; i++) {
    console.log(predective(average, input[i]));
  }
}

function predective(arr, k) {
  let i = 0;
  let j = arr.length - 1;
  let ans = -1;
  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);
    if (arr[mid] >= k) {
      j = mid - 1;
    } else {
      ans = mid;
      i = mid + 1;
    }
  }
  return ans + 1;
}

if (process.env.USERNAME === "Bot") {
  runProgram("5\n1 2 3 4 5\n5\n1\n2\n3\n4\n5");
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
