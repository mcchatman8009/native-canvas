import {SdlTexture} from './sdl-texture';
import {Rgba} from '../color/rgba';
import {
    SDL_CreateRenderer,
    SDL_CreateSoftwareRenderer,
    SDL_DestroyRenderer,
    SDL_GetRenderDrawColor,
    SDL_GetRendererOutputSize,
    SDL_GetRenderTarget,
    SDL_RenderClear,
    SDL_RenderCopy,
    SDL_RendererFlags,
    SDL_RenderGetLogicalSize,
    SDL_RenderPresent,
    SDL_RenderSetLogicalSize,
    SDL_SetRenderDrawColor,
    SDL_SetRenderTarget
} from '../sdl';
import {Rect} from '../shape/rect';

export class SdlRenderer {
    private _color: Rgba;

    constructor(private _rendererPtr: any) {
        this._color = Rgba.createWhite();
    }

    destroy(): void {
        SDL_DestroyRenderer(this._rendererPtr);
    }

    clear(): void {
        SDL_RenderClear(this._rendererPtr);
    }

    copy(tt: SdlTexture, src: Rect, dest: Rect): void {
        SDL_RenderCopy(this._rendererPtr, tt._texturePtr, src, dest);
    }

    present() {
        SDL_RenderPresent(this._rendererPtr);
    }

    createTexture(w: number, h: number, access = 2, format?: number) {
        return SdlTexture.createTexture(this.rendererPtr, w, h, access, format);
    }

    get color(): Rgba {
        SDL_GetRenderDrawColor(this._rendererPtr, this._color);
        return this._color;
    }

    set color(rgba: Rgba) {
        SDL_SetRenderDrawColor(this._rendererPtr, rgba.r, rgba.g, rgba.b, rgba.a);
    }

    set size(size: { w: number, h: number }) {
        SDL_RenderSetLogicalSize(this._rendererPtr, size.w, size.h);
    }

    get size(): { w: number, h: number } {
        return SDL_RenderGetLogicalSize(this._rendererPtr);
    }

    get outputSize(): { w: number, h: number } {
        return SDL_GetRendererOutputSize(this._rendererPtr);
    }

    get target(): SdlTexture {
        const texturePtr = SDL_GetRenderTarget(this._rendererPtr);
        return new SdlTexture(texturePtr);
    }

    set target(texture: SdlTexture) {
        if (texture === null) {
            SDL_SetRenderTarget(this._rendererPtr, null);
        } else {
            SDL_SetRenderTarget(this._rendererPtr, texture._texturePtr);
        }
    }

    get rendererPtr(): any {
        return this._rendererPtr;
    }

    static createRenderer(windowPtr: any, driver: number): SdlRenderer {
        const renderPtr = SDL_CreateRenderer(windowPtr, driver, SDL_RendererFlags.SDL_RENDERER_ACCELERATED | SDL_RendererFlags.SDL_RENDERER_PRESENTVSYNC);
        return new SdlRenderer(renderPtr);
    }

    static createSoftwareRenderer(windowPtr: any, surfacePtr: any): SdlRenderer {
        const renderPtr = SDL_CreateSoftwareRenderer(surfacePtr);
        return new SdlRenderer(renderPtr);
    }
}
