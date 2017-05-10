$(function() {
  var mobileIcon = $('.mobile-icon')
  mobileOverlay = $('.mobile-overlay')
  body = $('body')
  mobileIcon.click(function() {
    mobileIcon.toggleClass('is-active')
    mobileIcon.toggleClass('fixed')
    mobileOverlay.toggleClass('is-active')
    body.toggleClass('fixed')
  })

  $(window).resize(function() {
    if ($(window).width() >= 1024) {
      mobileOverlay.removeClass('is-active')
      body.removeClass('fixed')
      mobileIcon.removeClass('is-active')
    }
  })
})
