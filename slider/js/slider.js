let i = 1;
let dots = document.getElementsByClassName("slider-dots_item");
dots[i-1].className += " active";
function plusControlDots(){
    if(i==6){
        dots[4].className = dots[1].className.replace(" active", "");
        dots[0].className += " active";
    }
    else{
        dots[i-2].className = dots[i-1].className.replace(" active", "");
        dots[i-1].className += " active";
    }
}
function minusControlDots(){
    if(i==0){
        dots[0].className = dots[i].className.replace(" active", "");
        dots[4].className += " active";
    }
    else {
        dots[i].className = dots[i].className.replace(" active", "");
        dots[i-1].className += " active";
    }
    }
function plusSlide() {
    let step=0;
    i++;
    console.log(i);
    plusControlDots();
    document.querySelector('.next').setAttribute('disabled', 'true');
    document.querySelector('.prev').setAttribute('disabled', 'true');
    document.querySelector('#dot-1').setAttribute('disabled', 'true');
    document.querySelector('#dot-2').setAttribute('disabled', 'true');
    document.querySelector('#dot-3').setAttribute('disabled', 'true');
    document.querySelector('#dot-4').setAttribute('disabled', 'true');
    document.querySelector('#dot-5').setAttribute('disabled', 'true');
    let slideNow=(Number(document.querySelector('.slider-line').style.transform.slice(11,-3)));
    if(i!=6){
    slideMove = setInterval(() => {
        if (step==400){
            clearInterval(slideMove);
            document.querySelector('.next').disabled = false;
            document.querySelector('.prev').disabled = false;
            document.querySelector('#dot-1').disabled = false;
            document.querySelector('#dot-2').disabled = false;
            document.querySelector('#dot-3').disabled = false;
            document.querySelector('#dot-4').disabled = false;
            document.querySelector('#dot-5').disabled = false;
        }
        goStep(slideNow-step);
        step+=4;
     }, 5);
    }
    else {
        slideMove = setInterval(() => {
            if (step==400){
                clearInterval(slideMove);
                document.querySelector('.next').disabled = false;
                document.querySelector('.prev').disabled = false;
                document.querySelector('#dot-1').disabled = false;
                document.querySelector('#dot-2').disabled = false;
                document.querySelector('#dot-3').disabled = false;
                document.querySelector('#dot-4').disabled = false;
                document.querySelector('#dot-5').disabled = false;
            }
            goStep(400-step);
            step+=4;
         }, 5);
        i = 1;
    }
}

function minusSlide() {
    let step=0;
    i--;
    minusControlDots();
    document.querySelector('.next').setAttribute('disabled', 'true');
    document.querySelector('.prev').setAttribute('disabled', 'true');
    document.querySelector('#dot-1').setAttribute('disabled', 'true');
    document.querySelector('#dot-2').setAttribute('disabled', 'true');
    document.querySelector('#dot-3').setAttribute('disabled', 'true');
    document.querySelector('#dot-4').setAttribute('disabled', 'true');
    document.querySelector('#dot-5').setAttribute('disabled', 'true');
    let slideNow=(Number(document.querySelector('.slider-line').style.transform.slice(11,-3)));
    if (i!=0){
    slideMove = setInterval(() => {
        if (step==400){
            clearInterval(slideMove);
            document.querySelector('.next').disabled = false;
            document.querySelector('.prev').disabled = false;
            document.querySelector('#dot-1').disabled = false;
            document.querySelector('#dot-2').disabled = false;
            document.querySelector('#dot-3').disabled = false;
            document.querySelector('#dot-4').disabled = false;
            document.querySelector('#dot-5').disabled = false;
        }
        goStep(slideNow+step);
        step+=4;
    }, 5);
    }
    else{
        slideMove = setInterval(() => {
            if (step==400){
                clearInterval(slideMove);
                document.querySelector('.next').disabled = false;
                document.querySelector('.prev').disabled = false;
                document.querySelector('#dot-1').disabled = false;
                document.querySelector('#dot-2').disabled = false;
                document.querySelector('#dot-3').disabled = false;
                document.querySelector('#dot-4').disabled = false;
                document.querySelector('#dot-5').disabled = false;
            }
            goStep(-2000+step);
            step+=4;
         }, 5);
        i = 5;
    }
}

function currentSlide(n) {
    let step = 0;
    dots[i-1].className = dots[i-1].className.replace(" active", "");
    dots[n-1].className += " active";
    document.querySelector('.next').setAttribute('disabled', 'true');
    document.querySelector('.prev').setAttribute('disabled', 'true');
    document.querySelector('#dot-1').setAttribute('disabled', 'true');
    document.querySelector('#dot-2').setAttribute('disabled', 'true');
    document.querySelector('#dot-3').setAttribute('disabled', 'true');
    document.querySelector('#dot-4').setAttribute('disabled', 'true');
    document.querySelector('#dot-5').setAttribute('disabled', 'true');
    let slideNow=(Number(document.querySelector('.slider-line').style.transform.slice(11,-3)));
    let dopStep = 0;
    if(n>i){
        console.log(i);
        slideMove = setInterval(() => {
            if (step==(n-i)*400){
                clearInterval(slideMove);
                document.querySelector('.next').disabled = false;
                document.querySelector('.prev').disabled = false;
                document.querySelector('#dot-1').disabled = false;
                document.querySelector('#dot-2').disabled = false;
                document.querySelector('#dot-3').disabled = false;
                document.querySelector('#dot-4').disabled = false;
                document.querySelector('#dot-5').disabled = false;
                i=n;
            }
            goStep(slideNow-step);
            step+=4;
        }, 5);
    }
    else if(i>n){
        console.log(i);
        slideMove = setInterval(() => {
            if (step==(i-n)*400){
                clearInterval(slideMove);
                document.querySelector('.next').disabled = false;
                document.querySelector('.prev').disabled = false;
                document.querySelector('#dot-1').disabled = false;
                document.querySelector('#dot-2').disabled = false;
                document.querySelector('#dot-3').disabled = false;
                document.querySelector('#dot-4').disabled = false;
                document.querySelector('#dot-5').disabled = false;
                i=n;
            }
            goStep(slideNow+step);
            step+=4;
        }, 5);               
    }
    else{
        document.querySelector('.next').disabled = false;
        document.querySelector('.prev').disabled = false;
        document.querySelector('#dot-1').disabled = false;
        document.querySelector('#dot-2').disabled = false;
        document.querySelector('#dot-3').disabled = false;
        document.querySelector('#dot-4').disabled = false;
        document.querySelector('#dot-5').disabled = false;
    }
}
function goStep (step){document.querySelector('.slider-line').style.transform =`translateX(${step}px)`;}

