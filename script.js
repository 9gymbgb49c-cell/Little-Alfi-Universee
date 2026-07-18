    script.js
    const intro = document.getElementById("intro");
const question = document.getElementById("question");
const celebration = document.getElementById("celebration");
const letter = document.getElementById("letter");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continue");
const finishBtn = document.getElementById("finish");

const yesButtons = document.querySelectorAll(".yes");

const typing = document.getElementById("typing");

const message = `My Dearest Little Alfi ❤️

Congratulations on scoring 452 / 520 (86.92%)!

Maybe today didn't feel as special as it should have...

But I want you to know that I'm incredibly proud of you.

Your hard work, patience, and determination brought you here.

This is only the beginning of your beautiful journey.

Keep believing in yourself.

I'll always celebrate your victories, stand by you during your struggles, and cheer for every dream you chase.

Forever proud of you.

❤️ Baby Aazi`;

startBtn.onclick = () => {

intro.classList.add("hidden");

question.classList.remove("hidden");

}

yesButtons.forEach(btn=>{

btn.onclick=()=>{

question.classList.add("hidden");

celebration.classList.remove("hidden");

}

})

continueBtn.onclick=()=>{

celebration.classList.add("hidden");

letter.classList.remove("hidden");

typeLetter();

}

finishBtn.onclick=()=>{

letter.classList.add("hidden");

finalPage.classList.remove("hidden");

}

function typeLetter(){

typing.innerHTML="";

let i=0;

let speed=40;

let interval=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(interval);

}

},speed);

}

function createStars(){

const stars=document.getElementById("stars");

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.width=(Math.random()*3+1)+"px";

star.style.height=star.style.width;

star.style.animationDuration=(Math.random()*4+2)+"s";

stars.appendChild(star);

}

}

createStars();
function heartRain(){

const emojis=["❤️","💖","💕","🌹","✨"];

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},300);

}

heartRain();