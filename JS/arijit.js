const audioElement = new Audio("../mp3/Arijit/Ae Watan.mp3");

let songs = [
    {id:"0", songName: `<h5>Baby<br><div class="subtitle">Justin Bieber</div></h5>`, filePath: "../mp3/Justin Bieber/baby.mp3", coverPath: "../cover/justin/Baby.jpg"},
    {id:"1", songName: `<h5>Despacito<br><div class="subtitle">Justin Bieber</div></h5>`, filePath: "../mp3/Justin Bieber/Despacito.mp3", coverPath: "../cover/justin/despacito.jpg"},
    {id:"2", songName: `<h5>Khuda Jaane<br><div class="subtitle">KK</div></h5>`, filePath: "../mp3/KK/Khuda Jaane.mp3", coverPath: "../cover/KK/Khuda Jaane.jpg"},
    {id:"3", songName: `<h5>Kya Mujhe Pyar Hai<br><div class="subtitle">KK</div></h5>`, filePath: "../mp3/KK/Kya Mujhe Pyar Hai.mp3", coverPath: "../cover/KK/Kya Mujhe Pyar Hai.jpg"},
    {id:"4", songName: `<h5>Labon Ko<br><div class="subtitle">KK</div></h5>`, filePath: "../mp3/KK/Labon Ko.mp3", coverPath: "../cover/KK/Labon Ko.jpg"},
    {id:"5", songName: `<h5>Let Me Love You<br><div class="subtitle">Justin Bieber</div></h5>`, filePath: "../mp3/Justin Bieber/Let Me Love You.mp3", coverPath: "../cover/justin/Let me love you.jpg"},
    {id:"6", songName: `<h5>Mouth 2 Mouth<br><div class="subtitle">Enrique Iglesias</div></h5>`, filePath: "../mp3/Enrique Iglesias/Mouth 2 Mouth.mp3", coverPath: "../cover/enrique/Mouth2Mouth.jpg"},
    {id:"7", songName: `<h5>Move To Miami<br><div class="subtitle">Enrique Iglesias</div></h5>`, filePath: "../mp3/Enrique Iglesias/Move To Miami.mp3", coverPath: "../cover/enrique/Move_to_Miami.jpg"},
    {id:"8", songName: `<h5>The Zack Knight Mashup<br><div class="subtitle">Zack Knight</div></h5>`,filePath: "../mp3/Zack Knight/The_Zack_Knight_Mashup.mp3", coverPath: "../cover/zack/mashup.jpg"},
    {id:"9", songName: `<h5>Thumka<br><div class="subtitle">Zack Knight</div></h5>`, filePath: "../mp3/Zack Knight/Thumka.mp3", coverPath: "../cover/zack/thumka.jpg"},
    {id:"10", songName: `<h5>Tonight I'm Lovin You<br><div class="subtitle">Enrique Iglesias</div></h5>`, filePath: "../mp3/Enrique Iglesias/Tonight.mp3", coverPath: "../cover/enrique/tonight.jpg"},
    {id:"11", songName: `<h5>Tu Hi Meri Shab Hai<br><div class="subtitle">KK</div></h5>`, filePath: "../mp3/KK/Tu Hi Meri Shab Hai.mp3", coverPath: "../cover/KK/Tu Hi Meri Shab Hai.jpg"},
    {id:"12", songName: `<h5>Zara Si<br><div class="subtitle">KK</div></h5>`, filePath: "../mp3/KK/Zara Si.mp3", coverPath: "../cover/KK/Zara Si.jpg"},

    {id:"13", songName: `<h5>Ae Watan<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Ae Watan.mp3", coverPath: "../cover/arijit/Ae Watan.jpg"},
    {id:"14", songName: `<h5>Agar Tum Saath Ho<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Agar Tum Saath Ho.mp3", coverPath: "../cover/arijit/Agar Tum Saath Ho.jpg"},
    {id:"15", songName: `<h5>Chunar<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Chunar.mp3", coverPath: "../cover/arijit/Chunar.jpg"},
    {id:"16", songName: `<h5>Galti Se Mistake<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Galti Se Mistake.mp3", coverPath: "../cover/arijit/Galti Se Mistake.jpg"},
    {id:"17", songName: `<h5>Humari Adhuri Kahani<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Humari Adhuri Kahani.mp3", coverPath: "../cover/arijit/Humari Adhuri Kahani.jpg"},
    {id:"18", songName: `<h5>Humdard<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Humdard.mp3", coverPath: "../cover/arijit/Humdard.jpg"},
    {id:"19", songName: `<h5>Khairiyat<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Khairiyat.mp3", coverPath: "../cover/arijit/Khairiyat.jpg"},
    {id:"20", songName: `<h5>Nashe Si<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Nashe Si.mp3", coverPath: "../cover/arijit/Nashe Si.jpg"},
    {id:"21", songName: `<h5>Pachtaoge<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Pachtaoge.mp3", coverPath: "../cover/arijit/Pachtaoge.jpg"},
    {id:"22", songName: `<h5>Tera Yaar Hoon Main<br><div class="subtitle">Arijit Singh</div></h5>`, filePath: "../mp3/Arijit/Tera Yaar.mp3", coverPath: "../cover/arijit/Tera Yaar.jpg"},
]


// ---------------------------------Search Functionality---------------------------------------------
let searchResults = document.getElementsByClassName("searchResults")[0];
songs.forEach((element) => {
    const {id, songName, filePath, coverPath} = element;
    // console.log(coverPath);
    let cart = document.createElement("a");
    cart.href = "#" + id;
    cart.classList.add("cart");
    cart.innerHTML = `<img src="${coverPath}" alt="">
                            <div class="content">
                                ${songName} 
                            </div>  `;
    
    searchResults.appendChild(cart);
    // console.log(searchResults);
});

let input = document.getElementsByTagName("input")[0];
// console.log(input);
input.addEventListener("keyup", () => {
    let inputValue = input.value.toUpperCase();
    let items = searchResults.getElementsByTagName("a");
    for (let index=0; index<items.length; index++) {
        let contentOfSong = items[index].getElementsByClassName("content")[0];
        let textValue = contentOfSong.textContent || contentOfSong.innerHTML;

        if (textValue.toUpperCase().indexOf(inputValue) > -1) {
            items[index].style.display = "flex";
            // textValue.style.background = "rgb(105, 105, 170, .2)";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            searchResults.style.display = "none";
        } else {
            searchResults.style.display = "";
        }
    }
})
// ------------------------------------------------------------------------------------------------------


 
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = songs[i].coverPath;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
})

// -------------Enable masterplay button for play/pause-----------------
// To do: Change the play/pause button of the playlist songs as well when clicked on masterplay pause button
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})
// ---------------------------------------------------------------------


// ------------------Make all background unhovered-----------------------
const makeAllBackgroundUnHovered = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
        element.style.background = "rgb(105, 105, 105, .0)";
    });
}
// ----------------------------------------------------------------------


// -------------Make all play button enabled (pause button will get removed (and play button applied at the same time) from every songs except the clicked one)-----------------
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("playSong")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}
// -----------------------------------------------------------------------------------


// ---------------------Play songs by clicking on play button (play button is there on the song)--------------------------
// Pause Songs by clicking on pause button is left to implement
let index = 0;
let posterMaterPlay = document.getElementById("posterMasterPlay");
let title = document.getElementById("title");
let downloadMusic = document.getElementById("downloadMusic");

Array.from(document.getElementsByClassName("playSong")).forEach((e) => {
    e.addEventListener("click", (el) => {
        if (audioElement.paused || audioElement.currentTime === 0) {
            index = parseInt(el.target.id);
            audioElement.src = songs[index].filePath;
            posterMaterPlay.src = songs[index].coverPath
            title.innerHTML = songs[index].songName;

            audioElement.play();
            downloadMusic.href = songs[index].filePath;
            // downloadMusic.setAttribute("download", songName);
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            gif.style.opacity = 1;

            makeAllBackgroundUnHovered();   // make all song's background as unhovered to show that those songs are not currently playing
            // then make the current song as hovered to show that this song is playing 
            Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105, 105, 105, .2)";
            makeAllPlay();  // make all button as play to show they are in pause state
            // then make current song's button as pause to show that this song is playing
            el.target.classList.remove("fa-circle-play"); 
            el.target.classList.add("fa-circle-pause"); 
        }    
        else {
            audioElement.pause();
            el.target.classList.remove("fa-circle-pause"); 
            el.target.classList.add("fa-circle-play");
            masterPlay.classList.remove("fa-pause"); 
            masterPlay.classList.add("fa-play");
            gif.style.opacity = 0;
        }
    })
}) 
// ---------------------------------------------------------------------------------------------------


// ----------------------Update time and seekbar-------------------------
let startTimeStamp = document.getElementById("startTimeStamp");
let endTimeStamp = document.getElementById("endTimeStamp");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

audioElement.addEventListener("timeupdate", () => {
    // console.log(audioElement.duration);
    let minStart = Math.floor(audioElement.currentTime / 60);
    let secStart = Math.floor(audioElement.currentTime % 60);
    if (secStart < 10) {
        secStart = `0${secStart}`;
    }
    startTimeStamp.innerText = `${minStart}:${secStart}`;

    let minEnd = Math.floor(audioElement.duration / 60);
    let secEnd = Math.floor(audioElement.duration % 60);
    if (secEnd < 10) {
        secEnd = `0${secEnd}`;
    }
    endTimeStamp.innerText = `${minEnd}:${secEnd}`;

    let progressBar = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})
// ---------------------------------------------------------------------



// ---------------------Update seekbar manually--------------------------
seek.addEventListener("change", () => {
    audioElement.currentTime = seek.value * audioElement.duration / 100;
})
// ----------------------------------------------------------------------



// ------------------------Update volume bar-----------------------------
let volIcon = document.getElementById("volIcon");
let vol = document.getElementById("volBar");
let volBar = document.getElementsByClassName("volBarVisible")[0];
let volDot = document.getElementsByClassName("volDot")[0];

vol.addEventListener("change", () => {
    if (vol.value == 0) {
        volIcon.classList.remove("bi-volume-up-fill");
        volIcon.classList.remove("bi-volume-down-fill");
        volIcon.classList.add("bi-volume-off-fill");
    }
    if (vol.value > 0) {
        volIcon.classList.remove("bi-volume-up-fill");
        volIcon.classList.add("bi-volume-down-fill");
        volIcon.classList.remove("bi-volume-off-fill");
    }
    if (vol.value > 50) {
        volIcon.classList.add("bi-volume-up-fill");
        volIcon.classList.remove("bi-volume-down-fill");
        volIcon.classList.remove("bi-volume-off-fill");
    }

    volBar.style.width = `${vol.value}%`;
    volDot.style.left = `${vol.value}%`;    
    audioElement.volume = vol.value/100;
})
// ----------------------------------------------------------------------


// -------------Click events on previous and next button-----------------
let previous = document.getElementById("previous");
let next = document.getElementById("next");

// Play previous song
previous.addEventListener("click", () => {
    index -= 1;
    if (index<0) {
        index = Array.from(document.getElementsByClassName("songItem")).length-1;
    }
    audioElement.src = songs[index].filePath;
    posterMaterPlay.src = songs[index].coverPath
    title.innerHTML = songs[index].songName;

    audioElement.play();
    downloadMusic.href = songs[index].filePath;
    // downloadMusic.setAttribute("download", songName);
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;

    makeAllBackgroundUnHovered();
    Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105, 105, 105, .2)";
    makeAllPlay();
    document.getElementsByClassName("playSong")[index].classList.remove("fa-circle-play"); 
    document.getElementsByClassName("playSong")[index].classList.add("fa-circle-pause"); 
})

// Play next song
next.addEventListener("click", () => {
    // console.log(index);
    index += 1;
    if (index > Array.from(document.getElementsByClassName("songItem")).length - 1) {
        index = 0;
    }
    audioElement.src = songs[index].filePath;
    posterMaterPlay.src = songs[index].coverPath
    title.innerHTML = songs[index].songName;

    audioElement.play();
    downloadMusic.href = songs[index].filePath;
    // downloadMusic.setAttribute("download", songName);
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;

    makeAllBackgroundUnHovered();
    Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105, 105, 105, .2)";
    makeAllPlay();
    document.getElementsByClassName("playSong")[index].classList.remove("fa-circle-play"); 
    document.getElementsByClassName("playSong")[index].classList.add("fa-circle-pause"); 
})
// ----------------------------------------------------------------------



// -----------------------Left and Right Slide--------------------------
let SongLeftSlide = document.getElementById("SongLeftSlide");
let SongRightSlide = document.getElementById("SongRightSlide");
let popSong = document.getElementsByClassName("popSong")[0];

SongLeftSlide.addEventListener("click", () => {
    popSong.scrollLeft -= 330;
})

SongRightSlide.addEventListener("click", () => {
    popSong.scrollLeft += 330;
})

let ArtistLeftSlide = document.getElementById("ArtistLeftSlide");
let ArtistRightSlide = document.getElementById("ArtistRightSlide");
let item = document.getElementsByClassName("item")[0];

ArtistLeftSlide.addEventListener("click", () => {
    item.scrollLeft -= 330;
})

ArtistRightSlide.addEventListener("click", () => {
    item.scrollLeft += 330;
}) 
// ----------------------------------------------------------------------



// ----------------------------------Next, Shuffle and Repeat------------------------------------------------
let shuffle = document.getElementsByClassName("shuffle")[0];
// console.log(shuffle.innerHTML);
shuffle.addEventListener("click", () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add("bi-repeat");
            shuffle.classList.remove("bi-music-note-beamed");
            shuffle.classList.remove("bi-shuffle");
            shuffle.innerHTML = "repeat";
            break;
        
        case "repeat":
            shuffle.classList.remove("bi-repeat");
            shuffle.classList.remove("bi-music-note-beamed");
            shuffle.classList.add("bi-shuffle");
            shuffle.innerHTML = "random";
            break;

        case "random":
            shuffle.classList.remove("bi-repeat");
            shuffle.classList.add("bi-music-note-beamed");
            shuffle.classList.remove("bi-shuffle");
            shuffle.innerHTML = "next";
            break;

        default:
            break;
    }
});

const nextMusic = () => {
    index += 1;
    if (index > Array.from(document.getElementsByClassName("songItem")).length - 1) {
        index = 0;
    }
    audioElement.src = songs[index].filePath;
    posterMaterPlay.src = songs[index].coverPath
    title.innerHTML = songs[index].songName;

    audioElement.play();
    downloadMusic.href = songs[index].filePath;
    // downloadMusic.setAttribute("download", songName);

    makeAllBackgroundUnHovered();
    Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105, 105, 105, .2)";
    makeAllPlay();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
    document.getElementsByClassName("playSong")[index].classList.remove("fa-circle-play"); 
    document.getElementsByClassName("playSong")[index].classList.add("fa-circle-pause");   
}

const repeatMusic = () => {
    index;
    audioElement.src = songs[index].filePath;
    posterMaterPlay.src = songs[index].coverPath
    title.innerHTML = songs[index].songName;

    audioElement.play();
    downloadMusic.href = songs[index].filePath;
    // downloadMusic.setAttribute("download", songName);

    makeAllBackgroundUnHovered();
    Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105, 105, 105, .2)";
    makeAllPlay();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
    document.getElementsByClassName("playSong")[index].classList.remove("fa-circle-play"); 
    document.getElementsByClassName("playSong")[index].classList.add("fa-circle-pause");   
}

const randomMusic = () => {
    index = Math.floor((Math.random() * songs.length) + 1);
    if (index > Array.from(document.getElementsByClassName("songItem")).length - 1) {
        index = 0;
    }
    audioElement.src = songs[index].filePath;
    posterMaterPlay.src = songs[index].coverPath
    title.innerHTML = songs[index].songName;

    audioElement.play();
    downloadMusic.href = songs[index].filePath;
    // downloadMusic.setAttribute("download", songName);

    makeAllBackgroundUnHovered();
    Array.from(document.getElementsByClassName("songItem"))[index].style.background = "rgb(105, 105, 105, .2)";
    makeAllPlay();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
    document.getElementsByClassName("playSong")[index].classList.remove("fa-circle-play"); 
    document.getElementsByClassName("playSong")[index].classList.add("fa-circle-pause");   
}

// --------------Auto play song when current one ends according to next, shuffle and repeat button---------------
audioElement.addEventListener("ended", () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case "next":
            nextMusic();
            break;
        case "repeat":
            repeatMusic();
            break;
        case "random":
            randomMusic();
            break;
    }
})
// ---------------------------------------------------------------------------------------------------------------



// -----------------------Activate or De-active Menu List Active Button according to width-----------------------
let menuListActiveButton = document.getElementById("menuListActiveButton");
let menuSide = document.getElementsByClassName("menuSide")[0];

menuListActiveButton.addEventListener("click", () => {
    menuSide.style.transform = "unset";
    menuListActiveButton.style.opacity = 0; 
})

let main = document.getElementsByClassName("main")[0];
let mq = window.matchMedia( "(max-width: 930px)" );
mq.addEventListener("change", mqHandler);

function mqHandler(e){
    // console.log(mq);
    // console.log(e);
    if (e.matches) {
        if (menuSide.style.transform == "unset") {
            menuListActiveButton.style.opacity = 0; 
        }
        main.addEventListener("click", () => {
            menuSide.style.transform = "translateX(-100%)";
            menuListActiveButton.style.opacity = 1; 
        })
    } else {
        menuSide.style.transform = "unset";
        main.addEventListener("click", () => {
            menuSide.style.transform = "unset"; 
        })
    }
}

// Initial state: The handler only runs when the matches property changes. It won’t run when the page is initially loaded,
// so we can call the function directly to determine the starting state
mqHandler(mq);
// ------------------------------------------------------------------------------------------------------------