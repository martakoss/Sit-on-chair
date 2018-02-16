$(function(){

//setting a picture after button click

var prevPictureBtn = $('#prevPicture');
var nextPictureBtn = $('#nextPicture');
var slider = $(".slider_images");
var sliderLength = slider.find("li").length;
var timer=0;

function clearTimer() {
  clearTimeout(timer);
  timer = setTimeout(slideShow, 9000);
}


function nextImg (){
  var activeImage = slider.find(".visible_image");
  var index = activeImage.index();
  activeImage.removeClass("visible_image");
  if (index < sliderLength - 1){
    activeImage.next().addClass("visible_image")
  } else {
    slider.find("li:first").addClass("visible_image")
  }
}

function prevImg (){
  var activeImage = slider.find(".visible_image");
  var index = activeImage.index();
  activeImage.removeClass("visible_image");
  if (index === 0 ){
    slider.find("li:last").addClass("visible_image")
  } else {
    activeImage.prev().addClass("visible_image")
  }
}

prevPictureBtn.on("click", function (){
  clearTimer();
  prevImg();
})

nextPictureBtn.on("click", function (){
  clearTimer();
  nextImg();
})

function slideShow () {
  nextImg();
  clearTimer();
}

slideShow();
})
