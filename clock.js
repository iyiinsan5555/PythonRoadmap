let clock_element = document.querySelector('#clock'); // Getting clock element from document

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // e.g., "14:30:15"
    clock_element.innerHTML = timeString;
}

// Update immediately
updateClock();

// Update every second 1000ms => 1s
setInterval(updateClock, 1000);
