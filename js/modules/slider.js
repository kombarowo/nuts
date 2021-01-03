export default class Slider {
  constructor(container, options) {
    //DOM elements
    this.$el = document.querySelector(container);
    this.$wrapper = document.querySelector('.' + options.wrapperClass);
    this.$nextBtn = document.querySelector('.' + options.nextBtnClass);
    this.$prevBtn = document.querySelector('.' + options.prevBtnClass);
    this.$pagination = document.querySelector(options.pagination);

    //Slide props
    this.slideWidth = this.$el.querySelector('.' + options.slideClass).getBoundingClientRect().width;
    this.slidesCount = this.$wrapper.children.length;
    this.currentSlidesCount = Math.ceil(this.$wrapper.getBoundingClientRect().width / this.slideWidth);

    //Scroll & Drag
    this.currentScroll = 0;
    this.maxScroll = this.slideWidth * this.slidesCount - this.$wrapper.offsetWidth;
    this.pressed = false;
    this.startX;

    //Autoplay
    this.autoplay = options.autoplay * 1000;
    this.autoplayTimer;

    //Init
    this.init();
  }

  init() {
    //Binds
    this.switchSlide = this.switchSlide.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);

    //Btns
    this.$nextBtn.addEventListener('click', () => this.switchSlide(-1));
    this.$prevBtn.addEventListener('click', () => this.switchSlide(1));

    //Slider
    this.$el.addEventListener('mouseenter', this.onDragEnter);
    this.$el.addEventListener('mousedown', this.onDragStart);
    this.$el.addEventListener('touchstart', this.onDragStart);
    this.$el.addEventListener('mousemove', this.onDragMove);
    this.$el.addEventListener('touchmove', this.onDragMove);
    this.$el.addEventListener('mouseup', this.onDragEnd);
    this.$el.addEventListener('touchend', this.onDragEnd);
    this.$el.addEventListener('mouseleave', () => this.setAutoplay(this.autoplay));

    //Pagination
    this.setPagination(this.currentSlidesCount);

    //Autoplay
    this.setAutoplay(this.autoplay);
  }

  //Drag methods
  onDragEnter() {
    this.$el.style.cursor = 'grab';

    this.stopAutoplay();
  }

  onDragStart(e) {
    if (!e.touches) {
      this.$el.style.cursor = 'grabbing';
      this.startX = e.pageX - this.$el.getBoundingClientRect().left;
    } else {
      //Touch devices
      this.startX = e.changedTouches[0].clientX - this.$el.getBoundingClientRect().left;
    }
    this.pressed = true;
  }

  onDragMove(e) {
    e.preventDefault();
    const dragSpeed = 100;
    if (!this.pressed) return;

    let range;
    if (!e.touches) {
      range = e.pageX - this.$el.getBoundingClientRect().left - this.startX;
    } else {
      //Touch devices
      range = e.changedTouches[0].clientX - this.$el.getBoundingClientRect().left - this.startX;
    }

    const countRange = Math.round(range / (this.slideWidth - dragSpeed));

    if (Math.abs(countRange) >= 1) {
      this.switchSlide(countRange);
      this.pressed = false;
      return;
    }
  }

  onDragEnd() {
    this.pressed = false;
    this.$el.style.cursor = 'grab';
  }

  //Slide methods
  switchSlide(i) {
    const scroll = i * this.slideWidth;

    //If the last slide
    if (Math.abs(this.currentScroll + scroll + 1) >= this.maxScroll) {
      this.currentSlidesCount = Math.ceil(this.$wrapper.getBoundingClientRect().width / this.slideWidth);
      this.$wrapper.style.left = `${0}px`;
      this.setPagination(this.currentSlidesCount);
      this.currentScroll = 0;
      return;
    }

    //If the first slide
    if ((this.currentScroll + scroll - 1) > 0) {
      this.currentSlidesCount = this.slidesCount;
      this.$wrapper.style.left = `-${this.maxScroll}px`;
      this.setPagination(this.currentSlidesCount);
      this.currentScroll = -this.maxScroll;
      return;
    }

    this.currentScroll += scroll;
    this.currentSlidesCount -= i;
    this.setScroll(this.currentScroll);
    this.setPagination(this.currentSlidesCount);
  }

  toNextSlide() {
    this.switchSlide(-1);
  }

  //Scroll & pagination methods
  setScroll(scroll) {
    this.$wrapper.style.left = `${scroll}px`;
  }

  setPagination(currentSlideIndex) {
    const paginationInner = this.$pagination.children[0];
    paginationInner.style.width = (currentSlideIndex / this.slidesCount) * 100 + '%';
  }

  //Autoplay methods
  setAutoplay(sec) {
    this.toNextSlide = this.toNextSlide.bind(this);
    this.autoplayTimer = setInterval(this.toNextSlide, sec);
  }

  stopAutoplay() {
    clearInterval(this.autoplayTimer);
  }
}