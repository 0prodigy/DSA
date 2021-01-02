function runProgram(input) {
  let num = Number(input.trim());
  let ans = "";

  while (num) {
    while (num >= 1000) {
      num = num - 1000;
      ans += "M";
    }
    while (num >= 900) {
      num = num - 900;
      ans += "CM";
    }
    while (num >= 500) {
      num = num - 500;
      ans += "D";
    }
    while (num >= 400) {
      num = num - 400;
      ans += "CD";
    }
    while (num >= 100) {
      num = num - 100;
      ans += "C";
    }
    while (num >= 90) {
      num = num - 90;
      ans += "XC";
    }
    while (num >= 50) {
      num = num - 50;
      ans += "L";
    }
    while (num >= 40) {
      num = num - 40;
      ans += "XL";
    }
    while (num >= 10) {
      num = num - 10;
      ans += "X";
    }
    while (num >= 9) {
      num = num - 9;
      ans += "IX";
    }
    while (num >= 5) {
      num = num - 5;
      ans += "V";
    }
    while (num >= 4) {
      num = num - 4;
      ans += "IV";
    }
    while (num >= 1) {
      num = num - 1;
      ans += "I";
    }
  }
  console.log(ans);
}

if (process.env.USERNAME === "Bot") {
  runProgram("2085");
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
