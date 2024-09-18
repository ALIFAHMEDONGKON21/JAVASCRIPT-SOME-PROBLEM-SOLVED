const itemofil=document.getElementsByTagName("li")


let lastclick=null;
for(let singalitem of itemofil)
{
    console.log(singalitem.innerText);
 singalitem.addEventListener('click', function(){
    if(lastclick == null)
    {   
        singalitem.style.background='red';
        singalitem.style.color='white';
        lastclick=singalitem;
    }
    else{
        lastclick.style.background='transparent';
        lastclick.style.color='#eee';

        singalitem.style.background='red';
        singalitem.style.color='whilte'
        lastclick=singalitem;

    }
   

})
}