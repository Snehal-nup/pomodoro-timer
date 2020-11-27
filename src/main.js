var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var wm = document.getElementById("work-min");
var ws = document.getElementById("work-sec");

var bm = document.getElementById("break-min");
var bs = document.getElementById("break-sec");

var startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", function () {
  wm.innerText = 25;
  ws.innerText = "00";
  bm.innerText = 5;
  bs.innerText = "00";
  document.getElementById("counter").innerText = 0;
  stopinterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopinterval();
  startTimer = undefined;
});

function stopinterval() {
  clearInterval(startTimer);
}

function timer() {
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
    }
  }
  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText++;
  }
}

window.addEventListener("keydown", checkKey, false);
function checkKey(key) {
  if (key.keyCode == "83" && startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  }
  if (key.keyCode == "82") {
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById("counter").innerText = 0;
    stopinterval();
    startTimer = undefined;
  }
  if (key.keyCode == "80") {
    stopinterval();
    startTimer = undefined;
  }
}
