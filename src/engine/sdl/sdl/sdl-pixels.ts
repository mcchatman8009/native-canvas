const SDL_pixels = require('../sdl-shim/SDL_pixels');

export function SDL_MasksToPixelFormatEnum(bpp: number, rmask: number, gmask: number, bmask: number, amask: number): number {
    return SDL_pixels.SDL_MasksToPixelFormatEnum(bpp, rmask, gmask, bmask, amask);
}
