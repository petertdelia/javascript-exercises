// Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

// Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

// Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

// restate problem: write a function that takes a floating point number and returns the degrees, minutes, and seconds of the angle represented by that number. Use the appropriate degree ° marker, minute ' marker and second marker ".  There are 60 minutes in a degree and 60 seconds in a minute.

// examples: see above

// input: floating point number
// output: degrees, minutes, and seconds of the angle

// data structures: floating point number, math operations, string concatenation in a template literal

// algorithm: use the Math.trunc() function to capture the "degrees" integer, then subtract that amount from the input number to get minutesAndSeconds. Multiply that amount by sixty, and use the Math.trunc() function to capture the "minutes" integer, then subtract that amount from minutesAndSeconds to get seconds. Update seconds by multiplying it by sixty. Return a template literal that builds the appropriate string.

// the solution below includes the further exploration answer

function dms(float) {

  let degrees = Math.trunc(float);

  let minutesAndSeconds = Math.abs((float - degrees) * 60);
  degrees %= 360;
  if (degrees < 0) {
    degrees += 360;
  }
  let minutes = Math.trunc(minutesAndSeconds);
  let seconds = Math.trunc((minutesAndSeconds - minutes) * 60);

  if (String(minutes).length === 1) {
    minutes = '0' + minutes;
  }
  if (String(seconds).length === 1) {
    seconds = '0' + seconds;
  }

  return `${degrees}°${minutes}'${seconds}"`;
}

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"