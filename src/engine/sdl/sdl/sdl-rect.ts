import {Rect} from '../shape/rect';
import {int32} from './types';

const ref = require('ref-napi');
const Struct = require('ref-struct-di')(ref);

export const SDL_Point = exports.SDL_Point = Struct({
    x: int32,
    y: int32,
});
export const SDL_Rect = Struct({
    x: int32,
    y: int32,
    w: int32,
    h: int32,
});

export const SDL_Rect_ptr = ref.refType(SDL_Rect);

export const SDL_Point_ptr = ref.refType(SDL_Point);

export function createSDL_RectPtr(rect: Rect): any {
    return SDL_Rect(arraylike2obj(rect, 'x,y,w,h')).ref();
}

function arraylike2obj(obj: any = {}, keys: any = '') {
    keys = keys.split(',');
    const ret = {} as any;

    keys.forEach((value: any, index: any) => {
        value = value.trim();
        ret[value] = (value in obj) ? obj[value] : (obj[index] || 0);
    });

    return ret;
}
