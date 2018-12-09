import {Rgba} from '../color/rgba';
import {SdlRenderer} from './sdl-renderer';
import {SdlTexture} from './sdl-texture';
import {
    SDL_TEXTUREACCESS_STATIC,
    SDL_TEXTUREACCESS_STREAMING,
    SDL_TEXTUREACCESS_TARGET
} from '../sdl';

export class SdlContext2d {
    private color: Rgba;
    private textureFormat: number;
    width: number;
    height: number;
    x: number;
    y: number;

    constructor(private renderer: SdlRenderer) {
        this.x = 0;
        this.y = 0;
        this.textureFormat = SdlTexture.getARGBFormat();
        this.color = Rgba.createWhite();
    }

    setTextureTarget(textureTarget: SdlTexture): void {
        this.renderer.target = textureTarget;
    }

    renderFrame(pixels: Buffer, pixelWidth: number, pixelHeight: number): void {
        const frame = this.createStaticTexture(this.textureFormat);

        this.setRgba(this.color);
        this.clear();

        //
        // pixels are in the ARGB32 format
        //
        frame.update(0, 0, pixelWidth, pixelHeight, pixels);

        pixelWidth = this.width < pixelWidth ? this.width : pixelWidth;
        pixelHeight = (this.height < pixelHeight) ? this.height : pixelHeight;

        const srcRect = {x: 0, y: 0, w: pixelWidth, h: pixelHeight};
        const destRect = {x: this.x, y: this.y, w: pixelWidth, h: pixelHeight};

        this.renderer.copy(frame, srcRect, destRect);

        this.update();

        frame.destroy();
    }

    destroy() {
        // this.textureBuffer.destroy();
        // this.textureBuffer = null;

        this.renderer.destroy();
        this.renderer = null;
    }

    private clear() {
        this.renderer.clear();
    }


    update() {
        // this.setTextureTarget(null);
        // this.present(this.textureBuffer);
        this.renderer.present();
        // this.setTextureTarget(this.textureBuffer);
    }

    present(texture: SdlTexture) {
        const srcRect = {x: 0, y: 0, w: this.width, h: this.height};
        const destRect = {x: 0, y: 0, w: this.width, h: this.height};
        this.renderer.copy(texture, srcRect, destRect);
        this.renderer.present();
    }

    setSize(w: number, h: number) {
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
        const size = this.getSize();
        return this.renderer.createTexture(size.w, size.h, SDL_TEXTUREACCESS_STREAMING, format);
    }

    private createStaticTexture(format: number): SdlTexture {
        const size = this.getSize();
        return this.renderer.createTexture(size.w, size.h, SDL_TEXTUREACCESS_STATIC, format);
    }

    private createRendererTexture(): SdlTexture {
        const size = this.getSize();
        return this.renderer.createTexture(size.w, size.h, SDL_TEXTUREACCESS_TARGET);
    }
}
