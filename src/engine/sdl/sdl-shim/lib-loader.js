const ffi = require('ffi');

function getLibraryPath() {
    switch (process.platform) {
        case 'darwin':
            return getOSXLibraryPath();
        case 'win32':
            return getWindowsLibraryPath();
        case 'linux':
            return getLinuxLibraryPath();
        default:
            throw new ReferenceError(`Unsupported pattform: ${process.platform}`);
    }
}

function getWindowsLibraryPath() {
    const dir = __dirname;
    const arch = process.arch;
    const libName = 'SDL2';

    return `${dir}/libs/windows/${arch}/${libName}.dll`;
}

function getOSXLibraryPath() {
    const dir = __dirname;
    const arch = process.arch;
    const libName = 'libSDL2';
    const version = '2.0';

    return `${dir}/libs/osx/${arch}/${libName}-${version}.dylib`;
}

function getLinuxLibraryPath() {
    const dir = __dirname;
    const arch = process.arch;
    const libName = 'libSDL2';

    return `${dir}/libs/linux/${arch}/${libName}.so`;
}

function load(library, module, moduleExports) {
    const moduleLibrary = getLibraryPath();
    // const moduleLibrary = `${path}/${library}`;
    ffi.Library(moduleLibrary, module, moduleExports);
}

exports.load = load;
