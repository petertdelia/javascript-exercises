function staggeredCase(str) {
  let capital = false;
  
  return str.split('')
     .map((char) => {
      if (char.match(/[a-z]/i)) {
        if (capital) {
          capital = false;
          return char.toLowerCase();
        } else {
          capital = true;
          return char.toUpperCase();
        }
      }
      else return char;
     })
     .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"