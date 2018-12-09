import {
    SDL_BlendMode,
    SDL_CreateTexture,
    SDL_DestroyTexture,
    SDL_MasksToPixelFormatEnum,
    SDL_QueryTexture, SDL_SetTextureBlendMode,
    SDL_UpdateTexture
} from '../sdl';

export class SdlTexture {
    constructor(public _texturePtr: any) {
        SDL_SetTextureBlendMode(this._texturePtr, SDL_BlendMode.SDL_BLENDMODE_BLEND);
    }

    destroy() {
        SDL_DestroyTexture(this._texturePtr);
    }


    update(x: number, y: number, width: number, height: number, pixels: Buffer): any {
        const pitch = 4 * width;
        SDL_UpdateTexture(this._texturePtr, {x, y, w: width, h: height}, pixels, pitch);
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
