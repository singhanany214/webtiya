/* ==========================================
   PAGES
========================================== */

const pages = document.querySelectorAll(".page");

let currentPage = 0;

/* ==========================================
   MEMORY DATA
========================================== */

const memories = [

{
    video: "assets/v2.mp4",
    title: "The Cuttuuu",
    text: "One of my fav edit🤧"
},

{
    video: "assets/v1.mp4",
    title: "Your Cutuu smile ",
    text: "I couldn't stop smiling after this, me soo buddhu kuch sunai nhi derha tha😭"
},

{
    video: "assets/c3.mp4",
    title: "She-Bs? Me-aajao",
    text: "Yeah my fav bs videoo of all time🫶🏻"
}

];

/* ==========================================
   PAGE SWITCH
========================================== */

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    currentPage=index;

}

/* ==========================================
   NEXT PAGE
========================================== */

function nextPage(){

    if(currentPage>=pages.length-2)return;

    showPage(currentPage+1);

    startMusic();

}

/* ==========================================
   OPEN MEMORY
========================================== */

function openMemory(index){

    const memory=memories[index];

    const video=document.getElementById("memoryVideo");

    video.src=memory.video;

    video.load();

    video.play();

    document.getElementById("memoryTitle").innerHTML=

    memory.title;

    document.getElementById("memoryText").innerHTML=

    memory.text;

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document
    .getElementById("memoryPage")
    .classList
    .add("active");

}

/* ==========================================
   CLOSE MEMORY
========================================== */

function closeMemory(){

    const video = document.getElementById("memoryVideo");

    video.pause();
    video.currentTime = 0;

    document
        .getElementById("memoryPage")
        .classList
        .remove("active");

    showPage(1);

}

/* ==========================================
   MUSIC
========================================== */

const music = new Audio(

"assets/music.mp3"

);

music.loop=true;

music.volume=.28;

let musicStarted=false;

function startMusic(){

    if(musicStarted)return;

    music.play().catch(()=>{});

    musicStarted=true;

}

/* ==========================================
   ESC KEY
========================================== */

document.addEventListener(

"keydown",

(e)=>{

if(e.key==="Escape"){

closeMemory();

}

}

);

/* ==========================================
   SPACE TO PLAY / PAUSE
========================================== */

document.addEventListener(

"keydown",

(e)=>{

if(

e.code==="Space"

&&

document
.getElementById("memoryPage")
.classList.contains("active")

){

e.preventDefault();

const video=

document.getElementById(

"memoryVideo"

);

if(video.paused){

video.play();

}

else{

video.pause();

}

}

});
/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const typeElements = document.querySelectorAll(".type");

function typeWriter(element, speed = 35){

    const text = element.innerHTML;

    element.innerHTML = "";

    let i = 0;

    const timer = setInterval(()=>{

        element.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(timer);

        }

    }, speed);

}

window.addEventListener("load",()=>{

    typeElements.forEach((el,index)=>{

        setTimeout(()=>{

            typeWriter(el,25);

        }, index * 500);

    });

});

/* ==========================================
   SHOOTING STARS
========================================== */

function createShootingStar(){

    const star = document.createElement("div");

    star.className = "shootingStar";

    star.style.top = Math.random()*40 + "%";

    star.style.left = Math.random()*70 + "%";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1600);

}

setInterval(createShootingStar,7000);

/* ==========================================
   FLOATING PARTICLES
========================================== */

function createParticle(){

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random()*window.innerWidth + "px";

    particle.style.bottom = "-20px";

    particle.style.animationDuration =
    (6 + Math.random()*5) + "s";

    particle.style.opacity =
    (0.15 + Math.random()*0.35);

    document.body.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },12000);

}

setInterval(createParticle,400);

/* ==========================================
   MOON PARALLAX
========================================== */

const moon = document.querySelector(".moon");

document.addEventListener("mousemove",(e)=>{

    const x =
    (e.clientX/window.innerWidth - 0.5) * 18;

    const y =
    (e.clientY/window.innerHeight - 0.5) * 18;

    moon.style.transform =
    `translate(${x}px, ${y}px)`;

});

/* ==========================================
   BUTTON RIPPLE
========================================== */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left =
        e.offsetX + "px";

        ripple.style.top =
        e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

function openFinalPage(){

    const video = document.getElementById("memoryVideo");

    video.pause();
    video.currentTime = 0;

    document
        .getElementById("memoryPage")
        .classList
        .remove("active");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
        .getElementById("finalPage")
        .classList
        .add("active");

}