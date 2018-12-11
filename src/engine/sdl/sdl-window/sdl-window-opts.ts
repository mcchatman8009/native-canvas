import {WindowOptions} from '../../../window/window-options';
import {SDL_WindowFlags} from '../sdl';


export function sdlWindowDefaults(): WindowOptions {
    const opts = {} as any;

    opts.title = '';
    opts.width = 640;
    opts.height = 480;

    opts.x = 0x2FFF0000;
    opts.y = 0x2FFF0000;
    opts.closable = true;
    opts.fullscreen = false;
    opts.show = true;
    opts.resizable = true;
    opts.borderless = false;
    opts.minimized = false;
    opts.allowHighDPI = false;
    opts.grabInputFocus = false;
    opts.fitCanvasInWindow = true;

    return opts;
}

export function getSdlWindowOptions(options: WindowOptions): { title: string, x: number, y: number, w: number, h: number, flags: number } {
    if (options === null || options === undefined) {
        options = {} as any;
    }

    const defaults = sdlWindowDefaults();
    const opts: WindowOptions = ({...defaults, ...options} as any);

    /*tslint:disable*/
    let flags = 0;

    flags |= opts.fullscreen ? SDL_WindowFlags.SDL_WINDOW_FULLSCREEN_DESKTOP : 0;
    flags |= opts.show ? SDL_WindowFlags.SDL_WINDOW_SHOWN : SDL_WindowFlags.SDL_WINDOW_HIDDEN;
    flags |= opts.resizable ? SDL_WindowFlags.SDL_WINDOW_RESIZABLE : 0;
    flags |= opts.borderless ? SDL_WindowFlags.SDL_WINDOW_BORDERLESS : 0;
    flags |= opts.minimized ? SDL_WindowFlags.SDL_WINDOW_MINIMIZED : 0;
    flags |= opts.maximized ? SDL_WindowFlags.SDL_WINDOW_MAXIMIZED : 0;
    flags |= opts.allowHighDPI ? SDL_WindowFlags.SDL_WINDOW_ALLOW_HIGHDPI : 0;
    // flags |= opts.mouseCapture ? SDL_WindowFlags.SDL_WINDOW_MOUSE_CAPTURE : 0;
    flags |= opts.grabInputFocus ? SDL_WindowFlags.SDL_WINDOW_INPUT_GRABBED : 0;
    /*tslint:enable*/

    const title = opts.title;
    const x = opts.x;
    const y = opts.y;

    const w = opts.width;
    const h = opts.height;

    return {x, y, w, h, flags, title};

}
