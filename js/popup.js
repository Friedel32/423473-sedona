var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".hotel-form");
var close = document.querySelector(".hotel-form-close");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("hotel-form-show");
   });
