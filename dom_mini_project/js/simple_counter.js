const counter_update=document.getElementById("count");
const increase_updata=document.getElementsByClassName("increase-button")[0];
const decrease_updata=document.getElementsByClassName("decrease-button")[0];


const full_counter=document.getElementById('counter');


full_counter.addEventListener('click',function(){
  
    if(increase_updata.getAttribute("disabled") == null)
    {
        console.log("okk click another here")
    increase_updata.setAttribute("disabled" ,true);
    decrease_updata.setAttribute("disabled", true);
    full_counter.classList.add("bg-red-500");
    }
    else
    {
    increase_updata.removeAttribute("disabled" ,);
    decrease_updata.removeAttribute("disabled", );
    full_counter.classList.remove("bg-red-500");
    }

   
})

increase_updata.addEventListener('click' ,function(event){
    let counter_updataing=Number(counter_update.innerText)
    counter_updataing++;
    counter_update.innerText=counter_updataing;
    event.stopPropagation();
})

decrease_updata.addEventListener('click',function(event){
    let counter_updataing=Number(counter_update.innerText)
    counter_updataing--;
    counter_update.innerText=counter_updataing;
    event.stopPropagation();
})