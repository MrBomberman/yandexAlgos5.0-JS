const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('', (firstLine) => {
rl.question('', (secondLine) => {
    const [a, b] = firstLine.split(' ').map(Number);
    const [c, d] = secondLine.split(' ').map(Number);
    console.log(checkLines(a, b, c, d))
    rl.close()
});
});
function checkLines(a, b, c, d){
    let sum = 0;
    if(a == c){
        const max = Math.max(b, d);
        return max * 2 + 1
    } 
    let rightStart, rightStep, leftStart, leftStep;
    rightStart = Math.max(a, c);
    rightStep = (rightStart === a) ? b : d;
    leftStart = Math.min(a, c);
    leftStep = (leftStart === a) ? b : d;

    if (rightStart - rightStep <= leftStart + leftStep) {
        let left = Math.min(leftStart - leftStep, rightStart - rightStep);
        let right = Math.max(leftStart + leftStep, rightStart + rightStep);
        sum = right - left + 1;
        return sum;
    }
    sum = 2 * rightStep + 2 * leftStep + 2;

    return sum
}