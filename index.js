/**
 * @fileOverview Implementation of a set data structure
 * @author Jason S. Jones
 * @license MIT
 */
(function () {
    'use strict';

    /**
     * Creates a new set instance and initializes the underlying data
     * structure
     *
     * @constructor
     * @param {object|string|number} args variable number of arguments to
     *        initialize the set, can be an array or individual arguments
     */
    function Set(args) {
        this._items = [];

        if (args) {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] instanceof Array) {
                    for (var j = 0; j < arguments[i].length; j++) {
                        this.add(arguments[i][j]);
                    }
                } else {
                    this.add(arguments[i]);
                }
            }
        }
    }

    /* Functions attached to the Set prototype.  All set instances will share
     * these methods, meaning there will NOT be copies made for each
     * instance.  This will be a huge memory savings since there may be several
     * different set instances.
     */
    Set.prototype = {

        /**
         * Adds an item to the set.  If the set already contains the item,
         * it is not added.
         *
         * @param {object|string|number} value the data of the item to add to
         *        the set
         * @returns {boolean} true if the item is added to the set; false
         *          otherwise
         */
        add: function (value) {
            if (!this.has(value)) {
                this._items.push(value);
                return true;
            }
            return false;
        },

        /**
         * Removes an item from the set.
         *
         * @param {object|string|number} value the data of the item to remove
         *        from the set
         * @returns {object|string|number} the item that was removed from the
         *          set.  If the item is not in the set, returns null
         */
        remove: function (value) {
            var idx = this._items.indexOf(value);
            if (idx === -1) {
                return null;
            } else {
                return this._items.splice(idx, 1)[0];
            }
        },

        /**
         * Determines of the set contains, or has, the value
         *
         * @param {object|string|number} value the value of the item to find
         *        in the set
         * @returns {boolean} true if the set has the value; false otherwise
         */
        has: function (value) {
            return this._items.indexOf(value) > -1;
        },

        /**
         * Clears all the items from the set
         */
        clear: function () {
            this._items = [];
        },

        /**
         * Returns the size, or number of items in the set
         *
         * @returns {number} the number of items in the set
         */
        size: function () {
            return this._items.length;
        },

        /**
         * Determines if the set is empty
         *
         * @returns {boolean} true if the set is empty, false otherwise
         */
        isEmpty: function () {
            return this.size() === 0;
        },

        /**
         * Returns an array containing all the items in the set
         *
         * @returns {object} array of all the items in the set
         */
        values: function () {
            return this._items;
        },

        /**
         * Returns a Set that is the union of this set and the 'otherSet'.  The
         * returned set will contain all the elements from both sets, and by
         * definition, will not contain any duplicates.
         *
         * @param {object} otherSet the set to union with this
         * @returns {object} a set which is a union of this and the 'otherSet'
         *
         * @throws {TypeError} if 'otherSet' is not a Set
         */
        union: function (otherSet) {
            // if the 'otherSet' is not a Set, throw TypeError
            if (!(otherSet instanceof Set)) {
                throw new TypeError('invalid parameter type; a Set is required');
            }

            // create the set to return and initialize with the values from
            // this set
            var unionSet = new Set(this.values());

            // get array of values from the fn parameter
            var argValues = otherSet.values();

            for (var i = 0; i < argValues.length; i++) {
                unionSet.add(argValues[i]);
            }
            return unionSet;
        },

        /**
         * Returns a Set that ts the intersection of this set and the 'otherSet',
         * The returned set will have only those items that both sets have in
         * common.
         *
         * @param {object} otherSet the set to intersect with this
         * @returns {object} a set which is an intersection of this and the 'otherSet'
         *
         * @throws {TypeError} if 'otherSet' is not a Set
         */
        intersection: function (otherSet) {
            // if the 'otherSet' is not a Set, throw TypeError
            if (!(otherSet instanceof Set)) {
                throw new TypeError('invalid parameter type; a Set is required');
            }

            var intersectionSet = new Set();
            var theseValues = this.values();

            for (var i = 0; i < theseValues.length; i++) {
                if (otherSet.has(theseValues[i])) {
                    intersectionSet.add(theseValues[i]);
                }
            }
            return intersectionSet;
        },

        /**
         * Returns a Set that ts the different of this and the 'otherSet',  The
         * returned set will have those items that are contained in this set, but
         * NOT contained in the 'otherSet'.
         *
         * @param {object} otherSet the set to use to determine the difference
         * @returns {object} a set which is an difference of this and the 'otherSet'
         *
         * @throws {TypeError} if 'otherSet' is not a Set
         */
        difference: function (otherSet) {
            // if the 'otherSet' is not a Set, throw TypeError
            if (!(otherSet instanceof Set)) {
                throw new TypeError('invalid parameter type; a Set is required');
            }

            var differenceSet = new Set();
            var theseValues = this.values();

            for (var i = 0; i < theseValues.length; i++) {
                if (!otherSet.has(theseValues[i])) {
                    differenceSet.add(theseValues[i]);
                }
            }

            return differenceSet;
        },

        /**
         * Returns whether or not this set is a subset of the 'otherSet'.  If all
         * items of this set are contained in the otherSet, this function returns
         * true; false otherwise.
         *
         * @param {object} otherSet the set to use to determine if this set is a subset
         * @returns {boolean} true if this set is a subset of the 'otherSet', false
         *          otherwise
         *
         * @throws {TypeError} if 'otherSet' is not a Set
         */
        subset: function (otherSet) {
            // if the 'otherSet' is not a Set, throw TypeError
            if (!(otherSet instanceof Set)) {
                throw new TypeError('invalid parameter type; a Set is required');
            }

            // if the size of this set is greater than the size of the otherSet,
            // we know this cannot be a subset of the otherSet
            if (this.size() > otherSet.size()) {
                return false;
            } else {
                var values = this.values();
                for (var i = 0; i < values.length; i++) {
                    if (!otherSet.has(values[i])) {
                        return false;
                    }
                }
                return true;
            }
        }
    };

    /*
     * Expose Set
     */
    module.exports = Set;

}());
