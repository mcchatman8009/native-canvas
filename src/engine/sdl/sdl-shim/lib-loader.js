const ffi = require('ffi');

function getLibraryPath() {
    switch (process.platform) {
        case 'darwin':
            return getOSXLibraryPath();
        case 'linux':
            return getLinuxLibraryPath();
        default:
            throw new ReferenceError(`Unsupported pattform: ${process.platform}`);
    }
}

function getOSXLibraryPath() {
    const dir = __dirname;

    return `${dir}/libs/osx`;
}

function getLinuxLibraryPath() {
    const dir = __dirname;

    return `${dir}/libs/linux`;
}

function load(library, module, moduleExports) {
    if (library === 'libSDL2') {
        library = 'libSDL2-2.0'
    }
    const path = getLibraryPath();
    const moduleLibrary = `${path}/${library}`;

    ffi.Library(moduleLibrary, module, moduleExports);
}

exports.load = load;
