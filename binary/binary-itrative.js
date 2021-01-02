function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  console.log(binarySearch(arr, k));
}
function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == k) {
      return 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid;
    }
  }
  return -1;
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

runProgram("5 10" + "\n" + "50 40 30 20 10");
