import { expect } from 'chai';
import checkNumber from '../src/check_number';

describe('checkNumber', function() {
  it('should return true', function() {
    expect(checkNumber('100')).to.equal(true);
    expect(checkNumber('999.99')).to.equal(true);
    expect(checkNumber('999,99')).to.equal(true);
    expect(checkNumber('1 000 000')).to.equal(true);
    expect(checkNumber('1 000 000,23')).to.equal(true);
    expect(checkNumber('-100')).to.equal(true);
    expect(checkNumber('-1 000')).to.equal(true);
    expect(checkNumber('-100,23')).to.equal(true);
    expect(checkNumber('- 1 000')).to.equal(true);
    expect(checkNumber('+100')).to.equal(true);
    expect(checkNumber('+ 100')).to.equal(true);
  });

  it('should return false', function() {
    expect(checkNumber('string')).to.equal(false);
    expect(checkNumber('123-23')).to.equal(false);
    expect(checkNumber('100,00,00')).to.equal(false);
  });
});
