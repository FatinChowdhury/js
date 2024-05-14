// changes color of text
document.querySelector("p#weather").style.color = "red";
// changes margin of area
document.querySelector("p#weather").style.margin = "100px";
// changes background color of text (highlighter)
document.querySelector("p#weather").style.backgroundColor = "white";

// refer to change made in CSS class
document.querySelector("p#weather").classList.add("redbg") 
// now, this works as highlighter for p#weather text because of changes in CSS


document.querySelector("p#weather").classList.remove("redbg")   // removes it


document.querySelector("p#weather").classList.toggle("redbg")   // adds if exists, removes if not
// this is good if you want one behavior (depends on situation)



// when u click on button u get alert
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    alert("menu button clicked");
});
