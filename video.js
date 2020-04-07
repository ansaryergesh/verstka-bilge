
let video = document.querySelectorAll('video');

$('.block').click( function() {
	$('.overlay').fadeIn();
});

$(document).mouseup( function (e) { 
	var popup = $('.popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
	}
});

$('.close-popup').click( function() {
	$('.overlay').fadeOut();
});

function isVisible(elem) {

  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  // верхний край элемента виден?
  let topVisible = coords.top - 100 > 0 && coords.top + 400 < windowHeight;

  // нижний край элемента виден?
  let bottomVisible = coords.bottom - 100 < windowHeight && coords.bottom > 200;

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
      // video.load();
    //   window.onscroll = '';

    }
  }
}

showVisible();
window.onscroll = showVisible;
