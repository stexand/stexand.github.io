

//mouse move

document.onmousemove = startCircle;

function startCircle(event) {
var circle = document.createElement('div');
circle.setAttribute('class', 'circle');
document.body.appendChild(circle);
  
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";
    var colors = ['#129CF3', '#fff', '#129CF3 '];
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;
  circle.style.transition = "all 0.5s linear 0s";
    circle.style.top = circle.offsetTop - 20 + "px";
  circle.style.left = circle.offsetLeft - 20 + "px";
  circle.style.width = "10px";
  circle.style.height = "10px";
  circle.style.borderWidth = "5px";


  circle.style.opacity = 0;
  
}

                         //backTop funckcija
window.onscroll = showTop;

function showTop () {
     var top = document.getElementById('top');
   if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
       top.style.display = "block"
   }else{
       top.style.display = "none"
   }
    
}
function backTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
                // Nav-bar JS





function header() {
   var nav = document.querySelector('.navbar');
    if(document.body.scrollTop > 730 || document.documentElement.scrollTop > 730){
    nav.style.backgroundColor= "black";
        nav.style.opacity = "0.9"
    }else{
        nav.style.backgroundColor = "transparent";
    }
}
window.addEventListener('scroll', header);






                              //JQuery za wow animate

$(document).ready(function(){
     new WOW().init();
})

//Scroll effect with Jquery

$(document).ready(function() {
    
    $('nav li a').on('click', function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        var offsetTop = $(target).offset().top;
        $('html, body').animate({scrollTop: offsetTop},1000);
        
        
    })
})

