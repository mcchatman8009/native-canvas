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
export const window = createWindow();

/* tslint:disable*/
const dontOverride = new Set(Object.getOwnPropertyNames(globalCtx));
const windowObj = window as any;

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
globalCtx.Image = Image;
globalCtx.HTMLCanvasElement = SdlCanvas;
globalCtx.CanvasRenderingContext2D = SdlContext;
