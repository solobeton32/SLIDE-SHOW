
let array_images = [
    "IMAGES/berlin.jpg",
    "IMAGES/oslo.jpg",
    "IMAGES/seoul.jpg",
    "IMAGES/laos.jpg",
];
let pic = $(".gallery_pic");
let i = 0;
setInterval(function () {
    i = (i + 1) % array_images.length; // increment 0,1,2,3,0,1,2,3,.....
    $(document).ready(function () {
        pic.fadeOut(5000, () => {
            pic.attr("src", array_images[i]);
            pic.fadeIn(1000);
        });
    });
});
