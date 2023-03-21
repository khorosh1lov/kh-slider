import '../styles.scss';

import template from './template.js';

export default class Slider {
	constructor(elementId, slides = [], options = {}) {
		// Get User's HTML-element by ID
		this.sliderElement = document.getElementById(elementId);

		// Template building
		const templateDiv = document.createElement('div');
		templateDiv.innerHTML = template(slides);
		this.template = templateDiv.querySelector('#kh-slider');

		// Getting IDs and Classes from the template
		this.slides = this.template.querySelectorAll('.slide');
		this.prevButton = this.template.querySelector('#prev-slide');
		this.nextButton = this.template.querySelector('#next-slide');
		this.navigationItems = this.template.querySelectorAll('.navigation li');

		// Options
		this.preview = options.preview ?? true;
		this.width = options.width ?? '100%';
		this.height = options.height ?? null;
		this.outsideArrows = options.outsideArrows ?? false;
		this.speed = options.speed ?? 0.3;

		// Initial Slide index and Length
		this.currentIndex = 0;
		this.slideCount = this.slides.length;

		this.initStyles();
		this.initEventListeners();

		// Append Slider into the Page
		this.sliderElement.appendChild(this.template);

		this.waitForImagesToLoad().then(() => {
			this.positionArrows();
		});
	}

	async waitForImagesToLoad() {
		const imagePromises = Array.from(this.slides).map((slide) => {
			return new Promise((resolve) => {
				const img = slide.querySelector('img');
				img.addEventListener('load', resolve);
			});
		});

		return Promise.all(imagePromises);
	}

	positionArrows() {
		const slidesContainer = this.template.querySelector('.slides');
		const containerHeight = slidesContainer.offsetHeight;
		const arrowHeight = this.prevButton.offsetHeight;

		const topPosition = (containerHeight - arrowHeight) / 2;

		this.prevButton.style.top = `${topPosition}px`;
		this.nextButton.style.top = `${topPosition}px`;
	}

	initStyles() {
		if (!this.preview) {
			const navigationElement = this.template.querySelector('.navigation');
			navigationElement.style.display = 'none';
		}

		const khSliderElement = this.template;
		const slidesContainer = this.template.querySelector('.slides-container');

		if (this.height && this.width) {
			khSliderElement.style.maxWidth = this.width;
			khSliderElement.style.maxHeight = this.height;

			slidesContainer.style.height = 'auto';
			slidesContainer.style.width = '100%';
			slidesContainer.style.overflow = 'hidden';

			this.slides.forEach((slide) => {
				slide.style.height = 'auto';
				slide.style.width = '100%';
			});
		} else {
			khSliderElement.style.width = '100%';
			khSliderElement.style.height = 'auto';

			slidesContainer.style.height = 'auto';
			slidesContainer.style.width = '100%';
			slidesContainer.style.overflow = 'hidden';

			this.slides.forEach((slide) => {
				const img = slide.querySelector('img');
				img.style.height = '100%';
				img.style.width = '100%';
			});
		}

		if (this.outsideArrows) {
			this.prevButton.classList.add('outside');
			this.nextButton.classList.add('outside');
			khSliderElement.style.overflow = 'visible';
		}

		const slideContainer = this.template.querySelector('.slides-inner');
		slideContainer.style.transitionDuration = `${this.speed}s`;
	}

	initEventListeners() {
		this.prevButton.addEventListener('click', () => this.prevSlide());
		this.nextButton.addEventListener('click', () => this.nextSlide());

		this.navigationItems.forEach((navItem, index) => {
			navItem.addEventListener('click', () => this.goToSlide(index));
		});

		window.addEventListener('resize', () => this.positionArrows());
	}

	prevSlide() {
		this.goToSlide(this.currentIndex - 1);
	}

	nextSlide() {
		this.goToSlide(this.currentIndex + 1);
	}

	goToSlide(index) {
		if (index < 0) {
			index = this.slideCount - 1;
		} else if (index >= this.slideCount) {
			index = 0;
		}

		this.currentIndex = index;

		const slideContainer = this.template.querySelector('.slides-inner');
		slideContainer.style.transform = `translateX(-${index * 100}%)`;
	}
}
