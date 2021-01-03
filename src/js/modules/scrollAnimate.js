export default function scrollAnimate() {
  const animItems = document.querySelectorAll('[data-anim]');

  if (animItems.length > 0) {
    window.addEventListener('scroll', anim)

    function anim() {
      const animStart = 4;

      animItems.forEach(item => {
        const
          animClass = item.dataset.anim,
          animRepeat = item.dataset.animRepeat,
          animDelay = item.dataset.animDelay,
          itemHeight = item.offsetHeight,
          itemOffset = calcOffset(item);

        let animStartPoint;
        if (itemHeight > window.innerHeight) {
          animStartPoint = window.innerHeight - window.innerHeight / animStart;
        } else {
          animStartPoint = window.innerHeight - itemHeight / animStart;
        }

        if ((pageYOffset > itemOffset.top - animStartPoint) && pageYOffset < (itemOffset.top + itemHeight)) {
          item.classList.add(animClass);
          item.style.animationDelay = `${animDelay}`;
        } else {
          if (animRepeat !== 'once') {
            item.classList.remove(animClass);
            item.style.animationDelay = `0s`;
          }
        }
      })
    }

    function calcOffset(elem) {
      const coords = elem.getBoundingClientRect();
      const scrollY = pageYOffset || document.documentElement.scrollTop;
      const scrollX = pageXOffset || document.documentElement.scrollWidth;
      return {top: coords.top + scrollY, left: coords.left + scrollX};
    }

    setTimeout(() => {
      anim();
    }, 500);
  }
}