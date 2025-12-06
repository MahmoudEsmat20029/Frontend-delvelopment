/*
  Author: Mahmoud Esmat
  Date  : 6-12-2025
*/

function updateClock() {
  // Get current time
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Determine AM/PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Add leading zeros
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  // Update time display
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("period").textContent = period;

  // Update date display
  updateDate();
}

function updateDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString("en-US", options);
  document.getElementById("date").textContent = dateString;
}

// Update clock immediately on load
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
