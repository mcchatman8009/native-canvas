import {WindowOptions} from '../window/window-options';
import * as SDL from './sdl';
import {NativeWindow} from '../window/native-window';

export function cancelAnimationFrame(engine: string, request: number): void {
    switch (engine) {
        case 'sdl':
            SDL.cancelAnimationFrame(request);
            return;
    }

    throw new ReferenceError(`Unknown engine ${engine}`);
}

export function requestAnimationFrame(engine: string, callback: FrameRequestCallback): number {
    switch (engine) {
        case 'sdl':
            return SDL.requestAnimationFrame(callback);
    }

    throw new ReferenceError(`Unknown engine ${engine}`);
}

export function alert(engine: string, message?: string) {
    switch (engine) {
        case 'sdl':
            SDL.alert(message);
            return;
    }

    throw new ReferenceError(`Unknown engine ${engine}`);
}

export function confirm(engine: string, message?: string): boolean {
    switch (engine) {
        case 'sdl':
            return SDL.confirm(message);
    }

    throw new ReferenceError(`Unknown engine ${engine}`);
}

export function createWindow(engine: string, options: WindowOptions): NativeWindow {
    switch (engine) {
        case 'sdl':
            return SDL.createWindow(options);
    }

    throw new ReferenceError(`Unknown engine ${engine}`);
}

export function defaultWindowOptions(engine: string): WindowOptions {
    switch (engine) {
        case 'sdl':
            return SDL.defaultWindowOptions();
    }

    throw new ReferenceError(`Unknown engine ${engine}`);
}
;

