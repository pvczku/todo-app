let image = document.getElementById("theme-button");
let sun = "./images/icon-sun.svg";
let moon = "./images/icon-moon.svg";


image.addEventListener("click", () => {
    image.classList.toggle("active");

    if (image.classList.contains("active") == true) {
        // toggle dark mode
        document.querySelector('body').style.setProperty('background-image', 'url(./images/bg-mobile-dark.jpg)')
        document.querySelector(':root').style.setProperty('--background', '#161722');
        document.querySelector(':root').style.setProperty('--content-background', '#25273C');
        document.querySelector(':root').style.setProperty('--font-primary', '#CACDE8');
        document.querySelector(':root').style.setProperty('--border', 'hsl(233, 14%, 35%)');
    }   
    
    else if (image.classList.contains("active") == false) {
        // toggle light mode
        document.querySelector('body').style.setProperty('background-image', 'url(./images/bg-mobile-light.jpg)')
        document.querySelector(':root').style.setProperty('--background', 'whitesmoke');
        document.querySelector(':root').style.setProperty('--content-background', 'white');
        document.querySelector(':root').style.setProperty('--font-primary', '#070707');
        document.querySelector(':root').style.setProperty('--border', 'whitesmoke');
        
    }
})
