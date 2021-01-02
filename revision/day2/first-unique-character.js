function runProgram(input) {
  let str = input.trim();
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] != undefined) {
      map[str[i]]++;
    } else {
      map[str[i]] = 1;
    }
  }

  for (let key in map) {
    if (map[key] == 1) {
      console.log(key);
      return;
    }
  }
  console.log(str[0]);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`racecars`);
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
