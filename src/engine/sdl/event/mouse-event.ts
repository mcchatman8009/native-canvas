import {SdlWindow} from '../sdl-window/sdl-window';
import {SDL_GetGlobalMouseState} from '../sdl/sdl-mouse';

const currentMouseEvent = {} as any;

export function getCurrentMouseEvent(sdlEvent: any, window: SdlWindow): MouseEvent {
    currentMouseEvent.preventDefault = () => window.preventDefault(currentMouseEvent);
    currentMouseEvent.stopImmediatePropagation = () => window.stopImmediatePropagation(currentMouseEvent);
    currentMouseEvent.stopPropagation = () => window.stopPropagation(currentMouseEvent);


    const mouseButtonEvt = sdlEvent.button;

    const screen = SDL_GetGlobalMouseState();
    // const button = sdlEvent.button.button;

    currentMouseEvent.screenX = screen.x;
    currentMouseEvent.screenY = screen.y;

    currentMouseEvent.offsetX = sdlEvent.motion.x - window.canvasX;
    currentMouseEvent.offsetY = sdlEvent.motion.y - window.canvasX;

    currentMouseEvent.clientX = sdlEvent.motion.x; //  X coordinate, relative to window
    currentMouseEvent.clientY = sdlEvent.motion.y; // Y coordinate, relative to window
    currentMouseEvent.pageX = sdlEvent.motion.x;
    currentMouseEvent.pageY = sdlEvent.motion.y;
    currentMouseEvent.relatedTarget = window.getCanvas();


    currentMouseEvent.ctrlKey = false;
    currentMouseEvent.shiftKey = false;
    currentMouseEvent.altKey = false;
    currentMouseEvent.metaKey = false;

    const key = sdlEvent.key;
    currentMouseEvent.which = currentMouseEvent.button = (mouseButtonEvt.button);

    return currentMouseEvent;
}
