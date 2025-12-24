function convertSeconds(seconds) {
    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;
    const secondsInWeek = 7 * secondsInDay;

    // Calculate each unit
    const weeks = Math.floor(seconds / secondsInWeek);
    seconds %= secondsInWeek;

    const days = Math.floor(seconds / secondsInDay);
    seconds %= secondsInDay;

    const hours = Math.floor(seconds / secondsInHour);
    seconds %= secondsInHour;

    const minutes = Math.floor(seconds / secondsInMinute);
    seconds %= secondsInMinute;

    const secs = seconds;

    // Build the output parts
    const resultParts = [];

    if (weeks > 0) {
        resultParts.push(`${weeks} wk`);
    }
    if (days > 0) {
        resultParts.push(`${days} d`);
    }
    if (hours > 0) {
        resultParts.push(`${hours} hr`);
    }
    if (minutes > 0) {
        resultParts.push(`${minutes} min`);
    }
    if (secs > 0) {
        resultParts.push(`${secs} sec`);
    }

    // Join and return
    return resultParts.join(', ');
}

// Test cases
console.log(convertSeconds(7259));        // Should output: "2 hr, 59 sec"
console.log(convertSeconds(86400));       // Should output: "1 d"
console.log(convertSeconds(6000000));     // Should output: "9 wk, 6 d, 10 hr, 40 min"
