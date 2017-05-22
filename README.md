# Number-formatter

![build status](https://travis-ci.org/mchirkin/number-pretify.svg?branch=master)

### Install
```
npm install --save number-formatter
```

### Usage
```javascript
import numberFormatter from 'number-formatter';

console.log(numberFormatter(1000)); // '1 000'
console.log(numberFormatter(-1000.23)); // '- 1 000,23'
console.log(numberFormatter('1000000,167', {
  precision: 2,
  delimeter: '.',
})); // '1.000.000,17'
console.log(1000.1, { decimalMark: '.' }); // '1 000.1'
```
