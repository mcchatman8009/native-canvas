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

    constructor(private globalCtx: any) {
    }

    // addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    // addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    // addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    // addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: any, options?: boolean | AddEventListenerOptions): void {
    }

    adoptNode<T extends Node>(source: T): T {
        return undefined;
    }

    append(...nodes: (Node | string)[]): void {
    }

    appendChild<T extends Node>(newChild: T): T {
        return undefined;
    }

    captureEvents(): void {
    }

    caretPositionFromPoint(x: number, y: number): CaretPosition | null {
        return undefined;
    }

    caretRangeFromPoint(x: number, y: number): Range {
        return undefined;
    }

    clear(): void {
    }

    cloneNode(deep?: boolean): Node {
        return undefined;
    }

    close(): void {
    }

    compareDocumentPosition(other: Node): number {
        return 0;
    }

    contains(other: Node | null): boolean {
        return false;
    }

    createAttribute(localName: string): Attr {
        return undefined;
    }

    createAttributeNS(namespace: string | null, qualifiedName: string): Attr {
        return undefined;
    }

    createCDATASection(data: string): CDATASection {
        return undefined;
    }

    createComment(data: string): Comment {
        return undefined;
    }

    createDocumentFragment(): DocumentFragment {
        return undefined;
    }

    // createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): any;
    // createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): any;
    // createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
    createElement(tagName: string, options?: ElementCreationOptions): any | HTMLElement {
        // const canvas = createCa
        return undefined;
    }

    createElementNS(namespaceURI: 'http://www.w3.org/1999/xhtml', qualifiedName: string): HTMLElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'a'): SVGAElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'circle'): SVGCircleElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'clipPath'): SVGClipPathElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'componentTransferFunction'): SVGComponentTransferFunctionElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'defs'): SVGDefsElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'desc'): SVGDescElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'ellipse'): SVGEllipseElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feBlend'): SVGFEBlendElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feColorMatrix'): SVGFEColorMatrixElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feComponentTransfer'): SVGFEComponentTransferElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feComposite'): SVGFECompositeElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feConvolveMatrix'): SVGFEConvolveMatrixElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feDiffuseLighting'): SVGFEDiffuseLightingElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feDisplacementMap'): SVGFEDisplacementMapElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feDistantLight'): SVGFEDistantLightElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feFlood'): SVGFEFloodElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feFuncA'): SVGFEFuncAElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feFuncB'): SVGFEFuncBElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feFuncG'): SVGFEFuncGElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feFuncR'): SVGFEFuncRElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feGaussianBlur'): SVGFEGaussianBlurElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feImage'): SVGFEImageElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feMerge'): SVGFEMergeElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feMergeNode'): SVGFEMergeNodeElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feMorphology'): SVGFEMorphologyElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feOffset'): SVGFEOffsetElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'fePointLight'): SVGFEPointLightElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feSpecularLighting'): SVGFESpecularLightingElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feSpotLight'): SVGFESpotLightElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feTile'): SVGFETileElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'feTurbulence'): SVGFETurbulenceElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'filter'): SVGFilterElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'foreignObject'): SVGForeignObjectElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'g'): SVGGElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'image'): SVGImageElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'gradient'): SVGGradientElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'line'): SVGLineElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'linearGradient'): SVGLinearGradientElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'marker'): SVGMarkerElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'mask'): SVGMaskElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'path'): SVGPathElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'metadata'): SVGMetadataElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'pattern'): SVGPatternElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'polygon'): SVGPolygonElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'polyline'): SVGPolylineElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'radialGradient'): SVGRadialGradientElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'rect'): SVGRectElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'svg'): SVGSVGElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'script'): SVGScriptElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'stop'): SVGStopElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'style'): SVGStyleElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'switch'): SVGSwitchElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'symbol'): SVGSymbolElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'tspan'): SVGTSpanElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'textContent'): SVGTextContentElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'text'): SVGTextElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'textPath'): SVGTextPathElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'textPositioning'): SVGTextPositioningElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'title'): SVGTitleElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'use'): SVGUseElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: 'view'): SVGViewElement;
    createElementNS(namespaceURI: 'http://www.w3.org/2000/svg', qualifiedName: string): SVGElement;
    createElementNS(namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): Element {
        return undefined;
    }

    createEvent(eventInterface: any): any {
        return undefined;
    }

    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter | null): NodeIterator {
        return undefined;
    }

    createProcessingInstruction(target: string, data: string): ProcessingInstruction {
        return undefined;
    }

    createRange(): Range {
        return undefined;
    }

    createTextNode(data: string): Text {
        return undefined;
    }

    createTouch(view: WindowProxy, target: EventTarget, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number): Touch {
        return undefined;
    }

    createTouchList(...touches: Touch[]): TouchList {
        return undefined;
    }

    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter | null, entityReferenceExpansion?: boolean): TreeWalker {
        return undefined;
    }

    dispatchEvent(event: Event): boolean {
        return false;
    }

    elementFromPoint(x: number, y: number): Element | null {
        return undefined;
    }

    elementsFromPoint(x: number, y: number): Element[] {
        return [];
    }

    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | null, type: number, result: XPathResult | null): XPathResult {
        return undefined;
    }

    execCommand(commandId: string, showUI?: boolean, value?: string): boolean {
        return false;
    }

    exitFullscreen(): Promise<void> {
        return undefined;
    }

    getAnimations(): Animation[] {
        return [];
    }

    private createCanvas(title: string) {
        if (this.canvas === undefined) {
            this.canvas = this.globalCtx.createCanvas('');
        }
    }

    getElementById(elementId: string): HTMLElement | any | Element {
        this.createCanvas(elementId);

        return this.canvas;
    }

    getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
        return undefined;
    }

    getElementsByName(elementName: string): NodeListOf<HTMLElement> {
        return undefined;
    }


    getElementsByTagName(qualifiedName: any): any {
    }

    getElementsByTagNameNS(namespaceURI: 'http://www.w3.org/1999/xhtml', localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: 'http://www.w3.org/2000/svg', localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: 'http://www.w3.org/1999/xhtml' | 'http://www.w3.org/2000/svg' | string, localName: string): HTMLCollectionOf<HTMLElement> | HTMLCollectionOf<SVGElement> | HTMLCollectionOf<Element> {
        return undefined;
    }

    getRootNode(options?: GetRootNodeOptions): Node {
        return undefined;
    }

    getSelection(): Selection | null {
        return undefined;
    }

    hasChildNodes(): boolean {
        return false;
    }

    hasFocus(): boolean {
        return false;
    }

    importNode<T extends Node>(importedNode: T, deep: boolean): T {
        return undefined;
    }

    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T {
        return undefined;
    }

    isDefaultNamespace(namespace: string | null): boolean {
        return false;
    }

    isEqualNode(otherNode: Node | null): boolean {
        return false;
    }

    isSameNode(otherNode: Node | null): boolean {
        return false;
    }

    lookupNamespaceURI(prefix: string | null): string | null {
        return undefined;
    }

    lookupPrefix(namespace: string | null): string | null {
        return undefined;
    }

    normalize(): void {
    }

    open(url?: string, name?: string, features?: string, replace?: boolean): Document {
        return undefined;
    }

    prepend(...nodes: (Node | string)[]): void {
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
    }

    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
    querySelectorAll(selectors: any): any {
    }

    releaseEvents(): void {
    }

    removeChild<T extends Node>(oldChild: T): T {
        return undefined;
    }

    removeEventListener(type: any, listener: any, options?: boolean | EventListenerOptions): void {
    }

    replaceChild<T extends Node>(newChild: Node, oldChild: T): T {
        return undefined;
    }

    write(...text: string[]): void {
    }

    writeln(...text: string[]): void {
    }

}
