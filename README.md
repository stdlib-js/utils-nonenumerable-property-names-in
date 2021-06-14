<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# nonEnumerablePropertyNamesIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return an array of an object's own and inherited non-enumerable property names.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-nonenumerable-property-names-in
```

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var nonEnumerablePropertyNamesIn = require( '@stdlib/utils-nonenumerable-property-names-in' );
```

#### nonEnumerablePropertyNamesIn( obj )

Returns an `array` of an object's own and inherited non-enumerable property names.

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );

var obj = {
    'a': 'b'
};

defineProperty( obj, 'c', {
    'configurable': false,
    'enumerable': false,
    'writable': true,
    'value': 'd'
});

var keys = nonEnumerablePropertyNamesIn( obj );
// e.g., returns [ 'c', ... ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Name order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );
var nonEnumerablePropertyNamesIn = require( '@stdlib/utils-nonenumerable-property-names-in' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': true,
        'enumerable': false,
        'writable': true,
        'value': 'qux'
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});

var obj = new Foo();
var keys = nonEnumerablePropertyNamesIn( obj );

console.log( keys );
// e.g., => [ 'baz', 'bip', ... ]
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-nonenumerable-property-names-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-nonenumerable-property-names-in

[test-image]: https://github.com/stdlib-js/utils-nonenumerable-property-names-in/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-nonenumerable-property-names-in/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-nonenumerable-property-names-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-nonenumerable-property-names-in?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-nonenumerable-property-names-in
[dependencies-url]: https://david-dm.org/stdlib-js/utils-nonenumerable-property-names-in/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-nonenumerable-property-names-in/main/LICENSE

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
