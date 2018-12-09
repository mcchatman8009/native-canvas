const parseRgba = require('color-rgba');

export class Rgba {
    r: number;
    g: number;
    b: number;
    a: number;

    clone() {
        const color = new Rgba();

        color.r = this.r;
        color.g = this.g;
        color.b = this.b;
        color.a = this.a;

        return color;
    }

    static createWhite(): Rgba {
        const color = new Rgba();

        color.r = 255;
        color.g = 255;
        color.b = 255;
        color.a = 255;

        return color;
    }

    static createBlack(): Rgba {
        const color = new Rgba();

        color.r = 0;
        color.g = 0;
        color.b = 0;
        color.a = 255;

        return color;
    }

    static parse(rgb: number | string): Rgba {
        const color = new Rgba();

        if (typeof rgb === 'number') {
            /*tslint:disable*/
            const color = new Rgba();
            color.r = (rgb >> 16) & 0xFF;
            color.g = (rgb >> 8) & 0xFF;
            color.b = rgb & 0xFF;
            color.a = 255;
            /*tslint:enable*/

        } else if (typeof rgb === 'string') {
            if (Rgba._HexRE.test(rgb)) {
                const hex = rgb.replace('#', '').trim();
                const num = parseInt(hex, 16);
                /*tslint:disable*/
                color.r = (num >> 16) & 0xFF;
                color.g = (num >> 8) & 0xFF;
                color.b = num & 0xFF;
                color.a = 255;
                /*tslint:enable*/
            } else {
                const list = parseRgba(rgb) as number[];

                color.r = list[0];
                color.g = list[1];
                color.b = list[2];
                color.a = list[3] * 255;
            }
        }

        return color;
    }

    private static _HexRE = /[0-9A-Fa-f]+/;
}

