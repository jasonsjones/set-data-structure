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

    it('should be empty when first instantiated with no args', function () {
        set.isEmpty().should.equal(true);
        set.size().should.equal(0);
    });

    it('should insantiate a set of the correct size if passed an array', function () {
        var sut = new MySet([1, 2, 'test', 5, 'another item']);
        sut.size().should.equal(5);
        sut = null;
    });

    it('should insantiate a set of the correct size if passed individual args', function () {
        var sut = new MySet(1, 2, 'test', 5, 'another item');
        sut.size().should.equal(5);
        sut = null;
    });

    it('should insantiate a set of unique items if passed an array with duplicate items',
        function () {
            var sut = new MySet([1, 2, 'test', 5, 'test', 1]);
            sut.size().should.equal(4);
            sut = null;
        });

    it('should insantiate a set of unique items if passed duplicate args', function () {
        var sut = new MySet(1, 2, 'test', 5, 'test', 1);
        sut.size().should.equal(4);
        sut = null;
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

    it('should return a Set that is the union of two other sets', function () {
        var setA = new MySet([1, 2, 3, 4]);
        var setB = new MySet([4, 5, 6, 7]);
        var setC = setA.union(setB);
        setC.size().should.equal(7);
        setC.values().should.be.an.Array;
        setC.values().should.containEql(1, 2, 3, 4, 5, 6, 7);
    });

    it('should throw an error if union is called with a non-set parameter', function () {
        var setA = new MySet([1, 2, 3, 4]);
        (function () {
            setA.union('this should throw error');
        }).should.throw(/invalid parameter/);
    });
});
