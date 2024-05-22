function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = (second / 60) * 360;
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
    const hourDeg = (hour / 12) * 360 + (minute / 60) * 30;

    document.getElementById('sec').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('min').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
