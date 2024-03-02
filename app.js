let userSeq = [];
let gameSeq = [];
color = ['red', 'green', 'yellow', 'purple'];
let level = 0;
let gameStarted = false;
let h3 = document.querySelector('h3');
let highScore = 0;

document.addEventListener('keypress', function(){
    if(gameStarted == false){
        gameStarted = true;
        levelup();
    }
});

function wrongColor(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'red';
    setTimeout(function (){
        body.style.backgroundColor = 'white';
    }, 250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            userSeq = []
            setTimeout(levelup, 500);
        }
    }else{
        wrongColor();
        if((level-1)> highScore){
            highScore= level-1;
        }
        h3.innerHTML = `Game Over! Your score was <u>${level - 1}</u>. <br> High Score : ${highScore} <br>Press any key to start again.`;
        level = 0;
        gameStarted = false;
        gameSeq = [];
        userSeq = [];
        
    }
}

function gameFlash(){
    let ranBtn = Math.floor(Math.random() * 4);
    let randColor = color[ranBtn];
    let btn = document.querySelector(`#${randColor}`);

    btn.classList.add('gameFlash');
    setTimeout(function (){
        btn.classList.remove('gameFlash');
    }, 250);
    gameSeq.push(btn.getAttribute('id'));
    console.log(gameSeq);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash')
    }, 250);
}

function levelup(){
    level++;
    h3.innerText = `Level ${level}`;
    gameFlash();
}

let btns = document.querySelectorAll('.btn');
for(let i=0; i<4; i++){
    btns[i].addEventListener('click',function(){
        userFlash(btns[i]);
        userSeq.push(btns[i].getAttribute('id'));
        console.log(userSeq);
        checkAns(userSeq.length - 1);
    })
}
