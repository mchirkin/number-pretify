# Number-pretify

[![Build Status](https://travis-ci.org/mchirkin/number-pretify.svg?branch=master)](https://travis-ci.org/mchirkin/number-pretify)

### Install
```
npm install --save number-pretify
```

### Usage
```javascript
import numberPretify from 'number-pretify';

numberPretify(number, options);
```

#### ```options``` object

Option | Description | Type | Default value
------------ | ------------- | -------------
delimeter | Integer part delimeter for every 3 digits | string | ' '
precision | Number of digits in fractional part | number |
decimalMark | Symbol used to separate the integer part from the fractional part | string | ','
prefix | String that will be added before number | string |
prefixAfterNegativeSign | Place prefix after negative sign | boolean | false
suffix | String that will be added after number | string |

### Example
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

console.log(numberPretify(1000, {
  suffix: '$'
})); // '1 000$'

console.log(numberPretify(1000, {
  prefix: '$'
})); // '$1 000'

console.log(numberPretify(-1000, {
  prefix: '$ '
})); // '$ - 1 000'

console.log(numberPretify(-1000, {
  prefix: '$ ',
  prefixAfterNegativeSign: true,
})); // '- $ 1 000'
```
