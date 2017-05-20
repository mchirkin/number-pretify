import formatNumber from './format_number';

console.log(formatNumber(1234567.89));
console.log(formatNumber(100,23));
console.log(formatNumber('12345,67'));

console.log(formatNumber('asd'));

console.log(formatNumber(-100), formatNumber(-1000), formatNumber('- 100'), formatNumber('-1000,23'));
