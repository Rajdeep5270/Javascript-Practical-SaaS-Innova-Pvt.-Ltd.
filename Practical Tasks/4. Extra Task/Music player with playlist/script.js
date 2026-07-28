const playlistSongs = [
    {
        id: 1,
        name: "Believer",
        src: "./Music/Believer.mp3"
    },
    {
        id: 2,
        name: "Walking in the Light",
        src: "./Music/chilvera-walking-in-the-light-472432.mp3"
    },
    {
        id: 3,
        name: "Coverless Book",
        src: "./Music/Coverless book.mp3"
    },
    {
        id: 4,
        name: "The song of alone",
        src: "./Music/The song of alone.mp3"
    }
];

const songs = [];

const audio = document.getElementById("audioPlayer");
const tBody = document.getElementById("tBody");
const yourPlayList = document.getElementById("yourPlayList");
const currentSong = document.getElementById("currentSong");

let currentIndex = 0;

// Display Playlist
function displayPlaylist() {

    tBody.innerHTML = "";

    playlistSongs.forEach((song, index) => {
        tBody.innerHTML += `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${song.name}</td>
                                <td><button onclick="addSongsToPlaylist(${song.id})">Add</button></td>
                            </tr>
        `
    });
}

function displaySongPlaylist() {
    yourPlayList.innerHTML = "";

    songs.forEach((song, index) => {
        yourPlayList.innerHTML += `
                            <tr>
                                <td>${index + 1}</td>
                                <td onclick="selectSong(${index})">${song.name}</td>
                                <td><button onclick="removeSong(${index})">Remove</button></td>
                            </tr>
        `
    });
}

// Select Song
function selectSong(index) {
    if (songs.length === 0) {
        alert("Your Playlist is empty");
        return;
    }

    currentIndex = index;
    currentSong.innerText = "Current Song : " + songs[index].name;
    audio.src = songs[index].src;
}

// Play
function playSong() {

    if (!audio.src) {
        selectSong(currentIndex);
    }

    audio.play();
}

// Pause
function pauseSong() {

    audio.pause();
}

// Stop
function stopSong() {

    audio.pause();
    audio.currentTime = 0;

}

// Remove Song
function removeSong(index) {

    songs.splice(index, 1);

    if (currentIndex >= songs.length) {
        currentIndex = 0;
    }

    displaySongPlaylist();

}

// Shuffle Playlist
function shufflePlaylist() {

    songs.sort(() => Math.random() - 0.5);

    displaySongPlaylist();

}

function addSongsToPlaylist(songId) {
    // console.log("Song Id : ", songId);
    const isFound = songs.find(song => song.id === songId);

    if (isFound) {
        alert("Song is already added");
        return;
    }

    const songFound = playlistSongs.find(song => song.id === songId);

    // console.log(songFound);

    songs.push(songFound);

    // console.log(songs);

    displaySongPlaylist();
}

displayPlaylist();