async function hideElements() {
  const youtubeChromeBottom =
    document.getElementsByClassName("ytp-chrome-bottom")[0];
  youtubeChromeBottom.style.display = "none";

  const youtubeChromeTop = document.getElementsByClassName("ytp-chrome-top")[0];
  youtubeChromeTop.style.display = "none";

  const youtubeGradientTop =
    document.getElementsByClassName("ytp-gradient-top")[0];
  youtubeGradientTop.style.display = "none";

  const youtubeGradientBottom = document.getElementsByClassName(
    "ytp-gradient-bottom"
  )[0];
  youtubeGradientBottom.style.display = "none";

  const youtubeAnotationSubButton = document.getElementsByClassName(
    "annotation annotation-type-custom iv-branding"
  )[0];
  youtubeAnotationSubButton.style.display = "none";
}

// get the youtube video id from the url
function getVideoId(url) {
  var video_id = url.split("v=")[1];
  var ampersandPosition = video_id.indexOf("&");
  if (ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
  }
  console.log(video_id);
  return video_id;
}

// defining YT player
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function loadPlayer() {
  if (typeof YT == "undefined" || typeof YT.Player == "undefined") {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubePlayerAPIReady = function () {
      onYouTubePlayer();
    };
  } else {
    onYouTubePlayer();
  }
}

// This function shows the elements for 0.5 seconds when the video is paused
// and hides them again when the video is playing
function onYouTubePlayer() {
  hideElements();
  // var player;
  // player = new YT.Player("ytplayer", {
  //   //height: '600',
  //   // width: '100%',
  //   videoId: getVideoId(window.location.href),
  //   events: {
  //     onStateChange: function (event) {
  //       console.log(
  //         "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
  //         event.data
  //       );
  //       // if (event.data == YT.PlayerState.PAUSED) {
  //       //   hideElements();
  //       // }
  //     },
  //   },
  // });
}

loadPlayer();
onYouTubePlayer();
