/* In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date. */

const talkingCalendar = function(date) {
  let dateArray = date.split('/');
  let month = '';
  let day = '';
  let daySuffix = '';
   
  for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[1] === '01') {
      month = 'January'
    } else if (dateArray[1] === '02') {
      month = 'February'
    } else if (dateArray[1] === '03') {
      month = 'March'
    } else if (dateArray[1] === '04') {
      month = 'April'
    } else if (dateArray[1] === '05') {
      month = 'May'
    } else if (dateArray[1] === '06') {
      month = 'June'
    } else if (dateArray[1] === '07') {
      month = 'July'
    } else if (dateArray[1] === '08') {
      month = 'August'
    } else if (dateArray[1] === '09') {
      month = 'September'
    } else if (dateArray[1] === '10') {
      month = 'October'
    } else if (dateArray[1] === '11') {
      month = 'November'
    } else if (dateArray[1] === '12') {
      month = 'December'
    }
  }
  for (let i = 0; i < dateArray[2]; i++) {
    if (dateArray[2][0] === '0') {
      day = dateArray[2][1];
    } else {
      day = dateArray[2];
    }
  }

  if (day === '1' || day === '21' || day === '31') {
    daySuffix = 'st';
  } else if (day === '2' || day === '22') {
    daySuffix = 'nd';
  } else if (day === '3' || day === '23') {
    daySuffix = 'rd';
  } else {
    daySuffix = 'th';
  }

  return month + ' ' + day + daySuffix + ', ' + dateArray[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/* EXPECTED OUTPUT

December 2nd, 2017
November 11th, 2007
August 24th, 1987 */