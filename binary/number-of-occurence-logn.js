function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
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
  var res = 0;
  if (end == -1 || start == -1) {
    if (end == -1) {
      res = 1;
    } else {
      res = 0;
    }
  } else {
    res = end - start;
  }
  return res;
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

runProgram("5 5" + "\n" + "1 1 2 2 3 3 3 3 5");
