const hiddenRadios = [...document.getElementsByClassName('hiddenr')];
const autoplayInterval = 5000 // milliseconds;
let slideInterval = null;

const autoplayStart = () => {
    slideInterval = setInterval(() => {
        const curr = hiddenRadios.findIndex(f => f.checked);
        const nextEl = hiddenRadios[curr + 1];
        if (nextEl)
            nextEl.checked = true;
        else
            hiddenRadios[0].checked = true;
    }, autoplayInterval);
}

const autoplayStop = () => {
    clearInterval(slideInterval);
    slideInterval = null;
}

const navLabels = [...document.getElementsByClassName('nav-label')];

navLabels.forEach((label, index) =>
    label.onclick = () => {
        autoplayStop();
        autoplayStart();
    }
);

autoplayStart();
