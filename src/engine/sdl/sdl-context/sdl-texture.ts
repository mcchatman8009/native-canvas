import {
    SDL_BlendMode, SDL_CreateRGBSurfaceFrom,
    SDL_CreateTexture, SDL_CreateTextureFromSurface,
    SDL_DestroyTexture, SDL_FreeSurface,
    SDL_MasksToPixelFormatEnum,
    SDL_QueryTexture, SDL_SetTextureBlendMode,
    SDL_UpdateTexture
} from '../sdl';
import {Rect} from '../shape/rect';

export class SdlTexture {
    rect: Rect;

    constructor(public _texturePtr: any) {
        SDL_SetTextureBlendMode(this._texturePtr, SDL_BlendMode.SDL_BLENDMODE_BLEND);
        this.rect = {x: 0, y: 0, w: 0, h: 0};
    }

    destroy() {
        SDL_DestroyTexture(this._texturePtr);
    }


    update(x: number, y: number, width: number, height: number, pixels: Buffer): any {
        const depth = 4;
        const pitch = depth * width;

        this.rect.x = x;
        this.rect.y = y;
        this.rect.w = width;
        this.rect.h = height;

        SDL_UpdateTexture(this._texturePtr, this.rect, pixels, pitch);
    }

    query() {
        return SDL_QueryTexture(this._texturePtr);
    }

    get texturePtr(): any {
        return this._texturePtr;
    }

    static createTexture(rendererPtr: any, w: number, h: number, access = 2, format?: number): SdlTexture {
        format = format !== undefined ? format : null;
        const texturePtr = SDL_CreateTexture(rendererPtr, format, access, w, h);

        return new SdlTexture(texturePtr);
    }

    static createARGBSurface(pixels: any, width: number, height: number): any {
        const rmask = 0x00FF0000;
        const gmask = 0x0000FF00;
        const bmask = 0x000000FF;
        const amask = 0xFF000000;
        const depth = 32;
        const pitch = 4 * width;

        const surfacePtr = SDL_CreateRGBSurfaceFrom(pixels, width, height, depth, pitch, rmask, gmask, bmask, amask);
        return surfacePtr;
    }

    static createARGBTexture(pixels: any, width: number, height: number, rendererPtr: any): any {
        const rmask = 0x00FF0000;
        const gmask = 0x0000FF00;
        const bmask = 0x000000FF;
        const amask = 0xFF000000;
        const depth = 32;
        const pitch = 4 * width;

        const surfacePtr = SDL_CreateRGBSurfaceFrom(pixels, width, height, depth, pitch, rmask, gmask, bmask, amask);

        const texturePtr = SDL_CreateTextureFromSurface(rendererPtr, surfacePtr);

        SDL_FreeSurface(surfacePtr);

        return new SdlTexture(texturePtr);
    }

    static getARGBFormat(): number {
        const bpp = 32;
        const rmask = 0x00FF0000;
        const gmask = 0x0000FF00;
        const bmask = 0x000000FF;
        const amask = 0xFF000000;
        /*
             SDL_PIXELFORMAT_ARGB8888
            (Rmask == 0x00FF0000 && Gmask == 0x0000FF00 && Bmask == 0x000000FF && Amask == 0xFF000000)
         */
        const format = SDL_MasksToPixelFormatEnum(bpp, rmask, gmask, bmask, amask);

        return format;
    }

}
