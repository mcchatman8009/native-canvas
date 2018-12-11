import {int32, Uint32, voit} from './types';
import {loadLibrary} from './lib-loader';

const SDL = {} as any;

export const SDL_QUERY = -1;
// export const SDL_IGNORE = 0;
// export const SDL_DISABLE = 0;
export const SDL_ENABLE = 1;

export function SDL_Init(flags: number): number {
    return SDL.SDL_Init(flags);
}

export function SDL_Quit(): void {
    SDL.SDL_Quit();
}

loadLibrary({
    SDL_Init: [int32, [Uint32]],
    SDL_InitSubSystem: [int32, [Uint32]],
    SDL_QuitSubSystem: [voit, [Uint32]],
    SDL_WasInit: [Uint32, [Uint32]],
    SDL_Quit: [voit, []]
}, SDL);
