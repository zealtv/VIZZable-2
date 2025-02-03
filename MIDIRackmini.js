// MIDIRack.js
//
// Simulates a grid of MIDI Notes
//

// Inlets and Outlets
inlets  = 1;
outlets = 2;

var backRGB = [0.8, 0.501961, 0.501961, 1.];   // Background color
var activeRGB = [0.92, 0.95, 0.05, 1.]; 
var associatedRGB = [0.82, 0.85, 0.89, 1.]; 
var inactive1RGB = [0.25098, 0., 0., 1.]; 
var inactive2RGB = [0.658824, 0.368627, 0.368627, 1.];
var regionRGB = [0.27, 0.33, 0.40, 1.];

// Path associated to notes
var videos = new Array(128); 

for (var i = 0; i < 128; i++) {
    videos[i] = "none";
}

// Selected MIDI Note
var note = -1;
var noteOn = false;

var currentNote = -1;

// Selected Region
var region = 2;


// Set up jsui defaults to 2d
sketch.default2d();

// Initialize graphics
draw();
refresh();

// Main graphics function
function draw()
{
    with (sketch) 
    {      
        glclearcolor(backRGB[0], backRGB[1], backRGB[2], backRGB[3]); // Set the clear color
        glclear(); // Erase the background
        
        for (var j = 0; j < 4; j++) {
          for (var i = 0; i < 4; i++) {
            if (note == (((3 - j) * 4) + i)) {
              glcolor(activeRGB[0],activeRGB[1],activeRGB[2],activeRGB[3]);
            }
            else {
                if (videos[(((3 - j) * 4) + i)] != "none") {
                    glcolor(associatedRGB[0],associatedRGB[1],associatedRGB[2],associatedRGB[3]);
                }
                else {
                    glcolor(inactive2RGB[0],inactive2RGB[1],inactive2RGB[2],inactive2RGB[3]);
                }    
            }
            quad(0.76 + (i * 0.06),  -0.75 - (j * 0.06), 0., 0.76 + (i * 0.06), -0.79 - (j * 0.06), 0., 0.81 + (i * 0.06), -0.79 - (j * 0.06), 0., 0.81 + (i * 0.06), -0.75 - (j * 0.06), 0.);
          }   
        }
        for (var j = 0; j < 4; j++) {
          for (var i = 0; i < 4; i++) {
            if (note == (((3 - j) * 4) + i) + 16 ) {
              glcolor(activeRGB[0],activeRGB[1],activeRGB[2],activeRGB[3]);
            }
            else {
              if (videos[(((3 - j) * 4) + i) + 16] !=  "none") {
                    glcolor(associatedRGB[0],associatedRGB[1],associatedRGB[2],associatedRGB[3]);
              }
              else {
                glcolor(inactive1RGB[0],inactive1RGB[1],inactive1RGB[2],inactive1RGB[3]);
              }      
            }
            quad(0.76 + (i * 0.06), -0.50 - (j * 0.06), 0., 0.76 + (i * 0.06), -0.55 - (j * 0.06), 0., 0.81 + (i * 0.06), -0.55 - (j * 0.06), 0., 0.81 + (i * 0.06), -0.50 - (j * 0.06), 0.);  
          }           
        }
        
        for (var j = 0; j < 4; j++) {
          for (var i = 0; i < 4; i++) {
            if (note == (((3 - j) * 4) + i) + 32 ) {
              glcolor(activeRGB[0],activeRGB[1],activeRGB[2],activeRGB[3]);
            }
            else {
              if (videos[(((3 - j) * 4) + i) + 32] !=  "none") {
                    glcolor(associatedRGB[0],associatedRGB[1],associatedRGB[2],associatedRGB[3]);
              }
              else {
                glcolor(inactive2RGB[0],inactive2RGB[1],inactive2RGB[2],inactive2RGB[3]);
              }  
            }
            quad(0.76 + (i * 0.06), -0.26 - (j * 0.06), 0., 0.76 + (i * 0.06), -0.31 - (j * 0.06), 0., 0.81 + (i * 0.06), -0.31 - (j * 0.06), 0., 0.81 + (i * 0.06), -0.26 - (j * 0.06), 0.);
          }           
        }

        for (var j = 0; j < 4; j++) {
          for (var i = 0; i < 4; i++) {
            if (note == (((3 - j) * 4) + i) + 48 ) {
              glcolor(activeRGB[0],activeRGB[1],activeRGB[2],activeRGB[3]);
            }
            else {
              if (videos[(((3 - j) * 4) + i) + 48] !=  "none") {
                    glcolor(associatedRGB[0],associatedRGB[1],associatedRGB[2],associatedRGB[3]);
              }
              else {
                glcolor(inactive1RGB[0],inactive1RGB[1],inactive1RGB[2],inactive1RGB[3]);
              }  
            }
            quad(0.76 + (i * 0.06), -0.02 - (j * 0.06), 0., 0.76 + (i * 0.06), -0.07 - (j * 0.06), 0., 0.81 + (i * 0.06), -0.07 - (j * 0.06), 0., 0.81 + (i * 0.06), -0.02 - (j * 0.06), 0.);
          }           
        }
        
        for (var j = 0; j < 4; j++) {
          for (var i = 0; i < 4; i++) {
          if (note == ((j * 4) + i) + 64 ) {
              glcolor(activeRGB[0],activeRGB[1],activeRGB[2],activeRGB[3]);
            }
            else {
              if (videos[((j * 4) + i) + 64] !=  "none") {
                    glcolor(associatedRGB[0],associatedRGB[1],associatedRGB[2],associatedRGB[3]);
              }
              else {
                glcolor(inactive2RGB[0],inactive2RGB[1],inactive2RGB[2],inactive2RGB[3]);
              }  
            }
            quad(0.76 + (i * 0.06), 0. + (j * 0.06), 0., 0.76 + (i * 0.06), 0.04 + (j * 0.06), 0., 0.81 + (i * 0.06), 0.04 + (j * 0.06), 0., 0.81 + (i * 0.06), 0. + (j * 0.06), 0.);
          }           
        }  
        
        for (var j = 0; j < 4; j++) {
          for (var i = 0; i < 4; i++) {
            if (note == ((j * 4) + i) + 80 ) {
              glcolor(activeRGB[0],activeRGB[1],activeRGB[2],activeRGB[3]);
            }
            else {
              if (videos[((j * 4) + i) + 80] !=  "none") {
                    glcolor(associatedRGB[0],associatedRGB[1],associatedRGB[2],associatedRGB[3]);
              }
              else {
                glcolor(inactive1RGB[0],inactive1RGB[1],inactive1RGB[2],inactive1RGB[3]);
              }  
            }
            quad(0.76 + (i * 0.06), 0.24 + (j * 0.06), 0., 0.76 + (i * 0.06), 0.29 + (j * 0.06), 0., 0.81 + (i * 0.06), 0.29 + (j * 0.06), 0., 0.81 + (i * 0.06), 0.24 + (j * 0.06), 0.);
            
          }           
        }  
        
        for (var j = 0; j < 4; j++) {
          for (var i = 0; i < 4; i++) {
            if (note == ((j * 4) + i) + 96 ) {
              glcolor(activeRGB[0],activeRGB[1],activeRGB[2],activeRGB[3]);
            }
            else {
              if (videos[((j * 4) + i) + 96] !=  "none") {
                    glcolor(associatedRGB[0],associatedRGB[1],associatedRGB[2],associatedRGB[3]);
              }
              else {
                glcolor(inactive2RGB[0],inactive2RGB[1],inactive2RGB[2],inactive2RGB[3]);
              }  
            }
            quad(0.76 + (i * 0.06), 0.48 + (j * 0.06), 0., 0.76 + (i * 0.06), 0.53 + (j * 0.06), 0., 0.81 + (i * 0.06), 0.53 + (j * 0.06), 0., 0.81 + (i * 0.06), 0.48 + (j * 0.06), 0.);
          }           
        } 
        
        for (var j = 0; j < 4; j++) {
          for (var i = 0; i < 4; i++) {
            if (note == ((j * 4) + i) + 112 ) {
              glcolor(activeRGB[0],activeRGB[1],activeRGB[2],activeRGB[3]);
            }
            else {
              if (videos[((j * 4) + i) + 112] !=  "none") {
                    glcolor(associatedRGB[0],associatedRGB[1],associatedRGB[2],associatedRGB[3]);
              }
              else {
                glcolor(inactive1RGB[0],inactive1RGB[1],inactive1RGB[2],inactive1RGB[3]);
              }  
            }
            quad(0.76 + (i * 0.06), 0.72 + (j * 0.06), 0., 0.76 + (i * 0.06), 0.77 + (j * 0.06), 0., 0.81 + (i * 0.06), 0.77 + (j * 0.06), 0., 0.81 + (i * 0.06), 0.72 + (j * 0.06), 0.);
            
          }           
        }  
        glcolor(regionRGB[0],regionRGB[1],regionRGB[2],regionRGB[3]);  
        
        // Draw selected region
        if (region == 0) {
          framequad(0.75, -0.98, 0., 0.75, -0.74, 0., 1.0, -0.74, 0., 1.0, -0.98, 0.);
        }
        else if (region == 1) {
          framequad(0.75, -0.74, 0., 0.75, -0.50, 0., 1.0, -0.50, 0., 1.0, -0.74, 0.);
        }
        else if (region == 2) {
          framequad(0.75, -0.50, 0., 0.75, -0.26, 0., 1.0, -0.26, 0., 1.0, -0.50, 0.);
        }
        else if (region == 3) {
          framequad(0.75, -0.26, 0., 0.75, -0.01, 0., 1.0, -0.01, 0., 1.0, -0.26, 0.);
        }
        else if (region == 4) {
          framequad(0.75, -0.01, 0., 0.75, 0.23, 0., 1.0, 0.23, 0., 1.0, -0.01, 0.);
        }
        else if (region == 5) {
          framequad(0.75, 0.23, 0., 0.75, 0.47, 0., 1.0, 0.47, 0., 1.0, 0.23, 0.);
        }
        else if (region == 6) {
          framequad(0.75, 0.47, 0., 0.75, 0.71, 0., 1.0, 0.71, 0., 1.0, 0.47, 0.);
        }
        else if (region == 7) {
          framequad(0.75, 0.71, 0., 0.75, 0.96, 0., 1.0, 0.96, 0., 1.0, 0.71, 0.);
        }
    }     
}

// Draw and refresh display
function bang() {
    draw();
    refresh();
}

function setVideo(index, path){
	videos[index] = path;
	if (path == "none" && index == currentNote)  { // Just to stop the video in case it's running
		outlet(1, "none");
	}	
	bang() ;
}	

// Draw and refresh display
function selectMIDINote(noteIn) {
	currentNote = noteIn;
    if (noteOn && noteIn == note) {
      note = -1;
      noteOn = false;
    }  
    else {
      note = noteIn;
      noteOn = true;
	  outlet(1, videos[noteIn]);
    }               	
    bang();
}

//manually select region
function selectRegion(regionIn){
	region = regionIn;
	}




// Onclick
function onclick(x,y)
{
    worldx = sketch.screentoworld(x,y)[0];
    worldy = sketch.screentoworld(x,y)[1];
    outlet(0, worldx, worldy); // Output the clicked region
    
    if (worldx >= 0.72 && worldx <= 0.96) {
      if (worldy >= -0.96 && worldy <= -0.75) {
        region = 0;
      }
      else if (worldy >= -0.72 && worldy <= -0.50) {
        region = 1;
      }
      else if (worldy >= -0.48 && worldy <= -0.26) {
        region = 2;
      } 
      else if (worldy >= -0.24 && worldy <= -0.02) {
        region = 3;
      }

      else if (worldy >= 0.00 && worldy <= 0.22) {
        region = 4;
      }
      else if (worldy >= 0.24 && worldy <= 0.46) {
        region = 5;
      } 
      else if (worldy >= 0.48 && worldy <= 0.70) {
        region = 6;
      }
      else if (worldy >= 0.72 && worldy <= 0.94) {
        region = 7;
      } 
    }
      
    outlet(0, region); // Output the clicked region  
    bang(); // Draw and refresh display
}
onclick.local = 1; // Make function private to prevent triggering from Max