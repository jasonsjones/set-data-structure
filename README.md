# [![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependency status][dm-image]][dm-url]

# Set Data Structure

## Description

This is a javascript implementation of a
[set](http://en.wikipedia.org/wiki/Set_%28abstract_data_type%29)
data structure.

A set data structure is an implementation of the mathematical concept of
a finite set.  A set is a collection of unique values (no duplicates) that
have no particular order.  A set is more concerned whether or not values
are contained in the set than the order in which they are added.

This implementation of a set inlcudes the common set operations of union,
intersection, difference, and subset.

*For specific examples and documentation, see the below sections*

#### Environment:

Although this implementation is designed to be used with
[Node.js](http://www.nodejs.org), it could be used in other contexts with minor
modifications.  This implementation does not have any external dependencies
that would preclude it from being used in the browser--just include it with a
`<script>` tag and it should be good to go.  _Disclaimer: I have not tested
this implementation in any other context/environment; only tested with node.js_

----

## Basic Usage

Install with npm :

```bash
npm install set-data-structure --save
```
Basic usage example below.  _Note: it does not cover all the available
methods, rather just highlights the main functionality to get up and running
with this data structure. For a description of all the methods, see the
API section._

```javascript
var SetDS = require('set-data-structure');
var setA = new SetDS();

setA.isEmpty();
// --> true
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);

setA.values();
// --> [1, 2, 3, 4, 5]

setA.has(4);
// --> true

// or instantiate with an array or args
var setB = new SetDS([7, 6, 5, 8, 4]);
setB.isEmpty();
// --> false

setB.values();
// --> [4, 5, 6, 7, 8]

var setC = setA.union(setB);
setC.values();
// --> [1, 2, 3, 4, 5, 6, 7, 8]

var setD = setA.intersection(setB);
setD.values();
// --> [4, 5]

var setE = setA.difference(setB);
setE.values();
// --> [1, 2, 3]

setA.subset(new SetDS(1, 7, 3, 4, 6, 5, 2));
// --> true

setA.clear();
setA.isEmpty();
// --> true
```
## API

**Available methods for a Set instance:**

* ### isEmpty()
    Determines if the set is empty

* ### size()
    Returns the size, or number of items in the set

* ### clear()
    Clears all the items from the set

* ### add(value)
    Adds an item to the set.  If the set already contains the item,
    it is not added.

* ### remove(value)
    Removes an item from the set.

* ### has(value)
    Determines of the set contains, or has, the value

* ### values()
    Returns an array containing all the items in the set

* ### union(otherSet)
    Returns a Set that is the union of this set and the 'otherSet'.  The
    returned set will contain all the elements from both sets, and by
    definition, will not contain any duplicates.

* ### intersection(otherSet)
    Returns a Set that ts the intersection of this set and the 'otherSet',
    The returned set will have only those items that both sets have in
    common.

* ### difference(otherSet)
    Returns a Set that ts the different of this and the 'otherSet',  The
    returned set will have those items that are contained in this set, but
    NOT contained in the 'otherSet'.

* ### subset(otherSet)
    Returns whether or not this set is a subset of the 'otherSet'.  If all
    items of this set are contained in the otherSet, this function returns
    true; false otherwise.

----
## License
MIT &copy; Jason Jones

[npm-image]:https://badge.fury.io/js/set-data-structure.svg
[npm-url]:http://npmjs.org/package/set-data-structure
[travis-image]:https://travis-ci.org/jasonsjones/set-data-structure.svg
[travis-url]:https://travis-ci.org/jasonsjones/set-data-structure
[dm-image]:https://david-dm.org/jasonsjones/set-data-structure.svg
[dm-url]:https://david-dm.org/jasonsjones/set-data-structure
