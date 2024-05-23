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





document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// slice: .slice(start, end); end is not included
// replace: .replace(a, b);

// append: .push(a)
// append at start of arr: .unshift(b)

// concatenate arrays: arr1.concat(arr2)

// hashmap: same as python
// ex: student { name: "john" }, then to access: student.name
// can put two hashmaps in form of array

// removed thumbnail div at html, will replace with the js code



// Gallery Section
// src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1",
    },

    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2",
    },

    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3",
    },
]

let mainImage = document.querySelector("#gallery > img")
let thumbnails = document.querySelector("#gallery .thumbnails")

mainImage.src = galleryImages[0].src
mainImage.alt = galleryImages[0].alt

// <img src="./assets/gallery/image1.jpg"
// alt="Thumbnail Image 1" 
// data-array-index="0" data-selected="true">

// adding code into the html section (removed thumbnails in html)
galleryImages.forEach(function(image, index){
    let thumb = document.createElement("img")
    thumb.src = image.src
    thumb.alt = image.alt
    thumb.dataset.arrayIndex = index
    thumb.dataset.selected = false

    thumbnails.appendChild(thumb)
})
