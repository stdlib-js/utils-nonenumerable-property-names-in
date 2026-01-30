/** @license Apache-2.0 */

'use strict';

/**
* Return an array of an object's own and inherited non-enumerable property names.
*
* @module @stdlib/utils-nonenumerable-property-names-in
*
* @example
* var defineProperty = require( '@stdlib/utils-define-property' );
* var nonEnumerablePropertyNamesIn = require( '@stdlib/utils-nonenumerable-property-names-in' );
*
* var obj = {};
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': 'boop'
* });
*
* var keys = nonEnumerablePropertyNamesIn( obj );
* // e.g., returns [ 'beep', ... ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
