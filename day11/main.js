//call back
// function funcB(){
//     console.log('function C');
// }

// function funcA(callback){
//     callback();
// }

// funcA(funcB);

let sliderIndex = 0;
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const slideImages = document.querySelectorAll('.slider-image');

function changeSlideIndex(number){
    sliderIndex += number;
    if (sliderIndex > slideImages.length - 1){
        sliderIndex = 0;
    }
    if (sliderIndex < 0){
        sliderIndex = slideImages.length - 1;
    }
    changeSlide();
    // alert(sliderIndex);
}

function changeSlide(){
    
    for (let index = 0; index < slideImages.length; index++){
        slideImages[index].style.display = 'none';
    }
    slideImages[sliderIndex].style.display = 'block';
}

prevBtn.addEventListener('click', function(){
    changeSlideIndex(-1);
});

nextBtn.addEventListener('click', function(){
    changeSlideIndex(1);
});
