# Number-pretify

[![Build Status](https://travis-ci.org/mchirkin/number-pretify.svg?branch=master)](https://travis-ci.org/mchirkin/number-pretify)

### Install
```
npm install --save number-pretify
```

### Usage
```javascript
import numberPretify from 'number-pretify';

console.log(numberPretify(1000)); // '1 000'
console.log(numberPretify(-1000.23)); // '- 1 000,23'
console.log(numberPretify('1000000,167', {
  precision: 2,
  delimeter: '.',
})); // '1.000.000,17'
console.log(numberPretify(1000.1, {
  decimalMark: '.'
})); // '1 000.1'
```
