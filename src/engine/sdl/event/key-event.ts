import {SdlWindow} from '../sdl-window/sdl-window';
import {SDL_Keymod} from '../sdl';

const SDL_keyboard = require('../sdl-shim/SDL_keyboard');
const keymod = SDL_Keymod;

const KMOD_KEYS = Object.keys(keymod);

export function getCurrentKeyEvent(sdlEvent: any, window: SdlWindow): KeyboardEvent {
    const event = {} as any;

    event.preventDefault = () => window.preventDefault(event);
    event.stopImmediatePropagation = () => window.stopImmediatePropagation(event);
    event.stopPropagation = () => window.stopPropagation(event);

    const key = sdlEvent.key;

    event.key = getKey(key);
    event.keyCode = event.charCode = key.keysym.sym;
    event.code = getKeyCode(key);
    event.repeat = !!key.repeat;

    event.ctrlKey = false;
    event.shiftKey = false;
    event.altKey = false;
    event.metaKey = false;

    KMOD_KEYS.forEach((modName) => {
        const keyModValue = keymod[modName];
        const mod = key.keysym.mod;

        /*tslint:disable*/
        const val = !!(keyModValue & mod);
        /*tslint:enable*/

        switch (modName) {
            case 'KMOD_LCTRL':
            case 'KMOD_RCTRL':
                if (!event.ctrlKey) {
                    event.ctrlKey = val;
                }
                break;

            case 'KMOD_LSHIFT':
            case 'KMOD_RSHIFT':
                if (!event.shiftKey) {
                    event.shiftKey = val;
                }

                break;

            case 'KMOD_RALT':
            case 'KMOD_LALT':
                if (!event.altKey) {
                    event.altKey = val;
                }
                break;

            case 'KMOD_LGUI':
            case 'KMOD_RGUI':
                if (!event.metaKey) {
                    event.metaKey = val;
                }
                break;
        }
    });

    return event;
}

function getKeyCode(key: any) {
    const codeName = SDL_keyboard.SDL_GetScancodeName(key.keysym.scancode);

    if (codeName.length === 1 && codeName.match(/[A-Z]/i)) {
        return `Key${codeName}`;
    } else if (codeName.length === 1 && codeName.match(/[0-9]/i)) {
        return `Digit${codeName}`;
    } else {
        return codeName;
    }
}

function getKey(key: any) {
    const keyName = SDL_keyboard.SDL_GetKeyName(key.keysym.sym);

    if (keyName.length === 1 && keyName.match(/[A-Z]/i)) {
        return keyName.toLowerCase();
    }

    switch (keyName) {
        case 'Space':
            return ' ';
        default:
            return keyName;
    }
}
