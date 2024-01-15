import {SdlContext2d} from '../sdl-context/sdl-context-2d';
import {applicationContext} from '../app/application-context';
import {EventEmitter} from 'events';
import {NativeWindow} from '../../../window/native-window';
import {WindowOptions} from '../../../window/window-options';
import {getSdlWindowOptions, sdlWindowDefaults} from './sdl-window-opts';
import {createSdlContext2D} from '../sdl-context';
import {alert, confirm} from './messagebox';
import {
    SDL_CreateWindow,
    SDL_DestroyWindow,
    SDL_ENABLE,
    SDL_EventState,
    SDL_EventType, SDL_GetWindowBordersSize,
    SDL_GetWindowFlags, SDL_GetWindowID,
    SDL_GetWindowMaximumSize,
    SDL_GetWindowMinimumSize,
    SDL_GetWindowPosition,
    SDL_GetWindowSize, SDL_GetWindowSurface,
    SDL_GetWindowTitle, SDL_HideWindow,
    SDL_MaximizeWindow,
    SDL_MinimizeWindow,
    SDL_RaiseWindow, SDL_RenderCopy,
    SDL_RestoreWindow, SDL_SetWindowBordered,
    SDL_SetWindowFullscreen,
    SDL_SetWindowGrab,
    SDL_SetWindowMaximumSize,
    SDL_SetWindowMinimumSize,
    SDL_SetWindowModalFor,
    SDL_SetWindowPosition,
    SDL_SetWindowResizable,
    SDL_SetWindowSize,
    SDL_SetWindowTitle, SDL_ShowWindow, SDL_UpdateWindowSurface,
    SDL_WindowEventID,
    SDL_WindowFlags
} from '../sdl';
import {getCurrentMouseEvent} from '../event/mouse-event';
import {getCurrentKeyEvent} from '../event/key-event';
import {SdlDocument} from '../document/sdl-document';
import {SdlCanvas} from '../canvas/sdl-canvas';
import {SdlNavigator} from './sdl-navigator';
import {SdlPerformance} from '../performance/sdl-performance';

const NodeCanvasImage = require('canvas').Image;
const createInternalCanvas = require('canvas').createCanvas;
const {loadImage} = require('canvas');

export class SdlWindow extends EventEmitter implements NativeWindow {
    private _windowPtr: any;
    private windowSurface: any;
    private _hasMouseEnteredWindow = false;
    private _lastMouseEvent: MouseEvent;
    private _lastKeyboardEvent: KeyboardEvent;
    private _context: SdlContext2d;
    private _internalCanvas: HTMLCanvasElement;
    private _canvas: HTMLCanvasElement;
    private _size: { w: number, h: number };

    private _Blob: { prototype: Blob; new(blobParts?: any[], options?: BlobPropertyBag): Blob };
    private _URL: { prototype: URL; new(url: string, base?: (string | URL)): URL; createObjectURL(object: any): string; revokeObjectURL(url: string): void };
    private _URLSearchParams: { prototype: URLSearchParams; new(init?: (string[][] | Record<string, string> | string | URLSearchParams)): URLSearchParams };
    private readonly _applicationCache: ApplicationCache;
    private readonly _caches: CacheStorage;
    private readonly _clientInformation: Navigator;
    private readonly _closed: boolean;
    private readonly _console: Console;
    private readonly _crypto: Crypto;
    private _customElements: CustomElementRegistry;
    private _defaultStatus: string;
    private _devicePixelRatio: number;
    private _doNotTrack: string;
    private _document: Document;
    private _event: Event | undefined;
    private _external: External;
    private _frameElement: Element;
    private _frames: Window;
    private _history: History;
    private _indexedDB: IDBFactory;
    private _innerHeight: number;
    private _innerWidth: number;
    private _isSecureContext: boolean;
    private _length: number;
    private _localStorage: Storage;
    private _location: Location;
    private _locationbar: BarProp;
    private _menubar: BarProp;
    private _msContentScript: ExtensionScriptApis;
    private _name: string;
    private _navigator: Navigator;
    private _offscreenBuffering: string | boolean;
    private _onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    private _onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    private _onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onauxclick: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    private _onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
    private _onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    private _oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oncompassneedscalibration: ((this: Window, ev: Event) => any) | null;
    private _oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _ondevicelight: ((this: Window, ev: DeviceLightEvent) => any) | null;
    private _ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    private _ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    private _ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    private _ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    private _ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    private _ondragexit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    private _ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    private _ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    private _ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    private _ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onerror: OnErrorEventHandler;
    private _onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    private _ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
    private _oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    private _onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    private _onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    private _onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
    private _onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onloadend: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    private _onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    private _onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    private _onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmousewheel: ((this: Window, ev: Event) => any) | null;
    private _onmsgesturechange: ((this: Window, ev: Event) => any) | null;
    private _onmsgesturedoubletap: ((this: Window, ev: Event) => any) | null;
    private _onmsgestureend: ((this: Window, ev: Event) => any) | null;
    private _onmsgesturehold: ((this: Window, ev: Event) => any) | null;
    private _onmsgesturestart: ((this: Window, ev: Event) => any) | null;
    private _onmsgesturetap: ((this: Window, ev: Event) => any) | null;
    private _onmsinertiastart: ((this: Window, ev: Event) => any) | null;
    private _onmspointercancel: ((this: Window, ev: Event) => any) | null;
    private _onmspointerdown: ((this: Window, ev: Event) => any) | null;
    private _onmspointerenter: ((this: Window, ev: Event) => any) | null;
    private _onmspointerleave: ((this: Window, ev: Event) => any) | null;
    private _onmspointermove: ((this: Window, ev: Event) => any) | null;
    private _onmspointerout: ((this: Window, ev: Event) => any) | null;
    private _onmspointerover: ((this: Window, ev: Event) => any) | null;
    private _onmspointerup: ((this: Window, ev: Event) => any) | null;
    private _onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    private _ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    private _onorientationchange: ((this: Window, ev: Event) => any) | null;
    private _onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    private _onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    private _onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
    private _onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    private _onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onreadystatechange: ((this: Window, ev: ProgressEvent) => any) | null;
    private _onrejectionhandled: ((this: WindowEventHandlers, ev: Event) => any) | null;
    private _onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    private _onscroll: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    private _onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    private _onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onselect: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    private _onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
    private _onsubmit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _ontouchcancel: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    private _ontouchend: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    private _ontouchmove: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    private _ontouchstart: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    private _ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    private _ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    private _ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    private _ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    private _onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    private _onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
    private _onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onvrdisplayactivate: ((this: Window, ev: Event) => any) | null;
    private _onvrdisplayblur: ((this: Window, ev: Event) => any) | null;
    private _onvrdisplayconnect: ((this: Window, ev: Event) => any) | null;
    private _onvrdisplaydeactivate: ((this: Window, ev: Event) => any) | null;
    private _onvrdisplaydisconnect: ((this: Window, ev: Event) => any) | null;
    private _onvrdisplayfocus: ((this: Window, ev: Event) => any) | null;
    private _onvrdisplaypointerrestricted: ((this: Window, ev: Event) => any) | null;
    private _onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => any) | null;
    private _onvrdisplaypresentchange: ((this: Window, ev: Event) => any) | null;
    private _onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    private _opener: any;
    private _orientation: string | number;
    private _origin: string;
    private _outerHeight: number;
    private _outerWidth: number;
    private _pageXOffset: number;
    private _pageYOffset: number;
    private _parent: Window;
    private _performance: Performance;
    private _personalbar: BarProp;
    private _screen: Screen;
    private _screenLeft: number;
    private _screenTop: number;
    private _screenX: number;
    private _screenY: number;
    private _scrollX: number;
    private _scrollY: number;
    private _scrollbars: BarProp;
    private _self: Window;
    private _sessionStorage: Storage;
    private _speechSynthesis: SpeechSynthesis;
    private _status: string;
    private _statusbar: BarProp;
    private _styleMedia: StyleMedia;
    private _toolbar: BarProp;
    private _top: Window;
    private _window: Window;

    constructor(private readonly options: WindowOptions) {
        super();
        this.init();
        // @ts-ignore
        this._navigator = new SdlNavigator(this);
        this._performance = new SdlPerformance(this);

        this.createCanvas();
        applicationContext.registerWindow(this);

        setTimeout(() => {
            this.emit('load');
        }, 100);
    }

    disableFullScreen(): void {
        this.fullScreen = false;
    }

    enableFullScreen(): void {
        this.fullScreen = true;
    }

    windowImplementation(): any {
        return this;
    }

    stopPropagation(event: any) {

    }

    stopImmediatePropagation(event: any) {

    }

    preventDefault(event: any) {

    }

    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void {
        switch (type) {
            case 'load':
            case 'DOMContentLoaded':
                this.on('load', listener);
                break;
            case 'dragstart':
                this.on('dropBegin', listener);
                break;
            case 'drop':
                this.on('drop', listener);
                break;
            case 'mouseleave':
            case 'mouseout':
                this.on('mouseleave', listener);
                break;
            case 'maximize':
                this.on(type, listener);
                break;
            case 'minimize':
                this.on(type, listener);
                break;
            case 'mouseenter':
            case 'mouseover':
                this.on('mouseenter', listener);
                break;
            case 'move':
                this.on(type, listener);
                break;
            case 'hide':
                this.on(type, listener);
                break;
            case 'show':
                this.on(type, listener);
                break;
            case  'resize':
                this.on(type, listener);
                break;
            case 'blur':
                this.on(type, listener);
                break;
            case 'focus':
                this.on(type, listener);
                break;
            case 'close':
                this.on(type, listener);
                break;
            case 'datachange':
                this.on('change', listener);
                break;
            case 'keyup':
                this.on(type, listener);
                break;
            case 'keydown':
                this.on(type, listener);
                break;
            case 'keypress':
                this.on(type, listener);
                break;
            case 'mousemove':
                this.on('mousemove', listener);
                break;
            case 'mousedown':
                this.on(type, listener);
                break;
            case 'mouseup':
                this.on(type, listener);
                break;
            case 'mousewheel':
                this.on(type, listener);
                break;
            case 'click':
                this.on(type, listener);
                break;
        }
    }


    alert(message?: any): void {
        alert(message || '', this._windowPtr);
    }

    atob(encodedString: string): string {
        return '';
    }

    blur(): void {
        this.emit('blur');
    }

    btoa(rawString: string): string {
        return '';
    }

    cancelAnimationFrame(handle: number): void {
        this.listeners('renderFrame').forEach((listener) => {
            this.off('renderFrame', listener as any);
        });
    }

    captureEvents(): void {
    }

    clearInterval(handle?: number): void {
    }

    clearTimeout(handle?: number): void {
    }

    confirm(message?: string): boolean {
        return confirm(message, this._windowPtr);
    }

    // @ts-ignore
    createImageBitmap(image: ImageBitmapSource, sx?: number, sy?: number, sw?: number, sh?: number): Promise<ImageBitmap> {
        return undefined;
    }

    departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void {
    }

    dispatchEvent(event: Event): boolean {
        return false;
    }

    fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
        return undefined;
    }

    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration {
        return undefined;
    }

    getMatchedCSSRules(elt: Element, pseudoElt?: string | null): CSSRuleList {
        return undefined;
    }

    getSelection(): Selection {
        return undefined;
    }

    matchMedia(query: string): MediaQueryList {
        return undefined;
    }

    moveBy(x: number, y: number): void {
    }

    moveTo(x: number, y: number): void {
    }

    msWriteProfilerMark(profilerMarkName: string): void {
    }

    open(url?: string, target?: string, features?: string, replace?: boolean): Window | null {
        return undefined;
    }

    postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void {
    }

    print(): void {
    }

    prompt(message?: string, _default?: string): string | null {
        return undefined;
    }

    queueMicrotask(callback: Function): void {
    }

    releaseEvents(): void {
    }

    removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void {
        switch (type) {
            case 'mouseleave':
            case 'mouseout':
                this.off('mouseleave', listener);
                break;
            case 'mouseenter':
            case 'mouseover':
                this.off('mouseenter', listener);
                break;
            case 'datachange':
                this.off('change', listener);
                break;
            default:
                this.off(type, listener);
                break;
        }
    }

    requestAnimationFrame(callback: FrameRequestCallback): number {
        this.once('renderFrame', callback);
        return Number.MAX_VALUE;
    }

    resizeBy(x: number, y: number): void {
    }

    resizeTo(x: number, y: number): void {
    }

    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scroll(options?: ScrollToOptions | number, y?: number): void {
    }

    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions | number, y?: number): void {
    }

    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions | number, y?: number): void {
    }

    setInterval(handler: TimerHandler, timeout?: number, ...args: any[]): number {
        return setInterval(handler, timeout, args);
    }

    setTimeout(handler: TimerHandler, timeout?: number, ...args: any[]): number {
        return setTimeout(handler, timeout, args);
    }


    stop(): void {
    }

    webkitCancelAnimationFrame(handle: number): void {
        this.cancelAnimationFrame(handle);
    }

    webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint {
        return undefined;
    }

    webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint {
        return undefined;
    }

    webkitRequestAnimationFrame(callback: FrameRequestCallback): number {
        return this.requestAnimationFrame(callback);
    }

    get canvasWidth() {
        return this._context.width;
    }

    private configureCanvasSize(w: number, h: number) {
        if (this.options.fitCanvasInWindow) {
            this._internalCanvas.width = this.size.w;
            this._internalCanvas.height = this.size.h;
        } else {
            this._internalCanvas.width = w;
            this._internalCanvas.height = h;
        }
    }

    set canvasWidth(val: number) {
        if (this.options.scaleCanvasToWindowSize) {
            let size = this.size;
            this.size = size = {w: val, h: size.h};
        } else if (this.options.fitCanvasInWindow) {
            let size = this.size;
            this.size = size = {w: val, h: size.h};
            this._internalCanvas.width = size.w;
        } else {
            this._internalCanvas.width = val;
        }
    }

    get canvasHeight() {
        return this._context.height;
    }

    set canvasHeight(val: number) {
        if (this.options.scaleCanvasToWindowSize) {
            let size = this.size;
            this.size = size = {w: size.w, h: val};
        } else if (this.options.fitCanvasInWindow) {
            let size = this.size;
            this.size = size = {w: size.w, h: val};
            this._internalCanvas.height = size.h;
        } else {
            this._internalCanvas.height = val;
        }
    }

    set canvasY(y: number) {
        if (this.options.fitCanvasInWindow) {
            this._context.y = 0;
        } else {
            this._context.y = y;
        }
    }

    get canvasX() {
        return this._context.x;
    }

    set canvasX(x: number) {
        if (this.options.fitCanvasInWindow) {
            this._context.x = 0;
        } else {
            this._context.x = x;
        }
    }

    getCanvas() {
        return this._canvas;
    }

    renderFrame(ms: number) {
        this.emit('renderFrame', ms);
        const canvas = (this._internalCanvas as any);
        const {width, height} = canvas;

        const size = this.size;


        const buffer = canvas.toBuffer('raw'); // ARGB32

        // console.time('renderFrame');
        this._context.renderFrame(buffer, width, height);
        // this._context.renderFrame(buffer, width, height);
        // console.timeEnd('renderFrame');
    }

    private init() {
        const sdlOpts = getSdlWindowOptions(this.options);

        // Create the window, and store its pointer;
        this._windowPtr = SDL_CreateWindow(sdlOpts.title, sdlOpts.x, sdlOpts.y, sdlOpts.w, sdlOpts.h, sdlOpts.flags);
        // this.windowSurface = SDL_GetWindowSurface(this.windowPtr);

        // Create a SDL Context to handle the abstractions
        this._context = createSdlContext2D(this._windowPtr);

        // this._context = createSoftwareSdlContext2D(this._windowPtr);

        this.initSize();
        this.initContextSize();

        // @ts-ignore
        this._document = new SdlDocument(this);

        this.initEvents();
    }

    initCanvasColors() {
        const ctx = this._internalCanvas.getContext('2d');

        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#000000';
        ctx.fillRect(0, 0, this._internalCanvas.width, this._internalCanvas.height);

        ctx.fillStyle = '#000000';
        ctx.strokeStyle = '#000000';
    }

    private initWindowEvents() {
        this.on('sdlEvent', (event: any) => {
            if (event.type === SDL_EventType.SDL_WINDOWEVENT) {
                const evt = event.window.event;

                if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_SHOWN) {
                    this.emit('show');
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_HIDDEN) {
                    this.emit('hide');
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_EXPOSED) {
                    // this.triggerWindowSizeChange();
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_MOVED) {
                    this.emit('move', event.window.data1, event.window.data2);
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_RESIZED) {
                    this.triggerWindowSizeChange();
                    this.emit('resize', event.window.data1, event.window.data2);
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_SIZE_CHANGED) {
                    // this._change(event.window.data1, event.window.data2);
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_MINIMIZED) {
                    this.emit('minimize');
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_MAXIMIZED) {
                    this.emit('maximize');
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_RESTORED) {
                    this.emit('restore');
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_ENTER) {
                    this._hasMouseEnteredWindow = true;
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_LEAVE) {
                    if (this._lastMouseEvent) {
                        this.emit('mouseleave', this._lastMouseEvent);
                    }
                    this._hasMouseEnteredWindow = false;
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_FOCUS_GAINED) {
                    this.emit('focus');
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_FOCUS_LOST) {
                    this.emit('blur');
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_CLOSE) {
                    this.close();
                }
            }
        });
    }

    private initKeyEvents() {
        this.on('sdlEvent', (event: any) => {
            if (event.type === SDL_EventType.SDL_KEYDOWN) {
                const domEvent = getCurrentKeyEvent(event, this);
                this.emit('keydown', domEvent);
                this._lastKeyboardEvent = domEvent;
            } else if (event.type === SDL_EventType.SDL_KEYUP) {
                const domEvent = getCurrentKeyEvent(event, this);
                this.emit('keyup', domEvent);
                this._lastKeyboardEvent = null;
            } else if (event.type === SDL_EventType.SDL_TEXTINPUT) {
                const buf: any = Buffer.from(event.text.text);
                const str = buf.reinterpretUntilZeros(1).toString();

                const domEvent = getCurrentKeyEvent(event, this) as any;
                domEvent.key = str;
                domEvent.keyCode = domEvent.charCode = str.codePointAt(0);
                domEvent.ctrlKey = this._lastKeyboardEvent.ctrlKey;
                domEvent.shiftKey = this._lastKeyboardEvent.shiftKey;
                domEvent.altKey = this._lastKeyboardEvent.altKey;
                domEvent.metaKey = this._lastKeyboardEvent.metaKey;

                this.emit('keypress', domEvent);
            }
        });
    }

    private initDragAndDropEvents() {
        this.on('sdlEvent', (event: any) => {
            if (event.type === SDL_EventType.SDL_DROPFILE) {
                // this.emit('dropFile', event.drop.file);
                const drop = event.drop;
                const data = {file: event.drop.file};
                this.emit('drop', data);
            } else if (event.type === SDL_EventType.SDL_DROPBEGIN) {
                this.emit('dropBegin', event.drop.file);
            } else if (event.type === SDL_EventType.SDL_DROPCOMPLETE) {
                this.emit('dropDone', event.drop.file);
            } else if (event.type === SDL_EventType.SDL_CLIPBOARDUPDATE) {
                this.emit('clipboard');
            }
        });
    }

    private initMouseEvents() {
        this.on('sdlEvent', (event: any) => {
            if (event.type === SDL_EventType.SDL_MOUSEMOTION) {
                const domEvent = getCurrentMouseEvent(event, this);
                this.decorateMouseEvent(domEvent);

                if (this._hasMouseEnteredWindow) {
                    this.emit('mouseenter', domEvent);
                    this._hasMouseEnteredWindow = false;
                }

                this.emit('mousemove', domEvent);
                this._lastMouseEvent = domEvent;
            } else if (event.type === SDL_EventType.SDL_MOUSEBUTTONDOWN) {
                const domEvent = getCurrentMouseEvent(event, this);
                this.emit('mousedown', domEvent);
            } else if (event.type === SDL_EventType.SDL_MOUSEBUTTONUP) {
                const domEvent = getCurrentMouseEvent(event, this);
                this.emit('mouseup', domEvent);
                this.emit('click', domEvent);
            }
        });
    }

    private decorateMouseEvent(event: MouseEvent) {
        const castedEvent = event as any;

        if (this._lastKeyboardEvent) {
            castedEvent.altKey = this._lastKeyboardEvent.altKey;
            castedEvent.ctrlKey = this._lastKeyboardEvent.ctrlKey;
            castedEvent.shiftKey = this._lastKeyboardEvent.shiftKey;
            castedEvent.metaKey = this._lastKeyboardEvent.metaKey;
        }
    }

    private initEvents() {
        this.initWindowEvents();
        this.initMouseEvents();
        this.initKeyEvents();
        this.initDragAndDropEvents();
    }

    private initContextSize() {
        const size = this.size;
        this._context.setSize(size.w, size.h);
    }

    private initSize() {
        this.size = SDL_GetWindowSize(this._windowPtr);
    }

    private triggerWindowSizeChange() {
        this.initSize();
        if (!this.options.scaleCanvasToWindowSize) {
            this.initContextSize();
        }

        const size = this.size;
        this.initCanvasSize(size);
        this.emit('change', size.w, size.h);
    }

    grab() {
        SDL_SetWindowGrab(this._windowPtr, true);
    }

    focus() {
        SDL_RaiseWindow(this._windowPtr);
    }

    close() {
        if (!this.options.closable) {
            return;
        }

        this.destroy();
    }

    destroy() {
        // this.rendererPtr.destroy();
        SDL_DestroyWindow(this._windowPtr);
        this.emit('_closed');
    }

    restore() {
        SDL_RestoreWindow(this._windowPtr);
    }

    center() {
        this.position = [0x2FFF0000, 0x2FFF0000];
    }

    setModal(win: SdlWindow) {
        if (win && win._windowPtr) {
            SDL_SetWindowModalFor(win._windowPtr, this._windowPtr);
        }
    }


    set maximize(_maximized) {
        if (!!_maximized) {
            SDL_MaximizeWindow(this._windowPtr);
        } else if (this.maximize) {
            this.restore();
        }
    }

    get maximize() {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this._windowPtr) & SDL_WindowFlags.SDL_WINDOW_MAXIMIZED);
        /*tslint:enable*/
    }

    set minimize(_minimized) {
        if (!!_minimized) {
            SDL_MinimizeWindow(this._windowPtr);
        } else if (this.minimize) {
            this.restore();
        }
    }

    get minimize() {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this._windowPtr) & SDL_WindowFlags.SDL_WINDOW_MINIMIZED);
        /*tslint:enable*/
    }

    set fullScreen(full: boolean) {
        if (full) {
            SDL_SetWindowFullscreen(this._windowPtr, SDL_WindowFlags.SDL_WINDOW_FULLSCREEN_DESKTOP);
        } else {
            SDL_SetWindowFullscreen(this._windowPtr, 0);
        }

    }

    get fullScreen(): boolean {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this._windowPtr) & SDL_WindowFlags.SDL_WINDOW_FULLSCREEN);
        /*tslint:enable*/
    }

    set bounds(rect: { x: number, y: number, w: number, h: number }) {
        this.position = rect;
        this.size = rect;
    }

    get bounds(): { x: number, y: number, w: number, h: number } {
        const position = this.position;
        const size = this.size;

        return {
            x: position.x,
            y: position.y,
            w: size.w,
            h: size.h
        };
    }

    set size(val: { w: number, h: number }) {
        this._size = val;
        SDL_SetWindowSize(this._windowPtr, val.w, val.h);
    }

    get size(): { w: number, h: number } {
        return this._size;
    }

    set minimumSize(wh: any) {
        const size = this.minimumSize;

        const w = wh.w >= 0 ? wh.w : (wh[0] >= 0 ? wh[0] : size.w);
        const h = wh.h >= 0 ? wh.h : (wh[1] >= 0 ? wh[1] : size.h);

        SDL_SetWindowMinimumSize(this._windowPtr, w, h);

    }

    get minimumSize() {
        return SDL_GetWindowMinimumSize(this._windowPtr);
    }

    set maximumSize(wh: any) {
        const size = this.maximumSize;

        const w = wh.w >= 0 ? wh.w : (wh[0] >= 0 ? wh[0] : size.w);
        const h = wh.h >= 0 ? wh.h : (wh[1] >= 0 ? wh[1] : size.h);

        SDL_SetWindowMaximumSize(this._windowPtr, w, h);
    }

    get maximumSize() {
        return SDL_GetWindowMaximumSize(this._windowPtr);
    }

    set resizable(value: boolean) {
        SDL_SetWindowResizable(this._windowPtr, value);
    }

    get resizable() {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this._windowPtr) & SDL_WindowFlags.SDL_WINDOW_RESIZABLE);
        /*tslint:enable*/
    }


    set closable(_closable) {
        this.options.closable = !!_closable;
    }

    get closable() {
        return this.options.closable;
    }

    set position(xy: any) {
        const position = this.position;

        const x = xy.x >= 0 ? xy.x : (xy[0] >= 0 ? xy[0] : position.x);
        const y = xy.y >= 0 ? xy.y : (xy[1] >= 0 ? xy[1] : position.y);

        SDL_SetWindowPosition(this._windowPtr, x, y);
    }

    get position() {
        return SDL_GetWindowPosition(this._windowPtr);
    }

    set title(title: string) {
        SDL_SetWindowTitle(this._windowPtr, title);
    }

    get title() {
        return SDL_GetWindowTitle(this._windowPtr);
    }

    set border(border: boolean) {
        SDL_SetWindowBordered(this._windowPtr, !!border);
    }

    get bordersSize() {
        return SDL_GetWindowBordersSize(this._windowPtr);
    }


    set show(show: boolean) {
        if (show) {
            SDL_ShowWindow(this._windowPtr);
        } else {
            SDL_HideWindow(this._windowPtr);
        }
    }

    get id(): number {
        return SDL_GetWindowID(this._windowPtr);
    }

    get show() {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this._windowPtr) & SDL_WindowFlags.SDL_WINDOW_SHOWN);
        /*tslint:enable*/
    }

    get windowPtr(): any {
        return this._windowPtr;
    }

    set windowPtr(value: any) {
        this._windowPtr = value;
    }

    get hasMouseEnteredWindow(): boolean {
        return this._hasMouseEnteredWindow;
    }

    set hasMouseEnteredWindow(value: boolean) {
        this._hasMouseEnteredWindow = value;
    }

    get lastMouseEvent(): MouseEvent {
        return this._lastMouseEvent;
    }

    set lastMouseEvent(value: MouseEvent) {
        this._lastMouseEvent = value;
    }

    get lastKeyboardEvent(): KeyboardEvent {
        return this._lastKeyboardEvent;
    }

    set lastKeyboardEvent(value: KeyboardEvent) {
        this._lastKeyboardEvent = value;
    }

    get context(): SdlContext2d {
        return this._context;
    }

    set context(value: SdlContext2d) {
        this._context = value;
    }

    get internalCanvas(): HTMLCanvasElement {
        return this._internalCanvas;
    }

    set internalCanvas(value: HTMLCanvasElement) {
        this._internalCanvas = value;
    }

    get Blob(): { prototype: Blob; new(blobParts?: any[], options?: BlobPropertyBag): Blob } {
        return this._Blob;
    }

    set Blob(value: { prototype: Blob; new(blobParts?: any[], options?: BlobPropertyBag): Blob }) {
        this._Blob = value;
    }

    get URL(): { prototype: URL; new(url: string, base?: (string | URL)): URL; createObjectURL(object: any): string; revokeObjectURL(url: string): void } {
        return this._URL;
    }

    set URL(value: { prototype: URL; new(url: string, base?: (string | URL)): URL; createObjectURL(object: any): string; revokeObjectURL(url: string): void }) {
        this._URL = value;
    }

    get URLSearchParams(): { prototype: URLSearchParams; new(init?: (string[][] | Record<string, string> | string | URLSearchParams)): URLSearchParams } {
        return this._URLSearchParams;
    }

    set URLSearchParams(value: { prototype: URLSearchParams; new(init?: (string[][] | Record<string, string> | string | URLSearchParams)): URLSearchParams }) {
        this._URLSearchParams = value;
    }

    get customElements(): CustomElementRegistry {
        return this._customElements;
    }

    set customElements(value: CustomElementRegistry) {
        this._customElements = value;
    }

    get defaultStatus(): string {
        return this._defaultStatus;
    }

    set defaultStatus(value: string) {
        this._defaultStatus = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get offscreenBuffering(): string | boolean {
        return this._offscreenBuffering;
    }

    set offscreenBuffering(value: string | boolean) {
        this._offscreenBuffering = value;
    }

    get onabort(): ((this: GlobalEventHandlers, ev: UIEvent) => any) | null {
        return this._onabort;
    }

    set onabort(value: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null) {
        this._onabort = value;
    }

    get onafterprint(): ((this: WindowEventHandlers, ev: Event) => any) | null {
        return this._onafterprint;
    }

    set onafterprint(value: ((this: WindowEventHandlers, ev: Event) => any) | null) {
        this._onafterprint = value;
    }

    get onanimationcancel(): ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null {
        return this._onanimationcancel;
    }

    set onanimationcancel(value: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null) {
        this._onanimationcancel = value;
    }

    get onanimationend(): ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null {
        return this._onanimationend;
    }

    set onanimationend(value: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null) {
        this._onanimationend = value;
    }

    get onanimationiteration(): ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null {
        return this._onanimationiteration;
    }

    set onanimationiteration(value: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null) {
        this._onanimationiteration = value;
    }

    get onanimationstart(): ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null {
        return this._onanimationstart;
    }

    set onanimationstart(value: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null) {
        this._onanimationstart = value;
    }

    get onauxclick(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onauxclick;
    }

    set onauxclick(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onauxclick = value;
    }

    get onbeforeprint(): ((this: WindowEventHandlers, ev: Event) => any) | null {
        return this._onbeforeprint;
    }

    set onbeforeprint(value: ((this: WindowEventHandlers, ev: Event) => any) | null) {
        this._onbeforeprint = value;
    }

    get onbeforeunload(): ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null {
        return this._onbeforeunload;
    }

    set onbeforeunload(value: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null) {
        this._onbeforeunload = value;
    }

    get onblur(): ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null {
        return this._onblur;
    }

    set onblur(value: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null) {
        this._onblur = value;
        this.addEventListener('blur' as any, value as any, false);
    }

    get oncancel(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._oncancel;
    }

    set oncancel(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._oncancel = value;
    }

    get oncanplay(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._oncanplay;
    }

    set oncanplay(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._oncanplay = value;
    }

    get oncanplaythrough(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._oncanplaythrough;
    }

    set oncanplaythrough(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._oncanplaythrough = value;
    }

    get onchange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onchange;
    }

    set onchange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onchange = value;
    }

    get onclick(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._onclick;
    }

    set onclick(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._onclick = value;
        this.addEventListener('click' as any, value as any, false);
    }

    get onclose(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onclose;
    }

    set onclose(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.addEventListener('close' as any, value as any, false);
        this._onclose = value;
    }

    get oncompassneedscalibration(): ((this: Window, ev: Event) => any) | null {
        return this._oncompassneedscalibration;
    }

    set oncompassneedscalibration(value: ((this: Window, ev: Event) => any) | null) {
        this._oncompassneedscalibration = value;
    }

    get oncontextmenu(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._oncontextmenu;
    }

    set oncontextmenu(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._oncontextmenu = value;
    }

    get oncuechange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._oncuechange;
    }

    set oncuechange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._oncuechange = value;
    }

    get ondblclick(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._ondblclick;
    }

    set ondblclick(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._ondblclick = value;
    }

    get ondevicelight(): ((this: Window, ev: DeviceLightEvent) => any) | null {
        return this._ondevicelight;
    }

    set ondevicelight(value: ((this: Window, ev: DeviceLightEvent) => any) | null) {
        this._ondevicelight = value;
    }

    get ondevicemotion(): ((this: Window, ev: DeviceMotionEvent) => any) | null {
        return this._ondevicemotion;
    }

    set ondevicemotion(value: ((this: Window, ev: DeviceMotionEvent) => any) | null) {
        this._ondevicemotion = value;
    }

    get ondeviceorientation(): ((this: Window, ev: DeviceOrientationEvent) => any) | null {
        return this._ondeviceorientation;
    }

    set ondeviceorientation(value: ((this: Window, ev: DeviceOrientationEvent) => any) | null) {
        this._ondeviceorientation = value;
    }

    get ondrag(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this._ondrag;
    }

    set ondrag(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this._ondrag = value;
    }

    get ondragend(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this._ondragend;
    }

    set ondragend(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this._ondragend = value;
    }

    get ondragenter(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this._ondragenter;
    }

    set ondragenter(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this._ondragenter = value;
    }

    get ondragexit(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._ondragexit;
    }

    set ondragexit(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._ondragexit = value;
    }

    get ondragleave(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this._ondragleave;
    }

    set ondragleave(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this._ondragleave = value;
    }

    get ondragover(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this._ondragover;
    }

    set ondragover(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this._ondragover = value;
    }

    get ondragstart(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this._ondragstart;
    }

    set ondragstart(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this._ondragstart = value;
    }

    get ondrop(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this._ondrop;
    }

    set ondrop(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this._ondrop = value;
        this.addEventListener('drop' as any, value as any, false);
    }

    get ondurationchange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._ondurationchange;
    }

    set ondurationchange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._ondurationchange = value;
    }

    get onemptied(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onemptied;
    }

    set onemptied(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onemptied = value;
    }

    get onended(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onended;
    }

    set onended(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onended = value;
    }

    get onerror(): OnErrorEventHandler {
        return this._onerror;
    }

    set onerror(value: OnErrorEventHandlerNonNull) {
        this._onerror = value;
    }

    get onfocus(): ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null {
        return this._onfocus;
    }

    set onfocus(value: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null) {
        this._onfocus = value;
        this.addEventListener('focus' as any, value as any, false);
    }

    get ongotpointercapture(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._ongotpointercapture;
    }

    set ongotpointercapture(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._ongotpointercapture = value;
    }

    get onhashchange(): ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null {
        return this._onhashchange;
    }

    set onhashchange(value: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null) {
        this._onhashchange = value;
    }

    get oninput(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._oninput;
    }

    set oninput(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._oninput = value;
    }

    get oninvalid(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._oninvalid;
    }

    set oninvalid(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._oninvalid = value;
    }

    get onkeydown(): ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null {
        return this._onkeydown;
    }

    set onkeydown(value: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null) {
        this._onkeydown = value;
        this.addEventListener('keydown' as any, value as any, false);
    }

    get onkeypress(): ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null {
        return this._onkeypress;
    }

    set onkeypress(value: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null) {
        this._onkeypress = value;
    }

    get onkeyup(): ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null {
        return this._onkeyup;
    }

    set onkeyup(value: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null) {
        this._onkeyup = value;
        this.addEventListener('keyup' as any, value as any, false);
    }

    get onlanguagechange(): ((this: WindowEventHandlers, ev: Event) => any) | null {
        return this._onlanguagechange;
    }

    set onlanguagechange(value: ((this: WindowEventHandlers, ev: Event) => any) | null) {
        this._onlanguagechange = value;
    }

    get onload(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onload;
    }

    set onload(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onload = value;
    }

    get onloadeddata(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onloadeddata;
    }

    set onloadeddata(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onloadeddata = value;
    }

    get onloadedmetadata(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onloadedmetadata;
    }

    set onloadedmetadata(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onloadedmetadata = value;
    }

    get onloadend(): ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null {
        return this._onloadend;
    }

    set onloadend(value: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null) {
        this._onloadend = value;
    }

    get onloadstart(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onloadstart;
    }

    set onloadstart(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onloadstart = value;
    }

    get onlostpointercapture(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onlostpointercapture;
    }

    set onlostpointercapture(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onlostpointercapture = value;
    }

    get onmessage(): ((this: WindowEventHandlers, ev: MessageEvent) => any) | null {
        return this._onmessage;
    }

    set onmessage(value: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null) {
        this._onmessage = value;
    }

    get onmessageerror(): ((this: WindowEventHandlers, ev: MessageEvent) => any) | null {
        return this._onmessageerror;
    }

    set onmessageerror(value: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null) {
        this._onmessageerror = value;
    }

    get onmousedown(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._onmousedown;
    }

    set onmousedown(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._onmousedown = value;
        this.addEventListener('mousedown' as any, value as any, false);
    }

    get onmouseenter(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._onmouseenter;
    }

    set onmouseenter(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._onmouseenter = value;
        this.addEventListener('mouseenter' as any, value as any, false);
    }

    get onmouseleave(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._onmouseleave;
    }

    set onmouseleave(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._onmouseleave = value;
        this.addEventListener('mouseleave' as any, value as any, false);
    }

    get onmousemove(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._onmousemove;
    }

    set onmousemove(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._onmousemove = value;
        this.addEventListener('mousemove' as any, value as any, false);
    }

    get onmouseout(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._onmouseout;
    }

    set onmouseout(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._onmouseout = value;
        this.addEventListener('mouseout' as any, value as any, false);
    }

    get onmouseover(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._onmouseover;
    }

    set onmouseover(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this._onmouseover = value;
        this.addEventListener('mouseover' as any, value as any, false);
    }

    get onmouseup(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this._onmouseup;
    }

    set onmouseup(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.addEventListener('mouseup' as any, value as any, false);
        this._onmouseup = value;
    }

    get onmousewheel(): ((this: Window, ev: Event) => any) | null {
        return this._onmousewheel;
    }

    set onmousewheel(value: ((this: Window, ev: Event) => any) | null) {
        this.addEventListener('mousewheel' as any, value as any, false);
        this._onmousewheel = value;
    }

    get onmsgesturechange(): ((this: Window, ev: Event) => any) | null {
        return this._onmsgesturechange;
    }

    set onmsgesturechange(value: ((this: Window, ev: Event) => any) | null) {
        this._onmsgesturechange = value;
    }

    get onmsgesturedoubletap(): ((this: Window, ev: Event) => any) | null {
        return this._onmsgesturedoubletap;
    }

    set onmsgesturedoubletap(value: ((this: Window, ev: Event) => any) | null) {
        this._onmsgesturedoubletap = value;
    }

    get onmsgestureend(): ((this: Window, ev: Event) => any) | null {
        return this._onmsgestureend;
    }

    set onmsgestureend(value: ((this: Window, ev: Event) => any) | null) {
        this._onmsgestureend = value;
    }

    get onmsgesturehold(): ((this: Window, ev: Event) => any) | null {
        return this._onmsgesturehold;
    }

    set onmsgesturehold(value: ((this: Window, ev: Event) => any) | null) {
        this._onmsgesturehold = value;
    }

    get onmsgesturestart(): ((this: Window, ev: Event) => any) | null {
        return this._onmsgesturestart;
    }

    set onmsgesturestart(value: ((this: Window, ev: Event) => any) | null) {
        this._onmsgesturestart = value;
    }

    get onmsgesturetap(): ((this: Window, ev: Event) => any) | null {
        return this._onmsgesturetap;
    }

    set onmsgesturetap(value: ((this: Window, ev: Event) => any) | null) {
        this._onmsgesturetap = value;
    }

    get onmsinertiastart(): ((this: Window, ev: Event) => any) | null {
        return this._onmsinertiastart;
    }

    set onmsinertiastart(value: ((this: Window, ev: Event) => any) | null) {
        this._onmsinertiastart = value;
    }

    get onmspointercancel(): ((this: Window, ev: Event) => any) | null {
        return this._onmspointercancel;
    }

    set onmspointercancel(value: ((this: Window, ev: Event) => any) | null) {
        this._onmspointercancel = value;
    }

    get onmspointerdown(): ((this: Window, ev: Event) => any) | null {
        return this._onmspointerdown;
    }

    set onmspointerdown(value: ((this: Window, ev: Event) => any) | null) {
        this._onmspointerdown = value;
    }

    get onmspointerenter(): ((this: Window, ev: Event) => any) | null {
        return this._onmspointerenter;
    }

    set onmspointerenter(value: ((this: Window, ev: Event) => any) | null) {
        this._onmspointerenter = value;
    }

    get onmspointerleave(): ((this: Window, ev: Event) => any) | null {
        return this._onmspointerleave;
    }

    set onmspointerleave(value: ((this: Window, ev: Event) => any) | null) {
        this._onmspointerleave = value;
    }

    get onmspointermove(): ((this: Window, ev: Event) => any) | null {
        return this._onmspointermove;
    }

    set onmspointermove(value: ((this: Window, ev: Event) => any) | null) {
        this._onmspointermove = value;
    }

    get onmspointerout(): ((this: Window, ev: Event) => any) | null {
        return this._onmspointerout;
    }

    set onmspointerout(value: ((this: Window, ev: Event) => any) | null) {
        this._onmspointerout = value;
    }

    get onmspointerover(): ((this: Window, ev: Event) => any) | null {
        return this._onmspointerover;
    }

    set onmspointerover(value: ((this: Window, ev: Event) => any) | null) {
        this._onmspointerover = value;
    }

    get onmspointerup(): ((this: Window, ev: Event) => any) | null {
        return this._onmspointerup;
    }

    set onmspointerup(value: ((this: Window, ev: Event) => any) | null) {
        this._onmspointerup = value;
    }

    get onoffline(): ((this: WindowEventHandlers, ev: Event) => any) | null {
        return this._onoffline;
    }

    set onoffline(value: ((this: WindowEventHandlers, ev: Event) => any) | null) {
        this._onoffline = value;
    }

    get ononline(): ((this: WindowEventHandlers, ev: Event) => any) | null {
        return this._ononline;
    }

    set ononline(value: ((this: WindowEventHandlers, ev: Event) => any) | null) {
        this._ononline = value;
    }

    get onorientationchange(): ((this: Window, ev: Event) => any) | null {
        return this._onorientationchange;
    }

    set onorientationchange(value: ((this: Window, ev: Event) => any) | null) {
        this._onorientationchange = value;
    }

    get onpagehide(): ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null {
        return this._onpagehide;
    }

    set onpagehide(value: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null) {
        this._onpagehide = value;
    }

    get onpageshow(): ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null {
        return this._onpageshow;
    }

    set onpageshow(value: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null) {
        this._onpageshow = value;
    }

    get onpause(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onpause;
    }

    set onpause(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onpause = value;
    }

    get onplay(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onplay;
    }

    set onplay(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onplay = value;
    }

    get onplaying(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onplaying;
    }

    set onplaying(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onplaying = value;
    }

    get onpointercancel(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onpointercancel;
    }

    set onpointercancel(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onpointercancel = value;
    }

    get onpointerdown(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onpointerdown;
    }

    set onpointerdown(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onpointerdown = value;
    }

    get onpointerenter(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onpointerenter;
    }

    set onpointerenter(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onpointerenter = value;
    }

    get onpointerleave(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onpointerleave;
    }

    set onpointerleave(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onpointerleave = value;
    }

    get onpointermove(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onpointermove;
    }

    set onpointermove(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onpointermove = value;
    }

    get onpointerout(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onpointerout;
    }

    set onpointerout(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onpointerout = value;
    }

    get onpointerover(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onpointerover;
    }

    set onpointerover(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onpointerover = value;
    }

    get onpointerup(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this._onpointerup;
    }

    set onpointerup(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this._onpointerup = value;
    }

    get onpopstate(): ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null {
        return this._onpopstate;
    }

    set onpopstate(value: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null) {
        this._onpopstate = value;
    }

    get onprogress(): ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null {
        return this._onprogress;
    }

    set onprogress(value: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null) {
        this._onprogress = value;
    }

    get onratechange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onratechange;
    }

    set onratechange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onratechange = value;
    }

    get onreadystatechange(): ((this: Window, ev: ProgressEvent) => any) | null {
        return this._onreadystatechange;
    }

    set onreadystatechange(value: ((this: Window, ev: ProgressEvent) => any) | null) {
        this._onreadystatechange = value;
    }

    get onrejectionhandled(): ((this: WindowEventHandlers, ev: Event) => any) | null {
        return this._onrejectionhandled;
    }

    set onrejectionhandled(value: ((this: WindowEventHandlers, ev: Event) => any) | null) {
        this._onrejectionhandled = value;
    }

    get onreset(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onreset;
    }

    set onreset(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onreset = value;
    }

    get onresize(): ((this: GlobalEventHandlers, ev: UIEvent) => any) | null {
        return this._onresize;
    }

    set onresize(value: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null) {
        this._onresize = value;
        this.addEventListener('resize' as any, value as any, false);
    }

    get onscroll(): ((this: GlobalEventHandlers, ev: UIEvent) => any) | null {
        return this._onscroll;
    }

    set onscroll(value: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null) {
        this._onscroll = value;
    }

    get onsecuritypolicyviolation(): ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null {
        return this._onsecuritypolicyviolation;
    }

    set onsecuritypolicyviolation(value: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null) {
        this._onsecuritypolicyviolation = value;
    }

    get onseeked(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onseeked;
    }

    set onseeked(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onseeked = value;
    }

    get onseeking(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onseeking;
    }

    set onseeking(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onseeking = value;
    }

    get onselect(): ((this: GlobalEventHandlers, ev: UIEvent) => any) | null {
        return this._onselect;
    }

    set onselect(value: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null) {
        this._onselect = value;
    }

    get onstalled(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onstalled;
    }

    set onstalled(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onstalled = value;
    }

    get onstorage(): ((this: WindowEventHandlers, ev: StorageEvent) => any) | null {
        return this._onstorage;
    }

    set onstorage(value: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null) {
        this._onstorage = value;
    }

    get onsubmit(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onsubmit;
    }

    set onsubmit(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onsubmit = value;
    }

    get onsuspend(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onsuspend;
    }

    set onsuspend(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onsuspend = value;
    }

    get ontimeupdate(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._ontimeupdate;
    }

    set ontimeupdate(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._ontimeupdate = value;
    }

    get ontoggle(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._ontoggle;
    }

    set ontoggle(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._ontoggle = value;
    }

    get ontouchcancel(): ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null {
        return this._ontouchcancel;
    }

    set ontouchcancel(value: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null) {
        this._ontouchcancel = value;
    }

    get ontouchend(): ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null {
        return this._ontouchend;
    }

    set ontouchend(value: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null) {
        this._ontouchend = value;
    }

    get ontouchmove(): ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null {
        return this._ontouchmove;
    }

    set ontouchmove(value: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null) {
        this._ontouchmove = value;
    }

    get ontouchstart(): ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null {
        return this._ontouchstart;
    }

    set ontouchstart(value: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null) {
        this._ontouchstart = value;
    }

    get ontransitioncancel(): ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null {
        return this._ontransitioncancel;
    }

    set ontransitioncancel(value: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null) {
        this._ontransitioncancel = value;
    }

    get ontransitionend(): ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null {
        return this._ontransitionend;
    }

    set ontransitionend(value: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null) {
        this._ontransitionend = value;
    }

    get ontransitionrun(): ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null {
        return this._ontransitionrun;
    }

    set ontransitionrun(value: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null) {
        this._ontransitionrun = value;
    }

    get ontransitionstart(): ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null {
        return this._ontransitionstart;
    }

    set ontransitionstart(value: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null) {
        this._ontransitionstart = value;
    }

    get onunhandledrejection(): ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null {
        return this._onunhandledrejection;
    }

    set onunhandledrejection(value: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null) {
        this._onunhandledrejection = value;
    }

    get onunload(): ((this: WindowEventHandlers, ev: Event) => any) | null {
        return this._onunload;
    }

    set onunload(value: ((this: WindowEventHandlers, ev: Event) => any) | null) {
        this._onunload = value;
    }

    get onvolumechange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onvolumechange;
    }

    set onvolumechange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onvolumechange = value;
    }

    get onvrdisplayactivate(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplayactivate;
    }

    set onvrdisplayactivate(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplayactivate = value;
    }

    get onvrdisplayblur(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplayblur;
    }

    set onvrdisplayblur(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplayblur = value;
    }

    get onvrdisplayconnect(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplayconnect;
    }

    set onvrdisplayconnect(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplayconnect = value;
    }

    get onvrdisplaydeactivate(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplaydeactivate;
    }

    set onvrdisplaydeactivate(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplaydeactivate = value;
    }

    get onvrdisplaydisconnect(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplaydisconnect;
    }

    set onvrdisplaydisconnect(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplaydisconnect = value;
    }

    get onvrdisplayfocus(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplayfocus;
    }

    set onvrdisplayfocus(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplayfocus = value;
    }

    get onvrdisplaypointerrestricted(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplaypointerrestricted;
    }

    set onvrdisplaypointerrestricted(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplaypointerrestricted = value;
    }

    get onvrdisplaypointerunrestricted(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplaypointerunrestricted;
    }

    set onvrdisplaypointerunrestricted(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplaypointerunrestricted = value;
    }

    get onvrdisplaypresentchange(): ((this: Window, ev: Event) => any) | null {
        return this._onvrdisplaypresentchange;
    }

    set onvrdisplaypresentchange(value: ((this: Window, ev: Event) => any) | null) {
        this._onvrdisplaypresentchange = value;
    }

    get onwaiting(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this._onwaiting;
    }

    set onwaiting(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this._onwaiting = value;
    }

    get onwheel(): ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null {
        return this._onwheel;
    }

    set onwheel(ivalue: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null) {
        this._onwheel = ivalue;
        this.addEventListener('wheel' as any, ivalue as any, false);
    }

    get opener(): any {
        return this._opener;
    }

    set opener(value: any) {
        this._opener = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    set canvas(value: HTMLCanvasElement) {
        this._canvas = value;
    }

    createImage(src: string): Promise<HTMLImageElement> {
        return this.loadImage(src);
    }

    loadImage(src: string): Promise<HTMLImageElement> {
        if (src) {
            return loadImage(src) as Promise<HTMLImageElement>;
        } else {
            return Promise.resolve(new NodeCanvasImage() as HTMLImageElement);
        }
    }

    newCanvas(window?: (NativeWindow | string), windowOptions?: WindowOptions): HTMLCanvasElement {
        if (windowOptions && window === undefined) {

            const opts = SdlWindow.windowDefaults();
            const wind = new SdlWindow(opts);
            // @ts-ignore
            return new SdlCanvas(wind);
        } else if (typeof  window === 'string') {
            const opts = windowOptions || SdlWindow.windowDefaults();

            opts.title = window;
            const wind = new SdlWindow(opts);
            // @ts-ignore
            return new SdlCanvas(wind);
        } else {
            // @ts-ignore
            return new SdlCanvas(window);
        }

    }

    private createCanvas(): void {
        const size = this.size;
        this._internalCanvas = createInternalCanvas(size.w, size.h, 'image') as HTMLCanvasElement;
        this.initCanvasColors();
        this.initCanvasSize(size);
    }

    private initCanvasSize(size: { w: number, h: number }) {
        if (this.options.fitCanvasInWindow) {
            this.configureCanvasSize(size.w, size.h);
        }
    }

    get applicationCache(): ApplicationCache {
        return this._applicationCache;
    }

    get caches(): CacheStorage {
        return this._caches;
    }

    get clientInformation(): Navigator {
        return this._clientInformation;
    }

    get closed(): boolean {
        return this._closed;
    }

    get console(): Console {
        return console;
    }

    get crypto(): Crypto {
        return this._crypto;
    }

    get devicePixelRatio(): number {
        return this._devicePixelRatio;
    }

    get doNotTrack(): string {
        return this._doNotTrack;
    }

    get document(): Document {
        return this._document;
    }

    get event(): Event | undefined {
        return this._event;
    }

    get external(): External {
        return this._external;
    }

    get frameElement(): Element {
        return this._frameElement;
    }

    get frames(): Window {
        return this._frames;
    }

    get history(): History {
        return this._history;
    }

    get indexedDB(): IDBFactory {
        return this._indexedDB;
    }

    get innerHeight(): number {
        return this._innerHeight;
    }

    get innerWidth(): number {
        return this._innerWidth;
    }

    get isSecureContext(): boolean {
        return this._isSecureContext;
    }

    get length(): number {
        return this._length;
    }

    get localStorage(): Storage {
        return this._localStorage;
    }

    get locationbar(): BarProp {
        return this._locationbar;
    }

    get menubar(): BarProp {
        return this._menubar;
    }

    get msContentScript(): ExtensionScriptApis {
        return this._msContentScript;
    }

    get navigator(): Navigator {
        return this._navigator;
    }

    get orientation(): string | number {
        return this._orientation;
    }

    get origin(): string {
        return this._origin;
    }

    get outerHeight(): number {
        return this._outerHeight;
    }

    get outerWidth(): number {
        return this._outerWidth;
    }

    get pageXOffset(): number {
        return 0;
    }

    get pageYOffset(): number {
        return 0;
    }

    get parent(): Window {
        return this._parent;
    }

    get performance(): Performance {
        return this._performance;
    }

    get personalbar(): BarProp {
        return this._personalbar;
    }

    get screen(): Screen {
        return this._screen;
    }

    get screenLeft(): number {
        return this._screenLeft;
    }

    get screenTop(): number {
        return this._screenTop;
    }

    get screenX(): number {
        return this._screenX;
    }

    get screenY(): number {
        return this._screenY;
    }

    get scrollX(): number {
        return this._scrollX;
    }

    get scrollY(): number {
        return this._scrollY;
    }

    get scrollbars(): BarProp {
        return this._scrollbars;
    }

    // @ts-ignore
    get self(): Window {
        return this._self;
    }

    get sessionStorage(): Storage {
        return this._sessionStorage;
    }

    get speechSynthesis(): SpeechSynthesis {
        return this._speechSynthesis;
    }

    get statusbar(): BarProp {
        return this._statusbar;
    }

    get styleMedia(): StyleMedia {
        return this._styleMedia;
    }

    get toolbar(): BarProp {
        return this._toolbar;
    }

    get top(): Window {
        return this._top;
    }

    // @ts-ignore
    get window(): Window {
        // @ts-ignore
        return this;
    }

    set devicePixelRatio(value: number) {
        this._devicePixelRatio = value;
    }

    set doNotTrack(value: string) {
        this._doNotTrack = value;
    }

    set document(value: Document) {
        this._document = value;
    }

    set event(value: Event | undefined) {
        this._event = value;
    }

    set external(value: External) {
        this._external = value;
    }

    set frameElement(value: Element) {
        this._frameElement = value;
    }

    set frames(value: Window) {
        this._frames = value;
    }

    set history(value: History) {
        this._history = value;
    }

    set indexedDB(value: IDBFactory) {
        this._indexedDB = value;
    }

    set innerHeight(value: number) {
        this._innerHeight = value;
    }

    set innerWidth(value: number) {
        this._innerWidth = value;
    }

    set isSecureContext(value: boolean) {
        this._isSecureContext = value;
    }

    set length(value: number) {
        this._length = value;
    }

    set localStorage(value: Storage) {
        this._localStorage = value;
    }

    set locationbar(value: BarProp) {
        this._locationbar = value;
    }

    set menubar(value: BarProp) {
        this._menubar = value;
    }

    set msContentScript(value: ExtensionScriptApis) {
        this._msContentScript = value;
    }

    set navigator(value: Navigator) {
        this._navigator = value;
    }

    set orientation(value: string | number) {
        this._orientation = value;
    }

    set origin(value: string) {
        this._origin = value;
    }

    set outerHeight(value: number) {
        this._outerHeight = value;
    }

    set outerWidth(value: number) {
        this._outerWidth = value;
    }

    set pageXOffset(value: number) {
        this._pageXOffset = value;
    }

    set pageYOffset(value: number) {
        this._pageYOffset = value;
    }

    set parent(value: Window) {
        this._parent = value;
    }

    set performance(value: Performance) {
        this._performance = value;
    }

    set personalbar(value: BarProp) {
        this._personalbar = value;
    }

    set screen(value: Screen) {
        this._screen = value;
    }

    set screenLeft(value: number) {
        this._screenLeft = value;
    }

    set screenTop(value: number) {
        this._screenTop = value;
    }

    set screenX(value: number) {
        this._screenX = value;
    }

    set screenY(value: number) {
        this._screenY = value;
    }

    set scrollX(value: number) {
        this._scrollX = value;
    }

    set scrollY(value: number) {
        this._scrollY = value;
    }

    set scrollbars(value: BarProp) {
        this._scrollbars = value;
    }

    // @ts-ignore
    set self(value: Window) {
        this._self = value;
    }

    set sessionStorage(value: Storage) {
        this._sessionStorage = value;
    }

    set speechSynthesis(value: SpeechSynthesis) {
        this._speechSynthesis = value;
    }

    set statusbar(value: BarProp) {
        this._statusbar = value;
    }

    set styleMedia(value: StyleMedia) {
        this._styleMedia = value;
    }

    set toolbar(value: BarProp) {
        this._toolbar = value;
    }

    set top(value: Window) {
        this._top = value;
    }

    // @ts-ignore
    set window(value: Window) {
        this._window = value;
    }

    static windowDefaults() {
        return sdlWindowDefaults();
    }

    static alert(message: string) {
        alert(message, null);
    }

    static confirm(message: string): boolean {
        return confirm(message, null);
    }
}
