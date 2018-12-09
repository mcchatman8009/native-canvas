const NodeCanvasImage = require('canvas').Image;

export class Image {
    private image: any;

    constructor() {
        this.image = new NodeCanvasImage();
    }

    get width(): number {
        return this.image.width;
    }

    get height(): number {
        return this.image.height;
    }

    get imageImplementation(): any {
        return this.image;
    }

    get onload(): () => void {
        return this.image.onload;
    }

    set onload(onload: () => void) {
        this.image.onload = onload;
    }

    get src() {
        return this.image.src as string;
    }

    set src(src: string) {
        this.image.src = src;
    }

}

