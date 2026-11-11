/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the last falsy element in a one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-dlast-index-of-falsy
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var dlastIndexOfFalsy = require( '@stdlib/blas-ext-base-ndarray-dlast-index-of-falsy' );
*
* var x = new Float64Vector( [ 1.0, 0.0, 3.0, 0.0 ] );
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var v = dlastIndexOfFalsy( [ x, fromIndex ] );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
