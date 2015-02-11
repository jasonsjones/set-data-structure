/**
 * @fileOverview Implementation of a set data structure
 * @author Jason S. Jones
 * @version 0.1.0
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

        if (args instanceof Array) {
            for (var j = 0; j < args.length; j++) {
                this.add(args[j]);
            }
        } else if (arguments) {
            for (var i = 0; i < arguments.length; i++) {
                this.add(arguments[i]);
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
        }
    };

    /*
     * Expose Set
     */
    module.exports = Set;

})();
