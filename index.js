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
     */
    function Set() {
        this._items = [];
    }

    Set.prototype = {

        add: function (value) {
            if (!this.has(value)) {
                this._items.push(value);
                return true;
            }
            return false;
        },

        remove: function (value) {
            var idx = this._items.indexOf(value);
            return this._items.splice(idx, 1);
        },

        has: function (value) {
            return this._items.indexOf(value) > -1;
        },

        clear: function () {
            this._items = [];
        },

        size: function () {
            return this._items.length;
        },

        isEmpty: function () {
            return this.size() === 0;
        },

        values: function () {
            return this._items;
        }
    };

    /*
     * Expose Set
     */
    module.exports = Set;

})();
