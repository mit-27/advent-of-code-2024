const lines : string = await Deno.readTextFile("./inputs/day_3/part_1.txt");
const linesArray : string[] = lines.split("\n");

const regex = /mul\((\d+),(\d+)\)/g;


let sum : number = 0;

for(const line of linesArray)
{
    const current_line_mul = line.match(regex)?.map((mul : string) => (mul.match(/\d+/g) ?? []).map(Number));
    if(current_line_mul)
    {
        for(const [a,b] of current_line_mul)
        {
            sum += (a * b);
        }

    }
    

}

console.log(sum)