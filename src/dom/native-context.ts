import {Image} from '../image/image';

export class NativeContext implements CanvasRenderingContext2D {
    private _mozImageSmoothingEnabled: boolean;
    private _msFillRule: CanvasFillRule;
    private _oImageSmoothingEnabled: boolean;
    private _webkitImageSmoothingEnabled: boolean;
    private _direction: any;
    private _filter: string;
    private _font: string;
    private _globalAlpha: number;
    private _globalCompositeOperation: string;
    private _imageSmoothingEnabled: boolean;
    private _imageSmoothingQuality: any;
    private _lineCap: any;
    private _lineDashOffset: number;
    private _lineJoin: any;
    private _lineWidth: number;
    private _miterLimit: number;
    private _shadowBlur: number;
    private _shadowColor: string;
    private _shadowOffsetX: number;
    private _shadowOffsetY: number;
    private _strokeStyle: string | CanvasGradient | CanvasPattern;
    private _textAlign: any;
    private _textBaseline: any;
    private _fillStyle: string | CanvasGradient | CanvasPattern;
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d');

        // this.fillStyle = '#FFFFFF';
        // this.strokeStyle = '#000000';
        // this.fillRect(0, 0, canvas.width, canvas.height);
        //
        // this.fillStyle = '#000000';
        // this.strokeStyle = '#000000';
    }

    get canvas() {
        return this._canvas;
    }

    get mozImageSmoothingEnabled(): boolean {
        return this._mozImageSmoothingEnabled;
    }

    set mozImageSmoothingEnabled(value: boolean) {
        this._mozImageSmoothingEnabled = value;
    }

    get msFillRule(): CanvasFillRule {
        return this._msFillRule;
    }

    set msFillRule(value: CanvasFillRule) {
        this._msFillRule = value;
    }

    get oImageSmoothingEnabled(): boolean {
        return this._oImageSmoothingEnabled;
    }

    set oImageSmoothingEnabled(value: boolean) {
        this._oImageSmoothingEnabled = value;
    }

    get webkitImageSmoothingEnabled(): boolean {
        return this._webkitImageSmoothingEnabled;
    }

    set webkitImageSmoothingEnabled(value: boolean) {
        this._webkitImageSmoothingEnabled = value;
    }

    get direction(): any {
        return this._direction;
    }

    set direction(value: any) {
        this._direction = value;
        this._ctx.direction = value;
    }

    get filter(): string {
        return this._filter;
    }

    set filter(value: string) {
        this._filter = value;
        this._ctx.filter = value;
    }

    get font(): string {
        return this._font;
    }

    set font(value: string) {
        this._font = value;
        this._ctx.font = value;
    }

    get globalAlpha(): number {
        return this._globalAlpha;
    }

    set globalAlpha(value: number) {
        this._globalAlpha = value;
        this._ctx.globalAlpha = value;
    }

    get globalCompositeOperation(): string {
        return this._globalCompositeOperation;
    }

    set globalCompositeOperation(value: string) {
        this._globalCompositeOperation = value;
        this._ctx.globalCompositeOperation = value;
    }

    get imageSmoothingEnabled(): boolean {
        return this._imageSmoothingEnabled;
    }

    set imageSmoothingEnabled(value: boolean) {
        this._imageSmoothingEnabled = value;
        this._ctx.imageSmoothingEnabled = value;
    }

    get imageSmoothingQuality(): any {
        return this._imageSmoothingQuality;
    }

    set imageSmoothingQuality(value: any) {
        this._imageSmoothingQuality = value;
        this._ctx.imageSmoothingQuality = value;
    }

    get lineCap(): any {
        return this._lineCap;
    }

    set lineCap(value: any) {
        this._lineCap = value;
        this._ctx.lineCap = value;
    }

    get lineJoin(): any {
        return this._lineJoin;
    }

    set lineJoin(value: any) {
        this._lineJoin = value;
        this._ctx.lineJoin = value;
    }

    get lineWidth(): number {
        return this._lineWidth;
    }

    set lineWidth(value: number) {
        this._lineWidth = value;
        this._ctx.lineWidth = value;
    }

    get miterLimit(): number {
        return this._miterLimit;
    }

    set miterLimit(value: number) {
        this._miterLimit = value;
        this._ctx.miterLimit = value;
    }

    get shadowBlur(): number {
        return this._shadowBlur;
    }

    set shadowBlur(value: number) {
        this._shadowBlur = value;
        this._ctx.shadowBlur = value;
    }

    get shadowColor(): string {
        return this._shadowColor;
    }

    set shadowColor(value: string) {
        this._shadowColor = value;
        this._ctx.shadowColor = value;
    }

    get shadowOffsetX(): number {
        return this._shadowOffsetX;
    }

    set shadowOffsetX(value: number) {
        this._shadowOffsetX = value;
        this._ctx.shadowOffsetX = value;
    }

    get shadowOffsetY(): number {
        return this._shadowOffsetY;
    }

    set shadowOffsetY(value: number) {
        this._shadowOffsetY = value;
        this._ctx.shadowOffsetY = value;
    }

    get strokeStyle(): string | CanvasGradient | CanvasPattern {
        return this._strokeStyle;
    }

    set strokeStyle(value: string | CanvasGradient | CanvasPattern) {
        this._strokeStyle = value;
        this._ctx.strokeStyle = value;
    }

    get textAlign(): any {
        return this._textAlign;
    }

    set textAlign(value: any) {
        this._textAlign = value;
        this._ctx.textAlign = value;
    }

    get textBaseline(): any {
        return this._textBaseline;
    }

    set textBaseline(value: any) {
        this._textBaseline = value;
        this._ctx.textBaseline = value;
    }

    get lineDashOffset(): number {
        return this._lineDashOffset;
    }

    set lineDashOffset(value: number) {
        this._lineDashOffset = value;
        this._ctx.lineDashOffset = value;
    }

    get fillStyle(): string | CanvasGradient | CanvasPattern {
        return this._fillStyle;
    }

    set fillStyle(value: string | CanvasGradient | CanvasPattern) {
        this._fillStyle = value;
        this._ctx.fillStyle = value;
    }

    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void {
        this.save();
        this.beginPath();
        const args = Array.from(arguments);
        this._ctx.arc.apply(this._ctx, args);
        this.closePath();
        this.restore();
    }

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this._ctx.arcTo(x1, y1, x2, y2, radius);
    }

    beginPath(): void {
        this._ctx.beginPath();
    }

    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
        this._ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    clearRect(x: number, y: number, w: number, h: number): void {
        this._ctx.save();
        this._ctx.clearRect(0, 0, w, h);
        this._ctx.restore();

        // const fillStyle = this.fillStyle;
        // this.fillStyle = '#FFFFFF';
        // this._ctx.fillRect(x, y, w, h);
        // this.fillStyle = fillStyle;
    }

    clip(fillRule?: any | Path2D): void {
        const args = Array.from(arguments);
        return this._ctx.clip.apply(this._ctx, args);
    }

    closePath(): void {
        this._ctx.closePath();
    }

    createImageData(sw: number | ImageData, sh?: number): ImageData {
        const args = Array.from(arguments);
        return this._ctx.createImageData.apply(this._ctx, args);
    }

    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
        const args = Array.from(arguments);
        return this._ctx.createLinearGradient.apply(this._ctx, args);
    }

    createPattern(image: any, repetition: string): CanvasPattern | null {
        const args = Array.from(arguments);
        return this._ctx.createPattern.apply(this._ctx, args);
    }

    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient {
        const args = Array.from(arguments);
        return this._ctx.createRadialGradient.apply(this._ctx, args);
    }

    drawFocusIfNeeded(element: any): void {
        const args = Array.from(arguments);
        return this._ctx.drawFocusIfNeeded.apply(this._ctx, args);
    }

    drawImage(image: any, dx: number, dy: number, dw?: number, dh?: number, dx2?: number, dy2?: number, dw2?: number, dh2?: number): void {
        const args = Array.from(arguments);
        if (image instanceof Image) {
            args[0] = image.imageImplementation;
        }

        this._ctx.drawImage.apply(this._ctx, args);
    }

    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void {
        this.save();
        this.beginPath();
        this._ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
        this.closePath();
        this.restore();
    }

    fill(fillRule?: any): void {
        const args = Array.from(arguments);
        return this._ctx.fill.apply(this._ctx, args);
    }

    fillRect(x: number, y: number, w: number, h: number): void {
        this._ctx.fillRect(x, y, w, h);
    }

    fillText(text: string, x: number, y: number, maxWidth?: number): void {
        const args = Array.from(arguments);
        this._ctx.fillText.apply(this._ctx, args);
    }

    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData {
        return this._ctx.getImageData(sx, sy, sw, sh);
    }

    getLineDash(): number[] {
        return this._ctx.getLineDash();
    }

    getTransform(): any {
        return (this._ctx as any).getTransform();
    }

    isPointInPath(x: any, y: number, fillRule?: any): boolean {
        const args = Array.from(arguments);
        return this._ctx.isPointInPath.apply(this._ctx, args);
    }

    isPointInStroke(x: number | Path2D, y: number): boolean {
        const args = Array.from(arguments);
        return this._ctx.isPointInStroke.apply(this._ctx, args);
    }

    lineTo(x: number, y: number): void {
        this._ctx.lineTo(x, y);
    }

    measureText(text: string): TextMetrics {
        return this._ctx.measureText(text);
    }

    moveTo(x: number, y: number): void {
        this._ctx.moveTo(x, y);
    }

    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void {
        const args = Array.from(arguments);
        this._ctx.putImageData.apply(this._ctx, args);
    }

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
        this._ctx.quadraticCurveTo(cpx, cpy, x, y);
    }

    rect(x: number, y: number, w: number, h: number): void {
        this.save();
        this.beginPath();
        this._ctx.rect(x, y, w, h);
        this.closePath();
        this.restore();
    }

    resetTransform(): void {
        (this._ctx as any).resetTransform();
    }

    restore(): void {
        this._ctx.restore();
    }

    rotate(angle: number): void {
        this._ctx.rotate(angle);
    }

    save(): void {
        this._ctx.save();
    }

    scale(x: number, y: number): void {
        this._ctx.scale(x, y);
    }

    // scrollPathIntoView(): void;
    scrollPathIntoView(path?: Path2D): void {
        (this._ctx as any).scrollPathIntoView(path);
    }

    setLineDash(segments: number[]): void {
        this._ctx.setLineDash(segments);
    }

    setTransform(a?: number | any, b?: number, c?: number, d?: number, e?: number, f?: number): void {
        this._ctx.setTransform(a, b, c, d, e, f);
    }

    stroke(path?: Path2D): void {
        this._ctx.stroke(path);
    }

    strokeRect(x: number, y: number, w: number, h: number): void {
        this._ctx.strokeRect(x, y, w, h);
    }

    strokeText(text: string, x: number, y: number, maxWidth?: number): void {
        const args = Array.from(arguments);
        this._ctx.strokeText.apply(this._ctx, args);
    }

    transform(a: number, b: number, c: number, d: number, e: number, f: number): void {
        this._ctx.transform(a, b, c, d, e, f);
    }

    translate(x: number, y: number): void {
        this._ctx.translate(x, y);
    }

}
