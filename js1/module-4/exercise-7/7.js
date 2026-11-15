'use strict';

const image = document.getElementById("target")

const foo = document.getElementById("trigger");
foo.addEventListener("pointerenter", function (evt) {
    image.src = `https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-7/img/picB.jpg`
});

foo.addEventListener("mouseleave", function (evt) {
    image.src = `https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-7/img/picA.jpg`
})