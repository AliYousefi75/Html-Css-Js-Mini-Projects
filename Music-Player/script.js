let musics =[
    {
        name:'Sick Boy',
        cover: 'images/chainsmokers.jpg',
        audio: new Audio('./musics/Chainsmokers.mp3')
    },
    {
        name:'Leon',
        cover: 'images/leon.jpg',
        audio: new Audio('./musics/leon.mp3')
    },
    {
        name:'Still DRE',
        cover: 'images/snoop.jpg',
        audio: new Audio('./musics/stillDRE.mp3')
    },
]

let range = document.querySelector('#music-time');
let playBtn = document.querySelector('#play-btn');
let nextBtn = document.querySelector('#next-btn');
let preBtn = document.querySelector('#pre-btn');
let musicCover = document.querySelector('#music-cover');
let musicName = document.querySelector('#music-name');
 

// متغیری که در ایندکس فعلی است
let currentMusic =0;
//موزیک را بیرون میکشد
let audio = musics[currentMusic].audio
//ست کردن تصویر و نام اهنگ
musicCover.src = musics[currentMusic].cover;
musicName.innerText = musics[currentMusic].name

//با این ایونت لیسنر چک میکنیم موزیک لود شده یا نه
audio.addEventListener('canplay',()=>{
    console.log(audio.duration)
    range.max = audio.duration
})
audio.addEventListener('timeupdate',()=>{
    //current timeزمان فعلی اهنگ را برمیگرداند
    range.value = audio.currentTime
})

range.addEventListener('input',()=>{
    audio.currentTime = range.value 
})

playBtn.addEventListener('click',()=>{
    if(audio.paused){
        audio.play()
        musicCover.style.animationPlayState = 'running'
        playBtn.classList.replace('fa-play','fa-pause')
    }else{
        audio.pause()
        playBtn.classList.replace('fa-pause','fa-play')
        musicCover.style.animationPlayState = 'paused'
    }
})

preBtn.addEventListener('click',()=>{
    changeMusic('next')
})

nextBtn.addEventListener('click',()=>{
    changeMusic('pre')
})

function changeMusic(state){
    audio.pause()
    range.value = 0;
    playBtn.classList.replace('fa-pause','fa-play');
    musicCover.style.animationPlayState = 'paused';
    audio.currentTime = 0;
    if(state == 'next'){
        if(currentMusic == musics.length-1){
            currentMusic =0;
        }else{
            currentMusic +=1;
        }

    }else{
        if(currentMusic == 0){
            currentMusic =musics.length -1;
        }else{
            currentMusic -=1;
        }
    }

    audio = musics[currentMusic].audio
    musicCover.src = musics[currentMusic].cover;
    musicName.innerText = musics[currentMusic].name

    audio.addEventListener('timeupdate',()=>{
    range.value = audio.currentTime
})


}




