let musics =[
    {
        name:'Sick Boy',
        cover: 'images/chainsmokers.jpg',
        audio: new Audio('./musics/Chainsmokers.mp3')
    }
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
musics[currentMusic].audio
//ست کردن تصویر و نام اهنگ
musicCover.src = musics[currentMusic].cover;
musicName.innerText = musics[currentMusic].name
