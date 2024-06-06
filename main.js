let shot = document.querySelector('.shot'),
    fire = document.querySelector('.fire'),
    count = document.querySelector('.count strong'),
    counter = 0;

document.body.addEventListener('click', playshot);
function playshot(e) {
    let el = e.target;

    if (el.classList.contains('table__drink')) {
        fire.stop()
        fire.play()
        counter++;
        count.innerHTML = counter;
        el.classList.add('die')
        if (counter == 5) {
            setTimeout(replay, 1000)
        }
    }
    else {
        shot.stop();
        shot.play();
    }
}

function replay() {
    const sprite = document.querySelectorAll('.table__drink');
    sprite.forEach(function (item) {
        item.classList.remove('die')
    });
    counter = 0;
    count.innerHTML = counter;
}

HTMLAudioElement.prototype.stop = function () {
    this.pause();
    this.currentTime = 0.00;
}

