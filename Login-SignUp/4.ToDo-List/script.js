let list = document.querySelector("main");
let addInput = document.querySelector('.add');
let searchInput = document.querySelector('input.search');
let addBtn = document.querySelector("#addbtn");


list.addEventListener("click",(e)=>{
    if(e.target.nodeName =='BUTTON' && e.target.className =='delete'){
        e.target.parentNode.remove();
        if(list.children.length === 0){
            let listEmptyMsg = document.createElement('div');
            listEmptyMsg.style.textAlign = 'center'
            listEmptyMsg.style.color = '#333'
            listEmptyMsg.innerText = 'your list is empty'
            listEmptyMsg.id = 'emptyMsg'
            list.appendChild(listEmptyMsg);
        }
    }
})


addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!addInput.value){
        return
    }
    if(document.querySelector('#emptyMsg')){
        document.querySelector('#emptyMsg').remove()
    }
    list.append(createListItem(addInput.value))
    addInput.value =''
})


function createListItem(itemValue){
    let item = document.createElement('div')
    let title = document.createElement('p')
    let button = document.createElement('button')
    item.className = 'data'
    title.innerText = itemValue
    button.className = 'delete'
    button.innerText = 'delete'
    item.appendChild(title)
    item.appendChild(button)
    return item

}