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
    SDL_GetWindowSize,
    SDL_GetWindowTitle, SDL_HideWindow,
    SDL_MaximizeWindow,
    SDL_MinimizeWindow,
    SDL_RaiseWindow,
    SDL_RestoreWindow, SDL_SetWindowBordered,
    SDL_SetWindowFullscreen,
    SDL_SetWindowGrab,
    SDL_SetWindowMaximumSize,
    SDL_SetWindowMinimumSize,
    SDL_SetWindowModalFor,
    SDL_SetWindowPosition,
    SDL_SetWindowResizable,
    SDL_SetWindowSize,
    SDL_SetWindowTitle, SDL_ShowWindow,
    SDL_WindowEventID,
    SDL_WindowFlags
} from '../sdl';
import {getCurrentMouseEvent} from '../event/mouse-event';
import {getCurrentKeyEvent} from '../event/key-event';

const createInternalCanvas = require('canvas').createCanvas;

export class SdlWindow extends EventEmitter implements NativeWindow {
    private windowPtr: any;
    private hasMouseEntered = false;
    private lastMouseEvent: MouseEvent;
    private lastKeyboardEvent: KeyboardEvent;
    private context: SdlContext2d;
    private canvas: HTMLCanvasElement;
    Blob: { prototype: Blob; new(blobParts?: any[], options?: BlobPropertyBag): Blob };
    URL: { prototype: URL; new(url: string, base?: (string | URL)): URL; createObjectURL(object: any): string; revokeObjectURL(url: string): void };
    URLSearchParams: { prototype: URLSearchParams; new(init?: (string[][] | Record<string, string> | string | URLSearchParams)): URLSearchParams };
    readonly applicationCache: ApplicationCache;
    readonly caches: CacheStorage;
    readonly clientInformation: Navigator;
    readonly closed: boolean;
    readonly console: Console;
    readonly crypto: Crypto;
    customElements: CustomElementRegistry;
    defaultStatus: string;
    readonly devicePixelRatio: number;
    readonly doNotTrack: string;
    readonly document: Document;
    readonly event: Event | undefined;
    readonly external: External;
    readonly frameElement: Element;
    readonly frames: Window;
    readonly history: History;
    readonly indexedDB: IDBFactory;
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly isSecureContext: boolean;
    readonly length: number;
    readonly localStorage: Storage;
    location: Location;
    readonly locationbar: BarProp;
    readonly menubar: BarProp;
    readonly msContentScript: ExtensionScriptApis;
    name: string;
    readonly navigator: Navigator;
    offscreenBuffering: string | boolean;
    onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onauxclick: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
    onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncompassneedscalibration: ((this: Window, ev: Event) => any) | null;
    oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    ondevicelight: ((this: Window, ev: DeviceLightEvent) => any) | null;
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragexit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onerror: ErrorEventHandler;
    onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
    oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadend: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmousewheel: ((this: Window, ev: Event) => any) | null;
    onmsgesturechange: ((this: Window, ev: Event) => any) | null;
    onmsgesturedoubletap: ((this: Window, ev: Event) => any) | null;
    onmsgestureend: ((this: Window, ev: Event) => any) | null;
    onmsgesturehold: ((this: Window, ev: Event) => any) | null;
    onmsgesturestart: ((this: Window, ev: Event) => any) | null;
    onmsgesturetap: ((this: Window, ev: Event) => any) | null;
    onmsinertiastart: ((this: Window, ev: Event) => any) | null;
    onmspointercancel: ((this: Window, ev: Event) => any) | null;
    onmspointerdown: ((this: Window, ev: Event) => any) | null;
    onmspointerenter: ((this: Window, ev: Event) => any) | null;
    onmspointerleave: ((this: Window, ev: Event) => any) | null;
    onmspointermove: ((this: Window, ev: Event) => any) | null;
    onmspointerout: ((this: Window, ev: Event) => any) | null;
    onmspointerover: ((this: Window, ev: Event) => any) | null;
    onmspointerup: ((this: Window, ev: Event) => any) | null;
    onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onorientationchange: ((this: Window, ev: Event) => any) | null;
    onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
    onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onreadystatechange: ((this: Window, ev: ProgressEvent) => any) | null;
    onrejectionhandled: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onscroll: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselect: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
    onsubmit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontouchcancel: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchend: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchmove: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchstart: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onvrdisplayactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplayblur: ((this: Window, ev: Event) => any) | null;
    onvrdisplayconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydeactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydisconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplayfocus: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypresentchange: ((this: Window, ev: Event) => any) | null;
    onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    opener: any;
    readonly orientation: string | number;
    readonly origin: string;
    readonly outerHeight: number;
    readonly outerWidth: number;
    readonly pageXOffset: number;
    readonly pageYOffset: number;
    readonly parent: Window;
    readonly performance: Performance;
    readonly personalbar: BarProp;
    readonly screen: Screen;
    readonly screenLeft: number;
    readonly screenTop: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly scrollX: number;
    readonly scrollY: number;
    readonly scrollbars: BarProp;
    readonly self: Window;
    readonly sessionStorage: Storage;
    readonly speechSynthesis: SpeechSynthesis;
    status: string;
    readonly statusbar: BarProp;
    readonly styleMedia: StyleMedia;
    readonly toolbar: BarProp;
    readonly top: Window;
    readonly window: Window;

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
        }
    }


    alert(message?: any): void {
        alert(message || '', this.windowPtr);
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
    }

    captureEvents(): void {
    }

    clearInterval(handle?: number): void {
    }

    clearTimeout(handle?: number): void {
    }

    confirm(message?: string): boolean {
        return confirm(message, this.windowPtr);
    }

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

    constructor(private readonly options: WindowOptions) {
        super();
        this.init();

        this.createCanvas();
        applicationContext.registerWindow(this);
    }


    get canvasWidth() {
        return this.context.width;
    }

    private configureCanvasSize(w: number, h: number) {
        if (this.options.fitCanvasInWindow) {
            this.canvas.width = this.size.w;
            this.canvas.height = this.size.h;
        } else {
            this.canvas.width = w;
            this.canvas.height = h;
        }
    }

    set canvasWidth(val: number) {
        if (this.options.fitCanvasInWindow) {
            let size = this.size;
            this.size = size = {w: val, h: size.h};
            this.canvas.width = size.w;
        } else {
            this.canvas.width = val;
        }
    }

    get canvasHeight() {
        return this.context.height;
    }

    set canvasHeight(val: number) {
        if (this.options.fitCanvasInWindow) {
            let size = this.size;
            this.size = size = {w: size.w, h: val};
            this.canvas.height = size.h;
        } else {
            this.canvas.height = val;
        }
    }

    set canvasY(y: number) {
        if (this.options.fitCanvasInWindow) {
            this.context.y = 0;
        } else {
            this.context.y = y;
        }
    }

    get canvasX() {
        return this.context.x;
    }

    set canvasX(x: number) {
        if (this.options.fitCanvasInWindow) {
            this.context.x = 0;
        } else {
            this.context.x = x;
        }
    }

    getCanvas() {
        return this.canvas;
    }

    renderFrame(ms: number) {
        this.emit('renderFrame', ms);
        const canvas = (this.canvas as any);
        const {width, height} = canvas;

        const size = this.size;
        this.context.setSize(size.w, size.h);

        const buffer = canvas.toBuffer('raw'); // ARGB32

        this.context.renderFrame(buffer, width, height);
    }

    private init() {
        const sdlOpts = getSdlWindowOptions(this.options);

        // Create the window, and store its pointer;
        this.windowPtr = SDL_CreateWindow(sdlOpts.title, sdlOpts.x, sdlOpts.y, sdlOpts.w, sdlOpts.h, sdlOpts.flags);

        // Create a SDL Context to handle the abstractions
        this.context = createSdlContext2D(this.windowPtr);

        const size = this.size;
        this.context.setSize(size.w, size.h);

        this.initEvents();
    }

    initCanvasColors() {
        const ctx = this.canvas.getContext('2d');

        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#000000';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

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
                    this.hasMouseEntered = true;
                } else if (evt === SDL_WindowEventID.SDL_WINDOWEVENT_LEAVE) {
                    if (this.lastMouseEvent) {
                        this.emit('mouseleave', this.lastMouseEvent);
                    }
                    this.hasMouseEntered = false;
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
                this.lastKeyboardEvent = domEvent;
            } else if (event.type === SDL_EventType.SDL_KEYUP) {
                const domEvent = getCurrentKeyEvent(event, this);
                this.emit('keyup', domEvent);
                this.lastKeyboardEvent = null;
            } else if (event.type === SDL_EventType.SDL_TEXTINPUT) {
                const buf: any = new Buffer(event.text.text);
                const str = buf.reinterpretUntilZeros(1).toString();

                const domEvent = getCurrentKeyEvent(event, this) as any;
                domEvent.key = str;
                domEvent.keyCode = domEvent.charCode = str.codePointAt(0);
                domEvent.ctrlKey = this.lastKeyboardEvent.ctrlKey;
                domEvent.shiftKey = this.lastKeyboardEvent.shiftKey;
                domEvent.altKey = this.lastKeyboardEvent.altKey;
                domEvent.metaKey = this.lastKeyboardEvent.metaKey;

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

                if (this.hasMouseEntered) {
                    this.emit('mouseenter', domEvent);
                    this.hasMouseEntered = false;
                }
                this.emit('mousemove', domEvent);
                this.lastMouseEvent = domEvent;
            } else if (event.type === SDL_EventType.SDL_MOUSEBUTTONDOWN) {
                const domEvent = getCurrentMouseEvent(event, this);
                this.emit('mousedown', domEvent);
            } else if (event.type === SDL_EventType.SDL_MOUSEBUTTONUP) {
                const domEvent = getCurrentMouseEvent(event, this);
                this.emit('mouseup', domEvent);
            }
        });
    }

    private decorateMouseEvent(event: MouseEvent) {
        const castedEvent = event as any;

        if (this.lastKeyboardEvent) {
            castedEvent.altKey = this.lastKeyboardEvent.altKey;
            castedEvent.ctrlKey = this.lastKeyboardEvent.ctrlKey;
            castedEvent.shiftKey = this.lastKeyboardEvent.shiftKey;
            castedEvent.metaKey = this.lastKeyboardEvent.metaKey;
        }
    }

    private initEvents() {
        this.initWindowEvents();
        this.initMouseEvents();
        this.initKeyEvents();
        this.initDragAndDropEvents();
    }

    private triggerWindowSizeChange() {
        const size = this.size;
        this.initCanvasSize(size);
        this.emit('change', size.w, size.h);
    }

    grab() {
        SDL_SetWindowGrab(this.windowPtr, true);
    }

    focus() {
        SDL_RaiseWindow(this.windowPtr);
    }

    close() {
        if (!this.options.closable) {
            return;
        }

        this.destroy();
    }

    destroy() {
        // this.rendererPtr.destroy();
        SDL_DestroyWindow(this.windowPtr);
        this.emit('closed');
    }

    restore() {
        SDL_RestoreWindow(this.windowPtr);
    }

    center() {
        this.position = [0x2FFF0000, 0x2FFF0000];
    }

    setModal(win: SdlWindow) {
        if (win && win.windowPtr) {
            SDL_SetWindowModalFor(win.windowPtr, this.windowPtr);
        }
    }


    set maximize(_maximized) {
        if (!!_maximized) {
            SDL_MaximizeWindow(this.windowPtr);
        } else if (this.maximize) {
            this.restore();
        }
    }

    get maximize() {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this.windowPtr) & SDL_WindowFlags.SDL_WINDOW_MAXIMIZED);
        /*tslint:enable*/
    }

    set minimize(_minimized) {
        if (!!_minimized) {
            SDL_MinimizeWindow(this.windowPtr);
        } else if (this.minimize) {
            this.restore();
        }
    }

    get minimize() {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this.windowPtr) & SDL_WindowFlags.SDL_WINDOW_MINIMIZED);
        /*tslint:enable*/
    }

    set fullScreen(full: boolean) {
        if (full) {
            SDL_SetWindowFullscreen(this.windowPtr, SDL_WindowFlags.SDL_WINDOW_FULLSCREEN_DESKTOP);
        } else {
            SDL_SetWindowFullscreen(this.windowPtr, 0);
        }

    }

    get fullScreen(): boolean {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this.windowPtr) & SDL_WindowFlags.SDL_WINDOW_FULLSCREEN);
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
        SDL_SetWindowSize(this.windowPtr, val.w, val.h);
    }

    get size(): { w: number, h: number } {
        return SDL_GetWindowSize(this.windowPtr);
    }

    set minimumSize(wh: any) {
        const size = this.minimumSize;

        const w = wh.w >= 0 ? wh.w : (wh[0] >= 0 ? wh[0] : size.w);
        const h = wh.h >= 0 ? wh.h : (wh[1] >= 0 ? wh[1] : size.h);

        SDL_SetWindowMinimumSize(this.windowPtr, w, h);

    }

    get minimumSize() {
        return SDL_GetWindowMinimumSize(this.windowPtr);
    }

    set maximumSize(wh: any) {
        const size = this.maximumSize;

        const w = wh.w >= 0 ? wh.w : (wh[0] >= 0 ? wh[0] : size.w);
        const h = wh.h >= 0 ? wh.h : (wh[1] >= 0 ? wh[1] : size.h);

        SDL_SetWindowMaximumSize(this.windowPtr, w, h);
    }

    get maximumSize() {
        return SDL_GetWindowMaximumSize(this.windowPtr);
    }

    set resizable(value: boolean) {
        SDL_SetWindowResizable(this.windowPtr, value);
    }

    get resizable() {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this.windowPtr) & SDL_WindowFlags.SDL_WINDOW_RESIZABLE);
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

        SDL_SetWindowPosition(this.windowPtr, x, y);
    }

    get position() {
        return SDL_GetWindowPosition(this.windowPtr);
    }

    set title(title: string) {
        SDL_SetWindowTitle(this.windowPtr, title);
    }

    get title() {
        return SDL_GetWindowTitle(this.windowPtr);
    }

    set border(border: boolean) {
        SDL_SetWindowBordered(this.windowPtr, !!border);
    }

    get bordersSize() {
        return SDL_GetWindowBordersSize(this.windowPtr);
    }


    set show(show: boolean) {
        if (show) {
            SDL_ShowWindow(this.windowPtr);
        } else {
            SDL_HideWindow(this.windowPtr);
        }
    }

    get id(): number {
        return SDL_GetWindowID(this.windowPtr);
    }

    get show() {
        /*tslint:disable*/
        return !!(SDL_GetWindowFlags(this.windowPtr) & SDL_WindowFlags.SDL_WINDOW_SHOWN);
        /*tslint:enable*/
    }

    private createCanvas(): void {
        const size = this.size;
        this.canvas = createInternalCanvas(size.w, size.h, 'image') as HTMLCanvasElement;
        this.initCanvasColors();
        this.initCanvasSize(size);
    }

    private initCanvasSize(size: { w: number, h: number }) {
        if (this.options.fitCanvasInWindow) {
            this.configureCanvasSize(size.w, size.h);
        }
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
