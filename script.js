async function fetchData() {
  const youtubeChromeBottom =
    document.getElementsByClassName("ytp-chrome-bottom")[0];
  youtubeChromeBottom.style.display = "none";

  const youtubeChromeTop = document.getElementsByClassName("ytp-chrome-top")[0];
  youtubeChromeTop.style.display = "none";

  const youtubeGradientTop =
    document.getElementsByClassName("ytp-gradient-top")[0];
  youtubeGradientTop.style.display = "none";
}
fetchData();
