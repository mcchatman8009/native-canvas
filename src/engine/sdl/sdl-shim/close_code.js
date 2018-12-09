var FFI = require('ffi');
var ArrayType = require('ref-array');
var Struct = require('ref-struct');
var Union = require('ref-union');
var ref = require('ref');


require('./lib-loader').load(process.platform == 'win32' ? 'SDL2' : 'libSDL2', {}, exports);
