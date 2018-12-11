const ffi = require('ffi');

const SDL_LIBS_PATH = __dirname;

export function loadLibrary(module: any, moduleExports: any) {
    const moduleLibrary = getLibraryPath();
    ffi.Library(moduleLibrary, module, moduleExports);
}

function getLibraryPath(): string {
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

function getWindowsLibraryPath(): string {
    const dir = SDL_LIBS_PATH;
    const arch = process.arch;
    const libName = 'SDL2';

    return `${dir}/libs/windows/${arch}/${libName}.dll`;
}

function getOSXLibraryPath(): string {
    const dir = SDL_LIBS_PATH;
    const arch = process.arch;
    const libName = 'libSDL2';
    const version = '2.0';

    return `${dir}/libs/osx/${arch}/${libName}-${version}.dylib`;
}

function getLinuxLibraryPath(): string {
    const dir = SDL_LIBS_PATH;
    const arch = process.arch;
    const libName = 'libSDL2';

    return `${dir}/libs/linux/${arch}/${libName}.so`;
}

