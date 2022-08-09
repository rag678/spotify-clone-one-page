console.log("Welcome to Spotify!!!!")
//Initialize the Variable
let songIndex = 0;
let AudioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Yun hi",filePath:"Songs/Yun Hi.mp3",coverPath:"covers/1.jpg"},
    {songName:"Chal Jhooti",filePath:"Songs/Chal Jhooti.mp3",coverPath:"covers/1.jpg"},
    {songName:"Baatein Karo",filePath:"Songs/Baatein Karo.mp3",coverPath:"covers/1.jpg"},
    {songName:"Deewana Tera",filePath:"Songs/Deewana Tera.mp3",coverPath:"covers/1.jpg"},
    {songName:"Mere Hath Mein",filePath:"Songs/fanaa1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Chand Sifarish",filePath:"Songs/fanaa2.mp3",coverPath:"covers/1.jpg"},
    {songName:"Dekho Na",filePath:"Songs/fanaa3.mp3",coverPath:"covers/1.jpg"},
    {songName:"Yeh Raatein Yeh Mausam",filePath:"Songs/O Piya O.mp3",coverPath:"covers/1.jpg"},
    {songName:"Udaarian",filePath:"Songs/Udaarian.mp3",coverPath:"covers/1.jpg"},
    {songName:"Baant Raha Tha",filePath:"Songs/Baant Raha Tha.mp3",coverPath:"covers/1.jpg"},
]
// AudioElement.play();
//handle Play/Pause Event

songItems.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        AudioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");  
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
// Listen to Event

AudioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seeker
    progress = parseInt((AudioElement.currentTime/AudioElement.duration)*100);
    myProgressBar.value = progress;
})
// document.addEventListener('time');
myProgressBar.addEventListener('change',()=>{
    AudioElement.currentTime = (myProgressBar.value * AudioElement.duration)/100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        AudioElement.src = `Songs/${songIndex+1}.mp3` ;
        masterSongName.innerText = songs[songIndex].songName;
        AudioElement.currentTime = 0;
        AudioElement.play();
        gif.style.opacity = 1;
        masterPlay.target.classList.remove('fa-circle-play');
        masterPlay.target.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
    songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    AudioElement.src = `Songs/${songIndex+1}.mp3` ;
    masterSongName.innerText = songs[songIndex].songName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    gif.style.opacity = 1;
    masterPlay.target.classList.remove('fa-circle-play');
    masterPlay.target.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
    songIndex = 9;
    }
    else{
        songIndex -= 1;
    }

    AudioElement.src = `Songs/${songIndex+1}.mp3` ;
    masterSongName.innerText = songs[songIndex].songName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    gif.style.opacity = 1;
    masterPlay.target.classList.remove('fa-circle-play');
    masterPlay.target.classList.add('fa-circle-pause');
})