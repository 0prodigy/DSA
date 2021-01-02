function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);

  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let count = 0;
  console.log(count, obj);
  for (let num in obj) {
    let num2 = k - num;
    if (num == num2) {
      count += Math.floor((obj[num] * (obj[num] - 1)) / 2);
    } else {
      count += obj[num] * obj[num2];
    }
  }
  console.log(count, obj);
}

runProgram("5 9\n3 3 3 3 30 6 2 7");
