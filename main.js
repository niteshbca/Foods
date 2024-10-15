// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})

// GSAP animation for hover effect
const imgElement = document.getElementById("animatedImage");
  
imgElement.addEventListener("mouseover", () => {
  gsap.to(imgElement, { 
    duration: 0.5, 
    scale: 1.1, 
    rotate: 10, 
    ease: "power1.inOut" 
  });
});

imgElement.addEventListener("mouseout", () => {
  gsap.to(imgElement, { 
    duration: 0.5, 
    scale: 1, 
    rotate: 0, 
    ease: "power1.inOut" 
  });
});

// ScrollTrigger animation for the image
gsap.from("#animatedImage", {
  scrollTrigger: {
    trigger: "#animatedImage",
    start: "top 80%",  // Animation will start when the image is 80% from the top of the viewport
    end: "bottom 20%", // Animation will end when the image is 20% from the bottom
    scrub: true,       // Smooth animation linked to scroll position
  },
  opacity: 0,          // Starts with the image being invisible
  scale: 0.5,          // Image will scale up from 0.5x its size
  rotate: 360,         // Image will rotate 360 degrees while scrolling
  duration: 2          // Duration for the animation
});


