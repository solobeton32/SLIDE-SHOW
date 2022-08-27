
let  i = 0;
let images = [];
let time = 3000;

//array of images 
images[0]= 'IMAGES/oslo.jpg';
images[1]= 'IMAGES/berlin.jpg';
images[2]= 'IMAGES/seoul.jpg';

//changements to images
function changeImages() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    }
    else{
        i = 0;
    }
    setTimeout('changeImages()', time);
}
window.onload = changeImages;