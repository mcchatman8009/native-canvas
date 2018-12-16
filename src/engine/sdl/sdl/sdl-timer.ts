import {int32, Uint32, voit} from './types';
import {loadLibrary} from './lib-loader';

const SDL = {} as any;

export const SDL_QUERY = -1;
// export const SDL_IGNORE = 0;
// export const SDL_DISABLE = 0;
export const SDL_ENABLE = 1;

export function SDL_GetTicks(): number {
    return SDL.SDL_GetTicks();
}

export function SDL_Delay(ms: number): void {
    SDL.SDL_Delay(ms);
}

loadLibrary({
    SDL_GetTicks: [int32, []],
    SDL_Delay: [voit, [Uint32]],
}, SDL);
