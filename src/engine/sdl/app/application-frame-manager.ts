export interface ApplicationFrameManager {
    startRenderingFrames(): void;

    renderFrame(ms: number): void;
}
