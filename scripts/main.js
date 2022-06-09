let vidpage = document.getElementsByClassName("vidpage");
let emuguiAboutImg = document.getElementById("emuguiAboutImg");


let devWidth = window.screen.availWidth;
let devHeight = window.screen.availHeight;
let vidWidth = "320";
let vidHeight = "180";

console.log(vidpage);
console.log("Device width is " + devWidth);
console.log("Device height is " + devHeight);

if (devWidth < 330 || devHeight < 125) {
    vidWidth = "240";
    vidHeight = "135";

    emuguiAboutImg.width = "302";
    emuguiAboutImg.height = "249";
}

else if (devWidth < 800 || devHeight < 400) {
    vidWidth = "320";
    vidHeight = "180";

    emuguiAboutImg.width = "302";
    emuguiAboutImg.height = "249";
}

else {
    vidWidth = "640";
    vidHeight = "360";

    emuguiAboutImg.width = "602";
    emuguiAboutImg.height = "497";
}

let i = 0;

while (i < vidpage.length) {
    vidpage[i].width = vidWidth;
    vidpage[i].height = vidHeight;
    i++;
}