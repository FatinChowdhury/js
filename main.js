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


const products = [
    [
        {
          title: "AstroFiction",
          author: "John Doe",
          price: 49.9,
          image: "./assets/products/img6.png"
        },
        {
          title: "Space Odissey",
          author: "Marie Anne",
          price: 35,
          image: "./assets/products/img1.png"
        },
        {
          title: "Doomed City",
          author: "Jason Cobert",
          price: 0,
          image: "./assets/products/img2.png"
        },
        {
          title: "Black Dog",
          author: "John Doe",
          price: 85.35,
          image: "./assets/products/img3.png"
        },
        {
          title: "My Little Robot",
          author: "Pedro Paulo",
          price: 0,
          image: "./assets/products/img5.png"
        },
        {
          title: "Garden Girl",
          author: "Ankit Patel",
          price: 45,
          image: "./assets/products/img4.png"
        }
      ]
]

// Menu Section

function menuHandler() {

    document.querySelector("#open-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
    
}

// Temperature Conversion
function celsiusToFahr(temperature) {
    return temperature * 9/5 + 32
}
// Greeting Section

function greetingHandler() {

    let currentHour = new Date().getHours()
    let greetingText
    
    if (currentHour < 12) {
        greetingText = "Good Morning!"
    }
    else if (currentHour < 19) {
        greetingText = "Good Afternoon!"
    }
    else if (currentHour < 24) {
        greetingText = "Good Evening!"
    
    } else {
        greetingText = "Welcome!"
    }
    
    const weatherCondition = "sunny"
    const userLocation = "new york"
    let temperature = 22
    
    
    let celsiusText = `The weather is ${weatherCondition} in ${userLocation}
    and it's ${temperature.toString()}°C outside.`
    
    let fahrText = `The weather is ${celsiusToFahr(temperature)}°C in ${userLocation}`
    
    
    
    document.querySelector("#greeting").innerHTML = greetingText
    document.querySelector("p#weather").innerHTML = celsiusText
    
    
    document.querySelector(".weather-group").addEventListener("click", function(e) {
        // celsius
        // fahr
    
        if (e.target.id == "celsius") {
            document.querySelector("p#weather").innerHTML = celsiusText
        } else if (e.target.id == "fahr") {
            document.querySelector("p#weather").innerHTML = fahrText
        }
    });
}


// new Date().getHours(), getMinutes(), getSeconds()
// Local Time Selection
function clockHandler() {

    setInterval(function(){
        let localTime = new Date()
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0")
        // having 09 and not 9 for time.
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0")
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0")
    }, 1000)
}


// Gallery Section
// src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"

function galleryHandler() {

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
        thumb.dataset.selected = index === 0 ? true : false;    // if index is 0, then true, else false
    
        // to select different images s.t. it changes pics
        thumb.addEventListener("click", function(e){
            let selectedIndex = e.target.dataset.arrayIndex
            let selectedImage = galleryImages[selectedIndex]
    
            mainImage.src = selectedImage.src
            mainImage.alt = selectedImage.alt
            
            // unselects (white highlight) the images when diff img clicked
            thumbnails.querySelectorAll("img").forEach(function(img) {
                img.dataset.selected = false
            })
            // selects when diff img clicked (white marker shows for diff img clicked on)
            e.target.dataset.selected = true
    
        })
    
        // if (index === 0) {
        //     thumb.dataset.selected = true;
        // }
        // else {
        //     thumb.dataset.selected = false;
        // }
    
    
    
    
        thumbnails.appendChild(thumb)
    })

}


// Products Section
/* <div class="product-item">
    <img src="./assets/products/img6.png" alt="AstroFiction">
    <div class="product-details">
    <h3 class="product-title">AstroFiction</h3>
    <p class="product-author">John Doe</p>
    <p class="price-title">Price</p>
    <p class="product-price">$ 49.90</p>
    </div>
</div> */

// populating
function productsHandler() {
    
    let productsSection = document.querySelector(".products-area")

    // create HTML elem for each product
    products.forEach(function(product, index){

        // create HTML elem for individual product
        let productElm = document.createElement("div")
        productElm.classList.add("product-item")

        // create product image
        let productImage = document.createElement("img")
        productImage.src = product.image
        productImage.alt = "Image for " + product.title

        productElm.append(productImage);

        productsSection.append(productElm);
    })
}

// Page Load
menuHandler();
greetingHandler();
clockHandler();
