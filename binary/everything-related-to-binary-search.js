function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  let k = Number(input[2]);
  console.log(binarySearch(arr, k));
}
let end = -1;
let start = -1;
function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= k) {
      start = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  low = 0;
  high = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > k) {
      end = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (arr[start] != k) {
    start = -1;
  }
  var res = 0;
  if (end == -1 || start == -1) {
    res = 0;
  } else {
    res = end - start;
  }
  return [start, end - 1, res].join(" ");
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

runProgram("6" + "\n" + "1 1 1 2 2 2" + "\n" + "1");
