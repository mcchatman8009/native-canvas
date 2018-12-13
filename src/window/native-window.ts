import {WindowOptions} from './window-options';

export interface NativeWindow extends Window {
    canvasX: number;

    canvasY: number;

    title: string;

    canvas: HTMLCanvasElement;

    renderFrame(ms: number): void;

    enableFullScreen(): void;

    disableFullScreen(): void;

    windowImplementation(): any;

    loadImage(src: string): Promise<HTMLImageElement>;

    newCanvas(window?: (NativeWindow | string), windowOptions?: WindowOptions): HTMLCanvasElement;
}
