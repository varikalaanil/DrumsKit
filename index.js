 
  // DRUM KIT START
  for(var i = 0; i<document.querySelectorAll(".drum").length; i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     
   var buttonInnerHTML = this.innerHTML;
     sound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
  });
// here our function as an argument in acts like as a call back function..
}
    document.addEventListener("keypress",function(event){
            sound(event.key);
            buttonAnimation(event.key)
    });
    function sound(key){

      switch(key){

        //PLAYING DIFFERENT SOUNDS USING SWITCH STATEMENTS...
         
        case "w":
                  var tom1 = new Audio("sounds/tom-1.mp3");
                  tom1.play();
                  break;
        case "a":
                 var tom2 = new Audio("sounds/tom-2.mp3");
                 tom2.play();
                 break;
        case "s":
                 var tom3 = new Audio("sounds/tom-3.mp3");
                 tom3.play();
                 break;    
        case "d": 
                 var tom4 = new Audio("sounds/tom-4.mp3");
                 tom4.play();
                 break;
        case "j":
                 var kick = new Audio("sounds/Kick-base.mp3");
                 kick.play();
                 break;
        case "k":
                 var snare = new Audio("sounds/snare.mp3");
                 snare.play();
                 break;    
        case "l":
                  var crash= new Audio("sounds/crash.mp3");
                  crash.play();
                   break;    
    }    
    }
     
    function buttonAnimation(evt){
           var newButton =  document.querySelector("." + evt);
           newButton.classList.add("pressed");

           setTimeout(function(){
             newButton.classList.remove("pressed");
           },100)
            // setTimeout()
    }