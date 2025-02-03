uniform int resolution;

// define our rectangular texture samplers 
uniform sampler2DRect tex0;

// define our varying texture coordinates 
varying vec2 texcoord0;
varying vec2 texdim0;

const vec4 two = vec4(2.0);

void main (void) 
{ 	
	// normalize texture coords [0. - 1.0]
	vec2 normalizedDim = texcoord0/texdim0;

	vec4 stripes; // our base 'stripe color'
	
	stripes = vec4(floor(mod(texcoord0.y, float(resolution))));
	stripes = clamp(stripes, 0.0, 1.0);
	
	stripes = two - (stripes - vec4(0.)); // subtract
	
	//sample our texture
	vec4 input0 = texture2DRect(tex0, texcoord0);
	
	vec4 result = stripes * input0;
	
	gl_FragColor = result;
}