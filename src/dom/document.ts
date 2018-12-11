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
    alinkColor: string;
    readonly all: HTMLAllCollection;
    readonly anchors: HTMLCollectionOf<HTMLAnchorElement>;
    readonly applets: HTMLCollectionOf<HTMLAppletElement>;
    readonly baseURI: string;
    bgColor: string;
    body: HTMLElement;
    readonly characterSet: string;
    readonly charset: string;
    readonly childElementCount: number;
    readonly childNodes: NodeListOf<ChildNode>;
    readonly children: HTMLCollection;
    readonly compatMode: string;
    readonly contentType: string;
    cookie: string;
    readonly currentScript: HTMLOrSVGScriptElement | null;
    readonly defaultView: WindowProxy | null;
    designMode: string;
    dir: string;
    readonly doctype: DocumentType | null;
    readonly documentElement: HTMLElement | null;
    readonly documentURI: string;
    domain: string;
    readonly embeds: HTMLCollectionOf<HTMLEmbedElement>;
    fgColor: string;
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
    linkColor: string;
    readonly links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    location: Location | null;
    readonly namespaceURI: string | null;
    readonly nextSibling: Node | null;
    readonly nodeName: string;
    readonly nodeType: number;
    nodeValue: string | null;
    onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onauxclick: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    oncopy: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncut: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
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
    onfullscreenchange: ((this: Document, ev: Event) => any) | null;
    onfullscreenerror: ((this: Document, ev: Event) => any) | null;
    ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadend: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onpaste: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
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
    onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onreadystatechange: ((this: Document, ev: ProgressEvent) => any) | null;
    onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onscroll: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselect: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
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
    onvisibilitychange: ((this: Document, ev: Event) => any) | null;
    onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
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
    textContent: string | null;
    readonly timeline: DocumentTimeline;
    title: string;
    readonly visibilityState: VisibilityState;
    vlinkColor: string;
    canvas: HTMLCanvasElement;
    document: any;

    constructor(private globalCtx: any) {
        this.document = new JSDOM(`<body></body>`).window.document;
    }

    // addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    // addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: any, options?: boolean | AddEventListenerOptions): void {
        this.document.addEventListener(type, listener, options);
    }

    adoptNode<T extends Node>(source: T): T {
        return this.document.adoptNode(source);
    }

    append(...nodes: (Node | string)[]): void {
        return this.document.append(nodes);
    }

    appendChild<T extends Node>(newChild: T): T {
        return this.document.appendChild(newChild);
    }

    captureEvents(): void {
        this.document.captureEvents();
    }

    caretPositionFromPoint(x: number, y: number): CaretPosition | null {
        return this.document.caretPositionFromPoint(x, y);
    }

    caretRangeFromPoint(x: number, y: number): Range {
        return this.document.caretRangeFromPoint(x, y);
    }

    clear(): void {
        return this.document.clear();
    }

    cloneNode(deep?: boolean): Node {
        return this.document.cloneNode(deep);
    }

    close(): void {
        return this.document.close();
    }

    compareDocumentPosition(other: Node): number {
        return this.document.compareDocumentPosition(other);
    }

    contains(other: Node | null): boolean {
        return this.document.contains(other);
    }

    createAttribute(localName: string): Attr {
        return this.document.createAttribute(localName);
    }

    createAttributeNS(namespace: string | null, qualifiedName: string): Attr {
        return this.document.createAttributeNS(namespace);
    }

    createCDATASection(data: string): CDATASection {
        return this.document.createCDATASection(data);
    }

    createComment(data: string): Comment {
        return this.document.createComment(data);
    }

    createDocumentFragment(): DocumentFragment {
        return this.document.createDocumentFragment();
    }

    // createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): any;
    // createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): any;
    // createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
    createElement(tagName: string, options?: ElementCreationOptions): any | HTMLElement {
        if (tagName === 'canvas') {
            const canvas = this.globalCtx.createCanvas('');
            return canvas;
        } else {
            const el = this.document.createElement(tagName);
            return el;
        }
    }

    createElementNS(namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): any {
        return this.document.createElementNS(namespaceURI);
    }

    createEvent(eventInterface: any): any {
        return this.document.createEvent(eventInterface);
    }

    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter | null): NodeIterator {
        return this.document.createNodeIterator(root);
    }

    createProcessingInstruction(target: string, data: string): ProcessingInstruction {
        return this.document.createProcessingInstruction(target);
    }

    createRange(): Range {
        return this.document.createRange();
    }

    createTextNode(data: string): Text {
        return this.document.createTextNode(data);
    }

    createTouch(view: WindowProxy, target: EventTarget, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number): Touch {
        return this.document.createTouch(view);
    }

    createTouchList(...touches: Touch[]): TouchList {
        return this.document.createTouchList(touches);
    }

    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter | null, entityReferenceExpansion?: boolean): TreeWalker {
        return this.document.createTreeWalker(root);
    }

    dispatchEvent(event: Event): boolean {
        return this.document.dispatchEvent(event);
    }

    elementFromPoint(x: number, y: number): Element | null {
        return this.document.elementFromPoint(x, y);
    }

    elementsFromPoint(x: number, y: number): Element[] {
        return this.document.elementsFromPoint(x, y);
    }

    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | null, type: number, result: XPathResult | null): XPathResult {
        return this.document.evaluate(expression, contextNode, resolver);
    }

    execCommand(commandId: string, showUI?: boolean, value?: string): boolean {
        return this.document.execCommand(commandId);
    }

    exitFullscreen(): Promise<void> {
        return this.document.exitFullscreen();
    }

    getAnimations(): Animation[] {
        return this.document.getAnimations();
    }

    getElementById(elementId: string): HTMLElement | any | Element {
        if (this.canvas) {
            return this.document.getElementById(elementId);
        } else {
            this.canvas = this.globalCtx.createCanvas('');
            return this.canvas;
        }
    }

    getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
        return this.document.getElementsByClassName(classNames);
    }

    getElementsByName(elementName: string): NodeListOf<HTMLElement> {
        return this.document.getElementsByName(elementName);
    }


    getElementsByTagName(qualifiedName: any): any {
        return this.document.getElementsByTagName(qualifiedName);
    }

    getElementsByTagNameNS(namespaceURI: string, localName: string): any {
        return this.document.getElementsByTagNameNS(namespaceURI, localName);
    }

    getRootNode(options?: GetRootNodeOptions): Node {
        return this.document.getRootNode(options);
    }

    getSelection(): Selection | null {
        return this.document.getSelection();
    }

    hasChildNodes(): boolean {
        return this.document.hasChildNodes();
    }

    hasFocus(): boolean {
        return this.document.hasFocus();
    }

    importNode<T extends Node>(importedNode: T, deep: boolean): T {
        return this.document.importNode(importedNode, deep);
    }

    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T {
        return this.document.insertBefore(newChild, refChild);
    }

    isDefaultNamespace(namespace: string | null): boolean {
        return this.document.isDefaultNamespace(namespace);
    }

    isEqualNode(otherNode: Node | null): boolean {
        return this.document.isEqualNode(otherNode);
    }

    isSameNode(otherNode: Node | null): boolean {
        return this.document.isSameNode(otherNode);
    }

    lookupNamespaceURI(prefix: string | null): string | null {
        return this.document.lookupNamespaceURI(prefix);
    }

    lookupPrefix(namespace: string | null): string | null {
        return this.document.lookupPrefix(namespace);
    }

    normalize(): void {
    }

    open(url?: string, name?: string, features?: string, replace?: boolean): Document {
        return undefined;
    }

    prepend(...nodes: (Node | string)[]): void {
        return this.document.prepend(nodes);
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

        return this.document.querySelector(selectors);
    }

    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
    querySelectorAll(selectors: any): any {
        return this.document.querySelectorAll(selectors);
    }

    releaseEvents(): void {
    }

    removeChild<T extends Node>(oldChild: T): T {
        return undefined;
    }

    removeEventListener(type: any, listener: any, options?: boolean | EventListenerOptions): void {
    }

    replaceChild<T extends Node>(newChild: Node, oldChild: T): T {
        return this.document.replaceChild(newChild, oldChild);
    }

    write(...text: string[]): void {
    }

    writeln(...text: string[]): void {
    }

}
