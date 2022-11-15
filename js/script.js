function controlRecordings (index = 0) {
    // Playlist array
    var files = [
        "recordings/day_2_la.mp3",
        "recordings/read_poem_post_la.mp3",
        "recordings/pedestal.mp3",
        "recordings/11_commandment.mp3",
        "recordings/well_shit.mp3",
        "recordings/i_am_terrified.mp3",
        "recordings/i_am_most_intrigued.mp3",
        "recordings/out_there.mp3",
        "recordings/cant_really_call_it.mp3",
        "recordings/the_better_half.mp3",
        "recordings/the_island.mp3",
        "recordings/the_calm_before.mp3",
        "recordings/i_didnt_think.mp3",
        "recordings/chasing_the_dragon.mp3",
        "recordings/a_switch.mp3",
        "recordings/a_few_things.mp3",
        "recordings/the_return_of_a_beaten.mp3",
        "recordings/a_sickly_affair.mp3",
        "recordings/the_rain.mp3",
        "recordings/a_devious_kitty.mp3",
        "recordings/a_breath_of_fresh_air.mp3",
    ];

    // Current index of the files array
    var i = index;

    // Get the audio element
    var music_player = document.querySelector("fixed");

    // function for moving to next audio file
    function next() {
        // Check for last audio file in the playlist
        if (i === files.length - 1) {
            i = 0;
        } else {
            i++;
        }

        // Change the audio element source
        music_player.src = files[i];
    }

    // Check if the player is selected
    if (music_player === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player
        music_player.src = files[i];

        // Listen for the music ended event, to play the next audio file
        music_player.addEventListener('ended', next, false)
    }

}

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
            fixedAudio.src = this.src;
            fixedAudio.currentTime = this.currentTime;
            console.log("Found a playing file");
        }
    });
}

document.getElementById('playButton').addEventListener("click", function(){
    console.log(playButton.value);
    controlRecordings(playButton.value);
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