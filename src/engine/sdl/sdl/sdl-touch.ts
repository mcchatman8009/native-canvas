import {float, int32, longlong} from './types';
import {loadLibrary} from './lib-loader';

const ref = require('ref-napi');
const Struct = require('ref-struct-di')(ref);
const SDL = {} as any;


export const SDL_TouchID = longlong;

export const SDL_FingerID = longlong;

export const SDL_Finger = Struct({
    id: SDL_FingerID,
    x: float,
    y: float,
    pressure: float,
});

export const SDL_Finger_ptr = ref.refType(SDL_Finger);

loadLibrary({
    SDL_GetNumTouchDevices: [int32, []],
    SDL_GetTouchDevice: [SDL_TouchID, [int32]],
    SDL_GetNumTouchFingers: [int32, [SDL_TouchID]],
    SDL_GetTouchFinger: [SDL_Finger_ptr, [SDL_TouchID, int32]],
}, SDL);
