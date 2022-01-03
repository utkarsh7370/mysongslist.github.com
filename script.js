const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const songs = [
    {
        name: "Chhod_Diya",
        title: "Chhod Diya",
        artist: "Arijit Singh",
    },
    {
        name: "Hasi",
        title: "Hasi Ban Gaye",
        artist: "Arijit Singh",
    },
    {
        name: "Tum_Hi_Aana",
        title: "Tum Hi Aana",
        artist: "Arijit Singh",
    },
    {
        name: "Baaton_Ko_Teri",
        title: "Baaton Ko Teri",
        artist: "Arijit Singh",
    },
];


let Playing = false;

const playMusic = () => {
    Playing = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};


const pauseMusic = () => {
    Playing = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    if (Playing) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});


const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".webp";

};

let songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
