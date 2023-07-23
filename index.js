var mySwitch = document.getElementById("mySwitch");
var header = document.getElementById("sticky");
var headName = document.getElementById("title");
var list = document.getElementById("mainList");
var links = document.getElementsByTagName("a");
var button = document.getElementById("cont");
var inbutton = document.getElementById("introB");
var hLine = document.getElementById("line");
var projectHeading = document.getElementById("projectH");
var pfoliostext = document.getElementsByClassName("text");
var pfolios = document.getElementsByClassName("pf1");
var foot = document.getElementById("footer");
var image = document.getElementById("img3");
var image2 = document.getElementById("img1");
mySwitch.addEventListener("change", function () {
  
  if (mySwitch.checked) {
    console.log("Switch is on");

    document.body.style.backgroundColor = "white";
    image.style.opacity = "1";
    image2.style.opacity = "1";
    header.style.backgroundColor = "white";
    headName.style.color = "#7E22CE";
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#7E22CE";
    }
    button.style.backgroundColor = "#7E22CE";
    inbutton.style.backgroundColor = "#7E22CE";
    hLine.style.backgroundColor = "#E0E1E1";
    projectHeading.style.backgroundColor = "white";
    projectHeading.style.color = "#111827";

    for (let i = 0; i < pfoliostext.length; i++) {
      pfoliostext[i].style.color = "#1F2937";
    }
    for (let i = 0; i < pfolios.length; i++) {
      pfolios[i].style.backgroundColor = "#F3F4F6";
    }

    foot.style.color = "#1F2937";
    foot.style.backgroundColor = "#E0E1E1";

  }

  else {
    console.log("Switch is off");
    document.body.style.backgroundColor = "#111827";
    image.style.opacity = "0.7";
    image2.style.opacity = "0.7";
    header.style.backgroundColor = "#111827";
    headName.style.color = "#f1e2ff";
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#f1e2ff";
    }
    button.style.backgroundColor = "#a855f7";
    inbutton.style.backgroundColor = "#a855f7";
    hLine.style.backgroundColor = "#1f2937";
    projectHeading.style.backgroundColor = "#111827";
    projectHeading.style.color = "white";

    for (let i = 0; i < pfoliostext.length; i++) {
      pfoliostext[i].style.color = "white";
    }
    for (let i = 0; i < pfolios.length; i++) {
      pfolios[i].style.backgroundColor = "#1f2937";
    }
    foot.style.color = "#727d8f";
    foot.style.backgroundColor = "#1f2937";
  }
});