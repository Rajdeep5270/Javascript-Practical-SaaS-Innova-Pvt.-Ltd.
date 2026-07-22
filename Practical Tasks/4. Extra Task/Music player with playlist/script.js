// let allPlaylists = JSON.parse(localStorage.getItem('playlist') || '[]');

let allPlaylists = [];

const songName = document.getElementById("songName");
const singerName = document.getElementById("singerName");
const songFile = document.getElementById("songFile");

const tBody = document.getElementById("tBody");

const displaySongName = document.getElementById("displaySongName");
const displaySingerName = document.getElementById("displaySingerName");
const displayAudio = document.getElementById("displayAudio");

const addSongToPlaylist = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (!songName.value || !singerName.value || !songFile.value) {
        alert("All fields are compulsory");
        return;
    }

    formData.append('song_file', songFile.value);

    allPlaylists.push({
        id: Math.floor(Math.random() * 1000),
        song_name: songName.value,
        singer_name: singerName.value,
        song_file: songFile.value
    });

    // localStorage.setItem('playlist', JSON.stringify(allPlaylists));

    songName.value = "";
    singerName.value = "";
    songFile.value = "";

    viewSongList();
}

const viewSongList = () => {
    if (allPlaylists.length === 0) {
        tBody.innerHTML = `<tr>
            <td colspan="4">There were no songs found</td>
        </tr>`;

        return;
    }

    tBody.innerHTML = "";

    allPlaylists.forEach((data, idx) => {
        tBody.innerHTML += `
                            <tr  onclick="songToListen(${data.id})" >
                                <td>${idx + 1}</td>
                                <td>${data.song_name}</td>
                                <td>${data.singer_name}</td>
                                <td>
                                    <button class="btn btn-outline-danger" onclick="deleteSong(${data.id})">Delete</button>
                                    <button class="btn btn-outline-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" onclick="songToListen(${data.id})">Play</button>
                                </td>
                            </tr>
        `
    });
};

viewSongList();

const deleteSong = (deleteId) => {
    // console.log("Delete ID : ", deleteId);

    allPlaylists = allPlaylists.filter(data => data.id !== deleteId);

    // localStorage.setItem('playlist', JSON.stringify(allPlaylists));

    viewSongList();
}

const songToListen = (playId) => {
    // console.log("Play ID : ", playId)

    console.log(allPlaylists);

    const foundSong = allPlaylists.find(data => data.id === playId);

    // console.log("Song to be find : ", foundSong);

    displaySongName.innerText = foundSong.song_name;

    displaySingerName.innerText = foundSong.singer_name;

    // displayAudio.setAttribute('src', foundSong.song_file);
}


// data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"