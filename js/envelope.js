var envelope = document.getElementById('envelope');
var btn_open = document.getElementById("open");

function fadeout(){
  var el =document.getElementById('env-init');
  var elMain =document.getElementById('all');
  fadeOutElement(el,elMain);
}

function fadeOutElement(el, elMain) {
  var opacity = 1; // Initial opacity
  var show = 0;
  elMain.style.display='';
  var interval = setInterval(function() {
     if (opacity > 0) {
        opacity -= 0.1;
        show += 0.1;
        el.style.opacity = opacity;
        elMain.opacity = show;
     } else {
        clearInterval(interval); // Stop the interval when opacity reaches 0
        el.style.display = 'none'; // Hide the element
        elMain.style.opacity= 1;
        audio.play();
     }
  }, 53);
}


function open() {
  //envelope.classList.add("open");
  //envelope.classList.remove("close");
  setTimeout(fadeout, 2500)
}

btn_open.addEventListener("click", () => {
  btn_open.style.display='none';
  open();
},
  false
);