// auto typing heading
var txt = "DRUM KIT";
var i = 0;
function autotype() {
  if (i < txt.length) {
    document.querySelector("header").innerHTML += txt.charAt(i);
    i++;
  }
  else{
    document.querySelector("header").innerHTML = "";
    i = 0;
  }
}

setInterval(autotype,300);




// by buttons
var drum = document.getElementsByClassName("items");
for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", () => {
    var dr = drum[i].innerText;
    console.log(dr);
    drum[i].style.color = "red";
    play(dr);
  });
}

// by keys
document.addEventListener("keydown", function (evnt) {
  var aud;
  play(evnt.key);
});

// function
function play(key) {
  var aud;
  switch (key) {
    case "w":
      aud = new Audio("sounds/crash.mp3");
      aud.play();
      break;

    case "a":
      aud = new Audio("sounds/tom-3.mp3");
      aud.play();
      break;

    case "s":
      aud = new Audio("sounds/kick-bass.mp3");
      aud.play();
      break;

    case "d":
      aud = new Audio("sounds/tom-1.mp3");
      aud.play();
      break;

    case "j":
      aud = new Audio("sounds/tom-2.mp3");
      aud.play();
      break;

    case "k":
      aud = new Audio("sounds/snare.mp3");
      aud.play();
      break;

    case "l":
      aud = new Audio("sounds/tom-4.mp3");
      aud.play();
      break;

    default:
      console.log(evnt);
      break;
  }
}
