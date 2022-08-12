module.exports = function toReadable (number) {
  
  let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let digit = number.toString();
    if (number < 0) return 'Only positive numbers';
    if (number === 0) return 'zero';
    if (number < 20) return a[number];
    if (digit.length === 2) {
        if (number % 10 === 0) return b[digit[0]];
        else return b[digit[0]] + ' ' + a[digit[1]];
    }
    if (digit.length === 3) {
        if (number % 100 === 0) return a[digit[0]] + ' hundred';
        else {
            return a[digit[0]] + ' hundred ' + toReadable(+(digit[1]+digit[2]));
        }
    }
}
