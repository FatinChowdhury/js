// changes color of text
document.querySelector("p#weather").style.color = "red";
// changes margin of area
document.querySelector("p#weather").style.margin = "100px";
// changes background color of text (highlighter)
document.querySelector("p#weather").style.backgroundColor = "white";

// refer to change made in CSS class
document.querySelector("p#weather").classList.add("redbg") 
// now, this works as highlighter for p#weather text because of changes in CSS
