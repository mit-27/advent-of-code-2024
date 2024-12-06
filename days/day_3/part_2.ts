const lines : string = await Deno.readTextFile("./inputs/day_3/part_2.txt");

const regex = /(mul\(\d+,\d+\)|do\(\)|don't\(\))/g;

const matches = lines.match(regex) ?? [];

let enable : boolean = true;

let sum : number = 0;


for(const match of matches)
{
    if(match === "do()")
    {
        enable = true;
    }
    else if(match === "don't()")
    {
        enable = false;
    }
    else
    {
        const [a,b] = match.match(/\d+/g) ?? [];
        if(enable)
        {
            sum += (parseInt(a!) * parseInt(b!));
        }
    }
}


// for(const line of linesArray)
// {
//     const current_line_mul = line.match(regex)?.map((mul : string) => (mul.match(/\d+/g) ?? []).map(Number));
//     if(current_line_mul)
//     {
//         for(const [a,b] of current_line_mul)
//         {
//             sum += (a * b);
//         }

//     }
    

// }

console.log(sum)