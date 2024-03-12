const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let firstLine = false;
let count = 0;
const arr = [];
let numberOfLines = 0;
rl.on('line', (input) => {
  if(!firstLine){
    numberOfLines = Number(input);
    firstLine = true
    count = 0
  }
  count++
  if(count != 1){
    arr.push(Number(input))
  }
  if(count == numberOfLines + 1){
    console.log(checkTaps(arr))
    rl.close()
  }
});


function checkTaps(arr){
  let sum = 0;
  if(arr.length == 1 && arr[0] == 0){
    return 0
  }
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] == 0){
      sum = sum
    }
    if(arr[i] % 4 == 0){
      sum = sum + (arr[i] / 4)
    }
    if(arr[i] % 4 == 1){
      sum = sum + Math.floor((arr[i] / 4)) + 1
    }
    if(arr[i] % 4 == 2){
      sum = sum + Math.floor((arr[i] / 4)) + 2
    }
    if(arr[i] % 4 == 3){
      sum = sum +  Math.floor((arr[i] / 4)) + 2
    }
  }
  return sum
}
