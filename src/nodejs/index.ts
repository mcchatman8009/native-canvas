import {NativeWindow} from '../window/native-window';
import {WindowOptions} from '../window/window-options';
import * as engine from '../engine';

const NodeCanvasImage = require('canvas').Image;

const ENGINE_NAME = 'sdl';

export * from '../engine/sdl/image/image';

export * from '../engine/sdl/canvas/sdl-context';
export * from '../engine/sdl/canvas/sdl-canvas';

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
    return engine.createWindow(ENGINE_NAME, opts);

}
