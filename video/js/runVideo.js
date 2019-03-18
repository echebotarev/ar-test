(function () {
    var btn = document.getElementById('button');
    btn.addEventListener('click', function () {
        console.log("CLICK");
        document.getElementById('video').play();
    })
})();
