import {SdlRenderer} from './sdl-renderer';
import {SdlContext2d} from './sdl-context-2d';

export function createSdlContext2D(windowPtr: any) {
    const renderer = SdlRenderer.createRenderer(windowPtr, -1);

    return new SdlContext2d(renderer);
}
