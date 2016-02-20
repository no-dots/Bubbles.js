/* global bubbles */
/**
 * 💭 Bubbles.js 💭
 * -----------------
 * Makes bubbles.
 * Requires an element on the page with id #bubbles and a child SVG element
 */
document.addEventListener('DOMContentLoaded', function () {
  // The time each circle stays on the screen
  bubbles.delayTime = 1000
  bubbles.maxRadius = 75

  bubbles.addEventListener('mousemove', function (event) {
    // Create circle
    var $el = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

    // Set attributes
    $el.setAttribute('cx', event.pageX - bubbles.offsetLeft)
    $el.setAttribute('cy', event.pageY - bubbles.offsetTop)
    $el.setAttribute('r', 0)

    // Hide circle after specified time
    window.setTimeout(function () {
      $el.setAttribute('r', 0)
    }, bubbles.delayTime)

    // Make circle grow afterwards
    window.setTimeout(function () {
      $el.setAttribute('r', Math.random() * bubbles.maxRadius)
    }, bubbles.delayTime / 10)

    // Append element
    document.getElementsByTagName('svg')[0].appendChild($el)
  })
})
