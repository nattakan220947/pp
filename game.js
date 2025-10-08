window.onload = pageLoad;

function pageLoad(){
    var startBtn = document.getElementById("start");
    startBtn.onclick = startGame;
}

function startGame(){
    clearScreen(); 
    addBox();      
    timeStart();   
}
function startGame(){
 alert("Ready");
 addBox();
 timeStart();
}

function timeStart(){
    var TIMER_TICK = 1000;
    var second = 5;  // 30 วินาที
    var x = document.getElementById('clock');

    var timer = setInterval(timeCount, TIMER_TICK);

    function timeCount(){
        var allbox = document.querySelectorAll("#layer div");
        second--;
        x.innerHTML = second;

        // ชนะ
        if(allbox.length === 0 && second > 0){
            alert("You win!");
            clearInterval(timer);
            clearScreen();
        }

        // แพ้
        if(second <= 0){
            clearInterval(timer);
            if(allbox.length > 0){
                alert("Game Over!");
                clearScreen();
            }
        }
    }
}

function addBox(){
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;

    for (var i = 0; i < numbox; i++){
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";

        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box){
    box.onclick = function(){
        box.parentNode.removeChild(box);
    }
}

function clearScreen(){
    var allbox = document.querySelectorAll("#layer div");
    for (var i = 0; i < allbox.length; i++){
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}
