import {
    createDefaults,
    createWindow,
    requestAnimationFrame,
    Image,
    cancelAnimationFrame,
    createCanvas,
    alert,
    confirm, setWindowTitle
} from '.';
import {NativeDocument} from '../dom/document';

export const globalCtx = (global as any);

globalCtx.createDefaults = createDefaults;
globalCtx.createCanvas = createCanvas;
globalCtx.createWindow = createWindow;
globalCtx.confirm = confirm;
globalCtx.alert = alert;
globalCtx.requestAnimationFrame = requestAnimationFrame;
globalCtx.cancelAnimationFrame = cancelAnimationFrame;
globalCtx.Image = Image;
globalCtx.document = new NativeDocument(globalCtx);
globalCtx.setWindowTitle = setWindowTitle;

globalCtx.window = globalCtx;

