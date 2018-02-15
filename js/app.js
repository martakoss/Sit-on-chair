$(function(){

//setting a picture after button click

var prevPictureBtn = $('#prevPicture');
var nextPictureBtn = $('#nextPicture');
var slider = $(".slider_images");
var activeImage = slider.find(".visible_image");
var sliderLength = slider.find("li").length;
var index = activeImage.index();

function nextImg (){
  activeImage.removeClass("visible_image");

  if (index < sliderLength - 1){
    activeImage.next().addClass("visible_image")
  } else {
    slider.find("li:first").addClass("visible_image")
  }
}

nextPictureBtn.on("click", function (){
  nextImg();
})

function prevImg (){
  activeImage.removeClass("visible_image");

  if (index === 0 ){
    slider.find("li:last").addClass("visible_image")
  } else {
    activeImage.prev().addClass("visible_image")
  }
}

prevPictureBtn.on("click", function (){
  prevImg();
})

var randomNumber = Math.floor(Math.random()*3)+1;

function changeSlide () {
  randomNumber++; if(randomNumber>3) randomNumber=1;

}


})
