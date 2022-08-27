
//array images
let images = ['IMAGES/oslo.jpg', 'IMAGES/berlin.jpg', 
             'IMAGES/seoul.jpg', 'IMAGES/rome.jpg',
            'IMAGES/pechino.jpg'];
let i = 0; //conteur
function slideShow() {
    document.getElementById('image').src = images [i];
    if (i < images.length - 1) {
        i++; 
    } else {
        i = 0;
    }
    setTimeout('slideShow()', 2000);
}
window.onload = slideShow;