function runProgram(input) {
  let res = [];
  for (let i = 0; i < input.length; i++) {
    res.push(new Array(input.length).fill(false));
  }
  function longestSubsequence(str, i, j) {
    if (i == j) {
      res[i][j] = 1;
      return 1;
    }

    if (res[i][j]) {
      return res[i][j];
    }

    if (str[i] == str[j] && i + 1 == j) {
      res[i][j] = 2;
      return 2;
    }

    if (str[i] == str[j]) {
      res[i][j] = longestSubsequence(str, i + 1, j - 1) + 2;
      return res[i][j];
    }

    let max = Math.max(
      longestSubsequence(str, i + 1, j),
      longestSubsequence(str, i, j - 1)
    );
    res[i][j] = max;
    return max;
  }

  console.log(longestSubsequence(input, 0, input.length - 1));
}

function isPalindrom(str) {
  let reverse = str.split("").reverse();
  return str == reverse.join("");
}

if (process.env.USERNAME === "Bot") {
  runProgram("AABCDEBAZ");
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
