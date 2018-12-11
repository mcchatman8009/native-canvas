import {SDL_Create_MessageBoxButtonData, SDL_ShowMessageBox} from '../sdl';

export function confirm(message: string, windowPtr: any = null): boolean {

    const buttons = [
        {
            type: 'cancel',
            text: 'Cancel'
        }
        , {
            type: 'yes',
            text: 'OK'
        }];

    const numberOfButtons = buttons.length;
    const buttonData = SDL_Create_MessageBoxButtonData(buttons);

    const buttonIndex = SDL_ShowMessageBox('info', '', message, buttonData, numberOfButtons, windowPtr);

    return buttonIndex === 1;
}

export function alert(message: string, windowPtr: any = null) {
    const buttons = [{
        type: 'yes',
        text: 'OK'
    }];

    const numberOfButtons = buttons.length;
    const buttonData = SDL_Create_MessageBoxButtonData(buttons);

    SDL_ShowMessageBox('info', '', message, buttonData, numberOfButtons, windowPtr);
}

