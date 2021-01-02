function runProgram(input) {
  input = input.trim().split("\n");
  let t = Number(input[0]);
  let dp = {};
  for (let i = 1; i < input.length - 1; i += 2) {
    let str = input[i].trim();
    let str2 = input[i + 1].trim();
    dp = {};
    console.log(find(str, str2, str.length - 1, str2.length - 1));
  }

  function find(str, str2, i, j) {
    if (dp[[i, j]] !== undefined) {
      return dp[[i, j]];
    }
    if (i < 0) {
      return (dp[[i, j]] = j + 1);
    }

    if (j < 0) {
      return (dp[[i, j]] = i + 1);
    }

    if (str[i] == str2[j]) {
      return (dp[[i, j]] = find(str, str2, i - 1, j - 1));
    } else {
      return (dp[[i, j]] =
        1 +
        Math.min(
          find(str, str2, i - 1, j),
          find(str, str2, i, j - 1),
          find(str, str2, i - 1, j - 1)
        ));
    }
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`3
  abcde
  abde
  abde
  abcde
  abcde
  abxde
  horse
  ros  
  `);
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
