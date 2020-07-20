class Slide {
  /**
   *
   * @param {string} src
   * @param {string} description
   */
  constructor(src, description) {
    this._src = src;
    this._description = description;
  }

  get src() {
    return this._src;
  }

  get description() {
    return this._description;
  }
}

class Carousel {
  /**
   *
   * @param {Slide[]} slides
   */
  constructor(slides, currentIndex = 0) {
    this._slides = slides;
    this.currentIndex = currentIndex;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  set currentIndex(v) {
    if (typeof v !== "number") {
      throw new TypeError();
    }

    if (
      isNaN(v) ||
      !Number.isSafeInteger(v) ||
      v < 0 ||
      v >= this._slides.length
    ) {
      throw new RangeError();
    }
    this._currentIndex = v;
  }

  get currentSlide() {
    return this._slides[this._currentIndex];
  }

  get nextSlide() {
    return this._slides[this.nextIndex];
  }

  get prevSlide() {
    return this._slides[this.prevIndex];
  }

  get nextIndex() {
    return (this.currentIndex + 1) % this._slides.length;
  }

  get prevIndex() {
    return (this.currentIndex - 1 + this._slides.length) % this._slides.length;
  }
}
