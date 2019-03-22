import TweenMax from "gsap/TweenMax";

window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("INIT");

  setTimeout(displayButton, 1000);
}
function displayButton() {
  let h1 = document.querySelector("#h1");

  TweenMax.to(h1, 0.5, {
    y: 50,
    opacity: 1,
    onComplete: h2Anim
  });

  document.querySelector("#startButton").addEventListener("click", () => {
    let expand = document.querySelector(".expand");

    let expandAnim = TweenMax.to(expand, 0.3, {
      scale: 1,
      onComplete: startOfWebsite()
    });
  });
}
function h2Anim() {
  let h2 = document.querySelector("#h2");
  TweenMax.to(h2, 0.5, {
    y: 50,
    opacity: 1,
    onComplete: buttonAnim
  });
}
function buttonAnim() {
  let startButton = document.querySelector("#startButtonArea");
  TweenMax.to(startButton, 0.5, {
    y: 50,
    opacity: 1,
    delay: 1
  });
}
function startOfWebsite() {
  document.querySelector("#followMenu").style.opacity = "1";
  document.querySelector("body").style.overflowY = "visible";
  console.log("start");

  var see = function() {
    var ypos = window.pageYOffset;
    if (ypos > 500) {
      check1();
    }
    if (ypos > 1300) {
      check2();
    }
    if (ypos > 2100) {
      check3();
    }
  };

  window.addEventListener("scroll", see);
}

var check1 = (function() {
  var executed = false;
  return function() {
    if (!executed) {
      executed = true;
      animateFirstSlide();
    }
  };
})();
var check2 = (function() {
  var executed = false;
  return function() {
    if (!executed) {
      executed = true;
      animateSecondSlide();
    }
  };
})();
var check3 = (function() {
  var executed = false;
  return function() {
    if (!executed) {
      executed = true;
      animateThirdSlide();
    }
  };
})();

function animateFirstSlide() {
  console.log("Start 1 anim");
  let object = document.querySelector("#demo1");
  object.style.opacity = 1;
  let slide1 = TweenMax.from(object, 0.7, {
    x: 900
  });
}
function animateSecondSlide() {
  console.log("Start 2 anim");
  let object = document.querySelector("#demo2");
  object.style.opacity = 1;
  let slide1 = TweenMax.from(object, 0.7, {
    x: -900,
    onComplete: animateFirstBar
  });
}
function animateThirdSlide() {
  console.log("Start 3 anim");
  let object = document.querySelector("#demo3");
  object.style.opacity = 1;
  let slide1 = TweenMax.from(object, 0.7, {
    x: 900,
    onComplete: doneAnimating
  });
}

function animateFirstBar() {
  console.log("first Bar");
  let bar1 = document.querySelector("#block1");
  let animateBar1 = TweenMax.to(bar1, 0.7, {
    opacity: 1,
    width: 1400,
    onComplete: animteSecondBar,
    delay: 0.3
  });
}
function animteSecondBar() {
  console.log("Second bar");
  let bar2 = document.querySelector("#block2");
  let animateBar1 = TweenMax.to(bar2, 0.7, {
    opacity: 1,
    width: 700,
    onComplete: animateThirdBar,
    delay: 0.3
  });
}
function animateThirdBar() {
  console.log("Second bar");
  let bar3 = document.querySelector("#block3");
  let animateBar1 = TweenMax.to(bar3, 0.7, {
    opacity: 1,
    width: 1000,

    delay: 0.3
  });
}

function doneAnimating() {
  console.log("done animating");
  document.querySelector("#cooporate").addEventListener("click", () => {
    contactInfo();
  });
}
function contactInfo() {
  console.log("read");
  let formName = document.querySelector("#formName");
  let formEmail = document.querySelector("#formEmail");
  let formNumber = document.querySelector("#formNumber");
  const data = {
    name: formName.value,
    email: formEmail.value,
    number: formNumber.value
  };
  console.log(data);
  post(data);
}
function post(data) {
  document.body.style.cursor = "wait";
  document.querySelector("#formName ").value = "";
  document.querySelector("#formEmail").value = "";
  document.querySelector("#formNumber").value = "";
  const postData = JSON.stringify(data);
  fetch("https://contactme-6795.restdb.io/rest/email", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c94ca6adf5d634f46ecadc2",
      "cache-control": "no-cache"
    },
    body: postData
  }).then(endFunc());
}
function endFunc() {
  console.log("Thanks!");
  document.body.style.cursor = "default";
  document.querySelector("#myForm").style.display = "none";
  document.querySelector(".thanks").style.display = "block";
}
