var audio = document.getElementById("audio");
var playPauseBTN = document.getElementById("playPauseBTN");
var hymnScroll = document.getElementById("hymn");
var count = 0;

function playPause()
{
  if(count == 0)
  {
   count = 1;
   audio.play();  
   hymnScroll.style.animationPlayState = "running";
   playPauseBTN.textContent = "PLAY" ;

  }
  else
  {
    count = 0;
    audio.pause();
    hymnScroll.style.animationPlayState = "paused";
    playPauseBTN.textContent = "PAUSED";
  }
}
