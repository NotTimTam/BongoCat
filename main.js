// Animations
// Keyboard
let key1 = "images/keyboard/key-1.svg";
let key2 = "images/keyboard/key-2.svg";
let key3 = "images/keyboard/key-3.svg";
let key4 = "images/keyboard/key-4.svg";
let key5 = "images/keyboard/key-5.svg";
let key6 = "images/keyboard/key-6.svg";
let armsUp = "images/keyboard/arms-up.svg";
let armsDown = "images/keyboard/arms-down-keys.svg";
// Bongo
let key1_bongo = "images/bongo/key-1.svg";
let key2_bongo = "images/bongo/key-2.svg";
let key3_bongo = "images/bongo/";


// Keycodes
let keyD = 100;
let keyF = 102;
let keyG = 103;
let keyH = 104;
let keyJ = 106;
let keyK = 107;
let keySpace = 32;

let keyOne = 49;
let keyTwo = 50;
let keyThree = 51;
let keyFour = 52;
let keyFive = 53;
let keySix = 54;
let keySeven = 55;
let keyEight = 56;
let keyNine = 57;
let keyZero = 48;

// Bongo-Cat element.
const bongoCat = document.getElementById("bongo-cat");

// Change instrument.
function changeInstrument(name) {
    instrument = name;
    bongoCat.setAttribute('src', `images/${instrument}/arms-up.svg`);
    if (name == "keyboard") {
        key1 = `images/${name}/key-1.svg`;
        key2 = `images/${name}/key-2.svg`;
        key3 = `images/${name}/key-3.svg`;
        key4 = `images/${name}/key-4.svg`;
        key5 = `images/${name}/key-5.svg`;
        key6 = `images/${name}/key-6.svg`;
        armsUp = `images/${name}/arms-up.svg`;
        armsDown = `images/${name}/arms-down-keys.svg`;
    } else if (name == "bongo") {
        key1 = `images/${name}/key-1.svg`;
        key2 = `images/${name}/key-1.svg`;
        key3 = `images/${name}/key-1.svg`;
        key4 = `images/${name}/key-2.svg`;
        key5 = `images/${name}/key-2.svg`;
        key6 = `images/${name}/key-2.svg`;
        armsUp = `images/${name}/arms-up.svg`;
        // REPLACE WITH NEW ANIMATION
        armsDown = `images/keyboard/arms-down-keys.svg`;
    }
}

// Audio grab and resetting.
function play_F(src) {
    let audio = document.createElement("audio");
    audio.src = src;
    audio.id = "tempaud";
    audio.addEventListener("ended", function () {
        try {
            document.removeChild(this);
        } catch {
            console.warn("FAILED TO REMOVE " + this);
        }
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

    keys = {
        d: key1,
        f: key2, 
        g: key3,
        h: key4,
        j: key5,
        k: key6,
        space: armsDown
    };

    if (keypressed == keyD && instrument == "keyboard") {
        play('d');
    } else if (keypressed == keyF && instrument == "keyboard") {
        play('f');
    } else if (keypressed == keyG) {
        play('g');
    } else if (keypressed == keyH) {
        play('h'); 
    } else if (keypressed == keyJ && instrument == "keyboard") {
        play('j'); 
    } else if (keypressed == keyK && instrument == "keyboard") {
        play('k'); 
    } else if (keypressed == keySpace && instrument == "keyboard") {
        play('space'); 
    } else if (keypressed == keyOne) {
        changeInstrument("keyboard");
    } else if (keypressed == keyTwo) {
        changeInstrument("bongo");
    }
};
