// copy functionality
new Clipboard('.btn-copy');
new Clipboard('.hero pre');

// tooltips
tippy('.tooltip', {
  animation: 'shift-toward',
  arrow: true,
  followCursor: true
})

// animated code in hero
setTimeout(function(){
  new Typed('#animated-code', {
    stringsElement: '#top-code',
    contentType: 'html',
    showCursor: false
  });
}, 100);

// makes "what is kelda" copy sticky on scroll
new Sticky('.sticky');

// code carousel
function updateSliderHeight(h) {
  $('.slider').animate({
    height: h
  }, 100);
}

function setActiveSlider(s) {
  if (s) {
    var slideIndex = s + 1;
  } else {
    var slideIndex = 1;
  }

  $('.slider > div > div:nth-child(' + slideIndex + ')').addClass('active');
  $('.btn-tour:nth-child(' + slideIndex + ')').addClass('active');
  updateSliderHeight($('.slider > div > div:nth-child(' + slideIndex + ')').height());
}

function resetActiveSlider() {
  $('.slider > div > div').removeClass('active');
  $('.btn-tour').removeClass('active');

  if (this.currentSlide) {
    setActiveSlider(this.currentSlide);
  } else {
    setActiveSlider(0);
  }
}

const mySiema = new Siema({
  selector: '.slider',
  draggable: false,
  loop: false,
  onInit: setActiveSlider,
  onChange: resetActiveSlider
});

$('.tour .btn-tour').each(function(i, obj) {
  if (i == 1) {
    $(this).click(() => mySiema.goTo(i, setActiveSlider(1)));
  } else {
    $(this).click(() => mySiema.goTo(i));
  }
});

$('.next').each(function(i, obj) {
  $(this).click(() => mySiema.next());
});

$('.slider > div > div:last-child .next').click(function() {
  $('.tour nav .text-link').addClass('pulse');
  setTimeout(function(){ $('.tour nav .text-link').removeClass('pulse'); }, 550);
});

// turn sticky header white on scroll
function atTop() {
  if ($(window).scrollTop() === 0) {
    return true;
  } else {
    return false;
  }
}

function brightenHeader() {
  if (atTop()) {
    $('#header').removeClass('light');
  } else {
    $('#header').addClass('light');
  }
}

brightenHeader();

$(window).on('scroll', brightenHeader);

// toggle email drip input
$('.email-drip').click(function() {
  $(this).addClass('focused');
  $('.mc-form .email').focus();
})
