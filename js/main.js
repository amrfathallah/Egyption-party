/// <reference types="../@types/jquery" />

// nav menu
$(".openNav").on("click", function () {
  $("#navMenu").animate({ width: "250px" }, 50);
  $("#home-content").animate({ marginLeft: "250px" }, 50);
});
$(".closeBtn").on("click", function () {
  $("#navMenu").animate({ width: "0" }, 50);
  $("#home-content").animate({ marginLeft: "0" }, 50);
});
$("#sliderDown .toggle").on("click", function () {
  $('.inner').not($(this).next()).slideUp(500)

  $(this).next().slideToggle(500)

  
});

// scrollll

$('#navMenu a').on('click', function(e){
  let section = $(e.target).attr('href')
   let positionOfSection = $(section).offset().top
   console.log(positionOfSection);
   $("html , body").animate({scrollTop :positionOfSection } , 2000)

})


// countDown

let futureDate = new Date("Dec 31, 2023 23:59:59").getTime() / 1000;
let counter  = setInterval(() => {
  let nowDate = new Date().getTime() / 1000;
  let timeDiff = futureDate - nowDate;
  let days = Math.floor(timeDiff / (60 *60 * 24))
  let hours = Math.floor((timeDiff % (60 *60 * 24)) / (60 * 60))
  let minutes = Math.floor((timeDiff % (60 *60)) / 60)
  let seconds = Math.floor(timeDiff % (60 ))
  
  $("#days").html(days < 10 ? `0${days} D` : `${days} D`)
  $("#hours").html(hours < 10 ? `0${hours} h` : `${hours} h`)
  $("#minutes").html(minutes < 10 ? `0${minutes} m` : `${minutes} m`)
  $("#seconds").html( seconds < 10 ? `0${seconds} s` : `${seconds} s`)
  

} , 1000)


// charachter count 

let maxLength = 100;
$("textarea").on("keyup", function(){
  let length = $(this).val().length;
  let amuntChar = maxLength - length;
  if(amuntChar <= 0){
    $('#chars').text('your available character finished')
  }
  else{
    $('#chars').text(amuntChar)
  }
})
