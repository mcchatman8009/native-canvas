const SDL_messagebox = require('../sdl-shim/SDL_messagebox');
const ref = require('ref');

export enum SDL_MessageBoxFlags {
    SDL_MESSAGEBOX_ERROR = 16,
    SDL_MESSAGEBOX_WARNING = 32,
    SDL_MESSAGEBOX_INFORMATION = 64
}

export enum SDL_MessageBoxButtonFlags {
    SDL_MESSAGEBOX_BUTTON_RETURNKEY_DEFAULT = 1,
    SDL_MESSAGEBOX_BUTTON_ESCAPEKEY_DEFAULT = 2
}

export enum SDL_MessageBoxButtonFlags {
    SDL_MESSAGEBOX_COLOR_BACKGROUND = 0,
    SDL_MESSAGEBOX_COLOR_TEXT = 1,
    SDL_MESSAGEBOX_COLOR_BUTTON_BORDER = 2,
    SDL_MESSAGEBOX_COLOR_BUTTON_BACKGROUND = 3,
    SDL_MESSAGEBOX_COLOR_BUTTON_SELECTED = 4,
    SDL_MESSAGEBOX_COLOR_MAX = 5
}

export function SDL_Create_MessageBoxButtonData(buttons: { type: string, text: string }[]) {
    const num = buttons.length;
    const size = SDL_messagebox.SDL_MessageBoxButtonData.size;

    const buttonData: any = new Buffer(num * size);
    buttonData.type = SDL_messagebox.SDL_MessageBoxButtonData;

    buttons.forEach((button: any, index: number) => {
        let type = button.type;
        let flags = 0;

        if (type === 'yes') {
            flags = SDL_messagebox.SDL_MessageBoxButtonFlags.SDL_MESSAGEBOX_BUTTON_RETURNKEY_DEFAULT;
        } else if (type = 'cancel') {
            flags = SDL_messagebox.SDL_MessageBoxButtonFlags.SDL_MESSAGEBOX_BUTTON_ESCAPEKEY_DEFAULT;
        }

        ref.set(buttonData, index * size, new SDL_messagebox.SDL_MessageBoxButtonData({
            flags: flags,
            buttonid: index,
            text: (button.text || '')
        }));
    });

    return buttonData;
}

//SDL_messagebox.SDL_ShowMessageBox(messageBoxData.ref(), id);
function SDL_MessageBoxData(title: string, message: string, flags: number, buttons: any, numbuttons: number, windowPtr: any = null): any {

    const messageBoxData = new SDL_messagebox.SDL_MessageBoxData({
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

    const messageBoxDataPtr = SDL_MessageBoxData(title, message, messageFlags, buttons, numberOfButtons, windowPtr);
    SDL_messagebox.SDL_ShowMessageBox(messageBoxDataPtr, id);

    id = id.deref();

    return id;
}
