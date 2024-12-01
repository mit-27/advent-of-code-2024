

const lines = await Deno.readTextFile("./inputs/day_1/part_2.txt");
const linesArray = lines.split("\n");

const leftArr : string[] = [];
const rightMap : Record<string,number> = {};

for(const line of linesArray)
{
    const [left,right] = line.split("   ");

    leftArr.push(left);

    if(rightMap[right])
    {
        rightMap[right] = rightMap[right]+1;
    }
    else
    {
        rightMap[right] = 1;
    }

}

let sum : number = 0;

for(const n of leftArr)
{
    if(rightMap[n])
    {
        sum += (parseInt(n) * rightMap[n])
    }
}

console.log(sum)