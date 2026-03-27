let time = 1500;// 25 minutos em segundos
let interval = null;

function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.querySelector('.timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').onclick = () => {
    if (interval) return;

    interval = setInterval(() => {
        if (time > 0) {
            time--;
            updateTimer();
        }
    }, 1000);   
};

document.getElementById('pause').onclick = () => {
    clearInterval(interval);
    interval = null;
}

document.getElementById('reset').onclick = () => {
    clearInterval(interval);
    interval = null;
    time = 1500;
    updateTimer();
}

updateTimer();