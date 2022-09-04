const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5SshZ6HFFfYJRpSZshB36-Gt9mFk4CJc&channelId=UCtinbF-Q-fVthA0qrFQTgXQ&part=snippet,id&order=date&maxResults=100";
let videoIds = ['84WIaK3bl_s', 'WxfZkMm3wcg', 'jG7dSXcfVqE', 'xFbJoXJBIIA', 'dld7XXbMKDQ'];
let youtubeResponse;
let nowPlaying = videoIds[0];
const displayStatus = document.querySelector(".status");

window.onload = () => { 
    if(videoIds.length < 100){
        fetch(url)
        .then((res) => {
            if(res.status === 200){
                res.items.forEach((item)=>{
                    if(videoIds.includes(String(item.id.videoId))){
                    } else {
                        videoIds.push(String(item.id.videoId));
                    };
                });
                displayStatus.innerHTML = videoIds.length;
            } else {
                console.log("NOPE", res.status);
                displayStatus.innerHTML = "NOPE. YouTube returned a " + res.status + " but you can still randomise from " + videoIds.length + " videos";
            }
          }).catch((e) => {
            console.log("NOPE", e);
            displayStatus.innerHTML = "NOPE. something went wrong " + e + " but you can still randomise from " + videoIds.length + " videos";
          });
    }
};
document.getElementById('randomizer').addEventListener('click', function(){
    randomizer();
});

const randomizer = () => {
    vidRef =  Math.round(Math.random() * (videoIds.length - 1));
    console.log('Last Video', nowPlaying, 'Random Video', videoIds[vidRef]);
    if (nowPlaying !== videoIds[vidRef]){
        videoRef = videoIds[vidRef];
        nowPlaying = videoIds[vidRef];
    } else {
        randomizer();
    }   
    document.getElementById('player').src = `https://www.youtube.com/embed/${videoRef}`;
}
randomizer()