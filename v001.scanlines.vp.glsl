/*
 *
 * Andrew Benson - andrewb@cycling74.com
 * Copyright 2005 - Cycling '74
 *
 * GLSL vertex program for doing a standard vertex transform
 * with texture coordinates, also passing the texture dimensions to the fragment shader.
 *
 */

varying vec2 texcoord0;
varying vec2 texdim0;

void main()
{
    // perform standard transform on vertex
    gl_Position = ftransform();

    // transform texcoords
    texcoord0 = vec2(gl_TextureMatrix[0] * gl_MultiTexCoord0);
    texdim0 = vec2 (abs(gl_TextureMatrix[0][0][0]),abs(gl_TextureMatrix[0][1][1]));
 
}