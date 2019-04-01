let animatedMarker, aEntity;

AFRAME.registerComponent('markerhandler', {

	init: function () {
		animatedMarker = document.querySelector("#animated-marker");
		aEntity = document.querySelector("#animated-model");

		// every click, we make our model grow in size :)
		animatedMarker.addEventListener('click', function (ev, target) {
			console.log("EVENT", ev);
			console.log("TARGET", target);

			const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
			if (aEntity && intersectedElement === aEntity) {
				const scale = aEntity.getAttribute('scale');
				Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
				aEntity.setAttribute('scale', scale);
			}
		});
	},

	tick: function (t, dt) {
		console.log("ANIMATED MARKER", animatedMarker.object3d);
		console.log("A ENTITY", aEntity.object3d);

		console.log("-------------------------------------------------------");

	}
});
