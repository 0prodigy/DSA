function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length - 1; i++) {
    let n = parseInt(input[i]);
    let e = parseInt(input[i + 1]);
    let set = new Set();
    let obj = {};

    for (let k = 0; k < n; k++) {
      obj[k] = [];
    }

    for (let p = i + 2; p < i + 2 + e; p++) {
      input[p] = input[p].trim().split(" ").map(Number);
      obj[input[p][0]].push(input[p][1]);
      obj[input[p][1]].push(input[p][0]);
    }

    function count(num) {
      set.add(num);
      for (let child in obj[num]) {
        if (!set.has(obj[num][child])) {
          count(obj[num][child]);
        }
      }
      return;
    }

    let res = 0;
    for (let num in obj) {
      if (!set.has(Number(num))) {
        count(Number(num));
        res++;
      }
    }

    i += e + 1;
    console.log(res);
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
  4
  3
  0 1
  1 2
  1 3
  3
  0
  4
  2
  0 1
  1 2`);
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
