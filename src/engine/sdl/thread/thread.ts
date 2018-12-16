import {createThreadFunction, SDL_CreateThread, SDL_DetachThread} from '../sdl/sdl-thread';

export const threadFunctions: any = {};

function runThread(threadName: string, procedure: () => void): any {
    const func = threadFunctions[threadName] = createThreadFunction(() => {
        procedure();
        return 0;
    });

    return SDL_CreateThread(func, threadName, null);
}

export type Runnable = () => void;

export class Thread {
    private threadPtr: any;

    constructor(private name: string, private runnable: Runnable) {
        this.threadPtr = null;
    }

    start(): void {
        if (this.threadPtr === null) {
            this.threadPtr = runThread(this.name, () => this.runnable());
        }
    }

    stop(): void {
        if (this.threadPtr !== null) {
            SDL_DetachThread(this.threadPtr);
            this.threadPtr = null;
        }
    }
}
