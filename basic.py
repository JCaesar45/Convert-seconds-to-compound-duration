def convertSeconds(seconds):
    # Define the number of seconds in each unit
    seconds_in_minute = 60
    seconds_in_hour = 60 * seconds_in_minute
    seconds_in_day = 24 * seconds_in_hour
    seconds_in_week = 7 * seconds_in_day

    # Calculate each unit
    weeks = seconds // seconds_in_week
    seconds %= seconds_in_week

    days = seconds // seconds_in_day
    seconds %= seconds_in_day

    hours = seconds // seconds_in_hour
    seconds %= seconds_in_hour

    minutes = seconds // seconds_in_minute
    seconds %= seconds_in_minute

    # Remaining seconds
    secs = seconds

    # Build the output list with non-zero units
    result_parts = []

    if weeks > 0:
        result_parts.append(f"{weeks} wk")
    if days > 0:
        result_parts.append(f"{days} d")
    if hours > 0:
        result_parts.append(f"{hours} hr")
    if minutes > 0:
        result_parts.append(f"{minutes} min")
    if secs > 0:
        result_parts.append(f"{secs} sec")

    # Join the parts with comma and space
    return ", ".join(result_parts)


# Test cases
print(convertSeconds(7259))        # Expected: "2 hr, 59 sec"
print(convertSeconds(86400))       # Expected: "1 d"
print(convertSeconds(6000000))     # Expected: "9 wk, 6 d, 10 hr, 40 min"
