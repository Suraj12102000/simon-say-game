let gameseg=[];
let userseq=[];
let btns=["pink","green","yellow","blue"];
let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseg.push(randcolor);
    console.log(gameseg);
    gameFlash(randbtn);
}
function checkAns(idx){
    if(userseq[idx]==gameseg[idx]){
        if(userseq.length==gameseg.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start...`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function reset(){
    started=false;
    gameseg=[];
    userseq=[];
    level=0;
}
function btnsPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnsPress);
}