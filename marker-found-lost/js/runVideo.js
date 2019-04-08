var Played = false;

(function () {
    var btn = document.getElementById('button');
    btn.addEventListener('click', function () {
    	var video = document.getElementById('animal');
        video.play();
        video.muted = false;

        Played = true;
    })
})();
