const lines : string = await Deno.readTextFile("./inputs/day_4/part_1.txt");

const grid : string[][] = lines.split("\n").map((line) => line.split(""));


let occur : number = 0;

const target_list : string[] = "XMAS".split("");

for(let i=0;i<grid.length;i++)
{
    for(let j=0;j<grid[0].length;j++)
    {
        // row check
        if(target_list.every((t_char,ind) => t_char===grid?.[i]?.[j+ind]))
        {
            occur++;
        }

        // row reverse
        if(target_list.every((t_char,ind) => t_char===grid?.[i]?.[j-ind]))
        {
            occur++;
        }

        // col check
        if(target_list.every((t_char,ind) => t_char===grid?.[i+ind]?.[j]))
        {
            occur++;
        }

        // col reverse
        if(target_list.every((t_char,ind) => t_char===grid?.[i-ind]?.[j]))
        {
            occur++;
        }

        // diagonal check
        if(target_list.every((t_char,ind) => t_char===grid?.[i+ind]?.[j+ind]))
        {
            occur++;
        }

        if(target_list.every((t_char,ind) => t_char===grid?.[i+ind]?.[j-ind]))
        {
            occur++;
        }

        if(target_list.every((t_char,ind) => t_char===grid?.[i-ind]?.[j+ind]))
        {
            occur++;
        }

        if(target_list.every((t_char,ind) => t_char===grid?.[i-ind]?.[j-ind]))
        {
            occur++;
        }
        
    }
}

console.log(occur);