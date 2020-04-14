import {int32, int32_ptr, string, uchar, Uint16_ptr, uint32, Uint32, voit, voit_ptr} from './types';
import {SDL_Point_ptr, SDL_Rect_ptr} from './sdl-rect';
import {SDL_Surface_ptr} from './sdl-surface';
import {loadLibrary} from './lib-loader';

const FFI = require('ffi-napi');
const ref = require('ref-napi');
const Struct = require('ref-struct-di')(ref);

const SDL = {} as any;

//SDL_video.SDL_SetWindowMinimumSize(this.windowPtr, w, h);
//SDL_video.SDL_SetWindowResizable(this.windowPtr, value);
//SDL_video.SDL_SetWindowPosition(this.windowPtr, x, y);
// return SDL_video.SDL_GetWindowID(this.windowPtr);

export function SDL_GetWindowID(windowPtr: any): number {
    return SDL.SDL_GetWindowID(windowPtr);
}

export function SDL_HideWindow(windowPtr: any): void {
    SDL.SDL_HideWindow(windowPtr);
}

export function SDL_ShowWindow(windowPtr: any): void {
    SDL.SDL_ShowWindow(windowPtr);
}

export function SDL_GetWindowBordersSize(windowPtr: any): { top: number, right: number, bottom: number, left: number } {
    const top = ref.alloc('int');
    const left = ref.alloc('int');
    const bottom = ref.alloc('int');
    const right = ref.alloc('int');

    SDL.SDL_GetWindowBordersSize(windowPtr, top, left, bottom, right);

    return {
        top: top.deref(),
        right: right.deref(),
        bottom: bottom.deref(),
        left: left.deref(),
    };
}

export function SDL_SetWindowBordered(windowPtr: any, border: boolean): void {
    SDL.SDL_SetWindowBordered(windowPtr, border);
}


export function SDL_GetWindowTitle(windowPtr: any): string {
    return SDL.SDL_GetWindowTitle(windowPtr);
}

export function SDL_SetWindowTitle(windowPtr: any, title: string): void {
    SDL.SDL_SetWindowTitle(windowPtr, title);
}

export function SDL_GetWindowPosition(windowPtr: any): { x: number, y: number } {
    const x = ref.alloc('int');
    const y = ref.alloc('int');

    SDL.SDL_GetWindowPosition(windowPtr, x, y);

    return {
        x: x.deref(),
        y: y.deref()
    };
}

export function SDL_SetWindowPosition(windowPtr: any, x: number, y: number): void {
    SDL.SDL_SetWindowPosition(windowPtr, x, y);
}


export function SDL_SetWindowResizable(windowPtr: any, bool: boolean): void {
    SDL.SDL_SetWindowResizable(windowPtr, bool);
}

export function SDL_GetWindowMaximumSize(windowPtr: any): { w: number, h: number } {
    const w = ref.alloc('int');
    const h = ref.alloc('int');

    SDL.SDL_GetWindowMaximumSize(windowPtr, w, h);

    return {
        w: w.deref(),
        h: h.deref()
    };
}

export function SDL_SetWindowMaximumSize(windowPtr: any, w: number, h: number): void {
    SDL.SDL_SetWindowMaximumSize(windowPtr, w, h);
}

export function SDL_GetWindowMinimumSize(windowPtr: any): { w: number, h: number } {
    const w = ref.alloc('int');
    const h = ref.alloc('int');

    SDL.SDL_GetWindowMinimumSize(windowPtr, w, h);

    return {
        w: w.deref(),
        h: h.deref()
    };
}

export function SDL_UpdateWindowSurface(windowPtr: any): void {
    SDL.SDL_UpdateWindowSurface(windowPtr);
}

export function SDL_SetWindowMinimumSize(windowPtr: any, w: number, h: number): void {
    SDL.SDL_SetWindowMinimumSize(windowPtr, w, h);
}

export function SDL_GetWindowSize(windowPtr: any): { w: number, h: number } {
    const w = ref.alloc('int');
    const h = ref.alloc('int');

    SDL.SDL_GetWindowSize(windowPtr, w, h);

    return {
        w: w.deref(),
        h: h.deref()
    };
}

export function SDL_SetWindowSize(windowPtr: any, w: number, h: number): void {
    SDL.SDL_SetWindowSize(windowPtr, w, h);
}


export function SDL_SetWindowFullscreen(windowPtr: any, mode: number): void {
    SDL.SDL_SetWindowFullscreen(windowPtr, mode);
}

export function SDL_GetWindowFlags(windowPtr: any): number {
    return SDL.SDL_GetWindowFlags(windowPtr);
}

export function SDL_MinimizeWindow(windowPtr: any): void {
    SDL.SDL_MinimizeWindow(windowPtr);
}


export function SDL_MaximizeWindow(windowPtr: any): void {
    SDL.SDL_MaximizeWindow(windowPtr);
}

export function SDL_SetWindowModalFor(windowPtr: any, parentWindowPtr: any): void {
    SDL.SDL_SetWindowModalFor(windowPtr, parentWindowPtr);
}

export function SDL_RestoreWindow(windowPtr: any): void {
    SDL.SDL_RestoreWindow(windowPtr);
}

export function SDL_DestroyWindow(windowPtr: any): void {
    SDL.SDL_DestroyWindow(windowPtr);
}


export function SDL_RaiseWindow(windowPtr: any): void {
    SDL.SDL_RaiseWindow(windowPtr);
}

export function SDL_SetWindowGrab(windowPtr: any, show: boolean): void {
    SDL.SDL_SetWindowGrab(windowPtr, show);
}

export function SDL_CreateWindow(title: string, x: number, y: number, w: number, h: number, flags: number): any {
    return SDL.SDL_CreateWindow(title, x, y, w, h, flags);
}

export enum SDL_WindowFlags {
    SDL_WINDOW_FULLSCREEN = 1,
    SDL_WINDOW_OPENGL = 2,
    SDL_WINDOW_SHOWN = 4,
    SDL_WINDOW_HIDDEN = 8,
    SDL_WINDOW_BORDERLESS = 16,
    SDL_WINDOW_RESIZABLE = 32,
    SDL_WINDOW_MINIMIZED = 64,
    SDL_WINDOW_MAXIMIZED = 128,
    SDL_WINDOW_INPUT_GRABBED = 256,
    SDL_WINDOW_INPUT_FOCUS = 512,
    SDL_WINDOW_MOUSE_FOCUS = 1024,
    SDL_WINDOW_FULLSCREEN_DESKTOP = 4097,
    SDL_WINDOW_FOREIGN = 2048,
    SDL_WINDOW_ALLOW_HIGHDPI = 8192,
    SDL_WINDOW_MOUSE_CAPTURE = 16384,
}

export enum SDL_WindowEventID {
    SDL_WINDOWEVENT_NONE = 0,
    SDL_WINDOWEVENT_SHOWN = 1,
    SDL_WINDOWEVENT_HIDDEN = 2,
    SDL_WINDOWEVENT_EXPOSED = 3,
    SDL_WINDOWEVENT_MOVED = 4,
    SDL_WINDOWEVENT_RESIZED = 5,
    SDL_WINDOWEVENT_SIZE_CHANGED = 6,
    SDL_WINDOWEVENT_MINIMIZED = 7,
    SDL_WINDOWEVENT_MAXIMIZED = 8,
    SDL_WINDOWEVENT_RESTORED = 9,
    SDL_WINDOWEVENT_ENTER = 10,
    SDL_WINDOWEVENT_LEAVE = 11,
    SDL_WINDOWEVENT_FOCUS_GAINED = 12,
    SDL_WINDOWEVENT_FOCUS_LOST = 13,
    SDL_WINDOWEVENT_CLOSE = 14,
}

export const SDL_DisplayMode = Struct({
    format: Uint32,
    w: int32,
    h: int32,
    refresh_rate: int32,
    driverdata: voit_ptr,
});
export const SDL_Window = voit;
export const SDL_GLContext = voit_ptr;

export const float = exports.float = ref.types.float;
export const float_ptr = exports.float_ptr = ref.refType(float);
export const SDL_DisplayMode_ptr = exports.SDL_DisplayMode_ptr = ref.refType(SDL_DisplayMode);
export const SDL_Window_ptr = exports.SDL_Window_ptr = ref.refType(SDL_Window);
export const SDL_HitTest = exports.SDL_HitTest = FFI.Function(uint32, [SDL_Window_ptr, SDL_Point_ptr, voit_ptr]);

export function SDL_GetWindowSurface(windowPtr: any) {
    return SDL.SDL_GetWindowSurface(windowPtr);
}

loadLibrary({
    SDL_GetNumVideoDrivers: [int32, []],
    SDL_GetVideoDriver: [string, [int32]],
    SDL_VideoInit: [int32, [string]],
    SDL_VideoQuit: [voit, []],
    SDL_GetCurrentVideoDriver: [string, []],
    SDL_GetNumVideoDisplays: [int32, []],
    SDL_GetDisplayName: [string, [int32]],
    SDL_GetDisplayBounds: [int32, [int32, SDL_Rect_ptr]],
    SDL_GetDisplayDPI: [int32, [int32, float_ptr, float_ptr, float_ptr]],
    SDL_GetNumDisplayModes: [int32, [int32]],
    SDL_GetDisplayMode: [int32, [int32, int32, SDL_DisplayMode_ptr]],
    SDL_GetDesktopDisplayMode: [int32, [int32, SDL_DisplayMode_ptr]],
    SDL_GetCurrentDisplayMode: [int32, [int32, SDL_DisplayMode_ptr]],
    SDL_GetClosestDisplayMode: [SDL_DisplayMode_ptr, [int32, SDL_DisplayMode_ptr, SDL_DisplayMode_ptr]],
    SDL_GetWindowDisplayIndex: [int32, [SDL_Window_ptr]],
    SDL_SetWindowDisplayMode: [int32, [SDL_Window_ptr, SDL_DisplayMode_ptr]],
    SDL_GetWindowDisplayMode: [int32, [SDL_Window_ptr, SDL_DisplayMode_ptr]],
    SDL_GetWindowPixelFormat: [Uint32, [SDL_Window_ptr]],
    SDL_CreateWindow: [SDL_Window_ptr, [string, int32, int32, int32, int32, Uint32]],
    SDL_CreateWindowFrom: [SDL_Window_ptr, [voit_ptr]],
    SDL_GetWindowID: [Uint32, [SDL_Window_ptr]],
    SDL_GetWindowFromID: [SDL_Window_ptr, [Uint32]],
    SDL_GetWindowFlags: [Uint32, [SDL_Window_ptr]],
    SDL_SetWindowTitle: [voit, [SDL_Window_ptr, string]],
    SDL_GetWindowTitle: [string, [SDL_Window_ptr]],
    SDL_SetWindowIcon: [voit, [SDL_Window_ptr, SDL_Surface_ptr]],
    SDL_SetWindowData: [voit_ptr, [SDL_Window_ptr, string, voit_ptr]],
    SDL_GetWindowData: [voit_ptr, [SDL_Window_ptr, string]],
    SDL_SetWindowPosition: [voit, [SDL_Window_ptr, int32, int32]],
    SDL_GetWindowPosition: [voit, [SDL_Window_ptr, int32_ptr, int32_ptr]],
    SDL_SetWindowSize: [voit, [SDL_Window_ptr, int32, int32]],
    SDL_GetWindowSize: [voit, [SDL_Window_ptr, int32_ptr, int32_ptr]],
    SDL_SetWindowResizable: [voit, [SDL_Window_ptr, uchar]],
    SDL_SetWindowMinimumSize: [voit, [SDL_Window_ptr, int32, int32]],
    SDL_GetWindowMinimumSize: [voit, [SDL_Window_ptr, int32_ptr, int32_ptr]],
    SDL_SetWindowMaximumSize: [voit, [SDL_Window_ptr, int32, int32]],
    SDL_GetWindowMaximumSize: [voit, [SDL_Window_ptr, int32_ptr, int32_ptr]],
    SDL_SetWindowBordered: [voit, [SDL_Window_ptr, uint32]],
    SDL_ShowWindow: [voit, [SDL_Window_ptr]],
    SDL_HideWindow: [voit, [SDL_Window_ptr]],
    SDL_RaiseWindow: [voit, [SDL_Window_ptr]],
    SDL_MaximizeWindow: [voit, [SDL_Window_ptr]],
    SDL_MinimizeWindow: [voit, [SDL_Window_ptr]],
    SDL_RestoreWindow: [voit, [SDL_Window_ptr]],
    SDL_SetWindowFullscreen: [int32, [SDL_Window_ptr, Uint32]],
    SDL_GetWindowSurface: [SDL_Surface_ptr, [SDL_Window_ptr]],
    SDL_UpdateWindowSurface: [int32, [SDL_Window_ptr]],
    SDL_UpdateWindowSurfaceRects: [int32, [SDL_Window_ptr, SDL_Rect_ptr, int32]],
    SDL_SetWindowGrab: [voit, [SDL_Window_ptr, uint32]],
    SDL_GetWindowGrab: [uint32, [SDL_Window_ptr]],
    SDL_GetGrabbedWindow: [SDL_Window_ptr, []],
    SDL_SetWindowBrightness: [int32, [SDL_Window_ptr, float]],
    SDL_GetWindowBrightness: [float, [SDL_Window_ptr]],
    SDL_SetWindowGammaRamp: [int32, [SDL_Window_ptr, Uint16_ptr, Uint16_ptr, Uint16_ptr]],
    SDL_GetWindowGammaRamp: [int32, [SDL_Window_ptr, Uint16_ptr, Uint16_ptr, Uint16_ptr]],
    SDL_SetWindowHitTest: [int32, [SDL_Window_ptr, SDL_HitTest, voit_ptr]],
    SDL_DestroyWindow: [voit, [SDL_Window_ptr]],
    SDL_IsScreenSaverEnabled: [uint32, []],
    SDL_EnableScreenSaver: [voit, []],
    SDL_DisableScreenSaver: [voit, []],
    SDL_GL_LoadLibrary: [int32, [string]],
    SDL_GL_GetProcAddress: [voit_ptr, [string]],
    SDL_GL_UnloadLibrary: [voit, []],
    SDL_GL_ExtensionSupported: [uint32, [string]],
    SDL_GL_ResetAttributes: [voit, []],
    SDL_GL_SetAttribute: [int32, [uint32, int32]],
    SDL_GL_GetAttribute: [int32, [uint32, int32_ptr]],
    SDL_GL_CreateContext: [SDL_GLContext, [SDL_Window_ptr]],
    SDL_GL_MakeCurrent: [int32, [SDL_Window_ptr, SDL_GLContext]],
    SDL_GL_GetCurrentWindow: [SDL_Window_ptr, []],
    SDL_GL_GetCurrentContext: [SDL_GLContext, []],
    SDL_GL_GetDrawableSize: [voit, [SDL_Window_ptr, int32_ptr, int32_ptr]],
    SDL_GL_SetSwapInterval: [int32, [int32]],
    SDL_GL_GetSwapInterval: [int32, []],
    SDL_GL_SwapWindow: [voit, [SDL_Window_ptr]],
    SDL_GL_DeleteContext: [voit, [SDL_GLContext]],
}, SDL);
