import {SdlWindow} from '../sdl-window/sdl-window';
import EventEmitter = require('events');
import {
    createEventFilterFunction, createSDLEvent,
    SDL_AddEventWatch,
    SDL_EventType,
    SDL_Init, SDL_PollEvent, SDL_PumpEvents,
    SDL_Quit
} from '../sdl';
import {ApplicationFrameManager} from './application-frame-manager';
import {createThreadFunction, SDL_CreateThread} from '../sdl/sdl-thread';
import {SDL_Delay} from '../sdl/sdl-timer';

const FPS = 60;

// const globalAppHolder: any = {
//     filter: (data: any, event: any) => {
//     }
// };
let globalEventFilterFunction = null as any;
let f = null;

export class ApplicationContext extends EventEmitter implements ApplicationFrameManager {
    private windows: { [id: number]: SdlWindow } = {};

    constructor() {
        super();
        const sdlFlags = 0x00000020;

        if (SDL_Init(sdlFlags) !== 0) {
            this.quit();
            return;
        }


        this.initEvents();
        this.initEventWatcher();
        this.startRenderingFrames();
    }

    initEventWatcher() {
        globalEventFilterFunction = createEventFilterFunction((data: any, event: any) => {
            event = event.deref();
            if (event.type === SDL_EventType.SDL_DROPFILE) {
                this.emitToWindows(event);
            } else if (event.type === SDL_EventType.SDL_DROPBEGIN) {
                this.emitToWindows(event);
            } else if (event.type === SDL_EventType.SDL_DROPCOMPLETE) {
                this.emitToWindows(event);
            } else if (event.type >= SDL_EventType.SDL_WINDOWEVENT && event.type <= SDL_EventType.SDL_MOUSEWHEEL) {
                const windowId = event.window.windowID;
                const win = this.windows[windowId];

                if (win) {
                    win.emit('sdlEvent', event);
                }
            } else {
                this.emit('sdlEvent', event);
            }
        });
        SDL_AddEventWatch(globalEventFilterFunction, null);
    }

    emitToWindows(event: any) {
        Object.keys(this.windows).forEach((key: any) => {
            const window = this.windows[key];
            window.emit('sdlEvent', event);
        });
    }

    initEvents() {
        this.on('sdlEvent', (event) => {
            if (event.type === SDL_EventType.SDL_QUIT) {
                this.quit();
            }
        });

        this.on('beforeQuit', () => {
            /*tslint:disable*/
            for (let key in this.windows) {
                /*tslint:enable*/
                const window = this.windows[key];
                window.destroy();
            }
        });
    }

    renderFrame(ms: number): void {
        this.emit('renderFrame', ms);

        /*tslint:disable*/
        for (let key in this.windows) {
            const window = this.windows[key];
            window.renderFrame(ms);
        }
        /*tslint:enable*/
    }

    cancelAnimationFrame(request: number): void {
        this.listeners('renderFrame').forEach((listener) => {
            this.off('renderFrame', listener as any);
        });
    }

    requestAnimationFrame(callback: FrameRequestCallback): number {
        this.once('renderFrame', callback);

        return Number.MAX_VALUE;
    }


    startRenderingFrames(): void {
        this.startRenderingFramesUsingInterval();
    }

    private startRenderingFramesUsingInterval(): void {
        const targetRefreshRate = 1000 / FPS;
        // let lastRenderedTime = new Date().getTime();
        // let pendingEvent = 0;
        const event = createSDLEvent();

        SDL_PumpEvents();
        const loop = () => {
            // console.time('SDL_PollEvent');
            SDL_PumpEvents();
            // console.timeEnd('SDL_PollEvent');

            const currentTime = new Date().getTime();
            // const diff = currentTime - lastRenderedTime;
            // console.log(diff);

            // console.time('renderFrame');
            this.renderFrame(currentTime);
            // console.timeEnd('renderFrame');

            // lastRenderedTime = currentTime;
        };

        setInterval(loop, targetRefreshRate);
    }

    private startRenderingFramesUsingTimeouts(): void {
        let lastRenderedTime = new Date().getTime();
        const targetRefreshRate = 1000 / FPS;

        let update: () => void;

        update = () => {

            const currentTime = new Date().getTime();

            this.renderFrame(currentTime);

            const timeToRender = currentTime - lastRenderedTime;
            const timeoutValue = Math.max(targetRefreshRate - timeToRender, 0);

            lastRenderedTime = currentTime;
            // console.log(timeoutValue);

            setTimeout(update, timeoutValue);
        };

        setImmediate(update);
    }

    getWindows() {
        return this.windows;
    }

    registerWindow(window: SdlWindow) {
        this.windows[window.id] = window;
    }

    quit() {
        this.exit();
    }

    exit(exitCode = 0) {
        SDL_Quit();
        process.exit(exitCode);
    }
}

export const applicationContext = new ApplicationContext();
