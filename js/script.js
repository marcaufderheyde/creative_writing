function pauseMedia() {
    $.each($('audio'), function () {
        if(!this.paused) {
            this.pause();
            //console.log(this);
        }
    });
}

function loadMedia() {
    $.each($('audio'), function () {
        if(!this.paused) {
            var fixedAudio = document.getElementById('fixed');
            fixedAudio = this;
            console.log("Found a playing file");
        }
    });
}

document.addEventListener("click", function(){
    loadMedia();
});

function fadeInPage() {
    if(!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
    if (!window.AnimationEvent) { return; }
    var anchors = document.getElementsByTagName('a');
    
    for (var idx=0; idx<anchors.length; idx+=1) {
        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }
        anchors[idx].addEventListener('click', function(event) {
            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;
            
            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);
            
            event.preventDefault();
            fader.classList.add('fade-in');
        });
    }
});