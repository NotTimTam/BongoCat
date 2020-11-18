// Animations
let key1 = "images/keyboard/key-1.svg";
let key2 = "images/keyboard/key-2.svg";
let key3 = "images/keyboard/key-3.svg";
let key4 = "images/keyboard/key-4.svg";
let key5 = "images/keyboard/key-5.svg";
let key6 = "images/keyboard/key-6.svg";
let armsUp = "images/keyboard/arms-up.svg";
let armsDown = "images/keyboard/arms-down-keys.svg";

// Keycodes
let keyD = 100;
let keyF = 102;
let keyG = 103;
let keyH = 104;
let keyJ = 106;
let keyK = 107;
let keySpace = 32;

// Bongo-Cat element.
const bongoCat = document.getElementById("bongo-cat");

// Audio grab and resetting.
function play_F(src) {
    let audio = document.createElement("audio");
    audio.src = src;
    audio.addEventListener("ended", function () {
        document.removeChild(this);
    }, false);
    audio.play();
}

// Choose instrument.
let instrument = "keyboard";

// Key code/Animation connections.
let keys = {
    d: key1,
    f: key2, 
    g: key3,
    h: key4,
    j: key5,
    k: key6,
    space: armsDown
};

// Play a key animation.
function play(key) {
    bongoCat.setAttribute('src', keys[key]);
    play_F(`audio/${instrument}/${key}.wav`);
    setTimeout(function () { bongoCat.setAttribute('src', armsUp) }, 100);
}

// Trigger keys.
window.onkeypress = function(evt) {
    let keypressed = evt.which;

    if (keypressed == keyD) {
        play('d');
    } else if (keypressed == keyF) {
        play('f');
    } else if (keypressed == keyG) {
        play('g');
    } else if (keypressed == keyH) {
        play('h'); 
    } else if (keypressed == keyJ) {
        play('j'); 
    } else if (keypressed == keyK) {
        play('k'); 
    } else if (keypressed == keySpace) {
        play('space'); 
    }
};
