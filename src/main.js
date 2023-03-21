import Slider from './slider/Slider.js';

document.addEventListener('DOMContentLoaded', () => {
	const slider = new Slider(
		'slider',
		[
			{ slideURL: './images/slide1.jpg', altText: 'Slide 1 Test', link: 'https://google.com', target: '_blank' },
			{ slideURL: './images/slide2.jpg', altText: 'Slide 2 Test', link: 'https://google.com' },
			{ slideURL: './images/slide3.jpg', altText: 'Slide 3 Test', link: 'https://google.com', target: '_blank' },
			{ slideURL: './images/slide4.jpg', altText: 'Slide 4 Test', link: 'https://google.com' },
			{ slideURL: './images/slide5.jpg', altText: 'Slide 5 Test', link: 'https://google.com', target: '_blank' },
		],
		{
			preview: true,
			outsideArrows: true,
			speed: 1,
		},
	);
});
