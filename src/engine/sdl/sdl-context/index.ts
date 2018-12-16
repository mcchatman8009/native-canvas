import {SdlRenderer} from './sdl-renderer';
import {SdlContext2d} from './sdl-context-2d';
import {SDL_GetWindowSurface} from '../sdl';

export function createSdlContext2D(windowPtr: any) {
    const renderer = SdlRenderer.createRenderer(windowPtr, -1);

    return new SdlContext2d(renderer);
}

export function createSoftwareSdlContext2D(windowPtr: any) {
    const surfacePtr = SDL_GetWindowSurface(windowPtr);
    const renderer = SdlRenderer.createSoftwareRenderer(windowPtr, surfacePtr);

    return new SdlContext2d(renderer);
}
