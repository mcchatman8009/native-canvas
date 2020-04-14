import {
    float,
    int32,
    int32_ptr,
    string,
    Uint16_ptr,
    uint32,
    Uint32,
    Uint32_ptr,
    Uint8, Uint8_ptr,
    voit,
    voit_ptr
} from './types';
import {loadLibrary} from './lib-loader';

const ref = require('ref-napi');
const ArrayType = require('ref-array-di')(ref);
const Struct = require('ref-struct-di')(ref);

const SDL = {} as any;

export function SDL_MasksToPixelFormatEnum(bpp: number, rmask: number, gmask: number, bmask: number, amask: number): number {
    return SDL.SDL_MasksToPixelFormatEnum(bpp, rmask, gmask, bmask, amask);
}

enum SDL_pixels_emum {
    SDL_PIXELTYPE_UNKNOWN = 0,
    SDL_PIXELTYPE_INDEX1 = 1,
    SDL_PIXELTYPE_INDEX4 = 2,
    SDL_PIXELTYPE_INDEX8 = 3,
    SDL_PIXELTYPE_PACKED8 = 4,
    SDL_PIXELTYPE_PACKED16 = 5,
    SDL_PIXELTYPE_PACKED32 = 6,
    SDL_PIXELTYPE_ARRAYU8 = 7,
    SDL_PIXELTYPE_ARRAYU16 = 8,
    SDL_PIXELTYPE_ARRAYU32 = 9,
    SDL_PIXELTYPE_ARRAYF16 = 10,
    SDL_PIXELTYPE_ARRAYF32 = 11
}

export const SDL_Color = Struct({
    r: Uint8,
    g: Uint8,
    b: Uint8,
    a: Uint8,
});

export const SDL_Color_ptr = ref.refType(SDL_Color);

export const SDL_Palette = Struct({
    ncolors: int32,
    colors: SDL_Color_ptr,
    version: Uint32,
    refcount: int32,
});

export const SDL_Palette_ptr = ref.refType(SDL_Palette);

export const SDL_PixelFormat_FI_padding_arr = ArrayType(Uint8, 2);

export const SDL_PixelFormat = Struct({
    format: Uint32,
    palette: SDL_Palette_ptr,
    BitsPerPixel: Uint8,
    BytesPerPixel: Uint8,
    padding: SDL_PixelFormat_FI_padding_arr,
    Rmask: Uint32,
    Gmask: Uint32,
    Bmask: Uint32,
    Amask: Uint32,
    Rloss: Uint8,
    Gloss: Uint8,
    Bloss: Uint8,
    Aloss: Uint8,
    Rshift: Uint8,
    Gshift: Uint8,
    Bshift: Uint8,
    Ashift: Uint8,
    refcount: int32,
    next: voit_ptr,
});

export const SDL_PixelFormat_ptr = ref.refType(SDL_PixelFormat);


loadLibrary({
    SDL_GetPixelFormatName: [string, [Uint32]],
    SDL_PixelFormatEnumToMasks: [uint32, [Uint32, int32_ptr, Uint32_ptr, Uint32_ptr, Uint32_ptr, Uint32_ptr]],
    SDL_MasksToPixelFormatEnum: [Uint32, [int32, Uint32, Uint32, Uint32, Uint32]],
    SDL_AllocFormat: [SDL_PixelFormat_ptr, [Uint32]],
    SDL_FreeFormat: [voit, [SDL_PixelFormat_ptr]],
    SDL_AllocPalette: [SDL_Palette_ptr, [int32]],
    SDL_SetPixelFormatPalette: [int32, [SDL_PixelFormat_ptr, SDL_Palette_ptr]],
    SDL_SetPaletteColors: [int32, [SDL_Palette_ptr, SDL_Color_ptr, int32, int32]],
    SDL_FreePalette: [voit, [SDL_Palette_ptr]],
    SDL_MapRGB: [Uint32, [SDL_PixelFormat_ptr, Uint8, Uint8, Uint8]],
    SDL_MapRGBA: [Uint32, [SDL_PixelFormat_ptr, Uint8, Uint8, Uint8, Uint8]],
    SDL_GetRGB: [voit, [Uint32, SDL_PixelFormat_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr]],
    SDL_GetRGBA: [voit, [Uint32, SDL_PixelFormat_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr]],
    SDL_CalculateGammaRamp: [voit, [float, Uint16_ptr]]
}, SDL);
