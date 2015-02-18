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
var SetDS = require('set-data-structure);
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
* ### clear()
* ### add(value)
* ### remove(value)
* ### has(value)
* ### union(otherSet)
* ### intersection(otherSet)
* ### difference(otherSet)
* ### subset(otherSet)

----
## License
MIT &copy; Jason Jones