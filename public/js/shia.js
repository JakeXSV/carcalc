var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'nuHfVn_cfHU',
        playerVars: { 'autoplay': 1, 'controls': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    player.setVolume(10);
    event.target.playVideo();
}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        setTimeout(replay, 63000);
    }
}
function replay() {
    player.seekTo(0, true);
}
$(function() {
    $('#toggle-event').change(function() {
        var states = {
            0: function () {
                player.seekTo(0, true);
            },
            1: function () {
                player.pauseVideo();
            },
            2: function () {
                player.playVideo();
            }
        }
        if (states[player.getPlayerState()] !== undefined){
            states[player.getPlayerState()]();
        }
    })
})
