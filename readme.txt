VIZZable 2.1

Robert Jarvis ZEALOUSY.COM


//Requirements
Max 6.1 Ableton Live 9 (32 bit only) 
Live 8 and max 6 works but is not officially supported by Ableton


//Installation
Place VIZZable folder anywhere on your hard drive.  Drag plugins from
the Ableton browser or your file system, into your live set.


//Tips
All the plugins have help associated in lives built-in help thingo.
Video files should be in quicktime format. A good rule of thumb is to use 
the photoJPEG codec at 74% for the best compromise between quality and performance.


//Thanks
Chris Gough for his fantastic auto-connect system, preview windows and
chain router device. Mike Todd, Fabrizio Poce, Leon Trimble, Ned Rush
and everyone on the JitterInMax4Live group for their knowledge and
enthusiasm. David Avila for his fantastic JS objects used in the
Suprplayr. Stefan Brunner for his keen bug squashing. Wesley Smith for
pouring his brain out on the cycling 74 forums. Sam Tarakajian for his
unbelievably useful tutorials (http://www.youtube.com/dude837)


This software is released for free.  You are free to edit and/or
redistribute it.  You may not sell it, take credit for my work or
redistribute it with out attribution.  If you edit it and redistribute
it you must let others do the same.  If this software breaks your
computer, it's not my fault.  If it makes you rich and/or famous please
buy me some land in Tasmania.

Join the community here:
http://groups.google.com/group/jitterinmax4live-

hit me up: bob@zealousy.com

---

changes in 2.1

	* Autoconnect 2.0 implemented.  No longer need to specify an output. (Massive thanks to Chris Gough)
	* Devices renamed and organised in folders.
	* Previewr built in to VIEWR module
	* preview windows optimised
	* fixed a bug where auto-connect would stop working with long chains of fx


	INPUT/clipPlayr (new)
		reads movie files dropped into clip slots.  Trigger video just as you do audio! 	

	INPUT/ganzgraf (new)
		Port of the popular ganzgraf patch

	INPUT/suprplayr
		no longer sends error messages when loading an empty cell
		scrub and rate controls added

	INPUT/midibar (new)
		new device similar to midigrid

	INPUT/midigrid
		fixed a bug when running multiple instances
		improved performance especially at higher resolutions

	MIX/chainroutr
		various bug fixes
		choose a chain by clicking a chain members' preview window

	MIX/4mixr
		screen, subtract and addmodulus mix modes

	OUTPUT/syphout (OSX only)
		new plugin, replaces the syphon VIEWR
		automatically generates unique server names so you can run multiple instances
		
	OUTPUT/VIEWR
		selectable output,  useful for feedback effects, syphout etc
		previwr built in and optimised to use its own shared context, much improved performance
		dimensions now save and load with set

	FX/brcosr+
		renamed from suprbrcosr

	FX/chromakeyr (new)
		chromakeying effect

	FX/zoropr
		crop mode
		improvements to the offset parameter
		fixed a bug with the anchor point in clamp mode

	FX/hueshifr
		set default shift to 0.


