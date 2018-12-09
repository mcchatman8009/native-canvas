cmake_minimum_required(VERSION 3.12)
project(SDL2_gfx C)

#set (CMAKE_C_STANDARD 11)

include_directories(/Library/Frameworks/SDL2.framework/Headers)

set(src
  SDL2_framerate.c
  SDL2_framerate.h
  SDL2_gfxPrimitives.c
  SDL2_gfxPrimitives.h
  SDL2_gfxPrimitives_font.h
  SDL2_imageFilter.c
  SDL2_imageFilter.h
  SDL2_rotozoom.c
  SDL2_rotozoom.h
  )

add_library(SDL2_gfx SHARED "${src}")

target_link_libraries(SDL2_gfx /opt/dev/libraries/native-canvas/src/sdl-core/sdl/libs/osx/libSDL2-2.0.dylib)

install(TARGETS SDL2_gfx DESTINATION lib)
