function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let X = input[1].trim();

  function replace(str) {
    let i = str.indexOf(X);
    if (i != -1) {
      str = str.replace(X, "X");
      return replace(str);
    }
    return str;
  }
  let str2 = replace(str);
  let obj = {};
  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]]) {
      obj[str2[i]]++;
    } else {
      obj[str2[i]] = 1;
    }
  }
  console.log(Object.keys(obj).join(""));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`aaaabb
  aa`);
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
