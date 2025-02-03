uniform float exposure;
uniform bool swap;
uniform vec4 thresh;

// define our rectangular texture samplers 
uniform sampler2DRect tex0;

// define our varying texture coordinates 
varying vec2 texcoord0;
varying vec2 texdim0;

const float sqrtoftwo = 1.41421356237;

void main (void) 
{ 
	vec4 result;
		
	vec4 input0 = texture2DRect(tex0, texcoord0);

	input0 = log2(vec4(pow(exposure + sqrtoftwo, 2.0))) * input0;

	gl_FragColor = input0;

} 
