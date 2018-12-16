import {Rgba} from '../color/rgba';
import {SdlRenderer} from './sdl-renderer';
import {SdlTexture} from './sdl-texture';
import {
    SDL_RenderCopy,
    SDL_TEXTUREACCESS_STATIC,
    SDL_TEXTUREACCESS_STREAMING,
    SDL_TEXTUREACCESS_TARGET, SDL_UpdateTexture
} from '../sdl';
import {Rect} from '../shape/rect';

export class SdlContext2d {
    private color: Rgba;
    private textureFormat: number;
    width: number;
    height: number;
    x: number;
    y: number;
    srcRect: Rect;
    destRect: Rect;
    texture: SdlTexture;

    constructor(private renderer: SdlRenderer) {
        this.x = 0;
        this.y = 0;
        this.textureFormat = SdlTexture.getARGBFormat();
        this.color = Rgba.createWhite();
        this.texture = null;
        this.srcRect = {x: 0, y: 0, w: 0, h: 0};
        this.destRect = {x: 0, y: 0, w: 0, h: 0};
    }

    renderFrame(pixels: Buffer, pixelWidth: number, pixelHeight: number): void {
        if (this.texture) {
            this.setRgba(this.color);
            this.clear();

            //
            // pixels are in the ARGB32 format
            //
            this.texture.update(0, 0, pixelWidth, pixelHeight, pixels);

            pixelWidth = this.width < pixelWidth ? this.width : pixelWidth;
            pixelHeight = (this.height < pixelHeight) ? this.height : pixelHeight;

            this.srcRect.x = 0;
            this.srcRect.y = 0;
            this.srcRect.w = pixelWidth;
            this.srcRect.h = pixelHeight;

            this.destRect.x = this.x;
            this.destRect.y = this.y;
            this.destRect.w = pixelWidth;
            this.destRect.h = pixelHeight;

            this.renderer.copy(this.texture, this.srcRect, this.destRect);
            this.update();
        }
    }

    destroy() {
        this.renderer.destroy();
        this.renderer = null;
    }

    private clear() {
        this.renderer.clear();
    }

    update() {
        this.renderer.present();
    }

    setSize(w: number, h: number) {
        if (this.texture) {
            this.texture.destroy();
            this.texture = null;
        }

        this.texture = this.createDynamicTexture(this.textureFormat);
        this.renderer.size = {w, h};
        this.width = w;
        this.height = h;
    }

    getSize(): { w: number, h: number } {
        return this.renderer.size;
    }

    private setRgba(rgba: Rgba): void {
        /*tslint:disable*/
        this.color = rgba;
        this.renderer.color = rgba;
        /*tslint:enable*/
    }

    private createDynamicTexture(format: number): SdlTexture {
        // const size = this.getSize();
        return this.renderer.createTexture(this.width, this.height, SDL_TEXTUREACCESS_STREAMING, format);
    }

    private createStaticTexture(format: number): SdlTexture {
        // const size = this.getSize();
        return this.renderer.createTexture(this.width, this.height, SDL_TEXTUREACCESS_STATIC, format);
    }

    private createRendererTexture(): SdlTexture {
        // const size = this.getSize();
        return this.renderer.createTexture(this.width, this.height, SDL_TEXTUREACCESS_TARGET);
    }
}
