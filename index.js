var milSec = document.getElementById("mil-sec")
var Sec = document.getElementById("sec")
var min = document.getElementById("min")
var startBtn = document.getElementById("start-btn")
var resetBtn = document.getElementById("reset-btn")
var timer;
let milSecCount = 0
let secCount = 0
let minCount = 0




function start(e) {

    startBtn.disabled = true

    
    timer = setInterval(() => {
    
    milSecCount = milSecCount + 1

        
        if (milSecCount < 9) {

            milSec.innerHTML = "0" + milSecCount
        }
        else {

            milSec.innerHTML = milSecCount
        }

        if (secCount < 10) {

            sec.innerHTML = "0" + secCount
        }
        else {

            sec.innerHTML = secCount
        }

        if (minCount < 9) {

            min.innerHTML = "0" + minCount
        }
        else {

            min.innerHTML = minCount
        }

        if (milSecCount == 99) {
            
            secCount = secCount + 1
            sec.innerHTML = secCount
            milSecCount = 0
        }

        if (secCount == 60) {
            minCount = minCount + 1
            min.innerHTML = minCount
            secCount = 0
        }
    
       
    },10 );
    }
    

function stop() {
    clearInterval(timer);
    startBtn.disabled = false

}

function reset() {
    startBtn.disabled = false
    milSecCount = 0
    secCount = 0
    minCount = 0
    milSec.innerHTML = milSecCount
    sec.innerHTML = secCount
    min.innerHTML = minCount
    milSecCount = milSecCount

    if (milSecCount < 9) {

        milSec.innerHTML = "0" + milSecCount
    }
    else {

        milSec.innerHTML = milSecCount
    }

    if (secCount < 9) {

        sec.innerHTML = "0" + secCount
    }
    else {

        sec.innerHTML = secCount
    }

    if (minCount < 9) {

        min.innerHTML = "0" + minCount
    }
    else {

        min.innerHTML = minCount
    }
}