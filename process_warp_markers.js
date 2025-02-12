autowatch = 1;

function post_info(dictname, keys)
{
	post("Info regarding the dictionary named '", dictname, "': ");
	post();
	post("    Keys: " + keys);
	post();
}

function bang(){
	// argument is the name of a dict, which may or may not already exist. 
	// in this case there is already a dict named "northern animals" and we will reference that dict.
	var d = new Dict("warp_markers");

	// an optional 'true' arg to getnames() will get all dictionary names
	// rather than just explicitly named dictionaries
	// var names = d.getnames();
	


	
	// post_info(d.name, d.getkeys());
	// var e = d.get("warp_markers");

	// post(e.getKeys());

	var size = d.getsize("warp_markers");

	var output;


	output = "0 sample_time " + d.get("warp_markers[" + (size - 2) + "]::sample_time").toString();
	outlet(0, output);

	output = "0 beat_time " + d.get("warp_markers[" + (size - 2) + "]::beat_time").toString();
	outlet(0, output);

	output = "1 sample_time " + d.get("warp_markers[" + (size - 1) + "]::sample_time").toString();
	outlet(0, output);

	output = "1 beat_time " + d.get("warp_markers[" + (size - 1) + "]::beat_time").toString();
	outlet(0, output);


	post();




}


function calculate_bpm(){
	var d = new Dict("warp_markers");

	var size = d.getsize("warp_markers");

	var sample_time = parseFloat(d.get("warp_markers[" + (size - 1) + "]::sample_time").toString()).toFixed(15);
	// outlet(0, (sample_time));
	post();

	var beat_time = parseFloat(d.get("warp_markers[" + (size - 1) + "]::beat_time").toString()).toFixed(15);
	// outlet(0, output);

	var bpm = 60.0 / (sample_time / beat_time);
	outlet(0, "bpm " + bpm);


}