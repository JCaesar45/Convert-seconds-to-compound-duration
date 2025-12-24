// script.js

// Function to convert seconds into detailed duration
function convertSeconds(seconds) {
  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInWeek = 7 * secondsInDay;

  const weeks = Math.floor(seconds / secondsInWeek);
  seconds %= secondsInWeek;

  const days = Math.floor(seconds / secondsInDay);
  seconds %= secondsInDay;

  const hours = Math.floor(seconds / secondsInHour);
  seconds %= secondsInHour;

  const minutes = Math.floor(seconds / secondsInMinute);
  seconds %= secondsInMinute;

  const secs = seconds;

  const parts = [];
  if (weeks > 0) parts.push(`${weeks} wk`);
  if (days > 0) parts.push(`${days} d`);
  if (hours > 0) parts.push(`${hours} hr`);
  if (minutes > 0) parts.push(`${minutes} min`);
  if (secs > 0) parts.push(`${secs} sec`);
  
  return parts.join(', ');
}

// Animate the result display for a polished effect
function animateResult(text) {
  const display = document.getElementById('resultDisplay');
  display.style.opacity = 0;
  display.innerHTML = '';

  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      display.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
      display.style.opacity = 1;
    }
  }, 20); // Speed of animation (20ms per character)
}

// Handle button click
document.getElementById('convertBtn').addEventListener('click', () => {
  const secondsInput = document.getElementById('secondsInput').value;
  const seconds = parseInt(secondsInput, 10);

  if (isNaN(seconds) || seconds <= 0) {
    // Animate error message
    animateResult('Please enter a valid positive number of seconds.');
    return;
  }

  const resultText = convertSeconds(seconds);

  // Animate the result
  animateResult(resultText);
});

// Optional: Allow pressing Enter key to trigger conversion
document.getElementById('secondsInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('convertBtn').click();
  }
});
