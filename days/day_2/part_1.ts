

const file_text : string  = await Deno.readTextFile("./inputs/day_2/part_1.txt");

const lines : string[]  = file_text.split("\n");

let ans : number = 0;
const decreasing_set_diff : Set<number> = new Set<number>([1,2,3]);
const increasing_set_diff : Set<number> = new Set<number>([-1,-2,-3])



for(const line of lines)
{
    const current_level : number[] = line.split(" ").map((v) => parseInt(v));

    const deciding_order_number : number = current_level[0] - current_level[1];

    let current_level_increasing : boolean;

    if(decreasing_set_diff.has(deciding_order_number))
    {
        current_level_increasing = true;
    }
    else if(increasing_set_diff.has(deciding_order_number))
    {
        current_level_increasing = false;
    }
    else
    {
        continue;
    }

    let correct_order : boolean = true;

    for(let i=0;i<current_level.length-1;i++)
    {
        const current_order : number = current_level[i] - current_level[i+1];

        if((decreasing_set_diff.has(current_order) && current_level_increasing) || (increasing_set_diff.has(current_order) && !current_level_increasing))
        {
            // continue;
        }
        else
        {
            correct_order = false;
            break;
        }
    }

    if(correct_order)
    {
        ans++;
    }
      
}

console.log(ans);




