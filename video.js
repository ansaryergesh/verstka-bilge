
let video = document.querySelectorAll('video');

function isVisible(elem) {

  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  // верхний край элемента виден?
  let topVisible = coords.top > 0 && coords.top + 400 < windowHeight;

  // нижний край элемента виден?
  let bottomVisible = coords.bottom - 100 < windowHeight && coords.bottom > 400;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let video of document.querySelectorAll('video')) {
    if (isVisible(video)) {
      video.autoplay = true;
      video.play();
      video.loop = true;
      window.onscroll = showVisible;
    } else {
    //   video.load();

    }
  }
}

showVisible();
window.addEventListener('scroll', (e) => {
    e.preventDefault();
    showVisible();
})