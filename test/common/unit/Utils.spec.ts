import {expect} from 'chai';
import {Utils} from '../../../src/common/Utils';

describe('Utils', () => {
  it('should concat urls', () => {
    expect(Utils.concatUrls('\\')).to.be.equal('.');
    expect(Utils.concatUrls('\\*')).to.be.equal('/*');
    expect(Utils.concatUrls('abc', 'cde')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('abc/', 'cde')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('abc\\', 'cde')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('abc/', 'cde/')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('./abc\\', 'cde/')).to.be.equal('./abc/cde');
    expect(Utils.concatUrls('abc/', '\\cde/')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('abc\\', '\\cde/')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('abc\\', '/cde/')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('abc/', '/cde/')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('abc\\/', '/cde/')).to.be.equal('abc/cde');
    expect(Utils.concatUrls('abc\\/', '/cde/', 'fgh')).to.be.equal('abc/cde/fgh');
  });

  it('should find closest number', () => {

    expect(Utils.findClosest(10, [10, 13, 4, 20])).to.be.equal(10);
    expect(Utils.findClosest(10, [13, 4, 20])).to.be.equal(13);
    expect(Utils.findClosest(10, [4, 20])).to.be.equal(4);
    expect(Utils.findClosest(10, [20])).to.be.equal(20);
  });
  it('should find closest number in sorted array', () => {

    expect(Utils.findClosestinSorted(10, [3, 5, 8, 10, 15, 20])).to.be.equal(10);
    expect(Utils.findClosestinSorted(10, [3, 5, 8, 15, 20])).to.be.equal(8);
    expect(Utils.findClosestinSorted(10, [3, 5, 15, 20])).to.be.equal(15);
    expect(Utils.findClosestinSorted(10, [3, 5, 20])).to.be.equal(5);
    expect(Utils.findClosestinSorted(10, [3, 20])).to.be.equal(3);
    expect(Utils.findClosestinSorted(10, [20])).to.be.equal(20);
  });
});
