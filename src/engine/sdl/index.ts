import {WindowOptions} from '../../window/window-options';
import {NativeWindow} from '../../window/native-window';
import {SdlWindow} from './sdl-window/sdl-window';
import {applicationContext} from './app/application-context';

export function createWindow(options: WindowOptions): NativeWindow {
    return new SdlWindow(options);
}

export function defaultWindowOptions(): WindowOptions {
    return SdlWindow.windowDefaults();
}

export function alert(message?: string) {
    SdlWindow.alert(message);

}

export function confirm(message?: string): boolean {
    return SdlWindow.confirm(message);
}

export function requestAnimationFrame(callback: FrameRequestCallback): number {
    return applicationContext.requestAnimationFrame(callback);
}

export function cancelAnimationFrame(request: number): void {
    applicationContext.cancelAnimationFrame(request);
}
