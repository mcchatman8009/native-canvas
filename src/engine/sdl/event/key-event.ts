import {SdlWindow} from '../sdl-window/sdl-window';
import {SDL_GetKeyName, SDL_GetScancodeName, SDL_Keymod} from '../sdl';

const keycode = require('keycode');

const keymod = SDL_Keymod;
const KMOD_KEYS = Object.keys(keymod);

const currentKeyEvent = {} as any;

export function getCurrentKeyEvent(sdlEvent: any, window: SdlWindow): KeyboardEvent {
    currentKeyEvent.preventDefault = () => window.preventDefault(currentKeyEvent);
    currentKeyEvent.stopImmediatePropagation = () => window.stopImmediatePropagation(currentKeyEvent);
    currentKeyEvent.stopPropagation = () => window.stopPropagation(currentKeyEvent);

    const key = sdlEvent.key;

    currentKeyEvent.key = getKey(key);
    const normalizedKey = currentKeyEvent.key
        .toLowerCase()
        .trim()
        .replace('left ', '')
        .replace('right ', '')
        .trim();

    if (normalizedKey.length > 0) {
        currentKeyEvent.which = currentKeyEvent.keyCode = currentKeyEvent.charCode = keycode(normalizedKey);
    } else {
        currentKeyEvent.which = currentKeyEvent.keyCode = currentKeyEvent.charCode = keycode(currentKeyEvent.key);
    }

    currentKeyEvent.code = getKeyCode(key);
    currentKeyEvent.repeat = !!key.repeat;

    currentKeyEvent.ctrlKey = false;
    currentKeyEvent.shiftKey = false;
    currentKeyEvent.altKey = false;
    currentKeyEvent.metaKey = false;

    KMOD_KEYS.forEach((modName) => {
        const keyModValue = keymod[modName];
        const mod = key.keysym.mod;

        /*tslint:disable*/
        const val = !!(keyModValue & mod);
        /*tslint:enable*/

        switch (modName) {
            case 'KMOD_LCTRL':
            case 'KMOD_RCTRL':
                if (!currentKeyEvent.ctrlKey) {
                    currentKeyEvent.ctrlKey = val;
                }
                break;

            case 'KMOD_LSHIFT':
            case 'KMOD_RSHIFT':
                if (!currentKeyEvent.shiftKey) {
                    currentKeyEvent.shiftKey = val;
                }

                break;

            case 'KMOD_RALT':
            case 'KMOD_LALT':
                if (!currentKeyEvent.altKey) {
                    currentKeyEvent.altKey = val;
                }
                break;

            case 'KMOD_LGUI':
            case 'KMOD_RGUI':
                if (!currentKeyEvent.metaKey) {
                    currentKeyEvent.metaKey = val;
                }
                break;
        }
    });

    return currentKeyEvent;
}

function getKeyCode(key: any) {
    const codeName = SDL_GetScancodeName(key.keysym.scancode);

    if (codeName.length === 1 && codeName.match(/[A-Z]/i)) {
        return `Key${codeName}`;
    } else if (codeName.length === 1 && codeName.match(/[0-9]/i)) {
        return `Digit${codeName}`;
    } else {
        return codeName;
    }
}

function getKey(key: any) {
    const keyName = SDL_GetKeyName(key.keysym.sym);

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
