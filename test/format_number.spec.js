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
    expect(formatNumber(1000000)).to.equal('1 000 000');
  });

  it('delimeter option should work correctly', function() {
    expect(formatNumber(1000000.17, {
      delimeter: '.',
    })).to.equal('1.000.000,17');

    expect(formatNumber(1000000.17, {
      delimeter: '##',
    })).to.equal('1##000##000,17');
  });

  it('precision option should work correctly', function() {
    expect(formatNumber('10000,1267', {
      precision: 2,
    })).to.equal('10 000,13');
  });

  it('decimalMark option should work correctly', function() {
    expect(formatNumber(10000.23, {
      decimalMark: '-',
    })).to.equal('10 000-23');
  });

  it('prefix option should work correctly', function() {
    expect(formatNumber(1000, {
      prefix: '$',
    })).to.equal('$1 000');

    expect(formatNumber(-1000, {
      prefix: '$ ',
    })).to.equal('$ - 1 000');

    expect(formatNumber(1000, {
      prefix: '$',
      prefixAfterNegativeSign: true,
    })).to.equal('$1 000');

    expect(formatNumber(-1000, {
      prefix: '$',
      prefixAfterNegativeSign: true,
    })).to.equal('- $1 000');
  });

  it('suffix option should work correctly', function() {
    expect(formatNumber(1000, {
      suffix: '$',
    })).to.equal('1 000$');
  });

  it('negativeSign option should work correctly', function() {
    expect(formatNumber(-1000, {
      negativeSign: '\u2212 ',
    })).to.equal('\u2212 1 000');

    expect(formatNumber(-1000, {
      negativeSign: 'minus ',
    })).to.equal('minus 1 000');
  });
});
