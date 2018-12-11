const jsdom = require('jsdom');
const {JSDOM} = jsdom;


export class NativeDocument implements Document {
    readonly ATTRIBUTE_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly TEXT_NODE: number;
    readonly URL: string;
    readonly activeElement: Element | null;
    private _alinkColor: string;
    readonly all: HTMLAllCollection;
    readonly anchors: HTMLCollectionOf<HTMLAnchorElement>;
    readonly applets: HTMLCollectionOf<HTMLAppletElement>;
    readonly baseURI: string;
    private _bgColor: string;
    private _body: HTMLElement;
    readonly characterSet: string;
    readonly charset: string;
    readonly childElementCount: number;
    readonly childNodes: NodeListOf<ChildNode>;
    readonly children: HTMLCollection;
    readonly compatMode: string;
    readonly contentType: string;
    private _cookie: string;
    readonly currentScript: HTMLOrSVGScriptElement | null;
    readonly defaultView: WindowProxy | null;
    private _designMode: string;
    private _dir: string;
    readonly doctype: DocumentType | null;
    readonly documentElement: HTMLElement | null;
    readonly documentURI: string;
    private _domain: string;
    readonly embeds: HTMLCollectionOf<HTMLEmbedElement>;
    private _fgColor: string;
    readonly firstChild: ChildNode | null;
    readonly firstElementChild: Element | null;
    readonly forms: HTMLCollectionOf<HTMLFormElement>;
    readonly fullscreen: boolean;
    readonly fullscreenEnabled: boolean;
    readonly head: HTMLHeadElement | null;
    readonly hidden: boolean;
    readonly images: HTMLCollectionOf<HTMLImageElement>;
    readonly implementation: DOMImplementation;
    readonly inputEncoding: string;
    readonly isConnected: boolean;
    readonly lastChild: ChildNode | null;
    readonly lastElementChild: Element | null;
    readonly lastModified: string;
    private _linkColor: string;
    readonly links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    private _location: Location | null;
    readonly namespaceURI: string | null;
    readonly nextSibling: Node | null;
    readonly nodeName: string;
    readonly nodeType: number;
    private _nodeValue: string | null;
    private _onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    private _onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onauxclick: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    private _oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _oncopy: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    private _oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oncut: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    private _ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
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
    private _onerror: ErrorEventHandler;
    private _onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    private _onfullscreenchange: ((this: Document, ev: Event) => any) | null;
    private _onfullscreenerror: ((this: Document, ev: Event) => any) | null;
    private _ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    private _onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    private _onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    private _onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onloadend: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    private _onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    private _onpaste: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
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
    private _onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    private _onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onreadystatechange: ((this: Document, ev: ProgressEvent) => any) | null;
    private _onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    private _onscroll: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    private _onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    private _onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onselect: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    private _onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
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
    private _onvisibilitychange: ((this: Document, ev: Event) => any) | null;
    private _onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    private _onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    readonly origin: string;
    readonly ownerDocument: Document | null;
    readonly parentElement: HTMLElement | null;
    readonly parentNode: (Node & ParentNode) | null;
    readonly plugins: HTMLCollectionOf<HTMLEmbedElement>;
    readonly previousSibling: Node | null;
    readonly readyState: DocumentReadyState;
    readonly referrer: string;
    readonly scripts: HTMLCollectionOf<HTMLScriptElement>;
    readonly scrollingElement: Element | null;
    readonly styleSheets: StyleSheetList;
    private _textContent: string | null;
    readonly timeline: DocumentTimeline;
    private _title: string;
    readonly visibilityState: VisibilityState;
    private _vlinkColor: string;
    private _canvas: HTMLCanvasElement;
    private _document: any;

    constructor(private globalCtx: any) {
        this._document = new JSDOM(`<body></body>`).window.document;
    }

    get title(): string {
        if (this._canvas) {
            return (this._canvas as any).window.title;
        }

        return this._title;
    }

    set title(value: string) {
        this._title = value;

        if (this._canvas) {
            (this._canvas as any).window.title = value;
        }
    }

    // addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    // addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: any, options?: boolean | AddEventListenerOptions): void {
        this.window.addEventListener(type, listener, options);
    }

    adoptNode<T extends Node>(source: T): T {
        return this._document.adoptNode(source);
    }

    append(...nodes: (Node | string)[]): void {
        return this._document.append(nodes);
    }

    appendChild<T extends Node>(newChild: T): T {
        return this._document.appendChild(newChild);
    }

    captureEvents(): void {
        this._document.captureEvents();
    }

    caretPositionFromPoint(x: number, y: number): CaretPosition | null {
        return this._document.caretPositionFromPoint(x, y);
    }

    caretRangeFromPoint(x: number, y: number): Range {
        return this._document.caretRangeFromPoint(x, y);
    }

    clear(): void {
        return this._document.clear();
    }

    cloneNode(deep?: boolean): Node {
        return this._document.cloneNode(deep);
    }

    close(): void {
        return this._document.close();
    }

    compareDocumentPosition(other: Node): number {
        return this._document.compareDocumentPosition(other);
    }

    contains(other: Node | null): boolean {
        return this._document.contains(other);
    }

    createAttribute(localName: string): Attr {
        return this._document.createAttribute(localName);
    }

    createAttributeNS(namespace: string | null, qualifiedName: string): Attr {
        return this._document.createAttributeNS(namespace);
    }

    createCDATASection(data: string): CDATASection {
        return this._document.createCDATASection(data);
    }

    createComment(data: string): Comment {
        return this._document.createComment(data);
    }

    createDocumentFragment(): DocumentFragment {
        return this._document.createDocumentFragment();
    }

    // createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): any;
    // createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): any;
    // createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
    createElement(tagName: string, options?: ElementCreationOptions): any | HTMLElement {
        if (tagName === 'canvas') {
            const canvas = this.globalCtx.createCanvas('');
            this._canvas = canvas;
            return canvas;
        } else {
            const el = this._document.createElement(tagName);
            return el;
        }
    }

    createElementNS(namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): any {
        return this._document.createElementNS(namespaceURI);
    }

    createEvent(eventInterface: any): any {
        return this._document.createEvent(eventInterface);
    }

    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter | null): NodeIterator {
        return this._document.createNodeIterator(root);
    }

    createProcessingInstruction(target: string, data: string): ProcessingInstruction {
        return this._document.createProcessingInstruction(target);
    }

    createRange(): Range {
        return this._document.createRange();
    }

    createTextNode(data: string): Text {
        return this._document.createTextNode(data);
    }

    createTouch(view: WindowProxy, target: EventTarget, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number): Touch {
        return this._document.createTouch(view);
    }

    createTouchList(...touches: Touch[]): TouchList {
        return this._document.createTouchList(touches);
    }

    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter | null, entityReferenceExpansion?: boolean): TreeWalker {
        return this._document.createTreeWalker(root);
    }

    dispatchEvent(event: Event): boolean {
        return this._document.dispatchEvent(event);
    }

    elementFromPoint(x: number, y: number): Element | null {
        return this._document.elementFromPoint(x, y);
    }

    elementsFromPoint(x: number, y: number): Element[] {
        return this._document.elementsFromPoint(x, y);
    }

    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | null, type: number, result: XPathResult | null): XPathResult {
        return this._document.evaluate(expression, contextNode, resolver);
    }

    execCommand(commandId: string, showUI?: boolean, value?: string): boolean {
        return this._document.execCommand(commandId);
    }

    exitFullscreen(): Promise<void> {
        if (this._canvas) {
            const window = (this._canvas  as any).window;
            window.disableFullScreen();
        }

        return Promise.resolve(null);
    }

    getAnimations(): Animation[] {
        return this._document.getAnimations();
    }

    getElementById(elementId: string): HTMLElement | any | Element {
        if (this._canvas) {
            return this._document.getElementById(elementId);
        } else {
            this._canvas = this.globalCtx.createCanvas('');
            return this._canvas;
        }
    }

    getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
        return this._document.getElementsByClassName(classNames);
    }

    getElementsByName(elementName: string): NodeListOf<HTMLElement> {
        return this._document.getElementsByName(elementName);
    }


    getElementsByTagName(qualifiedName: any): any {
        return this._document.getElementsByTagName(qualifiedName);
    }

    getElementsByTagNameNS(namespaceURI: string, localName: string): any {
        return this._document.getElementsByTagNameNS(namespaceURI, localName);
    }

    getRootNode(options?: GetRootNodeOptions): Node {
        return this._document.getRootNode(options);
    }

    getSelection(): Selection | null {
        return this._document.getSelection();
    }

    hasChildNodes(): boolean {
        return this._document.hasChildNodes();
    }

    hasFocus(): boolean {
        return this._document.hasFocus();
    }

    importNode<T extends Node>(importedNode: T, deep: boolean): T {
        return this._document.importNode(importedNode, deep);
    }

    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T {
        return this._document.insertBefore(newChild, refChild);
    }

    isDefaultNamespace(namespace: string | null): boolean {
        return this._document.isDefaultNamespace(namespace);
    }

    isEqualNode(otherNode: Node | null): boolean {
        return this._document.isEqualNode(otherNode);
    }

    isSameNode(otherNode: Node | null): boolean {
        return this._document.isSameNode(otherNode);
    }

    lookupNamespaceURI(prefix: string | null): string | null {
        return this._document.lookupNamespaceURI(prefix);
    }

    lookupPrefix(namespace: string | null): string | null {
        return this._document.lookupPrefix(namespace);
    }

    normalize(): void {
    }

    open(url?: string, name?: string, features?: string, replace?: boolean): Document {
        return undefined;
    }

    prepend(...nodes: (Node | string)[]): void {
        return this._document.prepend(nodes);
    }

    queryCommandEnabled(commandId: string): boolean {
        return false;
    }

    queryCommandIndeterm(commandId: string): boolean {
        return false;
    }

    queryCommandState(commandId: string): boolean {
        return false;
    }

    queryCommandSupported(commandId: string): boolean {
        return false;
    }

    queryCommandValue(commandId: string): string {
        return '';
    }

    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
    querySelector(selectors: any): any {

        return this._document.querySelector(selectors);
    }

    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
    querySelectorAll(selectors: any): any {
        return this._document.querySelectorAll(selectors);
    }

    releaseEvents(): void {
    }

    removeChild<T extends Node>(oldChild: T): T {
        return undefined;
    }

    removeEventListener(type: any, listener: any, options?: boolean | EventListenerOptions): void {
    }

    replaceChild<T extends Node>(newChild: Node, oldChild: T): T {
        return this._document.replaceChild(newChild, oldChild);
    }

    write(...text: string[]): void {
    }

    writeln(...text: string[]): void {
    }

    get alinkColor(): string {
        return this._alinkColor;
    }

    set alinkColor(value: string) {
        this._alinkColor = value;
    }

    get bgColor(): string {
        return this._bgColor;
    }

    set bgColor(value: string) {
        this._bgColor = value;
    }

    get body(): HTMLElement {
        return this._body;
    }

    set body(value: HTMLElement) {
        this._body = value;
    }

    get cookie(): string {
        return this._cookie;
    }

    set cookie(value: string) {
        this._cookie = value;
    }

    get designMode(): string {
        return this._designMode;
    }

    set designMode(value: string) {
        this._designMode = value;
    }

    get dir(): string {
        return this._dir;
    }

    set dir(value: string) {
        this._dir = value;
    }

    get domain(): string {
        return this._domain;
    }

    set domain(value: string) {
        this._domain = value;
    }

    get fgColor(): string {
        return this._fgColor;
    }

    set fgColor(value: string) {
        this._fgColor = value;
    }

    get linkColor(): string {
        return this._linkColor;
    }

    set linkColor(value: string) {
        this._linkColor = value;
    }

    get location(): Location | null {
        return this._location;
    }

    set location(value: Location | null) {
        this._location = value;
    }

    get nodeValue(): string | null {
        return this._nodeValue;
    }

    set nodeValue(value: string | null) {
        this._nodeValue = value;
    }

    get onabort(): ((this: GlobalEventHandlers, ev: UIEvent) => any) | null {
        return this.window.onabort;
    }

    set onabort(value: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null) {
        this.window.onabort = value;
    }

    get onanimationcancel(): ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null {
        return this.window.onanimationcancel;
    }

    set onanimationcancel(value: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null) {
        this.window.onanimationcancel = value;
    }

    get onanimationend(): ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null {
        return this.window.onanimationend;
    }

    set onanimationend(value: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null) {
        this.window.onanimationend = value;
    }

    get onanimationiteration(): ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null {
        return this.window.onanimationiteration;
    }

    set onanimationiteration(value: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null) {
        this.window.onanimationiteration = value;
    }

    get onanimationstart(): ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null {
        return this.window.onanimationstart;
    }

    set onanimationstart(value: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null) {
        this.window.onanimationstart = value;
    }

    get onauxclick(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onauxclick;
    }

    set onauxclick(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onauxclick = value;
    }

    get onblur(): ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null {
        return this.window.onblur;
    }

    set onblur(value: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null) {
        this.window.onblur = value;
    }

    get oncancel(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.oncancel;
    }

    set oncancel(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.oncancel = value;
    }

    get oncanplay(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.oncanplay;
    }

    set oncanplay(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.oncanplay = value;
    }

    get oncanplaythrough(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.oncanplaythrough;
    }

    set oncanplaythrough(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.oncanplaythrough = value;
    }

    get onchange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onchange;
    }

    set onchange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onchange = value;
    }

    get onclick(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.onclick;
    }

    set onclick(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.onclick = value;
    }

    get onclose(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onclose;
    }

    set onclose(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onclose = value;
    }

    get oncontextmenu(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.oncontextmenu;
    }

    set oncontextmenu(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.oncontextmenu = value;
    }

    get oncopy(): ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null {
        return this.window.oncopy;
    }

    set oncopy(value: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null) {
        this.window.oncopy = value;
    }

    get oncuechange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.oncuechange;
    }

    set oncuechange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.oncuechange = value;
    }

    get oncut(): ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null {
        return this.window.oncut;
    }

    set oncut(value: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null) {
        this.window.oncut = value;
    }

    get ondblclick(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.ondblclick;
    }

    set ondblclick(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.ondblclick = value;
    }

    get ondrag(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this.window.ondrag;
    }

    set ondrag(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this.window.ondrag = value;
    }

    get ondragend(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this.window.ondragend;
    }

    set ondragend(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this.window.ondragend = value;
    }

    get ondragenter(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this.window.ondragenter;
    }

    set ondragenter(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this.window.ondragenter = value;
    }

    get ondragexit(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.ondragexit;
    }

    set ondragexit(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.ondragexit = value;
    }

    get ondragleave(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this.window.ondragleave;
    }

    set ondragleave(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this.window.ondragleave = value;
    }

    get ondragover(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this.window.ondragover;
    }

    set ondragover(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this.window.ondragover = value;
    }

    get ondragstart(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this.window.ondragstart;
    }

    set ondragstart(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this.window.ondragstart = value;
    }

    get ondrop(): ((this: GlobalEventHandlers, ev: DragEvent) => any) | null {
        return this.window.ondrop;
    }

    set ondrop(value: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null) {
        this.window.ondrop = value;
    }

    get ondurationchange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.ondurationchange;
    }

    set ondurationchange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.ondurationchange = value;
    }

    get onemptied(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onemptied;
    }

    set onemptied(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onemptied = value;
    }

    get onended(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onended;
    }

    set onended(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onended = value;
    }

    get onerror(): ErrorEventHandler {
        return this.window.onerror;
    }

    set onerror(value: ErrorEventHandler) {
        this.window.onerror = value;
    }

    get onfocus(): ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null {
        return this.window.onfocus;
    }

    set onfocus(value: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null) {
        this.window.onfocus = value;
    }

    get onfullscreenchange(): ((this: Document, ev: Event) => any) | null {
        return this.window.onfullscreenchange;
    }

    set onfullscreenchange(value: ((this: Document, ev: Event) => any) | null) {
        this.window.onfullscreenchange = value;
    }

    get onfullscreenerror(): ((this: Document, ev: Event) => any) | null {
        return this.window.onfullscreenerror;
    }

    set onfullscreenerror(value: ((this: Document, ev: Event) => any) | null) {
        this.window.onfullscreenerror = value;
    }

    get ongotpointercapture(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.ongotpointercapture;
    }

    set ongotpointercapture(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.ongotpointercapture = value;
    }

    get oninput(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.oninput;
    }

    set oninput(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.oninput = value;
    }

    get oninvalid(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.oninvalid;
    }

    set oninvalid(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.oninvalid = value;
    }

    get onkeydown(): ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null {
        return this.window.onkeydown;
    }

    set onkeydown(value: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null) {
        this.window.onkeydown = value;
    }

    get onkeypress(): ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null {
        return this.window.onkeypress;
    }

    set onkeypress(value: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null) {
        this.window.onkeypress = value;
    }

    get onkeyup(): ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null {
        return this.window.onkeyup;
    }

    set onkeyup(value: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null) {
        this.window.onkeyup = value;
    }

    get onload(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onload;
    }

    set onload(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onload = value;
    }

    get onloadeddata(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onloadeddata;
    }

    set onloadeddata(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onloadeddata = value;
    }

    get onloadedmetadata(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onloadedmetadata;
    }

    set onloadedmetadata(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onloadedmetadata = value;
    }

    get onloadend(): ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null {
        return this.window.onloadend;
    }

    set onloadend(value: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null) {
        this.window.onloadend = value;
    }

    get onloadstart(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onloadstart;
    }

    set onloadstart(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onloadstart = value;
    }

    get onlostpointercapture(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onlostpointercapture;
    }

    set onlostpointercapture(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onlostpointercapture = value;
    }

    get onmousedown(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.onmousedown;
    }

    set onmousedown(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.onmousedown = value;
    }

    get onmouseenter(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.onmouseenter;
    }

    set onmouseenter(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.onmouseenter = value;
    }

    get onmouseleave(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.onmouseleave;
    }

    set onmouseleave(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.onmouseleave = value;
    }

    get onmousemove(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.onmousemove;
    }

    set onmousemove(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.onmousemove = value;
    }

    get onmouseout(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.onmouseout;
    }

    set onmouseout(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.onmouseout = value;
    }

    get onmouseover(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.onmouseover;
    }

    set onmouseover(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.onmouseover = value;
    }

    get onmouseup(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.window.onmouseup;
    }

    set onmouseup(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.window.onmouseup = value;
    }

    get onpaste(): ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null {
        return this.window.onpaste;
    }

    set onpaste(value: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null) {
        this.window.onpaste = value;
    }

    get onpause(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onpause;
    }

    set onpause(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onpause = value;
    }

    get onplay(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onplay;
    }

    set onplay(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onplay = value;
    }

    get onplaying(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onplaying;
    }

    set onplaying(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onplaying = value;
    }

    get onpointercancel(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onpointercancel;
    }

    set onpointercancel(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onpointercancel = value;
    }

    get onpointerdown(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onpointerdown;
    }

    set onpointerdown(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onpointerdown = value;
    }

    get onpointerenter(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onpointerenter;
    }

    set onpointerenter(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onpointerenter = value;
    }

    get onpointerleave(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onpointerleave;
    }

    set onpointerleave(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onpointerleave = value;
    }

    get onpointermove(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onpointermove;
    }

    set onpointermove(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onpointermove = value;
    }

    get onpointerout(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onpointerout;
    }

    set onpointerout(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onpointerout = value;
    }

    get onpointerover(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onpointerover;
    }

    set onpointerover(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onpointerover = value;
    }

    get onpointerup(): ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null {
        return this.window.onpointerup;
    }

    set onpointerup(value: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null) {
        this.window.onpointerup = value;
    }

    get onprogress(): ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null {
        return this.window.onprogress;
    }

    set onprogress(value: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null) {
        this.window.onprogress = value;
    }

    get onratechange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onratechange;
    }

    set onratechange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onratechange = value;
    }

    get onreadystatechange(): ((this: Document, ev: ProgressEvent) => any) | null {
        return this.window.onreadystatechange;
    }

    set onreadystatechange(value: ((this: Document, ev: ProgressEvent) => any) | null) {
        this.window.onreadystatechange = value;
    }

    get onreset(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onreset;
    }

    set onreset(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onreset = value;
    }

    get onresize(): ((this: GlobalEventHandlers, ev: UIEvent) => any) | null {
        return this.window.onresize;
    }

    set onresize(value: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null) {
        this.window.onresize = value;
    }

    get onscroll(): ((this: GlobalEventHandlers, ev: UIEvent) => any) | null {
        return this.window.onscroll;
    }

    set onscroll(value: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null) {
        this.window.onscroll = value;
    }

    get onsecuritypolicyviolation(): ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null {
        return this.window.onsecuritypolicyviolation;
    }

    set onsecuritypolicyviolation(value: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null) {
        this.window.onsecuritypolicyviolation = value;
    }

    get onseeked(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onseeked;
    }

    set onseeked(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onseeked = value;
    }

    get onseeking(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onseeking;
    }

    set onseeking(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onseeking = value;
    }

    get onselect(): ((this: GlobalEventHandlers, ev: UIEvent) => any) | null {
        return this.window.onselect;
    }

    set onselect(value: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null) {
        this.window.onselect = value;
    }

    get onstalled(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onstalled;
    }

    set onstalled(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onstalled = value;
    }

    get onsubmit(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onsubmit;
    }

    set onsubmit(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onsubmit = value;
    }

    get onsuspend(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onsuspend;
    }

    set onsuspend(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onsuspend = value;
    }

    get ontimeupdate(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.ontimeupdate;
    }

    set ontimeupdate(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.ontimeupdate = value;
    }

    get ontoggle(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.ontoggle;
    }

    set ontoggle(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.ontoggle = value;
    }

    get ontouchcancel(): ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null {
        return this.window.ontouchcancel;
    }

    set ontouchcancel(value: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null) {
        this.window.ontouchcancel = value;
    }

    get ontouchend(): ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null {
        return this.window.ontouchend;
    }

    set ontouchend(value: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null) {
        this.window.ontouchend = value;
    }

    get ontouchmove(): ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null {
        return this.window.ontouchmove;
    }

    set ontouchmove(value: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null) {
        this.window.ontouchmove = value;
    }

    get ontouchstart(): ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null {
        return this.window.ontouchstart;
    }

    set ontouchstart(value: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null) {
        this.window.ontouchstart = value;
    }

    get ontransitioncancel(): ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null {
        return this.window.ontransitioncancel;
    }

    set ontransitioncancel(value: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null) {
        this.window.ontransitioncancel = value;
    }

    get ontransitionend(): ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null {
        return this.window.ontransitionend;
    }

    set ontransitionend(value: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null) {
        this.window.ontransitionend = value;
    }

    get ontransitionrun(): ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null {
        return this.window.ontransitionrun;
    }

    set ontransitionrun(value: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null) {
        this.window.ontransitionrun = value;
    }

    get ontransitionstart(): ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null {
        return this.window.ontransitionstart;
    }

    set ontransitionstart(value: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null) {
        this.window.ontransitionstart = value;
    }

    get onvisibilitychange(): ((this: Document, ev: Event) => any) | null {
        return this.window.onvisibilitychange;
    }

    set onvisibilitychange(value: ((this: Document, ev: Event) => any) | null) {
        this.window.onvisibilitychange = value;
    }

    get onvolumechange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onvolumechange;
    }

    set onvolumechange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onvolumechange = value;
    }

    get onwaiting(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.onwaiting;
    }

    set onwaiting(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.onwaiting = value;
    }

    get onwheel(): ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null {
        return this.window.onwheel;
    }

    set onwheel(value: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null) {
        this.window.onwheel = value;
    }

    get textContent(): string | null {
        return this._textContent;
    }

    set textContent(value: string | null) {
        this._textContent = value;
    }

    get vlinkColor(): string {
        return this._vlinkColor;
    }

    set vlinkColor(value: string) {
        this._vlinkColor = value;
    }

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    set canvas(value: HTMLCanvasElement) {
        this._canvas = value;
    }

    get document(): any {
        return this._document;
    }

    set document(value: any) {
        this._document = value;
    }

    get window(): any {
        return (this.canvas as any).window;
    }
}
