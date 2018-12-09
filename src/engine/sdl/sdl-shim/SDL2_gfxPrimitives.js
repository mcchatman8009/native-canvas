var FFI = require('ffi');
var ArrayType = require('ref-array');
var Struct = require('ref-struct');
var Union = require('ref-union');
var ref = require('ref');


var voit = exports.voit = ref.types.void;
var int32 = exports.int32 = ref.types.int32;
var SDL_Renderer = exports.SDL_Renderer = voit;
var SDL_Renderer_ptr = exports.SDL_Renderer_ptr = ref.refType(SDL_Renderer);
var short = exports.short = ref.types.short;
var Sint16 = exports.Sint16 = short;
var uint32 = exports.uint32 = ref.types.uint32;
var Uint32 = exports.Uint32 = uint32;
var uchar = exports.uchar = ref.types.uchar;
var Uint8 = exports.Uint8 = uchar;
var Sint16_ptr = exports.Sint16_ptr = ref.refType(Sint16);
var SDL_Color = exports.SDL_Color = Struct({
    r: Uint8,
    g: Uint8,
    b: Uint8,
    a: Uint8,
});
var SDL_Color_ptr = exports.SDL_Color_ptr = ref.refType(SDL_Color);
var SDL_Palette = exports.SDL_Palette = Struct({
    ncolors: int32,
    colors: SDL_Color_ptr,
    version: Uint32,
    refcount: int32,
});
var SDL_Palette_ptr = exports.SDL_Palette_ptr = ref.refType(SDL_Palette);
var c__S_SDL_PixelFormat_FI_padding_arr = ArrayType(Uint8, 2);
var voit_ptr = exports.voit_ptr = ref.refType(voit);
var SDL_PixelFormat = exports.SDL_PixelFormat = Struct({
    format: Uint32,
    palette: SDL_Palette_ptr,
    BitsPerPixel: Uint8,
    BytesPerPixel: Uint8,
    padding: c__S_SDL_PixelFormat_FI_padding_arr,
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
var SDL_PixelFormat_ptr = exports.SDL_PixelFormat_ptr = ref.refType(SDL_PixelFormat);
var SDL_Rect = exports.SDL_Rect = Struct({
    x: int32,
    y: int32,
    w: int32,
    h: int32,
});
var SDL_BlitMap = exports.SDL_BlitMap = voit;
var SDL_BlitMap_ptr = exports.SDL_BlitMap_ptr = ref.refType(SDL_BlitMap);
var SDL_Surface = exports.SDL_Surface = Struct({
    flags: Uint32,
    format: SDL_PixelFormat_ptr,
    w: int32,
    h: int32,
    pitch: int32,
    pixels: voit_ptr,
    userdata: voit_ptr,
    locked: int32,
    lock_data: voit_ptr,
    clip_rect: SDL_Rect,
    map: SDL_BlitMap_ptr,
    refcount: int32,
});
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface);
var char = exports.char = ref.types.char;
var string = exports.string = ref.types.CString;

require('./lib-loader').load(process.platform == 'win32' ? 'SDL2_gfx' : 'libSDL2_gfx', {
    pixelColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Uint32,]],
    pixelRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    hlineColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32,]],
    hlineRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    vlineColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32,]],
    vlineRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    rectangleColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    rectangleRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    roundedRectangleColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    roundedRectangleRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    boxColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    boxRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    roundedBoxColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    roundedBoxRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    lineColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    lineRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    aalineColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    aalineRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    thickLineColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint32,]],
    thickLineRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8, Uint8,]],
    circleColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32,]],
    circleRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    arcColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    arcRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    aacircleColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32,]],
    aacircleRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    filledCircleColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32,]],
    filledCircleRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    ellipseColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    ellipseRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    aaellipseColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    aaellipseRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    filledEllipseColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    filledEllipseRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    pieColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    pieRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    filledPieColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    filledPieRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    trigonColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    trigonRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    aatrigonColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    aatrigonRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    filledTrigonColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32,]],
    filledTrigonRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8,]],
    polygonColor: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, Uint32,]],
    polygonRGBA: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, Uint8, Uint8, Uint8, Uint8,]],
    aapolygonColor: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, Uint32,]],
    aapolygonRGBA: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, Uint8, Uint8, Uint8, Uint8,]],
    filledPolygonColor: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, Uint32,]],
    filledPolygonRGBA: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, Uint8, Uint8, Uint8, Uint8,]],
    texturedPolygon: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, SDL_Surface_ptr, int32, int32,]],
    bezierColor: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, int32, Uint32,]],
    bezierRGBA: [int32, [SDL_Renderer_ptr, Sint16_ptr, Sint16_ptr, int32, int32, Uint8, Uint8, Uint8, Uint8,]],
    gfxPrimitivesSetFont: [voit, [voit_ptr, Uint32, Uint32,]],
    gfxPrimitivesSetFontRotation: [voit, [Uint32,]],
    characterColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, char, Uint32,]],
    characterRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, char, Uint8, Uint8, Uint8, Uint8,]],
    stringColor: [int32, [SDL_Renderer_ptr, Sint16, Sint16, string, Uint32,]],
    stringRGBA: [int32, [SDL_Renderer_ptr, Sint16, Sint16, string, Uint8, Uint8, Uint8, Uint8,]],
}, exports);
