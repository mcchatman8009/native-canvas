import {int32_ptr, uint32} from './types';
import {loadLibrary} from './lib-loader';

const SDL = {} as any;

export enum SDL_PowerState {
    SDL_POWERSTATE_UNKNOWN = 0,
    SDL_POWERSTATE_ON_BATTERY = 1,
    SDL_POWERSTATE_NO_BATTERY = 2,
    SDL_POWERSTATE_CHARGING = 3,
    SDL_POWERSTATE_CHARGED = 4
}

loadLibrary({
    SDL_GetPowerInfo: [uint32, [int32_ptr, int32_ptr]]
}, SDL);
