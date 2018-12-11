import {NativeWindow} from '../window/native-window';
import {NativeCanvas} from '../dom/native-canvas';
import {WindowOptions} from '../window/window-options';
import * as engine from '../engine';

const NodeCanvasImage = require('canvas').Image;
const {loadImage} = require('canvas');

const ENGINE_NAME = 'sdl';

export * from '../image/image';

export function createDefaults(): WindowOptions {
    return engine.defaultWindowOptions(ENGINE_NAME);
}

export function confirm(message?: string): boolean {
    return engine.confirm(ENGINE_NAME, message);
}

export function cancelAnimationFrame(request: number): void {
    engine.cancelAnimationFrame(ENGINE_NAME, request);
}

export function requestAnimationFrame(callback: FrameRequestCallback): void {
    engine.requestAnimationFrame(ENGINE_NAME, callback);
}

export function alert(message?: string): void {
    engine.alert(ENGINE_NAME, message);
}

export function createWindow(opts?: WindowOptions): NativeWindow {
    if (opts === null || opts === undefined) {
        opts = engine.defaultWindowOptions(ENGINE_NAME);
    } else {
        opts = {...engine.defaultWindowOptions(ENGINE_NAME), ...opts};
    }

    const window = engine.createWindow(ENGINE_NAME, opts);

    return window;
}

export function createCanvas(window?: (NativeWindow | string), windowOptions?: WindowOptions): HTMLCanvasElement {
    if (typeof  window === 'string') {
        const opts = windowOptions || createDefaults();

        opts.title = window;
        window = createWindow(opts);
        return new NativeCanvas(window);
    } else {
        return new NativeCanvas(window);
    }
}

export function createImage(src: string): Promise<HTMLImageElement> {
    if (src) {
        return loadImage(src) as Promise<HTMLImageElement>;
    } else {
        return Promise.resolve(new NodeCanvasImage() as HTMLImageElement);
    }
}
