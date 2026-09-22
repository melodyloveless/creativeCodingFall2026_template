// p5.plotSvg + p5.Polar Template
p5.disableFriendlyErrors = true; 

let bDoExportSvg = false; 
// if using, change myRandomSeed to see different versions (or iterations) of your sketch
let myRandomSeed = 12345; 
let regenerateButton, exportSvgButton; 

// canvas size
const DPI = 70; 
const PAGE_W = 8.5*DPI; 
const PAGE_H = 11*DPI;

//------------------------------------------------------------
function setup() {
  createCanvas(PAGE_W, PAGE_H);
  UI();
  // Set the SVG group by stroke color to `true`, so that strokes 
  // of the same color are grouped together in the SVG file. 
  setSvgGroupByStrokeColor(true); 
}

function draw(){
  clear();
  randomSeed(myRandomSeed); 
  background(255); 
  
  if (bDoExportSvg == true){
    beginRecordSvg(this, "plotSvg_generative_" + myRandomSeed + ".svg");
    // Read more here: https://github.com/golanlevin/p5.plotSvg/blob/main/documentation.md#beginrecordsvg
  }

  // Displaying text for feedback
  textAlign(CENTER, CENTER);
  textSize(10);
  fill(0);
  text("In addition to p5.js, this sketch has the p5.Polar and p5.plotSvg libraries to it. Read index.html for more.", width/2, height/2);

  // Optional: use custom function(s) for your drawing
  myDrawing();

  if (bDoExportSvg){
    endRecordSvg(); 
    // Read more here: https://github.com/golanlevin/p5.plotSvg/blob/main/documentation.md#endrecordsvg
    bDoExportSvg = false;
  }
}

function myDrawing() {
  // Insert your drawing here
  noFill();
  strokeWeight(1); // When plotting, strokeWeight() doesn't affect your drawing. 
  // To change the thickness of your drawing, change your pen/marker/etc - or experiment with code
}

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
// Make a new random seed when the "Regenerate" button is pressed
function regenerate(){
  myRandomSeed = round(millis()); 
}
// Set the SVG to be exported when the "Export SVG" button is pressed
function initiateSvgExport(){
  bDoExportSvg = true; 
}

function UI() {
  regenerateButton = createButton('Regenerate');
  regenerateButton.position(0, height);
  regenerateButton.mousePressed(regenerate);
  
  exportSvgButton = createButton('Export SVG');
  exportSvgButton.position(120, height);
  exportSvgButton.mousePressed(initiateSvgExport);
}

