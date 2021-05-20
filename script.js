let inp=document.getElementById("inp");
b=document.querySelectorAll("button");
let screen=" ";
for(item of b)
{
    item.addEventListener('click',(e)=>{
        bText=e.target.innerText;
        // console.log(bText)
        if (bText=="*")
        {
            screen+=bText;
            inp.value=screen;

        }
        else if(bText=="=")
        {
            inp.value=eval(screen);

        }
        else if(bText=="C")
        {
            screen=" ";
            inp.value=screen;
        }
        // else if(bText=="<--")
        // {
            
        //     inp.value=screen.value.slice(0,-1);
        // }
        else{
            screen+=bText;
            inp.value=screen;

        }

    })
}
