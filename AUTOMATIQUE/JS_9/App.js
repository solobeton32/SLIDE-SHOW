
let i = 0;
let images = ['IMAGES/oslo.jpg', 
                        'IMAGES/seoul.jpg', 
                        'IMAGES/paris.jpg', 
                        'IMAGES/island.jpg'
] ;
let time = 2000; //2seconds
function changeImg(){
document.slide.src = images[i];
if (i < images.length - 1) {
        i++;
        } else {
        i = 0;
}
setTimeout("changeImg()", time);
}
window.onload = changeImg;

