const lines : string = await Deno.readTextFile("./inputs/day_4/part_2.txt");

const grid : string[][] = lines.split("\n").map((line) => line.split(""));


let occur : number = 0;

// const target_list : string[] = "XMAS".split("");

for(let i=0;i<grid.length;i++)
{
    for(let j=0;j<grid[0].length;j++)
    {
       if(grid[i][j]==="A")
       {
            if(grid?.[i-1]?.[j-1]==="M" && grid?.[i+1]?.[j+1]==="S" && grid?.[i-1]?.[j+1]==="M" && grid?.[i+1]?.[j-1]==="S")
            {
                occur++;
            }

            if(grid?.[i-1]?.[j-1]==="M" && grid?.[i+1]?.[j+1]==="S" && grid?.[i-1]?.[j+1]==="S" && grid?.[i+1]?.[j-1]==="M")
            {
                occur++;
            }

            if(grid?.[i-1]?.[j-1]==="S" && grid?.[i+1]?.[j+1]==="M" && grid?.[i-1]?.[j+1]==="S" && grid?.[i+1]?.[j-1]==="M")
            {
                occur++;
            }

            if(grid?.[i-1]?.[j-1]==="S" && grid?.[i+1]?.[j+1]==="M" && grid?.[i-1]?.[j+1]==="M" && grid?.[i+1]?.[j-1]==="S")
            {
                occur++;
            }


       }
        
    }
}

console.log(occur);