export interface WindowOptions {
    title?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fullscreen?: boolean;
    show?: boolean;
    closable?: boolean;
    resizable?: boolean;
    borderless?: boolean;
    minimized?: boolean;
    maximized?: boolean;
    allowHighDPI?: boolean;
    grabInputFocus?: boolean;
    fitCanvasInWindow: boolean;
}
