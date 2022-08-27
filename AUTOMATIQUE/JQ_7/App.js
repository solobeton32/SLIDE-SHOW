
$(document).ready(function(){
    //hide all the images except the firt one
  $('#photos img:gt(0)').hide(); 
  setInterval(function(){
    //get the current images - it is the visible one
    let current = $('#photos img:visible');
    //get imediate next image after the current if exists,
    //overwrite find the first one
    let next = current.next().length ? current.next() : $('#photos img:eq(0)');
    //hide the current image
    current.fadeOut(1000);
    //show the next one
    next.fadeIn(1000);
  },3000)
 }); 