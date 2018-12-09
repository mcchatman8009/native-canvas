const SDL_events = require('../sdl-shim/SDL_events');
const ref = require('ref');

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

export function pollForEventsForever() {
    (function forever() {
        const event = ref.alloc(SDL_events.SDL_Event);
        const pending = SDL_events.SDL_PollEvent(event);

        if (pending) {
            setImmediate(forever);
        } else {
            setTimeout(forever);
        }
    })();
}

export function SDL_PollEvent(sdlEvent: any) {
    return SDL_events.SDL_PollEvent(sdlEvent);
}

export function createEventFilterFunction(filter: (data: any, event: any) => void) {
    return SDL_events.SDL_EventFilter.toPointer(filter);
}

// SDL_events.SDL_AddEventWatch(globals.filter, null);
export function SDL_AddEventWatch(filterFunctionPtr: any, dataPtr: any) {
    SDL_events.SDL_AddEventWatch(filterFunctionPtr, dataPtr);
}

export function SDL_EventState(flag: number, value: number) {
    return SDL_events.SDL_EventState(flag, value);

}
