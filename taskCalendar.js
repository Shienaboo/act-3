function taskCalendar() {
    let day = prompt("Day of the week:").toLowerCase();

    switch (day) {
        case "monday":
            alert("Task for Monday: Go to school ");
            break;
        case "tuesday":
            alert("Task for Tuesday: Go for a walk ");
            break;
        case "wednesday":
            alert("Task for Wesnesday: Study for an exam ");
            break;
        case "thursday":
            alert("Task for Thursday: Finishing all my activities ");
            break;
        case "friday":
            alert("Task for Friday: Having fun with friends ");
            break;
        case "saturday":
            alert("Task for Saturday:Go to work ");
            break;
        case "sunday":
            alert("Task for Sunday:Go to the chruch ");
            break;
        default:
            alert("Invalid, please enter a day of the week.");
    }
}