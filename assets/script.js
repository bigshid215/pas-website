const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop()||(!location.pathname.split('/').pop()&&a.getAttribute('href')==='index.html'))a.classList.add('active');});
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel-dots');

let currentIndex = 0;

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});

 //Optional Auto-Slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
     updateCarousel(currentIndex);
 }, 5000);
