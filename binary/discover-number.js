function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  for (let i = 2; i < input.length; i++) {
    console.log(binarySearch(arr, Number(input[i]), 0, n - 1));
  }
}
function binarySearch(arr, k, low, high) {
  if (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] == k) {
      return "YES";
    } else if (arr[mid] > k) {
      return binarySearch(arr, k, low, mid - 1);
    } else {
      return binarySearch(arr, k, mid + 1, high);
    }
  } else {
    return "NO";
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

runProgram(
  "5 10" + "\n" + "50 40 30 20 10" + "\n" + "10" + "\n" + "20" + "\n" + "30"
);
