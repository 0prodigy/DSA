function runProgram(input) {
  input = input.trim().split("\n");

  input[0] = input[0].trim();
  input[1] = input[1].trim();

  let res = {};

  console.log(findLongestChar(input[0], input[1], 0, 0));

  function findLongestChar(str1, str2, i, j) {
    if (i == str1.length || j == str2.length) {
      return 0;
    }

    if (res[i + " " + j]) {
      return res[i + " " + j];
    }

    if (str1[i] == str2[j]) {
      let max = 1 + findLongestChar(str1, str2, i + 1, j + 1);
      res[i + " " + j] = max;
      return max;
    }

    let max = Math.max(
      findLongestChar(str1, str2, i + 1, j),
      findLongestChar(str1, str2, i, j + 1)
    );
    res[i + " " + j] = max;
    return max;
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`AEDFHR
    ABCDGH`);
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
