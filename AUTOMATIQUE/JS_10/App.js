
let images = ['IMAGES/berlin.jpg', 'IMAGES/seoul.jpg', 'IMAGES/laos.jpg', 'IMAGES/rome.jpg', 'IMAGES/oslo.jpg'];
let count = 0; //conttatore

let imgs = document.getElementById('img');
setInterval(slider, 2000); //2seconds
function slider() {
    if (count < images.length) {
        count = count + 1;
    } else {
        count = 1;
    }
    imgs.innerHTML = "<img src=" + images[count - 1] + ">";
}
