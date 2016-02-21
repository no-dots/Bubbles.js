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

    // Set style
    $el.style.fill = '#fff'
    $el.style.opacity = 0.5
    $el.style.transition = bubbles.delayTime / 2.5 + 'ms all ease-out'

    // Make circle grow afterwards
    window.setTimeout(function () {
      $el.setAttribute('r', Math.random() * bubbles.maxRadius)
    }, bubbles.delayTime / 10)
    
    // Hide circle after specified time
    window.setTimeout(function () {
      $el.setAttribute('r', 0)

      // Set another timeout to actually remove the element
      window.setTimeout(function () {
        $el.parentNode.removeChild($el)
      }, $el.style.transitionDuration)
    }, bubbles.delayTime)

    // Append element
    document.getElementsByTagName('svg')[0].appendChild($el)
  })
})
