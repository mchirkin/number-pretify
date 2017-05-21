import { expect } from 'chai';
import formatNumber from '../src/format_number';

describe('formatNumber', function() {
  it('should return correct values', function() {
    expect(formatNumber(100)).to.equal('100');
    expect(formatNumber('100')).to.equal('100');
    expect(formatNumber('1000')).to.equal('1 000');
    expect(formatNumber('-100')).to.equal('- 100');
    expect(formatNumber('100,23')).to.equal('100,23');
    expect(formatNumber(1000.23)).to.equal('1 000,23');
    expect(formatNumber('10000,1267', {
      precision: 2,
      decimalMark: '.',
    })).to.equal('10 000.13');
    expect(formatNumber(1000000.17, {
      delimeter: '.',
    })).to.equal('1.000.000,17');
  });
});
