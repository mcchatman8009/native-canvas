import {int32, int32_ptr, string, uint32, ulong, voit, voit_ptr} from './types';
import {loadLibrary} from './lib-loader';

const FFI = require('ffi-napi');
const ref = require('ref-napi');
const ArrayType = require('ref-array-di')(ref);
const Struct = require('ref-struct-di')(ref);
const Union = require('ref-union-di')(ref);

const SDL = {} as any;

const SDL_threadID = ulong;
const SDL_TLSID = uint32;
const SDL_ThreadFunction = FFI.Function(int32, [voit_ptr]);

export function SDL_DetachThread(threadPtr: any) {
    return SDL.SDL_DetachThread(threadPtr);
}

export function SDL_WaitThread(threadPtr: any) {
    return SDL.SDL_WaitThread(threadPtr, null);
}

export function SDL_CreateThread(threadFunction: any, threadName: string, data: any) {
    return SDL.SDL_CreateThread(threadFunction, threadName, data);
}

export function createThreadFunction(func: (data?: any) => number) {
    return SDL_ThreadFunction.toPointer(func);
}

loadLibrary({
    SDL_CreateThread: [voit_ptr, [SDL_ThreadFunction, string, voit_ptr]],
    SDL_GetThreadName: [string, [voit_ptr]],
    SDL_ThreadID: [SDL_threadID, []],
    SDL_GetThreadID: [SDL_threadID, [voit_ptr]],
    SDL_SetThreadPriority: [int32, [uint32]],
    SDL_WaitThread: [voit, [voit_ptr, int32_ptr]],
    SDL_DetachThread: [voit, [voit_ptr]],
    SDL_TLSCreate: [SDL_TLSID, []],
    SDL_TLSGet: [voit_ptr, [SDL_TLSID]],
    SDL_TLSSet: [int32, [SDL_TLSID, voit_ptr, voit_ptr]],
}, SDL);
