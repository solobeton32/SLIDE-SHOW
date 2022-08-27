

   var i = 0;//fais partir image
   var images = [];
   var time = 3000;
   
   //liste des images
   images[0] = "paris.jpg";
   images[1] = "berlin.jpg";
   images[2] = "rome.jpg";
   images[3] = "yakro.jpg";
   
   //changer images
   function changeImg(){
	   document.slide.src = images[i];
	   
	   if(i < images.length - 1){
		   i++;
	   }else{
		   i = 0;
	   }
	   setTimeout("changeImg()", time);
   }
   window.onload = changeImg;