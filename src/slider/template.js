const template = (slides) => {
    const slidesShow = slides
		.map((slide) => {
			//const slideText = slide.altText ? `<div class="slide-text"><span>${slide.altText}</span></div>` : '';

			return `
            <div class="slide">
                <a href=${slide.link ? slide.link : '#'} title="${slide.altText ? slide.altText : ''}" target="${slide.target ? slide.target : '_self'}">
                    <img src="${slide.slideURL}" alt="${slide.altText ? slide.altText : ''}">
                </a>
            </div>
        `;
		})
		.join('');


	const slidesPreviews = slides
		.map((slide) => {
			return `
            <li>
                <div class="slide-preview">
                    <img src="${slide.slideURL}" alt="${slide.altText}">
                </div>
            </li>
        `;
		})
		.join('');

	const html = `
        <div id="kh-slider">
            <div id="prev-slide" class="control">
                <span>&larr;</span>
            </div>
            <div id="next-slide" class="control">
                <span>&rarr;</span>
            </div>
            
            <div class="slides-container">
                <div class="slides">
                    <div class="slides-inner">
                        ${slidesShow}
                    </div>
                </div>
            </div>
            <div class="navigation">
                <nav>
                    ${slidesPreviews}
                </nav>
            </div>
        </div>
    `;

	return html;
};

export default template;
