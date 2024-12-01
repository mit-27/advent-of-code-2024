

const lines = await Deno.readTextFile("./inputs/day_1/part_1.txt");
const linesArray = lines.split("\n");


const leftArr : number[] = [];
const rightArr : number[] = [];

linesArray.forEach(line => {
    const [left, right] = line.split("   ");
    leftArr.push(parseInt(left));
    rightArr.push(parseInt(right));
});

leftArr.sort((a,b) => a - b);
rightArr.sort((a,b) => a - b);

let sum = 0;
for(let i = 0; i < leftArr.length; i++) {

    sum += (Math.abs(leftArr[i] - rightArr[i]));
}

console.log(sum);

