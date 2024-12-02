

const file_text : string  = await Deno.readTextFile("./inputs/day_2/part_2.txt");

const lines : string[]  = file_text.split("\n");

let ans : number = 0;
const decreasing_set_diff : Set<number> = new Set<number>([1,2,3]);
const increasing_set_diff : Set<number> = new Set<number>([-1,-2,-3])


const check_order = (current_level : number[]) : boolean => {

    const track_map : Record<string,Array<number>> = {
        'inc':[],
        'dec':[],
        'not':[]
    };

    for(let i=0;i<current_level.length-1;i++)
    {
        const diff = current_level[i] - current_level[i+1];

        if(decreasing_set_diff.has(diff))
        {
            track_map['dec'].push(i);
        }
        else if(increasing_set_diff.has(diff))
        {
            track_map['inc'].push(i);
        }
        else
        {
            track_map['not'].push(i);
        }
    }

    if((track_map['inc'].length>=0 && track_map['dec'].length===0 && track_map['not'].length===0)
    || (track_map['dec'].length>=0 && track_map['inc'].length===0 && track_map['not'].length===0))
    {
        return true;
    }

    return false;

}


for(const line of lines)
{
    const current_level : number[] = line.split(" ").map((v) => parseInt(v));

   if(check_order(current_level))
   {
        ans++;
        continue;
   }

   for(let i=0;i<current_level.length;i++)
   {
        if(check_order(current_level.filter((_,current_ind) => current_ind!==i)))
        {
            ans++;
            break;
        }
   }
     
}

console.log(ans);




