  alert("Hi never mind , I have given my personal info here cause I think that you are the beliveable");

var photos = ['images/b.PNG' , 'images/bb.PNG' , 
'images/3.jpg' , 'images/4.PNG' , 'images/subrota.PNG' ];
 var imgTag = document.getElementById("slider11");
var count = 0 ;
function next(){
count++;
if(count>=photos.length){
    count=0;
    imgTag.src=photos[count];
}else{
imgTag.src=photos[count];
   }
}
function prev(){
    count--;
    if(count<0){
        count=photos.length - 1;
        imgTag.src=photos[count];
    }else{
    imgTag.src=photos[count];
       }
}
