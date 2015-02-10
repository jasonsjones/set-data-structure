/* globals describe it beforeEach afterEach */
/* jshint -W079 */

var should = require('should');
var Set = require('../');

describe('Set Unit Tests', function() {
    var set;

    beforeEach(function () {
        set = new Set();
    });

    afterEach(function () {
        set = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should instantiate a set instance', function () {
        set.should.be.ok;
    });

    it('should be empty when first instantiated', function () {
        set.isEmpty().should.equal(true);
        set.size().should.equal(0);
    });

    it('should add unique items to the set', function () {
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 1');

        set.size().should.equal(2);
    });
});
