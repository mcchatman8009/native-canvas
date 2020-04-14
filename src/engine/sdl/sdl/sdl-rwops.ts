import {loadLibrary} from './lib-loader';
import {int32, size_t, string, Uint16, uint32, Uint32, Uint64, Uint8, Uint8_ptr, voit, voit_ptr} from './types';

const ref = require('ref-napi');
const Struct = require('ref-struct-di')(ref);
const Union = require('ref-union-di')(ref);

const SDL = {} as any;

export const Mem_SDL_Rwops = Struct({
    base: Uint8_ptr,
    here: Uint8_ptr,
    stop: Uint8_ptr,
});

export const Unknown_SDL_Rwops = Struct({
    data1: voit_ptr,
    data2: voit_ptr,
});

export const SDL_RWops_U_SDL_rwops_h_3164 = Union({
    mem: Mem_SDL_Rwops,
    unknown: Unknown_SDL_Rwops
});

export const SDL_RWops = Struct({
    size: voit_ptr,
    seek: voit_ptr,
    read: voit_ptr,
    write: voit_ptr,
    close: voit_ptr,
    type: Uint32,
    hidden: SDL_RWops_U_SDL_rwops_h_3164,
});

export const SDL_RWops_ptr = ref.refType(SDL_RWops);

loadLibrary({
    SDL_RWFromFile: [SDL_RWops_ptr, [string, string]],
    SDL_RWFromFP: [SDL_RWops_ptr, [voit_ptr, uint32]],
    SDL_RWFromMem: [SDL_RWops_ptr, [voit_ptr, int32]],
    SDL_RWFromConstMem: [SDL_RWops_ptr, [voit_ptr, int32]],
    SDL_AllocRW: [SDL_RWops_ptr, []],
    SDL_FreeRW: [voit, [SDL_RWops_ptr]],
    SDL_ReadU8: [Uint8, [SDL_RWops_ptr]],
    SDL_ReadLE16: [Uint16, [SDL_RWops_ptr]],
    SDL_ReadBE16: [Uint16, [SDL_RWops_ptr]],
    SDL_ReadLE32: [Uint32, [SDL_RWops_ptr]],
    SDL_ReadBE32: [Uint32, [SDL_RWops_ptr]],
    SDL_ReadLE64: [Uint64, [SDL_RWops_ptr]],
    SDL_ReadBE64: [Uint64, [SDL_RWops_ptr]],
    SDL_WriteU8: [size_t, [SDL_RWops_ptr, Uint8]],
    SDL_WriteLE16: [size_t, [SDL_RWops_ptr, Uint16]],
    SDL_WriteBE16: [size_t, [SDL_RWops_ptr, Uint16]],
    SDL_WriteLE32: [size_t, [SDL_RWops_ptr, Uint32]],
    SDL_WriteBE32: [size_t, [SDL_RWops_ptr, Uint32]],
    SDL_WriteLE64: [size_t, [SDL_RWops_ptr, Uint64]],
    SDL_WriteBE64: [size_t, [SDL_RWops_ptr, Uint64]],
}, SDL);
