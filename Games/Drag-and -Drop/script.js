const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");


// پیمایش کارت ها
for(const card of cards){
    card.addEventListener('dragstart',dragStart);
    card.addEventListener('dragend',dragEnd)
}

for(const list of lists){
    list.addEventListener('dragover',dragOver);
    list.addEventListener('dragenter',dragEnter);
    list.addEventListener('dragleave',dragLeave);
    list.addEventListener('drop',dragDrop);
}