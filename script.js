const targetDate = new Date("2024-05-31 23:59:59"); // Set your target date and time here

const countdown = document.getElementById("timer");

const updateTime = () => {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the timer display
  document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
  document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;

  // Check if countdown has expired
  if (timeDifference < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h3>Countdown Expired!</h3>";
  }
};

const interval = setInterval(updateTime, 1000); // Update the timer every second
