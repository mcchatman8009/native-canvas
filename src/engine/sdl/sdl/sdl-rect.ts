import {Rect} from '../shape/rect';

const SDL_rect = require('../sdl-shim/SDL_rect');
const utils = require('../sdl-shim/utils');

export function createSDL_RectPtr(rect: Rect): any {
    return SDL_rect.SDL_Rect(utils.arraylike2obj(rect, 'x,y,w,h')).ref();
}
