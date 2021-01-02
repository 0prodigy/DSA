//find suct pairs who sustify this condition a*b+c = d(f+e) and d !=0

function runProgram(input) {
  input = input.trim().split("\n");
  let n = input[0];
  let arr = [];

  for (let i = 1; i < input.length; i++) {
    arr.push(Number(input[i]));
  }

  let leftArr = [];
  let rightArr = [];

  for (a in arr) {
    for (b in arr) {
      for (c in arr) {
        if (arr[c] != 0) {
          rightArr.push(arr[c] * (arr[a] + arr[b]));
        }
        leftArr.push(arr[a] * arr[b] + arr[c]);
      }
    }
  }

  leftArr = leftArr.sort((a, b) => a - b);
  let count = 0;
  for (i in rightArr) {
    count += binarySearch(rightArr[i]);
  }

  function binarySearch(target) {
    let low = 0;
    let high = leftArr.length;
    let lowerBound = -1;
    let upperBound = -2;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (leftArr[mid] >= target) {
        high = mid - 1;
        if (leftArr[mid] == target) {
          lowerBound = mid;
        }
      } else {
        low = mid + 1;
      }
    }

    low = 0;
    high = leftArr.length;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (leftArr[mid] <= target) {
        low = mid + 1;
        if (leftArr[mid] == target) {
          upperBound = mid;
        }
      } else {
        high = mid - 1;
      }
    }

    return upperBound - lowerBound + 1;
  }

  console.log(count);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`3
  5
  7
  10`);
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
