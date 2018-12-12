import {
    createWindow,
    requestAnimationFrame,
    Image,
    cancelAnimationFrame,
    alert,
    confirm, SdlCanvas, SdlContext
} from '.';

import {NativeWindow} from '../window/native-window';

const globalCtx = (global as any);
export const window = createWindow();

globalCtx.window = window;
globalCtx.document = window.document;
globalCtx.newCanvas = newCanvas;
globalCtx.createCanvas = newCanvas;
globalCtx.setWindowTitle = setWindowTitle;
globalCtx.createWindow = createWindow;
globalCtx.confirm = confirm;
globalCtx.alert = alert;
globalCtx.requestAnimationFrame = requestAnimationFrame;
globalCtx.cancelAnimationFrame = cancelAnimationFrame;
globalCtx.Image = Image;
globalCtx.HTMLCanvasElement = SdlCanvas;
globalCtx.CanvasRenderingContext2D = SdlContext;


function setWindowTitle(title: string, windowArg?: NativeWindow) {
    if (windowArg) {
        windowArg.title = title;
    } else {
        window.title = title;
    }
}

function newCanvas() {
    const args = Array.from(arguments);
    this._ctx.putImageData.apply(this._ctx, args);
    return window.newCanvas();
}
