$.notify("This game is better with the sound on", 'info');

var audioSound = document.getElementById('audio');
var sound = document.getElementById('volume');
sound.addEventListener('click',function(){
    audioSound.play();
});

// BUGS TO FIX
// seiya never the computer choice
// how to forbid to play again without having to reload the game

var removeClass = document.getElementById('removeClass');
var shaka = document.getElementById('shaka');
var plus = document.getElementById('plus');
var buttonClicked = document.querySelectorAll(".btn");


var knightChosen = document.getElementById("knightChosen");

var player = document.getElementsByClassName("box")[0];
var computer = document.getElementsByClassName("box")[1];
var attaque = document.getElementsByClassName("box")[2];
var winner = document.getElementsByClassName("box")[3];
var winLose = document.getElementsByClassName("box")[4];
var soundAttaque = document.getElementsByClassName("box")[5];

plus.onclick = function() {
  var cheatcode = prompt("enter your code");
  var codeEnter = cheatcode.toLowerCase();
  if (codeEnter == "tenbu horin") {
    removeClass.classList.remove("col-xs-offset-2");
    shaka.style.display = "block";
  } else {
    alert("don't cheat if you don't know how");
  };
};



for (var i = 0; i < buttonClicked.length; i++) {

  buttonClicked[i].addEventListener("click", function(){

    var playerChoice = this.classList[1];
    // select the second class (1 after 0) of buttonClicked which select the class .btn
    // return the classname seiya hyoga shun shiryu ikki



    var computerChoice = Math.random();
    // return a number between 0 and 1

        if(0<computerChoice<=0.20){
          computerChoice = "seiya";
          computer.innerHTML="<img src='images/seiya.png'/>";
        }
        else if (0.20<computerChoice<=0.40) {
          computerChoice = "shiryu";
          computer.innerHTML="<img src='images/shiryu.png'/>";
        }
        else if (0.40<computerChoice<=0.60) {
          computerChoice = "hyoga";
          computer.innerHTML="<img src='images/hyoga.png'/>";
        }
        else if (0.60<computerChoice<=0.80) {
          computerChoice = "shun";
          computer.innerHTML="<img src='images/shun.png'/>";
        }
        else {
          computerChoice = "ikki";
          computer.innerHTML="<img src='images/ikki.png'/>";
        }
        console.log("Computer: " + computerChoice);




        var compare = function(playerChoice,computerChoice){

          if (playerChoice === computerChoice) {
            winLose.innerHTML ="It's a Tie";
            soundAttaque.innerHTML = "<audio id="audio" src='audio/tie.mp3' type='audio/mp3' autoplay=''>";
            attaque.innerHTML = "";
          }
          else if (playerChoice === "seiya") {
            knightChosen.innerHTML="<img src='images/seiya.png'/>";
            knightWin.innerHTML="<img src='images/seiya.png'/>";
            if(computerChoice === "shun" || computerChoice === "ikki"){
              attaque.innerHTML = "Pegasasu Ryūsei Ken";
              soundAttaque.innerHTML = "<audio id="audio" src='audio/seiya.mp3' type='audio/mp3' autoplay=''>";
              winLose.innerHTML = "WINS";
            }
            else{
              soundAttaque.innerHTML = "<audio id="audio" src='audio/lose.mp3' type='audio/mp3' autoplay=''>";
              attaque.innerHTML = "Seiya died in one kick";
              winLose.innerHTML = "LOSES";
            }
          }

          else if (playerChoice === "hyoga") {
            knightChosen.innerHTML="<img src='images/hyoga.png'/>";
            knightWin.innerHTML="<img src='images/hyoga.png'/>";
            if(computerChoice === "seiya" || computerChoice === "shun"){
              attaque.innerHTML = "Daiyamondo Dasuto";
              soundAttaque.innerHTML = "<audio id="audio" src='audio/hyoga.mp3' type='audio/mp3' autoplay=''>";
              winLose.innerHTML = "WINS";
            }
            else{
              soundAttaque.innerHTML = "<audio id="audio" src='audio/lose.mp3' type='audio/mp3' autoplay=''>";
              attaque.innerHTML = "hyoga died in one kick";
              winLose.innerHTML = "LOSES";
            }
          }

          else if (playerChoice === "shiryu") {
            knightChosen.innerHTML="<img src='images/shiryu.png'/>";
            knightWin.innerHTML="<img src='images/shiryu.png'/>";
            if(computerChoice === "hyoga" || computerChoice === "seiya"){
              attaque.innerHTML = "Rozan Shō Ryū Ha";
              soundAttaque.innerHTML = "<audio id="audio" src='audio/shiryu.mp3' type='audio/mp3' autoplay=''>";
              winLose.innerHTML = "WINS";
            }
            else{
              soundAttaque.innerHTML = "<audio id="audio" src='audio/lose.mp3' type='audio/mp3' autoplay=''>";
              attaque.innerHTML = "shiryu died in one kick";
              winLose.innerHTML = "LOSES";
            }
          }

          else if (playerChoice === "ikki") {
            knightChosen.innerHTML="<img src='images/ikki.png'/>";
            knightWin.innerHTML="<img src='images/ikki.png'/>";
            if(computerChoice === "shiryu" || computerChoice === "hyoga"){
              attaque.innerHTML = "Phoenix Gen Ma Ken";
              soundAttaque.innerHTML = "<audio id="audio" src='audio/ikki.mp3' type='audio/mp3' autoplay=''>";
              winLose.innerHTML = "WINS";
            }
            else{
              soundAttaque.innerHTML = "<audio id="audio" src='audio/lose.mp3' type='audio/mp3' autoplay=''>";
              attaque.innerHTML = "Ikki died in one kick";
              winLose.innerHTML = "LOSES";
            }
          }

          else if (playerChoice === "shun") {
            knightChosen.innerHTML="<img src='images/shun.png'/>";
            knightWin.innerHTML="<img src='images/shun.png'/>";
            if(computerChoice === "ikki" || computerChoice === "shiryu"){
              attaque.innerHTML = "Nebyura Chēn";
              soundAttaque.innerHTML = "<audio id="audio" src='audio/shun.mp3' type='audio/mp3' autoplay=''>";
              winLose.innerHTML = "WINS";
            }
            else{
              soundAttaque.innerHTML = "<audio id="audio" src='audio/lose.mp3' type='audio/mp3' autoplay=''>";
              attaque.innerHTML = "Shun died in one kick";
              winLose.innerHTML = "LOSES";
            }
          }

          else if (playerChoice === "shaka") {
            if(computerChoice === "ikki" || computerChoice === "shiryu" || computerChoice === "hyoga" || computerChoice === "seiya" || computerChoice === "shun"){
              // alert ( "Tenbu Hôri: Shaka wins!");
              knightChosen.innerHTML="<img src='images/shaka.jpg'/>";
              knightWin.innerHTML="<img src='images/shaka.jpg'/>";
              attaque.innerHTML = "Tenbu Hôri";
              soundAttaque.innerHTML = "<audio id="audio" src='audio/shaka.mp3' type='audio/mp3' autoplay=''>";
              winLose.innerHTML = "WINS";
            }
          }
          console.log("Player: " + playerChoice);
        };
        compare(playerChoice, computerChoice);
  });
  function tryAgain() {
      location.reload();
      // reload the page
  };
};

var rulesModal = document.getElementById('rulesModal');

document.getElementById("openModal").addEventListener("click", openModal);

function openModal(){
  rulesModal.style.display = "block";
  rulesModal.style.WebkitAnimation = "fadeInUp 1s ease-in-out"; // Code for Chrome, Safari and Opera
  rulesModal.style.animation = "fadeInUp 1s ease-in-out";       // Standard syntax
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    rulesModal.style.display = "none";
}
