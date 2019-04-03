var Played = false;

(function () {
    var btn = document.getElementById('button');
    btn.addEventListener('click', function () {
    	var video = document.getElementById('video');
        video.play();
        video.muted = false;

        Played = true;
    })
})();
