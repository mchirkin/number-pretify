import reverseString from './reverse_string';
import checkNumber from './check_number';

/**
 * Formats input number
 * @param {number|string} number
 * @param {string} delimeter integer part delimeter
 * @param {number} precision number of digits in fraction
 * @param {string} decimalMark symbol used to separate the integer part from the fractional part
 * @return {string}
 */
export default function formatNumber(
  number,
  {
    delimeter = ' ',
    precision,
    decimalMark = ','
  } = {}
) {
  if (!checkNumber(number)) {
    console.warn('[number-formatter] invalid number', number);
    return number;
  }

  // replace ',' to '.' for parseFloat to correctly work
  let numberToFormat = number.toString().replace(/\s/g, '').replace(',', '.');

  if (precision && typeof precision === 'number') {
    numberToFormat = parseFloat(numberToFormat, 10).toFixed(precision);
  }

  const numberStr = numberToFormat.toString();

  const isNegative = numberStr[0] === '-';

  const [integerPart, fractionalPart] = numberStr.replace('-', '').split('.');

  const integerPartFormatted =  reverseString(
    reverseString(integerPart).replace(/(\d{3})/g, `$1${delimeter}`)
  ).trim();

  let result;

  if (!fractionalPart || precision === 0) {
    result = integerPartFormatted;
  } else {
    result = `${integerPartFormatted}${decimalMark}${fractionalPart}`;
  }

  return isNegative ? `- ${result}` : result;
}
