var btn_prev = document.querySelector('.prev');
var btn_next = document.querySelector('.next');

var figures = document.querySelectorAll('#gallery .photos figure');
var i = 0;

btn_prev.onclick = function(){
     figures[i].style.display = 'none';
     i = i - 1; /* i-- */

     if(i < 0){
         i = figures.length - 1;
     }

     figures[i].style.display = 'block';
}

btn_next.onclick = function(){
     figures[i].style.display = 'none';
     i = i + 1; /* i++ */

     if(i >= figures.length){
         i = 0;
     }

     figures[i].style.display = 'block';
}
