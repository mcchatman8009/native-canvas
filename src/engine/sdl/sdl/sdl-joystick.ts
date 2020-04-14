import {int32, int32_ptr, Sint16, string, uint32, Uint8, voit} from './types';
import {loadLibrary} from './lib-loader';

const ref = require('ref-napi');
const ArrayType = require('ref-array-di')(ref);
const Struct = require('ref-struct-di')(ref);

const SDL = {} as any;

export enum SDL_JoystickPowerLevel {
    SDL_JOYSTICK_POWER_UNKNOWN = -1,
    SDL_JOYSTICK_POWER_EMPTY = 0,
    SDL_JOYSTICK_POWER_LOW = 1,
    SDL_JOYSTICK_POWER_MEDIUM = 2,
    SDL_JOYSTICK_POWER_FULL = 3,
    SDL_JOYSTICK_POWER_WIRED = 4,
    SDL_JOYSTICK_POWER_MAX = 5
}

export const SDL_Joystick = voit;

export const SDL_JoystickGUID = Struct({
    data: ArrayType(Uint8, 16),
});

export const SDL_JoystickID = int32;

export const SDL_Joystick_ptr = ref.refType(SDL_Joystick);

loadLibrary({
    SDL_NumJoysticks: [int32, []],
    SDL_JoystickNameForIndex: [string, [int32]],
    SDL_JoystickOpen: [SDL_Joystick_ptr, [int32]],
    SDL_JoystickFromInstanceID: [SDL_Joystick_ptr, [SDL_JoystickID]],
    SDL_JoystickName: [string, [SDL_Joystick_ptr]],
    SDL_JoystickGetDeviceGUID: [SDL_JoystickGUID, [int32]],
    SDL_JoystickGetGUID: [SDL_JoystickGUID, [SDL_Joystick_ptr]],
    SDL_JoystickGetGUIDString: [voit, [SDL_JoystickGUID, string, int32]],
    SDL_JoystickGetGUIDFromString: [SDL_JoystickGUID, [string]],
    SDL_JoystickGetAttached: [uint32, [SDL_Joystick_ptr]],
    SDL_JoystickInstanceID: [SDL_JoystickID, [SDL_Joystick_ptr]],
    SDL_JoystickNumAxes: [int32, [SDL_Joystick_ptr]],
    SDL_JoystickNumBalls: [int32, [SDL_Joystick_ptr]],
    SDL_JoystickNumHats: [int32, [SDL_Joystick_ptr]],
    SDL_JoystickNumButtons: [int32, [SDL_Joystick_ptr]],
    SDL_JoystickUpdate: [voit, []],
    SDL_JoystickEventState: [int32, [int32]],
    SDL_JoystickGetAxis: [Sint16, [SDL_Joystick_ptr, int32]],
    SDL_JoystickGetHat: [Uint8, [SDL_Joystick_ptr, int32]],
    SDL_JoystickGetBall: [int32, [SDL_Joystick_ptr, int32, int32_ptr, int32_ptr]],
    SDL_JoystickGetButton: [Uint8, [SDL_Joystick_ptr, int32]],
    SDL_JoystickClose: [voit, [SDL_Joystick_ptr]],
    SDL_JoystickCurrentPowerLevel: [int32, [SDL_Joystick_ptr]],
}, SDL);
