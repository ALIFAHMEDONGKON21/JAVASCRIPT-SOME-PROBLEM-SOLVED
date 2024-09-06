function countdownarray(start, end) {
    let current = start;
    const interval = setInterval(function() {
        console.log(current);
        if (current === end) {
            clearInterval(interval);  // Stops the timer when it reaches the end
        }
        current--;
    }, 1000);  // Waits 1 second between each count
}

// Start the countdown from 81 to 65
countdownarray(81, 65);
