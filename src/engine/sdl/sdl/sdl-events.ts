import {loadLibrary} from './lib-loader';
import {
    char,
    float,
    int32,
    Sint16,
    Sint32,
    string,
    Uint16,
    uint32,
    Uint32,
    Uint8,
    voit,
    voit_ptr,
    voit_ptr_ptr
} from './types';
import {SDL_GestureID} from './sdl-gesture';
import {SDL_FingerID, SDL_TouchID} from './sdl-touch';
import {SDL_JoystickID} from './sdl-joystick';
import {SDL_Keysym} from './sdl-keyboard';

const FFI = require('ffi-napi');
const ref = require('ref-napi');
const ArrayType = require('ref-array-di')(ref);
const Struct = require('ref-struct-di')(ref);
const Union = require('ref-union-di')(ref);

const SDL = {} as any;

export enum SDL_EventType {
    SDL_FIRSTEVENT = 0,
    SDL_QUIT = 256,
    SDL_APP_TERMINATING = 257,
    SDL_APP_LOWMEMORY = 258,
    SDL_APP_WILLENTERBACKGROUND = 259,
    SDL_APP_DIDENTERBACKGROUND = 260,
    SDL_APP_WILLENTERFOREGROUND = 261,
    SDL_APP_DIDENTERFOREGROUND = 262,
    SDL_WINDOWEVENT = 512,
    SDL_SYSWMEVENT = 513,
    SDL_KEYDOWN = 768,
    SDL_KEYUP = 769,
    SDL_TEXTEDITING = 770,
    SDL_TEXTINPUT = 771,
    SDL_KEYMAPCHANGED = 772,
    SDL_MOUSEMOTION = 1024,
    SDL_MOUSEBUTTONDOWN = 1025,
    SDL_MOUSEBUTTONUP = 1026,
    SDL_MOUSEWHEEL = 1027,
    SDL_JOYAXISMOTION = 1536,
    SDL_JOYBALLMOTION = 1537,
    SDL_JOYHATMOTION = 1538,
    SDL_JOYBUTTONDOWN = 1539,
    SDL_JOYBUTTONUP = 1540,
    SDL_JOYDEVICEADDED = 1541,
    SDL_JOYDEVICEREMOVED = 1542,
    SDL_CONTROLLERAXISMOTION = 1616,
    SDL_CONTROLLERBUTTONDOWN = 1617,
    SDL_CONTROLLERBUTTONUP = 1618,
    SDL_CONTROLLERDEVICEADDED = 1619,
    SDL_CONTROLLERDEVICEREMOVED = 1620,
    SDL_CONTROLLERDEVICEREMAPPED = 1621,
    SDL_FINGERDOWN = 1792,
    SDL_FINGERUP = 1793,
    SDL_FINGERMOTION = 1794,
    SDL_DOLLARGESTURE = 2048,
    SDL_DOLLARRECORD = 2049,
    SDL_MULTIGESTURE = 2050,
    SDL_CLIPBOARDUPDATE = 2304,
    SDL_DROPFILE = 4096,
    SDL_DROPTEXT,
    SDL_DROPBEGIN,
    SDL_DROPCOMPLETE,
    SDL_AUDIODEVICEADDED = 4352,
    SDL_AUDIODEVICEREMOVED = 4353,
    SDL_RENDER_TARGETS_RESET = 8192,
    SDL_RENDER_DEVICE_RESET = 8193,
    SDL_USEREVENT = 32768,
    SDL_LASTEVENT = 65535
}

export function createSDLEvent() {

    return ref.alloc(SDL_Event);
}
export function pollForEventsForever() {
    function forever() {
        SDL.SDL_PollEvent(null);
        // setTimeout(forever, 10);
    }

    setInterval(forever, 10);
}

export function SDL_PumpEvents() {
    return SDL.SDL_PumpEvents();
}

export function SDL_PollEvent(sdlEvent: any) {
    return SDL.SDL_PollEvent(sdlEvent);
}

export function createEventFilterFunction(filter: (data: any, event: any) => void) {
    return SDL_EventFilter.toPointer(filter);
}

// SDL_events.SDL_AddEventWatch(globals.filter, null);
export function SDL_AddEventWatch(filterFunctionPtr: any, dataPtr: any) {
    SDL.SDL_AddEventWatch(filterFunctionPtr, dataPtr);
}

export function SDL_EventState(flag: number, value: number) {
    return SDL.SDL_EventState(flag, value);

}

export enum SDL_eventaction {
    SDL_ADDEVEN = 0,
    SDL_PEEKEVENT = 1,
    SDL_GETEVENT = 2
}

export const SDL_CommonEvent = Struct({
    type: Uint32,
    timestamp: Uint32
});

export const SDL_WindowEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    windowID: Uint32,
    event: Uint8,
    padding1: Uint8,
    padding2: Uint8,
    padding3: Uint8,
    data1: Sint32,
    data2: Sint32
});

export const SDL_KeyboardEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    windowID: Uint32,
    state: Uint8,
    repeat: Uint8,
    padding2: Uint8,
    padding3: Uint8,
    keysym: SDL_Keysym
});

export const SDL_TextEditingEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    windowID: Uint32,
    text: ArrayType(char, 32),
    start: Sint32,
    length: Sint32
});

export const SDL_TextInputEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    windowID: Uint32,
    text: ArrayType(char, 32)
});

export const SDL_MouseMotionEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    windowID: Uint32,
    which: Uint32,
    state: Uint32,
    x: Sint32,
    y: Sint32,
    xrel: Sint32,
    yrel: Sint32
});

export const SDL_MouseButtonEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    windowID: Uint32,
    which: Uint32,
    button: Uint8,
    state: Uint8,
    clicks: Uint8,
    padding1: Uint8,
    x: Sint32,
    y: Sint32
});

export const SDL_MouseWheelEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    windowID: Uint32,
    which: Uint32,
    x: Sint32,
    y: Sint32,
    direction: Uint32
});

export const SDL_JoyAxisEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: SDL_JoystickID,
    axis: Uint8,
    padding1: Uint8,
    padding2: Uint8,
    padding3: Uint8,
    value: Sint16,
    padding4: Uint16
});

export const SDL_JoyBallEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: SDL_JoystickID,
    ball: Uint8,
    padding1: Uint8,
    padding2: Uint8,
    padding3: Uint8,
    xrel: Sint16,
    yrel: Sint16
});

export const SDL_JoyHatEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: SDL_JoystickID,
    hat: Uint8,
    value: Uint8,
    padding1: Uint8,
    padding2: Uint8
});

export const SDL_JoyButtonEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: SDL_JoystickID,
    button: Uint8,
    state: Uint8,
    padding1: Uint8,
    padding2: Uint8
});

export const SDL_JoyDeviceEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: Sint32
});

export const SDL_ControllerAxisEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: SDL_JoystickID,
    axis: Uint8,
    padding1: Uint8,
    padding2: Uint8,
    padding3: Uint8,
    value: Sint16,
    padding4: Uint16
});

export const SDL_ControllerButtonEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: SDL_JoystickID,
    button: Uint8,
    state: Uint8,
    padding1: Uint8,
    padding2: Uint8,
});

export const SDL_ControllerDeviceEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: Sint32,
});

export const SDL_AudioDeviceEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    which: Uint32,
    iscapture: Uint8,
    padding1: Uint8,
    padding2: Uint8,
    padding3: Uint8,
});

export const SDL_TouchFingerEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    touchId: SDL_TouchID,
    fingerId: SDL_FingerID,
    x: float,
    y: float,
    dx: float,
    dy: float,
    pressure: float,
});

export const SDL_MultiGestureEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    touchId: SDL_TouchID,
    dTheta: float,
    dDist: float,
    x: float,
    y: float,
    numFingers: Uint16,
    padding: Uint16,
});


export const SDL_DollarGestureEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    touchId: SDL_TouchID,
    gestureId: SDL_GestureID,
    numFingers: Uint32,
    error: float,
    x: float,
    y: float,
});

export const SDL_DropEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    file: string,
});

export const SDL_QuitEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
});

export const SDL_OSEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
});


export const SDL_UserEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    windowID: Uint32,
    code: Sint32,
    data1: voit_ptr,
    data2: voit_ptr
});

export const SDL_SysWMmsg = voit;

export const SDL_SysWMmsg_ptr = ref.refType(SDL_SysWMmsg);

export const SDL_SysWMEvent = Struct({
    type: Uint32,
    timestamp: Uint32,
    msg: SDL_SysWMmsg_ptr,
});

export const c__U_SDL_Event_FI_padding_arr = ArrayType(Uint8, 56);

export const SDL_Event = Union({
    type: Uint32,
    common: SDL_CommonEvent,
    window: SDL_WindowEvent,
    key: SDL_KeyboardEvent,
    edit: SDL_TextEditingEvent,
    text: SDL_TextInputEvent,
    motion: SDL_MouseMotionEvent,
    button: SDL_MouseButtonEvent,
    wheel: SDL_MouseWheelEvent,
    jaxis: SDL_JoyAxisEvent,
    jball: SDL_JoyBallEvent,
    jhat: SDL_JoyHatEvent,
    jbutton: SDL_JoyButtonEvent,
    jdevice: SDL_JoyDeviceEvent,
    caxis: SDL_ControllerAxisEvent,
    cbutton: SDL_ControllerButtonEvent,
    cdevice: SDL_ControllerDeviceEvent,
    adevice: SDL_AudioDeviceEvent,
    quit: SDL_QuitEvent,
    user: SDL_UserEvent,
    syswm: SDL_SysWMEvent,
    tfinger: SDL_TouchFingerEvent,
    mgesture: SDL_MultiGestureEvent,
    dgesture: SDL_DollarGestureEvent,
    drop: SDL_DropEvent,
    padding: c__U_SDL_Event_FI_padding_arr,
});

export const SDL_Event_ptr = ref.refType(SDL_Event);

export const SDL_EventFilter = FFI.Function(int32, [voit_ptr, SDL_Event_ptr]);

export const SDL_EventFilter_ptr = ref.refType(SDL_EventFilter);

loadLibrary({
    SDL_PumpEvents: [voit, []],
    SDL_PeepEvents: [int32, [SDL_Event_ptr, int32, uint32, Uint32, Uint32]],
    SDL_HasEvent: [uint32, [Uint32]],
    SDL_HasEvents: [uint32, [Uint32, Uint32]],
    SDL_FlushEvent: [voit, [Uint32]],
    SDL_FlushEvents: [voit, [Uint32, Uint32]],
    SDL_PollEvent: [int32, [SDL_Event_ptr]],
    SDL_WaitEvent: [int32, [SDL_Event_ptr]],
    SDL_WaitEventTimeout: [int32, [SDL_Event_ptr, int32]],
    SDL_PushEvent: [int32, [SDL_Event_ptr]],
    SDL_SetEventFilter: [voit, [SDL_EventFilter, voit_ptr]],
    SDL_GetEventFilter: [uint32, [SDL_EventFilter_ptr, voit_ptr_ptr]],
    SDL_AddEventWatch: [voit, [SDL_EventFilter, voit_ptr]],
    SDL_DelEventWatch: [voit, [SDL_EventFilter, voit_ptr]],
    SDL_FilterEvents: [voit, [SDL_EventFilter, voit_ptr]],
    SDL_EventState: [Uint8, [Uint32, int32]],
    SDL_RegisterEvents: [Uint32, [int32]],
}, SDL);

