$(document).ready(function(){
 var controller = new ScrollMagic.Controller();
 var ourScene = new ScrollMagic.Scene({
     triggerElement: '#banner-four'
 })
 .setClassToggle('#banner-four', 'fade-in')
 .addTo(controller);



});


$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: 50
           }
    });

    // get all slides
    var slides = document.querySelectorAll("section.select-animate");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i])
            .addTo(controller);
    }
});