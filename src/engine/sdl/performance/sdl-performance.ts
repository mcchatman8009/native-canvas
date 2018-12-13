import {SdlWindow} from '../sdl-window/sdl-window';

export class SdlPerformance implements Performance {
    readonly navigation: PerformanceNavigation;
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null;
    readonly timeOrigin: number;
    readonly timing: PerformanceTiming;

    constructor(private window: SdlWindow) {
    }

    addEventListener(type: any, listener: any, options?: boolean | AddEventListenerOptions): void {
    }

    clearMarks(markName?: string): void {
    }

    clearMeasures(measureName?: string): void {
    }

    clearResourceTimings(): void {
    }

    dispatchEvent(event: Event): boolean {
        return false;
    }

    getEntries(): PerformanceEntryList {
        return undefined;
    }

    getEntriesByName(name: string, type?: string): PerformanceEntryList {
        return undefined;
    }

    getEntriesByType(type: string): PerformanceEntryList {
        return undefined;
    }

    mark(markName: string): void {
    }

    measure(measureName: string, startMark?: string, endMark?: string): void {
    }

    now(): number {
        return new Date().getTime();
    }

    removeEventListener(type: any, listener: any, options?: boolean | EventListenerOptions): void {
    }

    setResourceTimingBufferSize(maxSize: number): void {
    }

    toJSON(): any {
    }
}
