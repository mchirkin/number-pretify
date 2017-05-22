/**
 * Check if number is valid
 * @param {string|number} num number or string representation of number
 * @return {boolean}
 */
export default function checkNumber(num) {
  if (typeof num !== 'number' && typeof num !== 'string') {
    return false;
  }

  if (typeof num === 'number') {
    return true;
  }

  const numberStr = num.replace(/\s/g, '');
  if (/^[-+]?\d+[.,]?\d*$/.test(numberStr)) {
    return true;
  }

  return false;
}
