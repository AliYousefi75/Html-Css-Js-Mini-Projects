// document.querySelector(".footer").addEventListener("click", (e) => {
//   if (e.target.nodeName != "I") return;
//   let data;
//   switch (e.target.getAttributeNode("item-id").value) {
//     case "home":
//       data = { title: "HOME", color:"red", itemId: "home" };
//       update(data);
//       history.pushState(data, "home", "/home");
//       break;
//     case "search":
//       data = { title: "SEARCH", color:"green", itemId: "search" };
//       update(data);
//       history.pushState(data, "search", "/search");
//       break;
//     case "likes":
//       data = { title: "LIKES", color:"blue", itemId: "likes" };
//       update(data);
//       history.pushState(data, "likes", "/likes");
//       break;
//     default:
//       data = { title: "PROFILE", color:"yellow", itemId: "profile" };
//       update(data);
//       history.pushState(data, "profile", "/profile");
//       break;
//   }
// });

// window.addEventListener('popstate',(e)=>{
//    if(history.state){
//     update(history.state)
//    }else({ title: "HOME", color:"red", itemId: "home" })
// })

// function update(data) {
//     document.querySelector("h1").innerText = data.title;
//     document.querySelector(".screen").style.backgroundColor = data.color;
//     document.querySelectorAll("i").forEach((element) => {
//         element.style.color = "#666";
//     });
//     document.querySelector(`i[item-id=${data.itemId}]`).style.color = "black";
// }








document.querySelector('.footer').addEventListener('click',(e)=>{
    if(e.target.nodeName != 'I')return;
    let data;
    if(e.target.getAttributeNode('item-id').value == 'home'){
        data = {color:'red',title:'HOME',itemId:'home'};
        update(data);
        history.pushState(data,'home','/home')
    }else if(e.target.getAttributeNode('item-id').value =='search'){
        data = {color:'green',title:'SEARCH',itemId:'search'};
        update(data);
        history.pushState(data,'search','/search')
    }else if(e.target.getAttributeNode('item-id').value == 'likes'){
        data = {color:'blue' , title:'LIKES' , itemId:'likes'};
        update(data);
        history.pushState(data,'likes','/likes')
    }else{
        data ={color:'yellow' , title:'PROFILE',itemId:'profile'};
        update(data);
        history.pushState(data,'profile','/profile')
    }
})

window.addEventListener('popstate',(e)=>{
    if(history.state){
        update(history.state)
    }else {
        update({color:'red' , title:'HOME',itemId:'home'})
    }
        
})

function update(data){
    document.querySelector('h1').innerText = data.title;
    document.querySelector('.screen').style.backgroundColor = data.color;
    document.querySelectorAll('i').forEach(element=>{
        element.style.color = '#666';
    })
    document.querySelector(`i[item-id = ${data.itemId}]`).style.color ='black'
}
