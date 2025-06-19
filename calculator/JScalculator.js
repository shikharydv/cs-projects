let input=document.getElementById("inputbox");
let buttons=document.querySelectorAll("button");
/*using an empty scring to store the result and to show in input*/
let string="";
let arr=Array.from(buttons);
arr.forEach(buttons =>{
    buttons.addEventListener("click",(a)=>{
        if(a.target.innerHTML==="="){
            string=eval(string);/*using evaluate function inbuild in js */
            input.value=string;
        }
        else if(a.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(a.target.classList.contains("fa-solid","fa-delete-left")){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=a.target.innerHTML;
            input.value=string;
        }
        
    });
});