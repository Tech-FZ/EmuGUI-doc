let vidpage = document.getElementsByClassName("vidpage");
let emuguiAboutImg = document.getElementById("emuguiAboutImg");
let winNT4MipsQemu = document.getElementById("winNT4MipsQemu");

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

    try {
        emuguiAboutImg.width = "302";
        emuguiAboutImg.height = "249";
    }
    
    catch {
        console.log("EmuGUI About IMG doesn't exist.");
    }

    try {
        winNT4MipsQemu.width = "274";
        winNT4MipsQemu.height = "231";
    }

    catch {
        console.log("WinNT4 MIPS QEMU IMG doesn't exist.");
    }
}

else if (devWidth < 800 || devHeight < 400) {
    vidWidth = "320";
    vidHeight = "180";

    try {
        emuguiAboutImg.width = "302";
        emuguiAboutImg.height = "249";
    }
    
    catch {
        console.log("EmuGUI About IMG doesn't exist.");
    }

    try {
        winNT4MipsQemu.width = "274";
        winNT4MipsQemu.height = "231";
    }

    catch {
        console.log("WinNT4 MIPS QEMU IMG doesn't exist.");
    }
}

else {
    vidWidth = "640";
    vidHeight = "360";

    try {
        emuguiAboutImg.width = "602";
        emuguiAboutImg.height = "497";
    }
    
    catch {
        console.log("EmuGUI About IMG doesn't exist.");
    }

    try {
        winNT4MipsQemu.width = "547";
        winNT4MipsQemu.height = "462";
    }

    catch {
        console.log("WinNT4 MIPS QEMU IMG doesn't exist.");
    }
}

let i = 0;

while (i < vidpage.length) {
    vidpage[i].width = vidWidth;
    vidpage[i].height = vidHeight;
    i++;
}