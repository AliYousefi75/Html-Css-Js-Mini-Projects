let list = document.querySelector("main");
let addInput = document.querySelector('input.add');
let searchInput = document.querySelector('input.search');
let addBtn = document.querySelector('#add-btn');;

list.addEventListener("click",(e)=>{
    if(e.target.nodeName =='BUTTON' && e.target.className =='delete'){
        e.target.parentNode.remove();
        if(list.children.length === 0){
            let listEmptyMsg = document.createElement('div');
            listEmptyMsg.style.textAlign = 'center'
            listEmptyMsg.style.color = '#333'
            listEmptyMsg.innerText = 'your list is empty'
            list.appendChild(listEmptyMsg);
        }
    }
})


