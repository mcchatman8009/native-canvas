import {loadLibrary} from './lib-loader';
import {int32, int32_ptr, string, Uint32, Uint8} from './types';
import {SDL_Window_ptr} from './sdl-video';

const ref = require('ref-napi');
const ArrayType = require('ref-array-di')(ref);
const Struct = require('ref-struct-di')(ref);

const SDL = {} as any;

export function SDL_Create_MessageBoxButtonData(buttons: { type: string, text: string }[]) {
    const num = buttons.length;
    const size = SDL_MessageBoxButtonData.size;

    const buttonData: any = new Buffer(num * size);
    buttonData.type = SDL_MessageBoxButtonData;

    buttons.forEach((button: any, index: number) => {
        let type = button.type;
        let flags = 0;

        if (type === 'yes') {
            flags = SDL_MessageBoxButtonFlags.SDL_MESSAGEBOX_BUTTON_RETURNKEY_DEFAULT;
        } else if (type = 'cancel') {
            flags = SDL_MessageBoxButtonFlags.SDL_MESSAGEBOX_BUTTON_ESCAPEKEY_DEFAULT;
        }

        ref.set(buttonData, index * size, new SDL_MessageBoxButtonData({
            flags: flags,
            buttonid: index,
            text: (button.text || '')
        }));
    });

    return buttonData;
}

function Create_SDL_MessageBoxData(title: string, message: string, flags: number, buttons: any, numbuttons: number, windowPtr: any = null): any {
    const messageBoxData = new SDL_MessageBoxData({
        flags: flags,
        window: windowPtr,
        title: title,
        message: message,
        numbuttons: numbuttons,
        buttons: buttons,
        colorScheme: null
    });

    return messageBoxData.ref();
}

export function SDL_ShowMessageBox(type: string, title: string, message: string, buttons: any, numberOfButtons: number, windowPtr: any = null): number {
    let messageFlags;
    let id = ref.alloc('int');

    if (type === 'error') {
        messageFlags = SDL_MessageBoxFlags.SDL_MESSAGEBOX_ERROR;
    } else if (type === 'warning') {
        messageFlags = SDL_MessageBoxFlags.SDL_MESSAGEBOX_WARNING;
    } else {
        messageFlags = SDL_MessageBoxFlags.SDL_MESSAGEBOX_INFORMATION;
    }

    const messageBoxDataPtr = Create_SDL_MessageBoxData(title, message, messageFlags, buttons, numberOfButtons, windowPtr);
    SDL.SDL_ShowMessageBox(messageBoxDataPtr, id);

    id = id.deref();

    return id;
}

export enum SDL_MessageBoxFlags {
    SDL_MESSAGEBOX_ERROR = 16,
    SDL_MESSAGEBOX_WARNING = 32,
    SDL_MESSAGEBOX_INFORMATION = 64
}

export enum SDL_MessageBoxButtonFlags {
    SDL_MESSAGEBOX_BUTTON_RETURNKEY_DEFAULT = 1,
    SDL_MESSAGEBOX_BUTTON_ESCAPEKEY_DEFAULT = 2
}

export enum SDL_MessageBoxColorType {
    SDL_MESSAGEBOX_COLOR_BACKGROUND = 0,
    SDL_MESSAGEBOX_COLOR_TEXT = 1,
    SDL_MESSAGEBOX_COLOR_BUTTON_BORDER = 2,
    SDL_MESSAGEBOX_COLOR_BUTTON_BACKGROUND = 3,
    SDL_MESSAGEBOX_COLOR_BUTTON_SELECTED = 4,
    SDL_MESSAGEBOX_COLOR_MAX = 5
}

export const c__SA_SDL_MessageBoxButtonData = Struct({
    flags: Uint32,
    buttonid: int32,
    text: string,
});

export const SDL_MessageBoxButtonData = c__SA_SDL_MessageBoxButtonData;

export const SDL_MessageBoxColor = Struct({
    r: Uint8,
    g: Uint8,
    b: Uint8,
});

export const SDL_MessageBoxColorScheme_FI_colors_arr = ArrayType(SDL_MessageBoxColor, 5);

export const SDL_MessageBoxColorScheme = exports.c__SA_SDL_MessageBoxColorScheme = Struct({
    colors: SDL_MessageBoxColorScheme_FI_colors_arr,
});

export const SDL_MessageBoxButtonData_ptr = ref.refType(SDL_MessageBoxButtonData);

export const SDL_MessageBoxColorScheme_ptr = ref.refType(SDL_MessageBoxColorScheme);

export const c__SA_SDL_MessageBoxData = Struct({
    flags: Uint32,
    window: SDL_Window_ptr,
    title: string,
    message: string,
    numbuttons: int32,
    buttons: SDL_MessageBoxButtonData_ptr,
    colorScheme: SDL_MessageBoxColorScheme_ptr,
});

export const SDL_MessageBoxData = exports.SDL_MessageBoxData = c__SA_SDL_MessageBoxData;

export const SDL_MessageBoxData_ptr = exports.SDL_MessageBoxData_ptr = ref.refType(SDL_MessageBoxData);

loadLibrary({
    SDL_ShowMessageBox: [int32, [SDL_MessageBoxData_ptr, int32_ptr]],
    SDL_ShowSimpleMessageBox: [int32, [Uint32, string, string, SDL_Window_ptr]],
}, SDL);
