import {Rgba} from '../color/rgba';
import {createSDL_RectPtr} from './sdl-rect';
import {Rect} from '../shape/rect';

const SDL_render = require('../sdl-shim/SDL_render');
const ref = require('ref');

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
    return SDL_render.SDL_SetTextureBlendMode(texture, blendMode);
}

export function SDL_CreateSoftwareRenderer(surfacePtr: any) {
    return SDL_render.SDL_CreateSoftwareRenderer(surfacePtr);
}

export function SDL_RenderCopy(rendererPtr: any, texturePtr: any, src: Rect, dest: Rect): number {
    if (src) {
        src = createSDL_RectPtr(src);
    }

    if (dest) {
        dest = createSDL_RectPtr(dest);
    }

    return SDL_render.SDL_RenderCopy(rendererPtr, texturePtr, src, dest);
}

export function SDL_CreateRenderer(windowPtr: any, driver: number, flags: number): any {
    const renderPtr = SDL_render.SDL_CreateRenderer(windowPtr, driver, flags);
    return renderPtr;
}

export function SDL_SetRenderTarget(rendererPtr: any, texturePtr: any) {
    return SDL_render.SDL_SetRenderTarget(rendererPtr, texturePtr);
}

export function SDL_GetRenderTarget(rendererPtr: any): any {
    return SDL_render.SDL_GetRenderTarget(rendererPtr);
}

export function SDL_GetRenderDrawColor(rendererPtr: any, rgba: Rgba): Rgba {
    const r = ref.alloc('uint8');
    const g = ref.alloc('uint8');
    const b = ref.alloc('uint8');
    const a = ref.alloc('uint8');

    SDL_render.SDL_GetRenderDrawColor(rendererPtr, r, g, b, a);

    rgba.r = r.deref();
    rgba.g = g.deref();
    rgba.b = b.deref();
    rgba.a = a.deref();


    return rgba;
}

export function SDL_SetRenderDrawColor(rendererPtr: any, r: number, g: number, b: number, a: number): number {
    return SDL_render.SDL_SetRenderDrawColor(rendererPtr, r, g, b, a);
}

export function SDL_RenderPresent(rendererPtr: any) {
    SDL_render.SDL_RenderPresent(rendererPtr);
}

export function SDL_DestroyRenderer(rendererPtr: any) {
    SDL_render.SDL_DestroyRenderer(rendererPtr);
}

export function SDL_RenderClear(rendererPtr: any): number {
    return SDL_render.SDL_RenderClear(rendererPtr);
}

export function SDL_DestroyTexture(texturePtr: any): number {
    return SDL_render.SDL_DestroyTexture(texturePtr);
}

export function SDL_RenderGetLogicalSize(rendererPtr: any): { w: number, h: number } {
    const w = ref.alloc('int');
    const h = ref.alloc('int');
    SDL_render.SDL_RenderGetLogicalSize(rendererPtr, w, h);

    return {w: w.deref(), h: h.deref()};
}

export function SDL_GetRendererOutputSize(rendererPtr: any): { w: number, h: number } {
    const w = ref.alloc('int');
    const h = ref.alloc('int');
    SDL_render.SDL_GetRendererOutputSize(rendererPtr, w, h);

    return {w: w.deref(), h: h.deref()};
}

export function SDL_RenderGetIntegerScale(rendererPtr: any): boolean {
    return !!SDL_render.SDL_RenderGetIntegerScale(rendererPtr);
}

export function SDL_RenderGetScale(renderPtr: any): { x: number, y: number } {
    const x = ref.alloc('float');
    const y = ref.alloc('float');
    SDL_render.SDL_RenderGetScale(renderPtr, x, y);

    return {x: x.deref(), y: y.deref()};
}

export function SDL_RenderSetScale(renderPtr: any, x: number, y: number) {
    return SDL_render.SDL_RenderSetScale(renderPtr, x, y);
}

export function SDL_RenderSetLogicalSize(renderPtr: any, w: number, h: number) {
    return SDL_render.SDL_RenderSetLogicalSize(renderPtr, w, h);
}

export function SDL_UpdateTexture(texturePtr: any, rect: Rect, pixels: Buffer, pitch: number) {
    const rectPtr = createSDL_RectPtr(rect);
    return SDL_render.SDL_UpdateTexture(texturePtr, rectPtr, pixels, pitch);
}

export function SDL_QueryTexture(texturePtr: any): { format: number, access: number, x: number, y: number, w: number, h: number } {
    const format = ref.alloc('uint32');
    const access = ref.alloc('int');
    const w = ref.alloc('int');
    const h = ref.alloc('int');

    SDL_render.SDL_QueryTexture(texturePtr, format, access, w, h);

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
    return SDL_render.SDL_CreateTexture(rendererPtr, format, +access, +w, +h);
}

