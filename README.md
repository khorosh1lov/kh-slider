# KH Slider

This is a lightweight and fast slider written in pure JavaScript that does not require any third-party libraries and supports flexible settings such as the position of slide-switching arrows, slide previews, slider sizes, slide switching speed, and opening the slide link in a new or current window. The project is planned to be further developed and improved.

## Usage

* Import the styles.css file to your project.
* Import the Slider class from the Slider.js file.
* Create a new instance of the Slider class with the following parameters:

1. elementId (string): the ID of the HTML element to attach the slider to.
    * slides (array): an array of objects representing each slide, with the following properties:
        * ```slideURL``` (string): the URL of the slide image.
        * ```altText``` (string, optional): the alternative text of the slide image.
        * ```link``` (string, optional): the URL to open when the slide is clicked.
        * ```target``` (string, optional): the target window or frame to open the slide link in. Possible values are _self,_blank, _parent, and_top.
    * options (object, optional): an object with the following properties:
        * ```preview``` (boolean, default true): whether to show slide previews or not.
        * ```width``` (string, default '100%'): the maximum width of the slider.
        * ```height``` (string, optional): the maximum height of the slider.
        * ```outsideArrows``` (boolean, default false): whether to position the slide-switching arrows outside the slider or not.
        * ``speed``` (number, default 0.3): the speed of slide switching, in seconds.

## Example of Usage

```import '../styles.scss';
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
```

## Contributing

Feel free to submit pull requests or open issues to improve the functionality and user experience of this web application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Author

Alexander Khoroshilov

* GitHub: [khorosh1lov](https://github.com/khorosh1lov)
* Email: khoroshilov.alex@gmail.com
