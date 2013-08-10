VIZZable 2.0.6b

Robert Jarvis ZEALOUSY.COM


//Requirements
Max 6.1 Ableton Live 9 (32 bit only) 
Live 8 and max 6 works but is not officially supported by Ableton


//Installation
Place VIZZable folder anywhere on your hard drive.  Drag plugins from
the Ableton browser or your file system, into your live set.


//Tips
All the plugins have help associated in lives built-in help thingo. When
using the suprPlayr, drag videos in from your operating systems file
browser, not the ableton browser.  Files should be in quicktime format. 
A good rule of thumb is to use the photoJPEG codec at 74% for the best
comprimise between quality and performance.


//Thanks
Chris Gough for his fantastic auto-connect system, preview windows and
chain router device. Mike Todd, Fabrizio Poce, Leon Trimble, Ned Rush
and everyone on the JitterInMax4Live group for their knowledge and
enthusiasm. David Avila for his fantastic JS objects used in the
Suprplayr. Stefan Brunner for his keen bug squashing. Wesley Smith for
pouring his brain out on the cycling 74 forums. Sam Tarakajian for his
unbelievably useful tutorials (http://www.youtube.com/dude837)


//Else
Note to syphon users. Due to a bug in Max, I’m not able to bake syphon
into these devices. If you’d like to harness syphon, you can by
downloading and installing the syphon plugins for Max from here:
http://syphon.v002.info/ and using the unfrozen VIEWR and SYPHR devices
in the syphonplugs folder included in the VIZZable zip.


released 27/04/2013 This software is in beta.  Things might break.

This software is released for free.  You are free to edit and/or
redistribute it.  You may not sell it, take credit for my work or
redistribute it with out attribution.  If you edit it and redistribute
it you must let others do the same.  If this software breaks your
computer, it's not my fault.

Join the community here:
http://groups.google.com/group/jitterinmax4live-

hit me up: bob@zealousy.com

---

changes in 2.0.6

	Autoconnect 2.0 implemented.  No longer need to specify an output. (Massive thanks to Chris Gough)

	Devices renamed and organised in folders.

	Previewr built in to VIEWR module


	INPUT/clipPlayr (new)
		reads movie files dropped into clip slots.  Trigger video just as you do audio! 	

	INPUT/ganzgraf (new)
		Port of the popular ganzgraf patch

	INPUT/breathr (new)
		new effect

	INPUT/suprplayr
		no longer sends error messages when loading an empty cell
		scrub and rate controls added

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




