var FFI = require('ffi');
var ArrayType = require('ref-array');
var Struct = require('ref-struct');
var Union = require('ref-union');
var ref = require('ref');


var voit = exports.voit = ref.types.void;

require('./lib-loader').load(__dirname + '/SDL2', {}, exports);
