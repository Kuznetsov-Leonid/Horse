const cookiContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click" , () => {
    cookiContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true")
    console.log('not active');
});

setTimeout( () => {
    if(!localStorage.getItem("cookieBannerDisplayed")){
        cookiContainer.classList.add("active");
        console.log('active');
    }
}, 2000);