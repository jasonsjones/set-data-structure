/* globals describe it beforeEach afterEach */

var should = require('should');
var MySet = require('../');

describe('Set Unit Tests', function() {
    var set;

    beforeEach(function () {
        set = new MySet();
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

    it('should add items to the set', function () {
        set.add('test item 1');
        set.add({item1: 'test item 2', item2: 'test item 3'});

        set.size().should.equal(2);
    });

    it('should add unique items to the set', function () {
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 1');

        set.size().should.equal(2);
    });

    it('should determine if a set has a particular item', function () {
        set.add('test item 1');
        set.add('test item 2');

        set.has('test item 1').should.equal(true);
        set.has('not found item').should.equal(false);
    });

    it('should return the correct size of the set', function () {
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        set.add('test item 4');
        set.add('test item 5');
        set.size().should.equal(5);
    });

    it('should clear the set of all items', function () {
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        set.add('test item 4');
        set.add('test item 5');
        set.size().should.equal(5);

        set.clear();
        set.size().should.equal(0);
        set.isEmpty().should.equal(true);
    });

    it('should remove an item from the set', function () {
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        var removedItem =  set.remove('test item 2');
        removedItem.should.equal('test item 2');
        set.size().should.equal(2);
    });

    it('should return null if removed item is not in the set', function () {
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        var removedItem =  set.remove('not found...');
        should.not.exist(removedItem);
        set.size().should.equal(3);
    });

    it('should return an array of all items in the set', function () {
        set.add('test item 1');
        set.add('test item 2');
        set.add({item: 'test item 3'});

        var values = set.values();
        values.should.be.Array;
        values.should.have.length(3);
        values.should.containEql('test item 1');
        values.should.containEql({item: 'test item 3'});
    });
});
