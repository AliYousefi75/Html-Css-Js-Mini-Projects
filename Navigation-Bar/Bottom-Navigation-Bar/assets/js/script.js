// Expanded List
const navExpand = document.getElementById('nav-expand'),
      navExpandList = document.getElementById('nav-expand-list'),
      navExpandIcon = document.getElementById('nav-expand-icon')


      navExpand.addEventListener('click',()=>{
        //Expand list
        navExpandList.classList.toggle('show-list')

        //Rotate icon
        navExpandIcon.classList.toggle('rotate-icon')
      })