const music = document.querySelector("audio");
const image = document.querySelector("img");
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let total_currentTime = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");

const songs = [
    {
        name: "Chhod_Diya",
        title: "Chhod Diya",
        artist: "Arijit Singh"
    },
    {
        name: "Baaton_Ko_Teri",
        title: "Baato ko teri",
        artist: "Arijit Singh"
    },
    {
        name: "Tum_Hi_Aana",
        title: "tum hi aana",
        artist: "Arijit Singh"
    },
    {
        name: "Hasi",
        title: "hasi",
        artist: "Arijit Singh"
    }
]

let playing = false;

const playMusic = ()=> {
    playing = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    image.classList.add("anime");
};

const pauseMusic = ()=> {
    playing = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    image.classList.remove("anime");
};

play.addEventListener("click", ()=> {
    if(playing) {
        pauseMusic();
    }

    else {
        playMusic();
    }
});

const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name +".mp3";
    image.src = "images/" + songs.name + ".webp"
};

loadSong(songs[0]);
let songIndex = 0;

const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

music.addEventListener("timeupdate", (event)=>{
    const { currentTime, duration} = event.srcElement;
    let progress_time = (currentTime / duration) *100;
    progress.style.width = `${progress_time}%`;

    let min_duration = Math.floor(duration/60);
    let sec_duration = Math.floor(duration % 60);

    if(sec_duration <10){
        sec_duration = `0${sec_duration}`
    }

    let tot_duration = `${min_duration}:${sec_duration}`;
    if(duration){

        total_duration.textContent = `${tot_duration}`;
    }

    let min_currentTime = Math.floor(currentTime/60);
    let sec_currentTime = Math.floor(currentTime % 60);

   
    if(sec_currentTime <10){
        sec_currentTime = `0${sec_currentTime}`
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;

        total_currentTime.textContent = `${tot_currentTime}`;
});

music.addEventListener("ended", nextSong);

progress_div.addEventListener("click", (event)=>{
    const{duration} = music;
    let move_progress = (event.offsetX/event.srcElement.clientWidth) *duration;
    music.currentTime = move_progress;
})


next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
