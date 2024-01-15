import {SdlContext} from './sdl-context';
import {NativeWindow} from '../../../window/native-window';
import {SdlWindow} from '../sdl-window/sdl-window';

export class SdlCanvas implements HTMLCanvasElement {
    private _accessKeyLabel: string;
    private _autocapitalize: string;
    private _translate: boolean;
    private _onfullscreenchange: (this: Element, ev: Event) => any;
    private _onfullscreenerror: (this: Element, ev: Event) => any;
    private _onauxclick: (this: GlobalEventHandlers, ev: Event) => any;
    private _oncancel: (this: GlobalEventHandlers, ev: Event) => any;
    private _onclose: (this: GlobalEventHandlers, ev: Event) => any;
    private _ondragexit: (this: GlobalEventHandlers, ev: Event) => any;
    private _onresize: (this: GlobalEventHandlers, ev: UIEvent) => any;
    private _onsecuritypolicyviolation: (this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any;
    private _ontoggle: (this: GlobalEventHandlers, ev: Event) => any;
    private _inputMode: string;
    private _nonce: string;
    private _firstChild: Node | any;
    private _lastChild: Node | any;
    private _parentNode: Node | any;
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
    private _accessKey: string;
    private _assignedSlot: HTMLSlotElement | null;
    private _attributes: NamedNodeMap;
    private _baseURI: string | null;
    private _childElementCount: number;
    private _childNodes: NodeListOf<Node & ChildNode>;
    private _children: HTMLCollection;
    private _classList: DOMTokenList;
    private _className: string;
    private _clientHeight: number;
    private _clientLeft: number;
    private _clientTop: number;
    private _clientWidth: number;
    private _contentEditable: string;
    private _dataset: DOMStringMap;
    private _dir: string;
    private _draggable: boolean;
    private _firstElementChild: Element | null;
    private _hidden: boolean;
    private _hideFocus: boolean;
    private _id: string;
    private _innerHTML: string;
    private _innerText: string;
    private _isConnected: boolean;
    private _isContentEditable: boolean;
    private _lang: string;
    private _lastElementChild: Element | null;
    private _localName: string | null;
    private _msContentZoomFactor: number;
    private _msRegionOverflow: string;
    private _namespaceURI: string | null;
    private _nextElementSibling: Element | null;
    private _nextSibling: Node | null;
    private _nodeName: string;
    private _nodeType: number;
    private _nodeValue: string | null;
    private _offsetHeight: number;
    private _offsetLeft: number;
    private _offsetParent: Element;
    private _offsetTop: number;
    private _offsetWidth: number;
    private _height: number;
    private _width: number;
    private _onabort: ((this: HTMLElement, ev: UIEvent) => any) | null;
    private _onactivate: ((this: HTMLElement, ev: Event) => any) | null;
    private _onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    private _onariarequest: ((this: Element, ev: Event) => any) | null;
    private _onbeforeactivate: ((this: HTMLElement, ev: Event) => any) | null;
    private _onbeforecopy: ((this: HTMLElement, ev: Event) => any) | null;
    private _onbeforecut: ((this: HTMLElement, ev: Event) => any) | null;
    private _onbeforedeactivate: ((this: HTMLElement, ev: Event) => any) | null;
    private _onbeforepaste: ((this: HTMLElement, ev: Event) => any) | null;
    private _onblur: ((this: HTMLElement, ev: FocusEvent) => any) | null;
    private _oncanplay: ((this: HTMLElement, ev: Event) => any) | null;
    private _oncanplaythrough: ((this: HTMLElement, ev: Event) => any) | null;
    private _onchange: ((this: HTMLElement, ev: Event) => any) | null;
    private _onclick: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _oncommand: ((this: Element, ev: Event) => any) | null;
    private _oncontextmenu: ((this: HTMLElement, ev: PointerEvent) => any) | null;
    private _oncopy: ((this: HTMLElement, ev: ClipboardEvent) => any) | null;
    private _oncuechange: ((this: HTMLElement, ev: Event) => any) | null;
    private _oncut: ((this: HTMLElement, ev: ClipboardEvent) => any) | null;
    private _ondblclick: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _ondeactivate: ((this: HTMLElement, ev: Event) => any) | null;
    private _ondrag: ((this: HTMLElement, ev: DragEvent) => any) | null;
    private _ondragend: ((this: HTMLElement, ev: DragEvent) => any) | null;
    private _ondragenter: ((this: HTMLElement, ev: DragEvent) => any) | null;
    private _ondragleave: ((this: HTMLElement, ev: DragEvent) => any) | null;
    private _ondragover: ((this: HTMLElement, ev: DragEvent) => any) | null;
    private _ondragstart: ((this: HTMLElement, ev: DragEvent) => any) | null;
    private _ondrop: ((this: HTMLElement, ev: DragEvent) => any) | null;
    private _ondurationchange: ((this: HTMLElement, ev: Event) => any) | null;
    private _onemptied: ((this: HTMLElement, ev: Event) => any) | null;
    private _onended: ((this: HTMLElement, ev: Event) => any) | null;
    private _onerror: ((this: HTMLElement, ev: ErrorEvent) => any) | null;
    private _onfocus: ((this: HTMLElement, ev: FocusEvent) => any) | null;
    private _ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _oninput: ((this: HTMLElement, ev: Event) => any) | null;
    private _oninvalid: ((this: HTMLElement, ev: Event) => any) | null;
    private _onkeydown: ((this: HTMLElement, ev: KeyboardEvent) => any) | null;
    private _onkeypress: ((this: HTMLElement, ev: KeyboardEvent) => any) | null;
    private _onkeyup: ((this: HTMLElement, ev: KeyboardEvent) => any) | null;
    private _onload: ((this: HTMLElement, ev: Event) => any) | null;
    private _onloadeddata: ((this: HTMLElement, ev: Event) => any) | null;
    private _onloadedmetadata: ((this: HTMLElement, ev: Event) => any) | null;
    private _onloadstart: ((this: HTMLElement, ev: Event) => any) | null;
    private _onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onmousedown: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _onmouseenter: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _onmouseleave: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _onmousemove: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _onmouseout: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _onmouseover: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _onmouseup: ((this: HTMLElement, ev: MouseEvent) => any) | null;
    private _onmousewheel: ((this: HTMLElement, ev: WheelEvent) => any) | null;
    private _onmscontentzoom: ((this: HTMLElement, ev: Event) => any) | null;
    private _onmsgesturechange: ((this: Element, ev: Event) => any) | null;
    private _onmsgesturedoubletap: ((this: Element, ev: Event) => any) | null;
    private _onmsgestureend: ((this: Element, ev: Event) => any) | null;
    private _onmsgesturehold: ((this: Element, ev: Event) => any) | null;
    private _onmsgesturestart: ((this: Element, ev: Event) => any) | null;
    private _onmsgesturetap: ((this: Element, ev: Event) => any) | null;
    private _onmsgotpointercapture: ((this: Element, ev: Event) => any) | null;
    private _onmsinertiastart: ((this: Element, ev: Event) => any) | null;
    private _onmslostpointercapture: ((this: Element, ev: Event) => any) | null;
    private _onmsmanipulationstatechanged: ((this: HTMLElement, ev: Event) => any) | null;
    private _onmspointercancel: ((this: Element, ev: Event) => any) | null;
    private _onmspointerdown: ((this: Element, ev: Event) => any) | null;
    private _onmspointerenter: ((this: Element, ev: Event) => any) | null;
    private _onmspointerleave: ((this: Element, ev: Event) => any) | null;
    private _onmspointermove: ((this: Element, ev: Event) => any) | null;
    private _onmspointerout: ((this: Element, ev: Event) => any) | null;
    private _onmspointerover: ((this: Element, ev: Event) => any) | null;
    private _onmspointerup: ((this: Element, ev: Event) => any) | null;
    private _onpaste: ((this: HTMLElement, ev: ClipboardEvent) => any) | null;
    private _onpause: ((this: HTMLElement, ev: Event) => any) | null;
    private _onplay: ((this: HTMLElement, ev: Event) => any) | null;
    private _onplaying: ((this: HTMLElement, ev: Event) => any) | null;
    private _onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    private _onprogress: ((this: HTMLElement, ev: ProgressEvent) => any) | null;
    private _onratechange: ((this: HTMLElement, ev: Event) => any) | null;
    private _onreset: ((this: HTMLElement, ev: Event) => any) | null;
    private _onscroll: ((this: HTMLElement, ev: UIEvent) => any) | null;
    private _onseeked: ((this: HTMLElement, ev: Event) => any) | null;
    private _onseeking: ((this: HTMLElement, ev: Event) => any) | null;
    private _onselect: ((this: HTMLElement, ev: UIEvent) => any) | null;
    private _onselectstart: ((this: HTMLElement, ev: Event) => any) | null;
    private _onstalled: ((this: HTMLElement, ev: Event) => any) | null;
    private _onsubmit: ((this: HTMLElement, ev: Event) => any) | null;
    private _onsuspend: ((this: HTMLElement, ev: Event) => any) | null;
    private _ontimeupdate: ((this: HTMLElement, ev: Event) => any) | null;
    private _ontouchcancel: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    private _ontouchend: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    private _ontouchmove: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    private _ontouchstart: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    private _ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    private _ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    private _ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    private _ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    private _onvolumechange: ((this: HTMLElement, ev: Event) => any) | null;
    private _onwaiting: ((this: HTMLElement, ev: Event) => any) | null;
    private _onwebkitfullscreenchange: ((this: Element, ev: Event) => any) | null;
    private _onwebkitfullscreenerror: ((this: Element, ev: Event) => any) | null;
    private _onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    private _outerHTML: string;
    private _outerText: string;
    private _ownerDocument: Document;
    private _parentElement: HTMLElement | null;
    private _prefix: string | null;
    private _previousElementSibling: Element | null;
    private _previousSibling: Node | null;
    private _scrollHeight: number;
    private _scrollLeft: number;
    private _scrollTop: number;
    private _scrollWidth: number;
    private _shadowRoot: ShadowRoot | null;
    private _slot: string;
    private _spellcheck: boolean;
    private _style: CSSStyleDeclaration;
    private _tabIndex: number;
    private _tagName: string;
    private _textContent: string | null;
    private _title: string;
    private _nativeCtx: SdlContext;
    private _canvas: HTMLCanvasElement;

    constructor(public window: NativeWindow) {
        // @ts-ignore
        const sdlWindow = window as SdlWindow;
        this._style = {} as any;

        this._canvas = sdlWindow.internalCanvas;
        this._nativeCtx = new SdlContext(this._canvas as HTMLCanvasElement);

        // @ts-ignore
        sdlWindow.canvas = this;
    }

    get firstChild(): Node | any {
        return this._firstChild;
    }

    set firstChild(value: Node | any) {
        this._firstChild = value;
    }

    get lastChild(): Node | any {
        return this._lastChild;
    }

    set lastChild(value: Node | any) {
        this._lastChild = value;
    }

    get parentNode(): Node | any {
        return this._parentNode;
    }

    set parentNode(value: Node | any) {
        this._parentNode = value;
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

    get assignedSlot(): HTMLSlotElement | null {
        return this._assignedSlot;
    }

    set assignedSlot(value: HTMLSlotElement | null) {
        this._assignedSlot = value;
    }

    get attributes(): NamedNodeMap {
        return this._attributes;
    }

    set attributes(value: NamedNodeMap) {
        this._attributes = value;
    }

    get baseURI(): string | null {
        return this._baseURI;
    }

    set baseURI(value: string | null) {
        this._baseURI = value;
    }

    get childElementCount(): number {
        return this._childElementCount;
    }

    set childElementCount(value: number) {
        this._childElementCount = value;
    }

    get childNodes(): NodeListOf<Node & ChildNode> {
        return this._childNodes;
    }

    set childNodes(value: NodeListOf<Node & ChildNode>) {
        this._childNodes = value;
    }

    get children(): HTMLCollection {
        return this._children;
    }

    set children(value: HTMLCollection) {
        this._children = value;
    }

    get classList(): DOMTokenList {
        return this._classList;
    }

    set classList(value: DOMTokenList) {
        this._classList = value;
    }

    get clientHeight(): number {
        return this._clientHeight;
    }

    set clientHeight(value: number) {
        this._clientHeight = value;
    }

    get clientLeft(): number {
        return this._clientLeft;
    }

    set clientLeft(value: number) {
        this._clientLeft = value;
    }

    get clientTop(): number {
        return this._clientTop;
    }

    set clientTop(value: number) {
        this._clientTop = value;
    }

    get clientWidth(): number {
        return this._clientWidth;
    }

    set clientWidth(value: number) {
        this._clientWidth = value;
    }

    get dataset(): DOMStringMap {
        return this._dataset;
    }

    set dataset(value: DOMStringMap) {
        this._dataset = value;
    }

    get firstElementChild(): Element | null {
        return this._firstElementChild;
    }

    set firstElementChild(value: Element | null) {
        this._firstElementChild = value;
    }

    get isConnected(): boolean {
        return this._isConnected;
    }

    set isConnected(value: boolean) {
        this._isConnected = value;
    }

    get isContentEditable(): boolean {
        return this._isContentEditable;
    }

    set isContentEditable(value: boolean) {
        this._isContentEditable = value;
    }

    get lastElementChild(): Element | null {
        return this._lastElementChild;
    }

    set lastElementChild(value: Element | null) {
        this._lastElementChild = value;
    }

    get localName(): string | null {
        return this._localName;
    }

    set localName(value: string | null) {
        this._localName = value;
    }

    get msRegionOverflow(): string {
        return this._msRegionOverflow;
    }

    set msRegionOverflow(value: string) {
        this._msRegionOverflow = value;
    }

    get namespaceURI(): string | null {
        return this._namespaceURI;
    }

    set namespaceURI(value: string | null) {
        this._namespaceURI = value;
    }

    get nextElementSibling(): Element | null {
        return this._nextElementSibling;
    }

    set nextElementSibling(value: Element | null) {
        this._nextElementSibling = value;
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

    get offsetHeight(): number {
        return this._offsetHeight;
    }

    set offsetHeight(value: number) {
        this._offsetHeight = value;
    }

    get offsetLeft(): number {
        return this._offsetLeft;
    }

    set offsetLeft(value: number) {
        this._offsetLeft = value;
    }

    get offsetParent(): Element {
        return this._offsetParent;
    }

    set offsetParent(value: Element) {
        this._offsetParent = value;
    }

    get offsetTop(): number {
        return this._offsetTop;
    }

    set offsetTop(value: number) {
        this._offsetTop = value;
    }

    get offsetWidth(): number {
        return this._offsetWidth;
    }

    set offsetWidth(value: number) {
        this._offsetWidth = value;
    }

    get ownerDocument(): Document {
        return this._ownerDocument;
    }

    set ownerDocument(value: Document) {
        this._ownerDocument = value;
    }

    get parentElement(): HTMLElement | null {
        return this._parentElement;
    }

    set parentElement(value: HTMLElement | null) {
        this._parentElement = value;
    }

    get prefix(): string | null {
        return this._prefix;
    }

    set prefix(value: string | null) {
        this._prefix = value;
    }

    get previousElementSibling(): Element | null {
        return this._previousElementSibling;
    }

    set previousElementSibling(value: Element | null) {
        this._previousElementSibling = value;
    }

    // @ts-ignore
    get previousSibling(): Node | null {
        return this._previousSibling;
    }

    // @ts-ignore
    set previousSibling(value: Node | null) {
        this._previousSibling = value;
    }

    get scrollHeight(): number {
        return this._scrollHeight;
    }

    set scrollHeight(value: number) {
        this._scrollHeight = value;
    }

    get scrollWidth(): number {
        return this._scrollWidth;
    }

    set scrollWidth(value: number) {
        this._scrollWidth = value;
    }

    get shadowRoot(): ShadowRoot | null {
        return this._shadowRoot;
    }

    set shadowRoot(value: ShadowRoot | null) {
        this._shadowRoot = value;
    }

    get style(): CSSStyleDeclaration {
        return this._style;
    }

    set style(value: CSSStyleDeclaration) {
        this._style = value;
    }

    get tagName(): string {
        return this._tagName;
    }

    set tagName(value: string) {
        this._tagName = value;
    }

    get accessKeyLabel(): string {
        return this._accessKeyLabel;
    }

    set accessKeyLabel(value: string) {
        this._accessKeyLabel = value;
    }

    get autocapitalize(): string {
        return this._autocapitalize;
    }

    set autocapitalize(value: string) {
        this._autocapitalize = value;
    }

    get translate(): boolean {
        return this._translate;
    }

    set translate(value: boolean) {
        this._translate = value;
    }

    get inputMode(): string {
        return this._inputMode;
    }

    set inputMode(value: string) {
        this._inputMode = value;
    }

    get nonce(): string {
        return this._nonce;
    }

    set nonce(value: string) {
        this._nonce = value;
    }

    get accessKey(): string {
        return this._accessKey;
    }

    set accessKey(value: string) {
        this._accessKey = value;
    }

    get className(): string {
        return this._className;
    }

    set className(value: string) {
        this._className = value;
    }

    get contentEditable(): string {
        return this._contentEditable;
    }

    set contentEditable(value: string) {
        this._contentEditable = value;
    }

    get dir(): string {
        return this._dir;
    }

    set dir(value: string) {
        this._dir = value;
    }

    get draggable(): boolean {
        return this._draggable;
    }

    set draggable(value: boolean) {
        this._draggable = value;
    }

    get hidden(): boolean {
        return this._hidden;
    }

    set hidden(value: boolean) {
        this._hidden = value;
    }

    get hideFocus(): boolean {
        return this._hideFocus;
    }

    set hideFocus(value: boolean) {
        this._hideFocus = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get innerHTML(): string {
        return this._innerHTML;
    }

    set innerHTML(value: string) {
        this._innerHTML = value;
    }

    get innerText(): string {
        return this._innerText;
    }

    set innerText(value: string) {
        this._innerText = value;
    }

    get lang(): string {
        return this._lang;
    }

    set lang(value: string) {
        this._lang = value;
    }

    get msContentZoomFactor(): number {
        return this._msContentZoomFactor;
    }

    set msContentZoomFactor(value: number) {
        this._msContentZoomFactor = value;
    }

    get nodeValue(): string | null {
        return this._nodeValue;
    }

    set nodeValue(value: string | null) {
        this._nodeValue = value;
    }

    get height(): number {
        return this._canvas.height;
    }

    set height(value: number) {
        this.window.windowImplementation().canvasHeight = value;
    }

    get width(): number {
        return this._canvas.width;
    }

    set width(value: number) {
        this.window.windowImplementation().canvasWidth = value;
    }

    get onactivate(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onactivate;
    }

    set onactivate(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onactivate = value;
    }

    get onariarequest(): ((this: Element, ev: Event) => any) | null {
        return this._onariarequest;
    }

    set onariarequest(value: ((this: Element, ev: Event) => any) | null) {
        this._onariarequest = value;
    }

    get onbeforeactivate(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onbeforeactivate;
    }

    set onbeforeactivate(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onbeforeactivate = value;
    }

    get onbeforecopy(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onbeforecopy;
    }

    set onbeforecopy(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onbeforecopy = value;
    }

    get onbeforecut(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onbeforecut;
    }

    set onbeforecut(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onbeforecut = value;
    }

    get onbeforedeactivate(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onbeforedeactivate;
    }

    set onbeforedeactivate(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onbeforedeactivate = value;
    }

    get onbeforepaste(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onbeforepaste;
    }

    set onbeforepaste(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onbeforepaste = value;
    }


    get oncommand(): ((this: Element, ev: Event) => any) | null {
        return this._oncommand;
    }

    set oncommand(value: ((this: Element, ev: Event) => any) | null) {
        this._oncommand = value;
    }

    get ondeactivate(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._ondeactivate;
    }

    set ondeactivate(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._ondeactivate = value;
    }

    get onmousewheel(): ((this: HTMLElement, ev: WheelEvent) => any) | null {
        return this._onmousewheel;
    }

    set onmousewheel(value: ((this: HTMLElement, ev: WheelEvent) => any) | null) {
        this._onmousewheel = value;
    }

    get onmscontentzoom(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onmscontentzoom;
    }

    set onmscontentzoom(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onmscontentzoom = value;
    }

    get onmsgesturechange(): ((this: Element, ev: Event) => any) | null {
        return this._onmsgesturechange;
    }

    set onmsgesturechange(value: ((this: Element, ev: Event) => any) | null) {
        this._onmsgesturechange = value;
    }

    get onmsgesturedoubletap(): ((this: Element, ev: Event) => any) | null {
        return this._onmsgesturedoubletap;
    }

    set onmsgesturedoubletap(value: ((this: Element, ev: Event) => any) | null) {
        this._onmsgesturedoubletap = value;
    }

    get onmsgestureend(): ((this: Element, ev: Event) => any) | null {
        return this._onmsgestureend;
    }

    set onmsgestureend(value: ((this: Element, ev: Event) => any) | null) {
        this._onmsgestureend = value;
    }

    get onmsgesturehold(): ((this: Element, ev: Event) => any) | null {
        return this._onmsgesturehold;
    }

    set onmsgesturehold(value: ((this: Element, ev: Event) => any) | null) {
        this._onmsgesturehold = value;
    }

    get onmsgesturestart(): ((this: Element, ev: Event) => any) | null {
        return this._onmsgesturestart;
    }

    set onmsgesturestart(value: ((this: Element, ev: Event) => any) | null) {
        this._onmsgesturestart = value;
    }

    get onmsgesturetap(): ((this: Element, ev: Event) => any) | null {
        return this._onmsgesturetap;
    }

    set onmsgesturetap(value: ((this: Element, ev: Event) => any) | null) {
        this._onmsgesturetap = value;
    }

    get onmsgotpointercapture(): ((this: Element, ev: Event) => any) | null {
        return this._onmsgotpointercapture;
    }

    set onmsgotpointercapture(value: ((this: Element, ev: Event) => any) | null) {
        this._onmsgotpointercapture = value;
    }

    get onmsinertiastart(): ((this: Element, ev: Event) => any) | null {
        return this._onmsinertiastart;
    }

    set onmsinertiastart(value: ((this: Element, ev: Event) => any) | null) {
        this._onmsinertiastart = value;
    }

    get onmslostpointercapture(): ((this: Element, ev: Event) => any) | null {
        return this._onmslostpointercapture;
    }

    set onmslostpointercapture(value: ((this: Element, ev: Event) => any) | null) {
        this._onmslostpointercapture = value;
    }

    get onmsmanipulationstatechanged(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onmsmanipulationstatechanged;
    }

    set onmsmanipulationstatechanged(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onmsmanipulationstatechanged = value;
    }

    get onmspointercancel(): ((this: Element, ev: Event) => any) | null {
        return this._onmspointercancel;
    }

    set onmspointercancel(value: ((this: Element, ev: Event) => any) | null) {
        this._onmspointercancel = value;
    }

    get onmspointerdown(): ((this: Element, ev: Event) => any) | null {
        return this._onmspointerdown;
    }

    set onmspointerdown(value: ((this: Element, ev: Event) => any) | null) {
        this._onmspointerdown = value;
    }

    get onmspointerenter(): ((this: Element, ev: Event) => any) | null {
        return this._onmspointerenter;
    }

    set onmspointerenter(value: ((this: Element, ev: Event) => any) | null) {
        this._onmspointerenter = value;
    }

    get onmspointerleave(): ((this: Element, ev: Event) => any) | null {
        return this._onmspointerleave;
    }

    set onmspointerleave(value: ((this: Element, ev: Event) => any) | null) {
        this._onmspointerleave = value;
    }

    get onmspointermove(): ((this: Element, ev: Event) => any) | null {
        return this._onmspointermove;
    }

    set onmspointermove(value: ((this: Element, ev: Event) => any) | null) {
        this._onmspointermove = value;
    }

    get onmspointerout(): ((this: Element, ev: Event) => any) | null {
        return this._onmspointerout;
    }

    set onmspointerout(value: ((this: Element, ev: Event) => any) | null) {
        this._onmspointerout = value;
    }

    get onmspointerover(): ((this: Element, ev: Event) => any) | null {
        return this._onmspointerover;
    }

    set onmspointerover(value: ((this: Element, ev: Event) => any) | null) {
        this._onmspointerover = value;
    }

    get onmspointerup(): ((this: Element, ev: Event) => any) | null {
        return this._onmspointerup;
    }

    set onmspointerup(value: ((this: Element, ev: Event) => any) | null) {
        this._onmspointerup = value;
    }

    get onselectstart(): ((this: HTMLElement, ev: Event) => any) | null {
        return this._onselectstart;
    }

    set onselectstart(value: ((this: HTMLElement, ev: Event) => any) | null) {
        this._onselectstart = value;
    }


    get onwebkitfullscreenchange(): ((this: Element, ev: Event) => any) | null {
        return this._onwebkitfullscreenchange;
    }

    set onwebkitfullscreenchange(value: ((this: Element, ev: Event) => any) | null) {
        this._onwebkitfullscreenchange = value;
    }

    get onwebkitfullscreenerror(): ((this: Element, ev: Event) => any) | null {
        return this._onwebkitfullscreenerror;
    }

    set onwebkitfullscreenerror(value: ((this: Element, ev: Event) => any) | null) {
        this._onwebkitfullscreenerror = value;
    }

    get outerHTML(): string {
        return this._outerHTML;
    }

    set outerHTML(value: string) {
        this._outerHTML = value;
    }

    get outerText(): string {
        return this._outerText;
    }

    set outerText(value: string) {
        this._outerText = value;
    }

    get scrollLeft(): number {
        return this._scrollLeft;
    }

    set scrollLeft(value: number) {
        this._scrollLeft = value;
    }

    get scrollTop(): number {
        return this._scrollTop;
    }

    set scrollTop(value: number) {
        this._scrollTop = value;
    }

    get slot(): string {
        return this._slot;
    }

    set slot(value: string) {
        this._slot = value;
    }

    get spellcheck(): boolean {
        return this._spellcheck;
    }

    set spellcheck(value: boolean) {
        this._spellcheck = value;
    }

    get tabIndex(): number {
        return this._tabIndex;
    }

    set tabIndex(value: number) {
        this._tabIndex = value;
    }

    get textContent(): string | null {
        return this._textContent;
    }

    set textContent(value: string | null) {
        this._textContent = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get nativeCtx(): SdlContext {
        return this._nativeCtx;
    }

    set nativeCtx(value: SdlContext) {
        this._nativeCtx = value;
    }

    animate(keyframes: any[] | any | null, options?: number | any): Animation {
        return undefined;
    }

    appendChild<T extends Node>(newChild: T): T {
        return undefined;
    }

    attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot {
        return undefined;
    }

    blur(): void {
    }

    click(): void {
    }

    cloneNode(deep?: boolean): Node {
        return undefined;
    }

    closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    closest(selector: string): Element | null;

    closest(selector: string): any {
    }

    compareDocumentPosition(other: Node): number {
        return 0;
    }

    contains(child: Node): boolean {
        return false;
    }

    dispatchEvent(evt: Event): boolean {
        return false;
    }

    dragDrop(): boolean {
        return false;
    }

    focus(): void {
    }

    getAnimations(): Animation[] {
        return [];
    }

    getAttribute(qualifiedName: string): string | null {
        return undefined;
    }

    getAttributeNS(namespaceURI: string, localName: string): string {
        return '';
    }

    getAttributeNode(name: string): Attr | null {
        return undefined;
    }

    getAttributeNodeNS(namespaceURI: string, localName: string): Attr | null {
        return undefined;
    }

    // @ts-ignore
    getBoundingClientRect(): ClientRect | DOMRect {
        const bottom = 0;
        const top = 0;
        const left = 0;
        const right = 0;

        return {bottom, top, left, right, width: this.width, height: this.height};
    }

    // @ts-ignore
    getClientRects(): ClientRectList | DOMRectList {
        return undefined;
    }


    getElementsByTagName(name: any): any {
    }

    getElementsByTagNameNS(namespaceURI: 'http://www.w3.org/1999/xhtml', localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: 'http://www.w3.org/2000/svg', localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: 'http://www.w3.org/1999/xhtml' | 'http://www.w3.org/2000/svg' | string, localName: string): HTMLCollectionOf<HTMLElement> | HTMLCollectionOf<SVGElement> | HTMLCollectionOf<Element> {
        return undefined;
    }

    hasAttribute(name: string): boolean {
        return false;
    }

    hasAttributeNS(namespaceURI: string, localName: string): boolean {
        return false;
    }

    hasAttributes(): boolean {
        return false;
    }

    hasChildNodes(): boolean {
        return false;
    }

    hasPointerCapture(pointerId: number): boolean {
        return false;
    }

    insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null {
        return undefined;
    }

    insertAdjacentHTML(where: InsertPosition, html: string): void {
    }

    insertAdjacentText(where: InsertPosition, text: string): void {
    }

    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T {
        return undefined;
    }

    isDefaultNamespace(namespaceURI: string | null): boolean {
        return false;
    }

    isEqualNode(arg: Node): boolean {
        return false;
    }

    isSameNode(other: Node): boolean {
        return false;
    }

    lookupNamespaceURI(prefix: string | null): string | null {
        return undefined;
    }

    lookupPrefix(namespaceURI: string | null): string | null {
        return undefined;
    }

    matches(selectors: string): boolean {
        return false;
    }

    msGetInputContext(): MSInputMethodContext {
        return undefined;
    }

    msGetRegionContent(): any {
    }

    msGetUntransformedBounds(): ClientRect {
        return undefined;
    }

    msMatchesSelector(selectors: string): boolean {
        return false;
    }

    msReleasePointerCapture(pointerId: number): void {
    }

    msSetPointerCapture(pointerId: number): void {
    }

    msZoomTo(args: any): void {
    }

    normalize(): void {
    }

    remove(): void {
    }

    removeAttribute(qualifiedName: string): void {
    }

    removeAttributeNS(namespaceURI: string, localName: string): void {
    }

    removeAttributeNode(oldAttr: Attr): Attr {
        return undefined;
    }

    removeChild<T extends Node>(oldChild: T): T {
        return undefined;
    }

    replaceChild<T extends Node>(newChild: Node, oldChild: T): T {
        return undefined;
    }


    requestPointerLock(): void {
    }

    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scroll(options?: ScrollToOptions | number, y?: number): void {
    }

    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions | number, y?: number): void {
    }

    scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void {
    }

    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions | number, y?: number): void {
    }

    setAttribute(qualifiedName: string, value: string): void {
    }

    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void {
    }

    setAttributeNode(newAttr: Attr): Attr {
        return undefined;
    }

    setAttributeNodeNS(newAttr: Attr): Attr {
        return undefined;
    }

    setPointerCapture(pointerId: number): void {
    }

    webkitMatchesSelector(selectors: string): boolean {
        return false;
    }

    webkitRequestFullScreen(): void {
        this.requestFullscreen();
    }

    webkitRequestFullscreen(): void {
        this.requestFullscreen();
    }

    addEventListener(type: any, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
        this.window.addEventListener(type, listener);
    }


    getContext(contextId: '2d' | string, contextAttributes?: any): CanvasRenderingContext2D | WebGLRenderingContext | any {
        if (contextId === '2d') {
            // return this.
            return this._nativeCtx;
        }
        return undefined;
    }

    msToBlob(): Blob {
        return undefined;
    }

    // removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    // removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: any, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
        this.window.addEventListener(type, listener);
    }

    toBlob(callback: (result: (Blob | null)) => void, type?: string, ...args: any[]): void {
    }

    toDataURL(type?: string, ...args: any[]): string {
        return '';
    }

    getElementsByClassName(classNames: string): any {
        return undefined;
    }

    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | any;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | any;
    querySelector(selectors: string): any {
    }

    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;

    querySelectorAll(selectors: any): any {
    }

    requestFullscreen(): any {
        this.window.enableFullScreen();
    }

    releasePointerCapture(pointerId: number): void {
    }

    getAttributeNames(): string[] {
        throw new Error('Method not implemented.');
    }

    toggleAttribute(qualifiedName: string, force?: boolean): boolean {
        throw new Error('Method not implemented.');
    }

    getRootNode(options?: any): Node {
        throw new Error('Method not implemented.');
    }

    append(...nodes: (string | Node)[]): void {
        throw new Error('Method not implemented.');
    }

    prepend(...nodes: (string | Node)[]): void {
        throw new Error('Method not implemented.');
    }

    after(...nodes: (string | Node)[]): void {
        throw new Error('Method not implemented.');
    }

    before(...nodes: (string | Node)[]): void {
        throw new Error('Method not implemented.');
    }

    replaceWith(...nodes: (string | Node)[]): void {
        throw new Error('Method not implemented.');
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

    get oncopy(): any {
        return null;
    }

    set oncopy(value: any) {
        // this.window.oncopy = value;
    }

    get oncuechange(): ((this: GlobalEventHandlers, ev: Event) => any) | null {
        return this.window.oncuechange;
    }

    set oncuechange(value: ((this: GlobalEventHandlers, ev: Event) => any) | null) {
        this.window.oncuechange = value;
    }

    get oncut(): any {
        // return this.window.oncut;
        return null;
    }

    set oncut(value: any) {
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

    get onerror(): OnErrorEventHandlerNonNull {
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

    get onfullscreenchange(): any {
        // return this.window.onfullscreenchange;
        return null;
    }

    set onfullscreenchange(value: any) {
        // this.window.onfullscreenchange = value;
    }

    get onfullscreenerror(): any | null {
        // return this.window.onfullscreenerror;
        return null;
    }

    set onfullscreenerror(value: any) {
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
        return this.window.onload;
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
        return null;
        // return this.window.onvisibilitychange;
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
}

