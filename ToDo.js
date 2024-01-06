let body = document.querySelector("body");
let tex = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click",function(event){
    if(tex.value!=""){
        let li1 = document.createElement("li");
        li1.innerText=tex.value;
        ul.appendChild(li1);
        tex.value="";

        let but = document.createElement("button");
        but.innerText="Remove";
        but.classList.add("del")
        li1.appendChild(but)
    };
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let itm = event.target.parentElement;
        console.log(itm)
        itm.remove();
    }
});

// let btdel = document.getElementsByClassName("del")

// for(btd of btdel){
//     btd.addEventListener("click",function(){
//         let deel = this.parentElement;
//         console.log(deel)
//         deel.remove()
//     })
// }

