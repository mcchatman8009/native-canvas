import {Rgba} from '../color/rgba';
import {createSDL_RectPtr, SDL_Point_ptr, SDL_Rect_ptr} from './sdl-rect';
import {Rect} from '../shape/rect';
import {loadLibrary} from './lib-loader';
import {
    bool,
    double,
    float,
    float_ptr, int32,
    int32_ptr, string, uint32, Uint32,
    uint32_ptr,
    Uint32_ptr,
    Uint8,
    Uint8_ptr, voit,
    voit_ptr,
    voit_ptr_ptr
} from './types';
import {SDL_Surface_ptr} from './sdl-surface';
import {SDL_Window_ptr} from './sdl-video';


const FFI = require('ffi-napi');
const ref = require('ref-napi');
const ArrayType = require('ref-array-di')(ref);
const Struct = require('ref-struct-di')(ref);
const Union = require('ref-union-di')(ref);

const SDL = {} as any;

export enum SDL_RendererFlags {
    SDL_RENDERER_SOFTWARE = 0x00000001,
    SDL_RENDERER_ACCELERATED = 0x00000002,
    SDL_RENDERER_PRESENTVSYNC = 0x00000004,
    SDL_RENDERER_TARGETTEXTURE = 0x00000008
}

export enum SDL_BlendMode {
    SDL_BLENDMODE_NONE = 0,
    SDL_BLENDMODE_BLEND = 1,
    SDL_BLENDMODE_ADD = 2,
    SDL_BLENDMODE_MOD = 4
}

export const SDL_TEXTUREACCESS_STATIC = 0x0;
export const SDL_TEXTUREACCESS_STREAMING = 0x1;
export const SDL_TEXTUREACCESS_TARGET = 0x2;

// SDL_SetTextureBlendMode( mTexture, blending );
export function SDL_SetTextureBlendMode(texture: any, blendMode: number) {
    return SDL.SDL_SetTextureBlendMode(texture, blendMode);
}

export function SDL_CreateSoftwareRenderer(surfacePtr: any) {
    return SDL.SDL_CreateSoftwareRenderer(surfacePtr);
}

export function SDL_RenderCopy(rendererPtr: any, texturePtr: any, src: Rect, dest: Rect): number {
    if (src) {
        src = createSDL_RectPtr(src);
    }

    if (dest) {
        dest = createSDL_RectPtr(dest);
    }

    return SDL.SDL_RenderCopy(rendererPtr, texturePtr, src, dest);
}

export function SDL_CreateRenderer(windowPtr: any, driver: number, flags: number): any {
    const renderPtr = SDL.SDL_CreateRenderer(windowPtr, driver, flags);
    return renderPtr;
}

export function SDL_SetRenderTarget(rendererPtr: any, texturePtr: any) {
    return SDL.SDL_SetRenderTarget(rendererPtr, texturePtr);
}

export function SDL_GetRenderTarget(rendererPtr: any): any {
    return SDL.SDL_GetRenderTarget(rendererPtr);
}

export function SDL_GetRenderDrawColor(rendererPtr: any, rgba: Rgba): Rgba {
    const r = ref.alloc('uint8');
    const g = ref.alloc('uint8');
    const b = ref.alloc('uint8');
    const a = ref.alloc('uint8');

    SDL.SDL_GetRenderDrawColor(rendererPtr, r, g, b, a);

    rgba.r = r.deref();
    rgba.g = g.deref();
    rgba.b = b.deref();
    rgba.a = a.deref();


    return rgba;
}

export function SDL_SetRenderDrawColor(rendererPtr: any, r: number, g: number, b: number, a: number): number {
    return SDL.SDL_SetRenderDrawColor(rendererPtr, r, g, b, a);
}

export function SDL_RenderPresent(rendererPtr: any) {
    SDL.SDL_RenderPresent(rendererPtr);
}

export function SDL_DestroyRenderer(rendererPtr: any) {
    SDL.SDL_DestroyRenderer(rendererPtr);
}

export function SDL_RenderClear(rendererPtr: any): number {
    return SDL.SDL_RenderClear(rendererPtr);
}

export function SDL_DestroyTexture(texturePtr: any): number {
    return SDL.SDL_DestroyTexture(texturePtr);
}

export function SDL_RenderGetLogicalSize(rendererPtr: any): { w: number, h: number } {
    const w = ref.alloc('int');
    const h = ref.alloc('int');
    SDL.SDL_RenderGetLogicalSize(rendererPtr, w, h);

    return {w: w.deref(), h: h.deref()};
}

export function SDL_GetRendererOutputSize(rendererPtr: any): { w: number, h: number } {
    const w = ref.alloc('int');
    const h = ref.alloc('int');
    SDL.SDL_GetRendererOutputSize(rendererPtr, w, h);

    return {w: w.deref(), h: h.deref()};
}

export function SDL_RenderGetIntegerScale(rendererPtr: any): boolean {
    return !!SDL.SDL_RenderGetIntegerScale(rendererPtr);
}

export function SDL_RenderGetScale(renderPtr: any): { x: number, y: number } {
    const x = ref.alloc('float');
    const y = ref.alloc('float');
    SDL.SDL_RenderGetScale(renderPtr, x, y);

    return {x: x.deref(), y: y.deref()};
}

export function SDL_RenderSetScale(renderPtr: any, x: number, y: number) {
    return SDL.SDL_RenderSetScale(renderPtr, x, y);
}

export function SDL_RenderSetLogicalSize(renderPtr: any, w: number, h: number) {
    return SDL.SDL_RenderSetLogicalSize(renderPtr, w, h);
}

export function SDL_UpdateTexture(texturePtr: any, rect: Rect, pixels: Buffer, pitch: number) {
    const rectPtr = (rect) ? createSDL_RectPtr(rect) : null;
    return SDL.SDL_UpdateTexture(texturePtr, rectPtr, pixels, pitch);
}

export function SDL_QueryTexture(texturePtr: any): { format: number, access: number, x: number, y: number, w: number, h: number } {
    const format = ref.alloc('uint32');
    const access = ref.alloc('int');
    const w = ref.alloc('int');
    const h = ref.alloc('int');

    SDL.SDL_QueryTexture(texturePtr, format, access, w, h);

    return {
        format: format.deref(),
        access: access.deref(),
        x: 0,
        y: 0,
        w: w.deref(),
        h: h.deref()
    };
}

export function SDL_CreateTexture(rendererPtr: any, format: number, access: number, w: number, h: number) {
    return SDL.SDL_CreateTexture(rendererPtr, format, +access, +w, +h);
}

export const SDL_RendererInfo = Struct({
    name: string,
    flags: Uint32,
    num_texture_formats: Uint32,
    texture_formats: ArrayType(Uint32, 16),
    max_texture_width: int32,
    max_texture_height: int32,
});

export const SDL_Renderer = voit;

export const SDL_Texture = voit;

export const SDL_RendererInfo_ptr = ref.refType(SDL_RendererInfo);

export const SDL_Window_ptr_ptr = ref.refType(SDL_Window_ptr);

export const SDL_Renderer_ptr = ref.refType(SDL_Renderer);

export const SDL_Renderer_ptr_ptr = ref.refType(SDL_Renderer_ptr);

export const SDL_Texture_ptr = ref.refType(SDL_Texture);

loadLibrary({
    SDL_GetNumRenderDrivers: [int32, []],
    SDL_GetRenderDriverInfo: [int32, [int32, SDL_RendererInfo_ptr]],
    SDL_CreateWindowAndRenderer: [int32, [int32, int32, Uint32, SDL_Window_ptr_ptr, SDL_Renderer_ptr_ptr]],
    SDL_CreateRenderer: [SDL_Renderer_ptr, [SDL_Window_ptr, int32, Uint32]],
    SDL_CreateSoftwareRenderer: [SDL_Renderer_ptr, [SDL_Surface_ptr]],
    SDL_GetRenderer: [SDL_Renderer_ptr, [SDL_Window_ptr]],
    SDL_GetRendererInfo: [int32, [SDL_Renderer_ptr, SDL_RendererInfo_ptr]],
    SDL_RenderGetIntegerScale: [bool, [SDL_Renderer_ptr]],
    SDL_GetRendererOutputSize: [int32, [SDL_Renderer_ptr, int32_ptr, int32_ptr]],
    SDL_CreateTexture: [SDL_Texture_ptr, [SDL_Renderer_ptr, Uint32, int32, int32, int32]],
    SDL_CreateTextureFromSurface: [SDL_Texture_ptr, [SDL_Renderer_ptr, SDL_Surface_ptr]],
    SDL_QueryTexture: [int32, [SDL_Texture_ptr, Uint32_ptr, int32_ptr, int32_ptr, int32_ptr]],
    SDL_SetTextureColorMod: [int32, [SDL_Texture_ptr, Uint8, Uint8, Uint8]],
    SDL_GetTextureColorMod: [int32, [SDL_Texture_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr]],
    SDL_SetTextureAlphaMod: [int32, [SDL_Texture_ptr, Uint8]],
    SDL_GetTextureAlphaMod: [int32, [SDL_Texture_ptr, Uint8_ptr]],
    SDL_SetTextureBlendMode: [int32, [SDL_Texture_ptr, uint32]],
    SDL_GetTextureBlendMode: [int32, [SDL_Texture_ptr, uint32_ptr]],
    SDL_UpdateTexture: [int32, [SDL_Texture_ptr, SDL_Rect_ptr, voit_ptr, int32]],
    SDL_UpdateYUVTexture: [int32, [SDL_Texture_ptr, SDL_Rect_ptr, Uint8_ptr, int32, Uint8_ptr, int32, Uint8_ptr, int32]],
    SDL_LockTexture: [int32, [SDL_Texture_ptr, SDL_Rect_ptr, voit_ptr_ptr, int32_ptr]],
    SDL_UnlockTexture: [voit, [SDL_Texture_ptr]],
    SDL_RenderTargetSupported: [uint32, [SDL_Renderer_ptr]],
    SDL_SetRenderTarget: [int32, [SDL_Renderer_ptr, SDL_Texture_ptr]],
    SDL_GetRenderTarget: [SDL_Texture_ptr, [SDL_Renderer_ptr]],
    SDL_RenderSetLogicalSize: [int32, [SDL_Renderer_ptr, int32, int32]],
    SDL_RenderGetLogicalSize: [voit, [SDL_Renderer_ptr, int32_ptr, int32_ptr]],
    SDL_RenderSetViewport: [int32, [SDL_Renderer_ptr, SDL_Rect_ptr]],
    SDL_RenderGetViewport: [voit, [SDL_Renderer_ptr, SDL_Rect_ptr]],
    SDL_RenderSetClipRect: [int32, [SDL_Renderer_ptr, SDL_Rect_ptr]],
    SDL_RenderGetClipRect: [voit, [SDL_Renderer_ptr, SDL_Rect_ptr]],
    SDL_RenderIsClipEnabled: [uint32, [SDL_Renderer_ptr]],
    SDL_RenderSetScale: [int32, [SDL_Renderer_ptr, float, float]],
    SDL_RenderGetScale: [voit, [SDL_Renderer_ptr, float_ptr, float_ptr]],
    SDL_SetRenderDrawColor: [int32, [SDL_Renderer_ptr, Uint8, Uint8, Uint8, Uint8]],
    SDL_GetRenderDrawColor: [int32, [SDL_Renderer_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr]],
    SDL_SetRenderDrawBlendMode: [int32, [SDL_Renderer_ptr, uint32]],
    SDL_GetRenderDrawBlendMode: [int32, [SDL_Renderer_ptr, uint32_ptr]],
    SDL_RenderClear: [int32, [SDL_Renderer_ptr]],
    SDL_RenderDrawPoint: [int32, [SDL_Renderer_ptr, int32, int32]],
    SDL_RenderDrawPoints: [int32, [SDL_Renderer_ptr, SDL_Point_ptr, int32]],
    SDL_RenderDrawLine: [int32, [SDL_Renderer_ptr, int32, int32, int32, int32]],
    SDL_RenderDrawLines: [int32, [SDL_Renderer_ptr, SDL_Point_ptr, int32]],
    SDL_RenderDrawRect: [int32, [SDL_Renderer_ptr, SDL_Rect_ptr]],
    SDL_RenderDrawRects: [int32, [SDL_Renderer_ptr, SDL_Rect_ptr, int32]],
    SDL_RenderFillRect: [int32, [SDL_Renderer_ptr, SDL_Rect_ptr]],
    SDL_RenderFillRects: [int32, [SDL_Renderer_ptr, SDL_Rect_ptr, int32]],
    SDL_RenderCopy: [int32, [SDL_Renderer_ptr, SDL_Texture_ptr, SDL_Rect_ptr, SDL_Rect_ptr]],
    SDL_RenderCopyEx: [int32, [SDL_Renderer_ptr, SDL_Texture_ptr, SDL_Rect_ptr, SDL_Rect_ptr, double, SDL_Point_ptr, uint32]],
    SDL_RenderReadPixels: [int32, [SDL_Renderer_ptr, SDL_Rect_ptr, Uint32, voit_ptr, int32]],
    SDL_RenderPresent: [voit, [SDL_Renderer_ptr]],
    SDL_DestroyTexture: [voit, [SDL_Texture_ptr]],
    SDL_DestroyRenderer: [voit, [SDL_Renderer_ptr]],
    SDL_GL_BindTexture: [int32, [SDL_Texture_ptr, float_ptr, float_ptr]],
    SDL_GL_UnbindTexture: [int32, [SDL_Texture_ptr]],
}, SDL);
