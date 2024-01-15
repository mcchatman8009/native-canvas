import {
    createWindow,
    requestAnimationFrame,
    Image,
    cancelAnimationFrame,
    alert,
    confirm, SdlCanvas, SdlContext
} from '.';

import {NativeWindow} from '../window/native-window';
import Global = NodeJS.Global;

const globalCtx = (global as any);
let internalWindow;

if (globalCtx.GLOAL_WINDOW_OPTS) {
    internalWindow = createWindow(globalCtx.GLOAL_WINDOW_OPTS);
} else {

    internalWindow = createWindow();
}

export const window = internalWindow;
export const document: Document = internalWindow.document;

/* tslint:disable*/
const dontOverride = new Set(Object.getOwnPropertyNames(globalCtx));
const windowObj = window as any;

windowObj.Image = Image;
windowObj.HTMLCanvasElement = SdlCanvas;
windowObj.CanvasRenderingContext2D = SdlContext;
dontOverride.add('Image');
dontOverride.add('HTMLCanvasElement');
dontOverride.add('CanvasRenderingContext2D');
dontOverride.add('XMLHttpRequest');

for (const prop in windowObj) {
    if (!dontOverride.has(prop) && !prop.startsWith('_') && !prop.startsWith('constructor') && !prop.startsWith('console')) {
        const descriptor = Object.getOwnPropertyDescriptor(windowObj.__proto__, prop);
        if (descriptor) {
            if (descriptor.value) {
                globalCtx[prop] = function () {
                    const args = Array.from(arguments);
                    return windowObj[prop].apply(windowObj, args);
                };

            } else {
                Object.defineProperty(globalCtx, prop, {
                    get: function () {
                        return windowObj[prop];
                    },
                    set: function (val: any) {
                        windowObj[prop] = val;
                    }
                });
            }

        } else if (typeof(windowObj[prop]) === 'function') {
            globalCtx[prop] = function () {
                const args = Array.from(arguments);
                return windowObj[prop]();
            };
        } else {
            globalCtx[prop] = windowObj[prop];
        }
    }
}
/* tslint:enable*/


globalCtx.window = window;
globalCtx.document = document;
globalCtx.Image = Image;
globalCtx.HTMLCanvasElement = SdlCanvas;
globalCtx.CanvasRenderingContext2D = SdlContext;

