import {SdlWindow} from '../sdl-window/sdl-window';
import {SDL_GetGlobalMouseState} from '../sdl/sdl-mouse';

export function getCurrentMouseEvent(sdlEvent: any, window: SdlWindow): MouseEvent {
    const event = {} as any;
    event.preventDefault = () => window.preventDefault(event);
    event.stopImmediatePropagation = () => window.stopImmediatePropagation(event);
    event.stopPropagation = () => window.stopPropagation(event);


    const mouseButtonEvt = sdlEvent.button;

    const screen = SDL_GetGlobalMouseState();
    // const button = sdlEvent.button.button;

    event.screenX = screen.x;
    event.screenY = screen.y;

    event.offsetX = sdlEvent.motion.x - window.canvasX;
    event.offsetY = sdlEvent.motion.y - window.canvasX;

    event.clientX = sdlEvent.motion.x; //  X coordinate, relative to window
    event.clientY = sdlEvent.motion.y; // Y coordinate, relative to window
    event.pageX = sdlEvent.motion.x;
    event.pageY = sdlEvent.motion.y;
    event.relatedTarget = window.getCanvas();


    event.ctrlKey = false;
    event.shiftKey = false;
    event.altKey = false;
    event.metaKey = false;

    const key = sdlEvent.key;
    event.which = event.button = (mouseButtonEvt.button);

    return event;
}
