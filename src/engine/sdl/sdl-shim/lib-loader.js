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

    return `${dir}/libs/windows/${arch}`;
}

function getOSXLibraryPath() {
    const dir = __dirname;
    const arch = process.arch;

    return `${dir}/libs/osx/${arch}`;
}

function getLinuxLibraryPath() {
    const dir = __dirname;
    const arch = process.arch;

    return `${dir}/libs/linux/${arch}`;
}

function load(library, module, moduleExports) {
    if (library === 'libSDL2') {
        library = 'libSDL2-2.0';
    } else {
        library = 'SDL2-2.0';
    }
    const path = getLibraryPath();
    const moduleLibrary = `${path}/${library}`;

    ffi.Library(moduleLibrary, module, moduleExports);
}

exports.load = load;
