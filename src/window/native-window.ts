export interface NativeWindow extends Window {
    canvasX: number;

    canvasY: number;

    getCanvas(): HTMLCanvasElement;

    renderFrame(ms: number): void;

    enableFullScreen(): void;

    disableFullScreen(): void;

    windowImplementation(): any;
}
