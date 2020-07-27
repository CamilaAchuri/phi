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
    // var controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 'onLeave'
    //        }
    // });

    // // get all slides
    // var slides = document.querySelectorAll("section.select-animate");

    // console.log(Math.floor(slides.innerHeight * 0.75));
    // // create scene for every slide
    // for (var i=0; i<slides.length; i++) {
    //     new ScrollMagic.Scene({
    //             triggerElement: slides[i]
    //         })
    //         .setPin(slides[i])
    //         .addTo(controller);
    // }

    let controller;
    let items = document.querySelectorAll("section");

		items.forEach(function(element, index) {
			let height = element.clientHeight; //height of current element
            console.log(height);
            var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
				duration: height,
				triggerHook: 'onLeave'
            }
        });
        new ScrollMagic.Scene({
            triggerElement: element
        })
        .setPin(element)
        .addTo(controller);
});
});


// $(function () { 
//     let controller;
//     let items = document.querySelectorAll("section");

// 		items.forEach(function(element, index) {
// 			let height = element.clientHeight; //height of current element
//             console.log(height);
//             var controller = new ScrollMagic.Controller({
//                 globalSceneOptions: {
// 				duration: height,
// 				triggerHook: 'onLeave'
//             }
//         });
//         new ScrollMagic.Scene({
//             triggerElement: element
//         })
//         .setPin(element)
//         .addTo(controller);
 
    
//     });