
    document.querySelector("#click").addEventListener("click" , function(){
    var fname =    document.querySelector(".name").value ; 
var email = document.querySelector(".email") .value ; 
var text = document.querySelector(".text").value ;
 
    var text = document.getElementsByClassName("text") . value; 
    if(fname !="" && email!=="" && text  !="" ){
        alert('Thanks for contact with me as soon as possiable I will response your message.');
    window.location="my_website.html";
    }else{
        alert("You are forgot to enter the value please form out this field.");
    }
    
    })

    document.querySelector("#click").addEventListener("click" , function(){
        var name = document.querySelector(".firstName").value;
        var lastName = document.querySelector(".lastName").value;
        var email = document.querySelector(".email").value;
        if(name!=="" && email!=="" && lastName!==""){
            alert('Thanks for contact with me as soon as possiable I will response your message.');
            window.location="my_website.html";
        }else{
            alert("You are forgot to enter the value please form out this field.");
  
        }
    })
    
$("#font-aws").click(function(){
      $(".show").slideToggle(2000);
});