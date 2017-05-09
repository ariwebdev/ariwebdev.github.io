$(function() {
  var mobileIcon = $('.mobile-icon')
  mobileOverlay = $('.mobile-overlay')
  mobileIcon.click(function() {
    mobileIcon.toggleClass('is-active')
    mobileOverlay.toggleClass('is-active')
  })
})
