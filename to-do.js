//select yhe items
let input=document.querySelector(".input");
let addbtn=document.querySelector(".addbutton");
let  result=document.querySelector(".showTask");
let msgwarn=document.querySelector(".warn");
let form= document.querySelector("#form");
let clearbtn=document.querySelector("#clear");
form.addEventListener("submit",function(e){
     e.preventDefault()

    if(input.value==""){
        warnMsg();
    } else{
        addElement();
    }
})
//function add element
function addElement(){
    let newLi=document.createElement("li");
    let checkbox=document.createElement("input");
    let label =document.createElement("label");
    checkbox.type="checkbox";
    label.innerHTML=input.value;
    newLi.append(checkbox,label);
    result.appendChild(newLi);
    newLi.classList.add("listyle")
    checkbox.style.cursor="pointer";
}
//function warn
function  warnMsg(){
msgwarn.style.display= "block";
input.style.border="1px solid red";
}

input.addEventListener("keypress",function(){
    msgwarn.style.display= "none";
input.style.border="1px solid #fff";
})

    
//remove
clearbtn.addEventListener('click',removeFunction);
function removeFunction(){
 let item=  document.getElementById("parent");
 item.remove();
}

