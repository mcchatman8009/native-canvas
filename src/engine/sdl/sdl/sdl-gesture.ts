import {SDL_TouchID} from './sdl-touch';
import {loadLibrary} from './lib-loader';
import {SDL_RWops_ptr} from './sdl-rwops';
import {int32, longlong} from './types';

export const SDL_GestureID = longlong;

const SDL = {} as any;

loadLibrary({
    SDL_RecordGesture: [int32, [SDL_TouchID]],
    SDL_SaveAllDollarTemplates: [int32, [SDL_RWops_ptr]],
    SDL_SaveDollarTemplate: [int32, [SDL_GestureID, SDL_RWops_ptr]],
    SDL_LoadDollarTemplates: [int32, [SDL_TouchID, SDL_RWops_ptr]],
}, SDL);
