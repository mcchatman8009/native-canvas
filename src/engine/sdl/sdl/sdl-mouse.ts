import {SDL_Window_ptr} from './sdl-video';
import {int32, int32_ptr, uint32, Uint32, Uint8_ptr, voit} from './types';
import {loadLibrary} from './lib-loader';
import {SDL_Surface_ptr} from './sdl-surface';

const ref = require('ref-napi');

const SDL = {} as any;

export enum SDL_SystemCursor {
    SDL_SYSTEM_CURSOR_ARROW = 0,
    SDL_SYSTEM_CURSOR_IBEAM = 1,
    SDL_SYSTEM_CURSOR_WAIT = 2,
    SDL_SYSTEM_CURSOR_CROSSHAIR = 3,
    SDL_SYSTEM_CURSOR_WAITARROW = 4,
    SDL_SYSTEM_CURSOR_SIZENWSE = 5,
    SDL_SYSTEM_CURSOR_SIZENESW = 6,
    SDL_SYSTEM_CURSOR_SIZEWE = 7,
    SDL_SYSTEM_CURSOR_SIZENS = 8,
    SDL_SYSTEM_CURSOR_SIZEALL = 9,
    SDL_SYSTEM_CURSOR_NO = 10,
    SDL_SYSTEM_CURSOR_HAND = 11,
    SDL_NUM_SYSTEM_CURSORS = 12
}

export enum SDL_MouseWheelDirection {
    SDL_MOUSEWHEEL_NORMAL = 0,
    SDL_MOUSEWHEEL_FLIPPED = 1
}

export const SDL_Cursor = voit;
export const SDL_Cursor_ptr = ref.refType(SDL_Cursor);

export function SDL_GetGlobalMouseState(): { x: number, y: number } {
    const screenX = ref.alloc('int');
    const screenY = ref.alloc('int');

    SDL.SDL_GetGlobalMouseState(screenX, screenY);

    return {
        x: screenX.deref(),
        y: screenY.deref()
    };


}

loadLibrary({
    SDL_GetMouseFocus: [SDL_Window_ptr, []],
    SDL_GetMouseState: [Uint32, [int32_ptr, int32_ptr]],
    SDL_GetGlobalMouseState: [Uint32, [int32_ptr, int32_ptr]],
    SDL_GetRelativeMouseState: [Uint32, [int32_ptr, int32_ptr]],
    SDL_WarpMouseInWindow: [voit, [SDL_Window_ptr, int32, int32]],
    SDL_WarpMouseGlobal: [int32, [int32, int32]],
    SDL_SetRelativeMouseMode: [int32, [uint32]],
    SDL_CaptureMouse: [int32, [uint32]],
    SDL_GetRelativeMouseMode: [uint32, []],
    SDL_CreateCursor: [SDL_Cursor_ptr, [Uint8_ptr, Uint8_ptr, int32, int32, int32, int32]],
    SDL_CreateColorCursor: [SDL_Cursor_ptr, [SDL_Surface_ptr, int32, int32]],
    SDL_CreateSystemCursor: [SDL_Cursor_ptr, [uint32]],
    SDL_SetCursor: [voit, [SDL_Cursor_ptr]],
    SDL_GetCursor: [SDL_Cursor_ptr, []],
    SDL_GetDefaultCursor: [SDL_Cursor_ptr, []],
    SDL_FreeCursor: [voit, [SDL_Cursor_ptr]],
    SDL_ShowCursor: [int32, [int32]],
}, SDL);
