var timer = 6;
var score = 0;
var hitrn;

function runScore() {
    score += 10
    document.querySelector("#scorevalue").innerHTML = score
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitvalue").textContent = hitrn
}

function makeBubble() {
    var clutter = "";

    for (var i=1; i<=224; i++) {
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}

function runTimer() {
    var timerinterval = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").innerHTML = timer;
        }
        else {
            clearInterval(timerinterval)
            document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER </h1>`
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    var clickednum = Number(details.target.textContent)
    if (clickednum == hitrn) {
        runScore();
        makeBubble();
        getNewHit();
    }
})

var startbtn = document.querySelector("#startbutton")
startbtn.addEventListener("click", function() {
    runTimer();
    makeBubble();
    getNewHit();
})
