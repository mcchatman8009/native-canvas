import {SdlWindow} from '../sdl-window/sdl-window';

const jsdom = require('jsdom');
const {JSDOM} = jsdom;

export class SdlDocument implements Document {
    private _ATTRIBUTE_NODE: number;
    private _CDATA_SECTION_NODE: number;
    private _COMMENT_NODE: number;
    private _DOCUMENT_FRAGMENT_NODE: number;
    private _DOCUMENT_NODE: number;
    private _DOCUMENT_POSITION_CONTAINED_BY: number;
    private _DOCUMENT_POSITION_CONTAINS: number;
    private _DOCUMENT_POSITION_DISCONNECTED: number;
    private _DOCUMENT_POSITION_FOLLOWING: number;
    private _DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    private _DOCUMENT_POSITION_PRECEDING: number;
    private _DOCUMENT_TYPE_NODE: number;
    private _ELEMENT_NODE: number;
    private _ENTITY_NODE: number;
    private _ENTITY_REFERENCE_NODE: number;
    private _NOTATION_NODE: number;
    private _PROCESSING_INSTRUCTION_NODE: number;
    private _TEXT_NODE: number;
    private _URL: string;
    private _activeElement: Element | null;
    private _alinkColor: string;
    private _all: HTMLAllCollection;
    private _anchors: HTMLCollectionOf<HTMLAnchorElement>;
    private _applets: HTMLCollectionOf<HTMLAppletElement>;
    private _baseURI: string;
    private _bgColor: string;
    private _body: HTMLElement;
    private _characterSet: string;
    private _charset: string;
    private _childElementCount: number;
    private _childNodes: NodeListOf<ChildNode>;
    private _children: HTMLCollection;
    private _compatMode: string;
    private _contentType: string;
    private _cookie: string;
    private _currentScript: HTMLOrSVGScriptElement | null;
    private _defaultView: WindowProxy | null;
    private _designMode: string;
    private _dir: string;
    private _doctype: DocumentType | null;
    private _documentElement: HTMLElement | null;
    private _documentURI: string;
    private _domain: string;
    private _embeds: HTMLCollectionOf<HTMLEmbedElement>;
    private _fgColor: string;
    private _firstChild: ChildNode | null;
    private _firstElementChild: Element | null;
    private _forms: HTMLCollectionOf<HTMLFormElement>;
    private _fullscreen: boolean;
    private _fullscreenEnabled: boolean;
    private _head: HTMLHeadElement | null;
    private _hidden: boolean;
    private _images: HTMLCollectionOf<HTMLImageElement>;
    private _implementation: DOMImplementation;
    private _inputEncoding: string;
    private _isConnected: boolean;
    private _lastChild: ChildNode | null;
    private _lastElementChild: Element | null;
    private _lastModified: string;
    private _linkColor: string;
    private _links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    private _location: Location | null;
    private _namespaceURI: string | null;
    private _nextSibling: Node | null;
    private _nodeName: string;

    private _nodeType: number;
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
    private _onerror: OnErrorEventHandler;
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
    private _origin: string;
    private _ownerDocument: Document | null;
    private _parentElement: HTMLElement | null;
    private _parentNode: (Node & ParentNode) | null;
    private _plugins: HTMLCollectionOf<HTMLEmbedElement>;
    private _previousSibling: Node | null;
    private _readyState: DocumentReadyState;
    private _referrer: string;
    private _scripts: HTMLCollectionOf<HTMLScriptElement>;
    private _scrollingElement: Element | null;
    private _styleSheets: StyleSheetList;
    private _textContent: string | null;
    private _timeline: DocumentTimeline;
    private _title: string;
    private _visibilityState: VisibilityState;
    private _vlinkColor: string;
    private _canvas: HTMLCanvasElement;
    private _document: any;

    constructor(private sdlWindow: SdlWindow) {
        this._document = new JSDOM(`<body></body>`).window.document;
    }

    get clientTop() {
        return 0;

    }

    get clientLeft() {
        return 0;

    }

    get ATTRIBUTE_NODE(): number {
        return this._ATTRIBUTE_NODE;
    }

    set ATTRIBUTE_NODE(value: number) {
        this._ATTRIBUTE_NODE = value;
    }

    get CDATA_SECTION_NODE(): number {
        return this._CDATA_SECTION_NODE;
    }

    set CDATA_SECTION_NODE(value: number) {
        this._CDATA_SECTION_NODE = value;
    }

    get COMMENT_NODE(): number {
        return this._COMMENT_NODE;
    }

    set COMMENT_NODE(value: number) {
        this._COMMENT_NODE = value;
    }

    get DOCUMENT_FRAGMENT_NODE(): number {
        return this._DOCUMENT_FRAGMENT_NODE;
    }

    set DOCUMENT_FRAGMENT_NODE(value: number) {
        this._DOCUMENT_FRAGMENT_NODE = value;
    }

    get DOCUMENT_NODE(): number {
        return this._DOCUMENT_NODE;
    }

    set DOCUMENT_NODE(value: number) {
        this._DOCUMENT_NODE = value;
    }

    get DOCUMENT_POSITION_CONTAINED_BY(): number {
        return this._DOCUMENT_POSITION_CONTAINED_BY;
    }

    set DOCUMENT_POSITION_CONTAINED_BY(value: number) {
        this._DOCUMENT_POSITION_CONTAINED_BY = value;
    }

    get DOCUMENT_POSITION_CONTAINS(): number {
        return this._DOCUMENT_POSITION_CONTAINS;
    }

    set DOCUMENT_POSITION_CONTAINS(value: number) {
        this._DOCUMENT_POSITION_CONTAINS = value;
    }

    get DOCUMENT_POSITION_DISCONNECTED(): number {
        return this._DOCUMENT_POSITION_DISCONNECTED;
    }

    set DOCUMENT_POSITION_DISCONNECTED(value: number) {
        this._DOCUMENT_POSITION_DISCONNECTED = value;
    }

    get DOCUMENT_POSITION_FOLLOWING(): number {
        return this._DOCUMENT_POSITION_FOLLOWING;
    }

    set DOCUMENT_POSITION_FOLLOWING(value: number) {
        this._DOCUMENT_POSITION_FOLLOWING = value;
    }

    get DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC(): number {
        return this._DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }

    set DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC(value: number) {
        this._DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = value;
    }

    get DOCUMENT_POSITION_PRECEDING(): number {
        return this._DOCUMENT_POSITION_PRECEDING;
    }

    set DOCUMENT_POSITION_PRECEDING(value: number) {
        this._DOCUMENT_POSITION_PRECEDING = value;
    }

    get DOCUMENT_TYPE_NODE(): number {
        return this._DOCUMENT_TYPE_NODE;
    }

    set DOCUMENT_TYPE_NODE(value: number) {
        this._DOCUMENT_TYPE_NODE = value;
    }

    get ELEMENT_NODE(): number {
        return this._ELEMENT_NODE;
    }

    set ELEMENT_NODE(value: number) {
        this._ELEMENT_NODE = value;
    }

    get ENTITY_NODE(): number {
        return this._ENTITY_NODE;
    }

    set ENTITY_NODE(value: number) {
        this._ENTITY_NODE = value;
    }

    get ENTITY_REFERENCE_NODE(): number {
        return this._ENTITY_REFERENCE_NODE;
    }

    set ENTITY_REFERENCE_NODE(value: number) {
        this._ENTITY_REFERENCE_NODE = value;
    }

    get NOTATION_NODE(): number {
        return this._NOTATION_NODE;
    }

    set NOTATION_NODE(value: number) {
        this._NOTATION_NODE = value;
    }

    get PROCESSING_INSTRUCTION_NODE(): number {
        return this._PROCESSING_INSTRUCTION_NODE;
    }

    set PROCESSING_INSTRUCTION_NODE(value: number) {
        this._PROCESSING_INSTRUCTION_NODE = value;
    }

    get TEXT_NODE(): number {
        return this._TEXT_NODE;
    }

    set TEXT_NODE(value: number) {
        this._TEXT_NODE = value;
    }

    get URL(): string {
        return this._URL;
    }

    set URL(value: string) {
        this._URL = value;
    }

    get activeElement(): Element | null {
        return this._activeElement;
    }

    set activeElement(value: Element | null) {
        this._activeElement = value;
    }

    get all(): HTMLAllCollection {
        return this._all;
    }

    set all(value: HTMLAllCollection) {
        this._all = value;
    }

    get anchors(): HTMLCollectionOf<HTMLAnchorElement> {
        return this._anchors;
    }

    set anchors(value: HTMLCollectionOf<HTMLAnchorElement>) {
        this._anchors = value;
    }

    get applets(): HTMLCollectionOf<HTMLAppletElement> {
        return this._applets;
    }

    set applets(value: HTMLCollectionOf<HTMLAppletElement>) {
        this._applets = value;
    }

    get baseURI(): string {
        return this._baseURI;
    }

    set baseURI(value: string) {
        this._baseURI = value;
    }

    get characterSet(): string {
        return this._characterSet;
    }

    set characterSet(value: string) {
        this._characterSet = value;
    }

    get charset(): string {
        return this._charset;
    }

    set charset(value: string) {
        this._charset = value;
    }

    get childElementCount(): number {
        return this._childElementCount;
    }

    set childElementCount(value: number) {
        this._childElementCount = value;
    }

    get childNodes(): NodeListOf<ChildNode> {
        return [] as any;
    }

    set childNodes(value: NodeListOf<ChildNode>) {
        this._childNodes = value;
    }

    get children(): HTMLCollection {
        return this._children;
    }

    set children(value: HTMLCollection) {
        this._children = value;
    }

    get compatMode(): string {
        return this._compatMode;
    }

    set compatMode(value: string) {
        this._compatMode = value;
    }

    get contentType(): string {
        return this._contentType;
    }

    set contentType(value: string) {
        this._contentType = value;
    }

    get currentScript(): HTMLOrSVGScriptElement | null {
        return this._currentScript;
    }

    set currentScript(value: HTMLOrSVGScriptElement | null) {
        this._currentScript = value;
    }

    // @ts-ignore
    get defaultView(): WindowProxy | null {
        return this._defaultView;
    }

    // @ts-ignore
    set defaultView(value: WindowProxy | null) {
        this._defaultView = value;
    }

    get doctype(): DocumentType | null {
        return this._doctype;
    }

    set doctype(value: DocumentType | null) {
        this._doctype = value;
    }

    get documentElement(): HTMLElement | null {
        return this as any;
    }

    set documentElement(value: HTMLElement | null) {
        this._documentElement = value;
    }

    get documentURI(): string {
        return this._documentURI;
    }

    set documentURI(value: string) {
        this._documentURI = value;
    }

    get embeds(): HTMLCollectionOf<HTMLEmbedElement> {
        return this._embeds;
    }

    set embeds(value: HTMLCollectionOf<HTMLEmbedElement>) {
        this._embeds = value;
    }

    get firstChild(): ChildNode | null {
        return this._firstChild;
    }

    set firstChild(value: ChildNode | null) {
        this._firstChild = value;
    }

    get firstElementChild(): Element | null {
        return this._firstElementChild;
    }

    set firstElementChild(value: Element | null) {
        this._firstElementChild = value;
    }

    get forms(): HTMLCollectionOf<HTMLFormElement> {
        return this._forms;
    }

    set forms(value: HTMLCollectionOf<HTMLFormElement>) {
        this._forms = value;
    }

    get fullscreen(): boolean {
        return this._fullscreen;
    }

    set fullscreen(value: boolean) {
        this._fullscreen = value;
    }

    get fullscreenEnabled(): boolean {
        return this._fullscreenEnabled;
    }

    set fullscreenEnabled(value: boolean) {
        this._fullscreenEnabled = value;
    }

    get head(): HTMLHeadElement | null {
        return this._head;
    }

    set head(value: HTMLHeadElement | null) {
        this._head = value;
    }

    get hidden(): boolean {
        return this._hidden;
    }

    set hidden(value: boolean) {
        this._hidden = value;
    }

    get images(): HTMLCollectionOf<HTMLImageElement> {
        return this._images;
    }

    set images(value: HTMLCollectionOf<HTMLImageElement>) {
        this._images = value;
    }

    get implementation(): DOMImplementation {
        return this._implementation;
    }

    set implementation(value: DOMImplementation) {
        this._implementation = value;
    }

    get inputEncoding(): string {
        return this._inputEncoding;
    }

    set inputEncoding(value: string) {
        this._inputEncoding = value;
    }

    get isConnected(): boolean {
        return this._isConnected;
    }

    set isConnected(value: boolean) {
        this._isConnected = value;
    }

    get lastChild(): ChildNode | null {
        return this._lastChild;
    }

    set lastChild(value: ChildNode | null) {
        this._lastChild = value;
    }

    get lastElementChild(): Element | null {
        return this._lastElementChild;
    }

    set lastElementChild(value: Element | null) {
        this._lastElementChild = value;
    }

    get lastModified(): string {
        return this._lastModified;
    }

    set lastModified(value: string) {
        this._lastModified = value;
    }

    get links(): HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement> {
        return this._links;
    }

    set links(value: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>) {
        this._links = value;
    }

    get namespaceURI(): string | null {
        return this._namespaceURI;
    }

    set namespaceURI(value: string | null) {
        this._namespaceURI = value;
    }

    // @ts-ignore
    get nextSibling(): Node | null {
        return this._nextSibling;
    }

    // @ts-ignore
    set nextSibling(value: Node | null) {
        this._nextSibling = value;
    }

    get nodeName(): string {
        return this._nodeName;
    }

    set nodeName(value: string) {
        this._nodeName = value;
    }

    get nodeType(): number {
        return this._nodeType;
    }

    set nodeType(value: number) {
        this._nodeType = value;
    }

    get origin(): string {
        return this._origin;
    }

    set origin(value: string) {
        this._origin = value;
    }

    // @ts-ignore
    get ownerDocument(): Document | null {
        return this._ownerDocument;
    }

    // @ts-ignore
    set ownerDocument(value: Document | null) {
        this._ownerDocument = value;
    }

    get parentElement(): HTMLElement | null {
        return this._parentElement;
    }

    set parentElement(value: HTMLElement | null) {
        this._parentElement = value;
    }

    get parentNode(): (Node & ParentNode) | null {
        return this._parentNode;
    }

    set parentNode(value: (Node & ParentNode) | null) {
        this._parentNode = value;
    }

    get plugins(): HTMLCollectionOf<HTMLEmbedElement> {
        return this._plugins;
    }

    set plugins(value: HTMLCollectionOf<HTMLEmbedElement>) {
        this._plugins = value;
    }

    // @ts-ignore
    get previousSibling(): Node | null {
        return this._previousSibling;
    }

    // @ts-ignore
    set previousSibling(value: Node | null) {
        this._previousSibling = value;
    }

    get readyState(): DocumentReadyState {
        return 'complete';
    }

    set readyState(value: DocumentReadyState) {
        this._readyState = value;
    }

    get referrer(): string {
        return this._referrer;
    }

    set referrer(value: string) {
        this._referrer = value;
    }

    get scripts(): HTMLCollectionOf<HTMLScriptElement> {
        return this._scripts;
    }

    set scripts(value: HTMLCollectionOf<HTMLScriptElement>) {
        this._scripts = value;
    }

    get scrollingElement(): Element | null {
        return this._scrollingElement;
    }

    set scrollingElement(value: Element | null) {
        this._scrollingElement = value;
    }

    get styleSheets(): StyleSheetList {
        return this._styleSheets;
    }

    set styleSheets(value: StyleSheetList) {
        this._styleSheets = value;
    }

    get timeline(): DocumentTimeline {
        return this._timeline;
    }

    set timeline(value: DocumentTimeline) {
        this._timeline = value;
    }

    get visibilityState(): VisibilityState {
        return this._visibilityState;
    }

    set visibilityState(value: VisibilityState) {
        this._visibilityState = value;
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
        this.window.addEventListener(type as any, listener, options);
    }

    adoptNode<T extends Node>(source: T): T {
        return this._document.adoptNode(source);
    }

    append(...nodes: (Node | string)[]): void {
        // return this._document.append(nodes);
        return undefined;
    }

    appendChild<T extends Node>(newChild: T): T {
        // return this._document.appendChild(newChild);
        return undefined;
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

    createElement(tagName: string, options?: ElementCreationOptions): any | HTMLElement {
        if (tagName === 'canvas') {
            const canvas = this.sdlWindow.canvas;
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
            this.window.disableFullScreen();
        }

        return Promise.resolve(null);
    }

    getAnimations(): Animation[] {
        return this._document.getAnimations();
    }

    getElementById(elementId: string): HTMLElement | any | Element {
        if (this._canvas) {
            // return this._document.getElementById(elementId);
            return this._canvas;
        } else {
            this._canvas = this.sdlWindow.canvas;
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
        // return this._document.insertBefore(newChild, refChild);
        return null;
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
        return this as any;
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
        return null;
    }

    set oncopy(value: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null) {
        // this.window.oncopy = value;
    }

    get oncuechange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.oncuechange;
    }

    set oncuechange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.oncuechange = value;
    }

    get oncut(): ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null {
        // return this.window.oncut;
        return null;
    }

    set oncut(value: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null) {
        // this.window.oncut = value;
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

    get onerror(): OnErrorEventHandler {
        return this.window.onerror;
    }

    set onerror(value: OnErrorEventHandlerNonNull) {
        this.window.onerror = value;
    }

    get onfocus(): ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null {
        return this.window.onfocus;
    }

    set onfocus(value: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null) {
        this.window.onfocus = value;
    }

    get onfullscreenchange(): ((this: Document, ev: Event) => any) | null {
        // return this.window.onfullscreenchange;
        return null;
    }

    set onfullscreenchange(value: ((this: Document, ev: Event) => any) | null) {
        // this.window.onfullscreenchange = value;
    }

    get onfullscreenerror(): ((this: Document, ev: Event) => any) | null {
        // return this.window.onfullscreenerror;
        return null;
    }

    set onfullscreenerror(value: ((this: Document, ev: Event) => any) | null) {
        // this.window.onfullscreenerror = value;
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
        // return this.window.onpaste;
        return null;
    }

    set onpaste(value: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null) {
        // this.window.onpaste = value;
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
        // return this.window.onreadystatechange;
        return null;
    }

    set onreadystatechange(value: ((this: Document, ev: ProgressEvent) => any) | null) {
        // this.window.onreadystatechange = value;
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
        // return this.window.onvisibilitychange;
        return null;
    }

    set onvisibilitychange(value: ((this: Document, ev: Event) => any) | null) {
        // this.window.onvisibilitychange = value;
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

    get window(): SdlWindow {
        return this.sdlWindow;
    }
}
