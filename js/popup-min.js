var link=document.querySelector(".search-hotel"),popup=document.querySelector(".hotel-form"),close=document.querySelector(".hotel-form-close");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.toggle("hotel-form-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("hotel-form-show")&&popup.classList.remove("hotel-form-show")});