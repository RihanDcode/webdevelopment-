const t1 = performance.now()
console.log("Hello World");

document.title = "Spotify - Web Player: Music for everyone"
console.log(document.title)
const t2 = performance.now();
console.log("the time of code", " " + (t2-t1))


async function getSongs() {
    let a = await fetch("songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split('/songs/')[1]);
        }
    }
    return songs;
}

const playMusic = (track)=>{
    audio = new Audio("/songs/" + track)
    audio.play()
    
} 

async function main() {

    // let currentSong;

    let songs = await getSongs();
    console.log("Songs found:", songs);


    let songUL = document.querySelector('.songlist-div').getElementsByTagName("ul")[0]

    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> ${song.replaceAll("%20"," ")}</li>`;
    };

    const btn = document.getElementById("playSong");

    btn.addEventListener("click", () => {
        if (songs.length > 0) {
            var audio = new Audio(songs[0]);
            audio.play();
            console.log("Playing:", songs[0]);
        } else {
            console.log("No songs found!");
        }

        audio.addEventListener("loadeddata", () => {
            let duration = audio.duration;
            console.log(audio.duration, audio.currentSrc, audio.currentTime)

        });
    });
}

main();







let card = document.getElementById("all-card");
let Leftbnt = document.getElementById("slideLeft");
let Rightbnt = document.getElementById("slideRight");

Leftbnt.addEventListener("click", () => {
    card.scrollBy({
        left: -700,
        behavior: "smooth"
    })
});

Rightbnt.addEventListener("click", () => {
    card.scrollBy({
        left: 700,
        behavior: "smooth"
    })
});


let card2 = document.getElementById("all-card-2");
let Leftbnt2 = document.getElementById("slideLeft-2");
let Rightbnt2 = document.getElementById("slideRight-2");

Leftbnt2.addEventListener("click", () => {
    card2.scrollBy({
        left: -500,
        behavior: "smooth"
    })
});

Rightbnt2.addEventListener("click", () => {
    card2.scrollBy({
        left: 500,
        behavior: "smooth"
    })
});


let card3 = document.getElementById("all-card-3");
let Leftbnt3 = document.getElementById("slideLeft-3");
let Rightbnt3 = document.getElementById("slideRight-3");

Leftbnt3.addEventListener("click", () => {
    card3.scrollBy({
        left: -500,
        behavior: "smooth"
    })
});

Rightbnt3.addEventListener("click", () => {
    card3.scrollBy({
        left: 500,
        behavior: "smooth"
    })
});


let card4 = document.getElementById("all-card-4");
let Leftbnt4 = document.getElementById("slideLeft-4");
let Rightbnt4 = document.getElementById("slideRight-4");

Leftbnt4.addEventListener("click", () => {
    card4.scrollBy({
        left: -500,
        behavior: "smooth"
    })
});

Rightbnt4.addEventListener("click", () => {
    card4.scrollBy({
        left: 500,
        behavior: "smooth"
    })
});


let card5 = document.getElementById("all-card-5");
let Leftbnt5 = document.getElementById("slideLeft-5");
let Rightbnt5 = document.getElementById("slideRight-5");

Leftbnt5.addEventListener("click", () => {
    card5.scrollBy({
        left: -300,
        behavior: "smooth"
    })
});

Rightbnt5.addEventListener("click", () => {
    card5.scrollBy({
        left: 300,
        behavior: "smooth"
    })
});

document.getElementById("play").addEventListener("click", function () {
    let play = document.getElementById('create').appendChild('h3')
});


document.getElementById("innerdiv1").addEventListener("click", function () {
    let create = document.createElement("div");
    create.innerHTML = `
    <h3 class="wel">Welcome Back</h3>
    <button id="button10">X</button>
    <input type="Email" placeholder="Email or Username" class="login-input"><br>
    <button class="continue-btn">Continue</button>
    <button class="social google">Login with Google</button>
    <button class="social apple">Login with Apple</button>
    <button class="social facebook">Login with Facebook</button>
  `;
    create.classList.add("Create");
    document.getElementById("remove").appendChild(create);


    create.querySelector("#button10").addEventListener("click", () => {
        create.remove();
    });
});

document.getElementById('popup').addEventListener("click", function () {
    let popup = document.createElement('div');
    popup.innerHTML =
        `<h3>Create a playlist</h3>
    <p>Login to create and share playlist</p>
    <button id="button11">Not now</button>
    <button class="minilogin" id="remove">Login</button>`;
    popup.classList.add("popup");
    document.getElementById("remove").appendChild(popup);

    popup.querySelector("#button11").addEventListener("click", () => {
        popup.remove();
    });
});

























