const SDL = require('../sdl-shim/SDL');

export const SDL_QUERY = -1;
export const SDL_IGNORE = 0;
export const SDL_DISABLE = 0;
export const SDL_ENABLE = 1;

export function SDL_Init(flags: number): number {
    return SDL.SDL_Init(flags);
}

export function SDL_Quit(): void {
    SDL.SDL_Quit();
}
