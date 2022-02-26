const music = document.querySelector("audio");
const image = document.querySelector("img");
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

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

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
