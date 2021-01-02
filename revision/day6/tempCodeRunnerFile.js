function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(binarySearch(arr, k));
}
let ans = -1;
function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > k) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  let count = 0;
  for (let i = 0; i <= ans; i++) {
    for (let j = i + 1; j <= ans; j++) {
      if (arr[i] + arr[j] == k) {
        count++;
        break;
      }
    }
  }

  if (count > 0) {
    return 1;
  } else {
    return -1;
  }
}

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

runProgram("5 1" + "\n" + "1 2 2 2 5");
