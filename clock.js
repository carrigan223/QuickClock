const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();//this is getting the current date and time

    const seconds = now.getSeconds();//this is pulling the time from now
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;//this is changing the rotation
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;//this is changing the rotation
    const hoursDegrees = ((hours / 12) * 360)+ ((minutes/60)*30) + 90;//this is changing the rotation


    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(hoursDegrees);
}

setInterval(setDate, 1000);//updateing setDate every 1s

setDate();
