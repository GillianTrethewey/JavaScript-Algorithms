const talkingCalendar = function(date) {
    // Create a function named talkingCalendar that takes in a date string with
    // the format YYYY/MM/DD, and returns a
    // new human readable date that looks like December 2nd, 2017.
    let newFormat = '';
    let year = date.substring(0,4);
    let month = date.substring(5,7);
    let day = date.substring(8,10);

    if (month === '01') {
        month = 'January';
    } else if (month === '02') {
        month = 'February';
    } else if (month === '03') {
        month = 'March';
    } else if (month === '04') {
        month = 'April';
    } else if (month === '05') {
        month = 'May';
    } else if (month === '06') {
        month = 'June';
    } else if (month === '07') {
        month = 'July';
    } else if (month === '08') {
        month = 'August';
    } else if (month === '09') {
        month = 'September';
    } else if (month === '10') {
        month = 'October';
    } else if (month === '11') {
        month = 'November';
    } else if (month === '12') {
        month = 'December';
    }

    if (day.charAt(0) === '0') {
        day = day.charAt(1);
    }

    if (day === '1' || day === '21' || day === '31') {
        newFormat = month + " " + day + "st, " + year;
    } else if (day === '2' || day === '22') {
        newFormat = month + " " + day + "nd, " + year;
    } else if (day === '3' || day === '23') {
        newFormat = month + " " + day + "rd, " + year;
    } else {
        newFormat = month + " " + day + "th, " + year;
    }

    return newFormat;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
