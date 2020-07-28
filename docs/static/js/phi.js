$(function() {
	let controller;
	let items = document.querySelectorAll('section');

	items.forEach(function(element, index) {
		let height = element.clientHeight; //height of current element

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

$(function() {
	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({ triggerElement: '#trigger1', duration: 250}).setPin('#pin1').addTo(controller);
});

$(function() {
	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({ triggerElement: '#pin2', duration: 200}).setPin('#pin2').addTo(controller);
});

// $(document).ready(function(){

// });

	