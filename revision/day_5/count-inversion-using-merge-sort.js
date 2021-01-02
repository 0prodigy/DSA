function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  let arr = input[1].trim().split(" ").map(Number);
  //   console.log(mergeSort());
  function mergeSort() {
    let count = 0;
    sort(0, arr.length);
    function sort(low, high) {
      if (low < high) {
        let mid = Math.floor((high + low) / 2);
        sort(low, mid);
        sort(mid + 1, high);
        merge(low, mid, high);
      }
    }

    function merge(low, mid, high) {
      let left = arr.slice(low, mid + 1);
      let right = arr.slice(mid + 1, high + 1);
      let res = [];
      while (left.length > 0 && right.length > 0) {
        count += 2;
        res.push(left[0] > right[0] ? right.shift() : left.shift());
      }
      if (left.length == 0) {
        res.push(...right);
      } else {
        res.push(...left);
      }
      res.forEach((num, i) => (arr[low++] = num));
    }
    console.log(count);
    return arr;
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  8 4 2 1`);
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
