let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.querySelector(".nouvil");
window.onscroll = function () {
  let scroll = scrollY;
  stars.style.left = scroll + "px";
  moon.style.top = scroll * 4 + "px";
  boat.style.left = scroll * 3 + "px";
  river.style.top = scroll + "px";
  mountains3.style.top = scroll * 2 + "px";
  mountains4.style.top = scroll * 1.5 + "px";
  nouvil.style.fontSize = scroll + "px";
  if (scrollY >= 60) {
    nouvil.style.fontSize = 60 + "px";
    nouvil.style.position = "fixed";
  }
  if (scrollY >= 126) {
    document.querySelector(".content").style.background =
      "linear-gradient(#376281,#10001f)";
  } else {
    document.querySelector(".content").style.background =
      "linear-gradient(#200016,#10001f)";
  }
};
