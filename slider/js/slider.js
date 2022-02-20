let currentSlide = 1;
let dots = document.getElementsByClassName("slider-dots_item");
dots[currentSlide-1].className += " active";
function blockItems(){
    document.querySelector('.next').setAttribute('disabled', 'true');
    document.querySelector('.prev').setAttribute('disabled', 'true');
    document.querySelector('#dot-1').setAttribute('disabled', 'true');
    document.querySelector('#dot-2').setAttribute('disabled', 'true');
    document.querySelector('#dot-3').setAttribute('disabled', 'true');
    document.querySelector('#dot-4').setAttribute('disabled', 'true');
    document.querySelector('#dot-5').setAttribute('disabled', 'true');
}
function unblockItems(){
    document.querySelector('.next').disabled = false;
    document.querySelector('.prev').disabled = false;
    document.querySelector('#dot-1').disabled = false;
    document.querySelector('#dot-2').disabled = false;
    document.querySelector('#dot-3').disabled = false;
    document.querySelector('#dot-4').disabled = false;
    document.querySelector('#dot-5').disabled = false;
}
function plusControlDots(){
    if(currentSlide==6){
        dots[4].className = dots[1].className.replace(" active", "");
        dots[0].className += " active";
    }
    else{
        dots[currentSlide-2].className = dots[currentSlide-1].className.replace(" active", "");
        dots[currentSlide-1].className += " active";
    }
}
function minusControlDots(){
    if(currentSlide==0){
        dots[0].className = dots[currentSlide].className.replace(" active", "");
        dots[4].className += " active";
    }
    else {
        dots[currentSlide].className = dots[currentSlide].className.replace(" active", "");
        dots[currentSlide-1].className += " active";
    }
    }
function plusSlide() {
    let step=0;
    currentSlide++;
    console.log(currentSlide);
    plusControlDots();
    blockItems();
    const currentStep=(Number(document.querySelector('.slider-line').style.transform.slice(11,-3)));
    if(currentSlide!=6){
    moveInterval = setInterval(() => {
        if (step==400){
            clearInterval(moveInterval);
            unblockItems();
        }
        moveSlide(currentStep-step);
        step+=4;
     }, 5);
    }
    else {
        moveInterval = setInterval(() => {
            if (step==400){
                clearInterval(moveInterval);
                unblockItems();
            }
            moveSlide(400-step);
            step+=4;
         }, 5);
        currentSlide = 1;
    }
}

function minusSlide() {
    let step=0;
    currentSlide--;
    minusControlDots();
    blockItems();
    const currentStep=(Number(document.querySelector('.slider-line').style.transform.slice(11,-3)));
    if (currentSlide!=0){
    moveInterval = setInterval(() => {
        if (step==400){
            clearInterval(moveInterval);
            unblockItems();
        }
        moveSlide(currentStep+step);
        step+=4;
    }, 5);
    }
    else{
        moveInterval = setInterval(() => {
            if (step==400){
                clearInterval(moveInterval);
                unblockItems();
            }
            moveSlide(-2000+step);
            step+=4;
         }, 5);
         currentSlide = 5;
    }
}

function dotSlide(n) {
    let step = 0;
    dots[currentSlide-1].className = dots[currentSlide-1].className.replace(" active", "");
    dots[n-1].className += " active";
    blockItems();
    const currentStep=(Number(document.querySelector('.slider-line').style.transform.slice(11,-3)));
    if(n>currentSlide){
        console.log(currentSlide);
        moveInterval = setInterval(() => {
            if (step==(n-currentSlide)*400){
                clearInterval(moveInterval);
                unblockItems();
                currentSlide=n;
            }
            moveSlide(currentStep-step);
            step+=4;
        }, 5);
    }
    else if(currentSlide>n){
        console.log(currentSlide);
        moveInterval = setInterval(() => {
            if (step==(currentSlide-n)*400){
                clearInterval(moveInterval);
                unblockItems();
                currentSlide=n;
            }
            moveSlide(currentStep+step);
            step+=4;
        }, 5);               
    }
    else{
        unblockItems();
    }
}
function moveSlide(step) {document.querySelector('.slider-line').style.transform =`translateX(${step}px)`;}

