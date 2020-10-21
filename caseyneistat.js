// Use the YouTube API to populate the videoArray


var videoArray = ['dld7XXbMKDQ', 'UE6UkF9sABU', 'H6lWMsMjTgI',];

document.getElementById('randomizer').addEventListener('click', function(){
    randomizer();
});

function randomizer(){
    vidRef =  Math.round(Math.random() * (videoArray.length - 1));
    console.log(vidRef);
    if (vidRef <= (videoArray.length - 1)){
        videoRef = videoArray[vidRef]
        console.log(videoRef)
    } else {
        randomizer();
    }   
    document.getElementById('player').src = `https://www.youtube.com/embed/${videoRef}`;
}