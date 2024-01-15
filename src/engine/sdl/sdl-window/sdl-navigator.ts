import {SdlWindow} from './sdl-window';

export class SdlNavigator implements Navigator {
    private readonly _activeVRDisplays: ReadonlyArray<VRDisplay>;
    private readonly _appCodeName: string;
    private readonly _appName: string;
    private readonly _appVersion: string;
    private readonly _authentication: WebAuthentication;
    private readonly _cookieEnabled: boolean;
    private readonly _doNotTrack: string | null;
    private readonly _geolocation: Geolocation;
    private readonly _hardwareConcurrency: number;
    private readonly _language: string;
    private readonly _languages: ReadonlyArray<string>;
    private readonly _maxTouchPoints: number;
    private readonly _mediaDevices: MediaDevices;
    private readonly _mimeTypes: MimeTypeArray;
    private readonly _msManipulationViewsEnabled: boolean;
    private readonly _msMaxTouchPoints: number;
    private readonly _msPointerEnabled: boolean;
    private readonly _onLine: boolean;
    private readonly _platform: string;
    private readonly _plugins: PluginArray;
    private readonly _pointerEnabled: boolean;
    private readonly _product: string;
    private readonly _productSub: string;
    private readonly _serviceWorker: ServiceWorkerContainer;
    private readonly _storage: StorageManager;
    private readonly _userAgent: string;
    private readonly _vendor: string;
    private readonly _vendorSub: string;
    private readonly _webdriver: boolean;

    constructor(private window: SdlWindow) {
    }

    clipboard: Clipboard;
    credentials: CredentialsContainer;
    permissions: Permissions;
    share(data?: ShareData): Promise<void> {
        throw new Error('Method not implemented.');
    }
    registerProtocolHandler(scheme: string, url: string, title: string): void {
        throw new Error('Method not implemented.');
    }
    unregisterProtocolHandler(scheme: string, url: string): void {
        throw new Error('Method not implemented.');
    }

    confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean {
        return false;
    }

    confirmWebWideTrackingException(args: ExceptionInformation): boolean {
        return false;
    }

    getDisplayMedia(constraints: MediaStreamConstraints): Promise<MediaStream> {
        return undefined;
    }

    getGamepads(): (Gamepad | null)[] {
        return [];
    }

    getUserMedia(constraints: MediaStreamConstraints, successCallback: NavigatorUserMediaSuccessCallback, errorCallback: NavigatorUserMediaErrorCallback): void {
    }

    getVRDisplays(): Promise<VRDisplay[]> {
        return undefined;
    }

    javaEnabled(): boolean {
        return false;
    }

    msLaunchUri(uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): void {
    }

    msSaveBlob(blob: any, defaultName?: string): boolean {
        return false;
    }

    msSaveOrOpenBlob(blob: any, defaultName?: string): boolean {
        return false;
    }

    removeSiteSpecificTrackingException(args: ExceptionInformation): void {
    }

    removeWebWideTrackingException(args: ExceptionInformation): void {
    }

    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess> {
        return undefined;
    }

    sendBeacon(url: string, data?: Blob | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | FormData | string | null): boolean {
        return false;
    }

    storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void {
    }

    storeWebWideTrackingException(args: StoreExceptionsInformation): void {
    }

    vibrate(pattern: number | number[]): boolean {
        return false;
    }

    get activeVRDisplays(): ReadonlyArray<VRDisplay> {
        return this._activeVRDisplays;
    }

    get appCodeName(): string {
        return this._appCodeName;
    }

    get appName(): string {
        return this._appName;
    }

    get appVersion(): string {
        return this._appVersion;
    }

    get authentication(): WebAuthentication {
        return this._authentication;
    }

    get cookieEnabled(): boolean {
        return false;
    }

    get doNotTrack(): string | null {
        return this._doNotTrack;
    }

    get geolocation(): Geolocation {
        return this._geolocation;
    }

    get hardwareConcurrency(): number {
        return this._hardwareConcurrency;
    }

    get language(): string {
        return this._language;
    }

    get languages(): ReadonlyArray<string> {
        return this._languages;
    }

    get maxTouchPoints(): number {
        return this._maxTouchPoints;
    }

    get mediaDevices(): MediaDevices {
        return this._mediaDevices;
    }

    get mimeTypes(): MimeTypeArray {
        return this._mimeTypes;
    }

    get msManipulationViewsEnabled(): boolean {
        return this._msManipulationViewsEnabled;
    }

    get msMaxTouchPoints(): number {
        return this._msMaxTouchPoints;
    }

    get msPointerEnabled(): boolean {
        return this._msPointerEnabled;
    }

    get onLine(): boolean {
        return true;
    }

    get platform(): string {
        return 'MacIntel';
    }

    get plugins(): PluginArray {
        return this._plugins;
    }

    get pointerEnabled(): boolean {
        return this._pointerEnabled;
    }

    get product(): string {
        return this._product;
    }

    get productSub(): string {
        return this._productSub;
    }

    get serviceWorker(): ServiceWorkerContainer {
        return this._serviceWorker;
    }

    get storage(): StorageManager {
        return this._storage;
    }

    get userAgent(): string {
        return 'User-agent header: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36';
    }

    get vendor(): string {
        return this._vendor;
    }

    get vendorSub(): string {
        return this._vendorSub;
    }

    get webdriver(): boolean {
        return this._webdriver;
    }
}
