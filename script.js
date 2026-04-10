const text = "Desarrollador Web en formación";
const animation = document.getElementById("profession");
let i = 0;

function typeEffect() {

    if (i < text.length) {
        animation.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }

}

typeEffect();
