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
        document.querySelector('.adding input').value=" ";
    }
})
//function add element
function addElement(){
    let newLi=document.createElement("li");
    let checkbox=document.createElement("input");
    let label =document.createElement("label");
    let del=document.createElement("div");
    let Xtex=document.createTextNode("X");
    let containerdiv=document.createElement("div");
    del.append(Xtex);
    checkbox.type="checkbox";
    label.innerHTML=input.value;
     containerdiv.append(checkbox,label);
    newLi.append(containerdiv,del);
    result.appendChild(newLi);
    del.classList.add('DelEle');
    newLi.classList.add("listyle")
    checkbox.style.cursor="pointer";
    // del ele

    let allRem=document.querySelectorAll('.DelEle');
    // add index to all elelment
    for(let i=0;i<allRem.length;i++){
        allRem[i].parentElement.classList.add(i);
    }
  
 
//  delete element
for(let i=0;i<allRem.length;i++){
  allRem[i].addEventListener("click",function(){
    //   allRem[this.parentElement.classList[1]].remove();
      allRem[this.parentElement.classList[1]].parentNode.remove();
  })
}

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

document.querySelector('.DelEle').addEventListener("click",function(){
    this.parent.remove();
})
