let lines, l;

function solve() {
  let n = Number(lines[l++]);
  let score = lines[l++].trim().split(" ").map(Number);
  let total = score.reduce((a, b) => a + b, 0);
  let ab = 0;
  let turn = true;
  let i = 0;
  while (i < score.length) {
    if (turn) {
      ab += score[i];
    }

    if (score[i] % 2 != 0 && (i + 1) % 6 == 0) {
    } else if (score[i] % 2 != 0 || (i + 1) % 6 == 0) {
      turn = !turn;
    }
    i++;
  }
  console.log(
    total - ab == ab ? "Tie" : ab > total / 2 ? "AB de Villiers" : "Virat Kohli"
  );
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  let t = Number(lines[l++]);
  while (t--) {
    solve();
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`3
  2
  1 2 0 0 1 1 6 6 4 1 6 1
  3
  0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
  1
  0 1 0 1 0 0`);
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
