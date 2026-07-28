Features
--------
- Responsive grid layout that adapts across phone, tablet, and desktop.
- Click or keyboard navigation to open images in a modal/lightbox.
- CSS transitions and simple animations for a polished feel.
- Lightweight, dependency-free implementation (vanilla JS).

How to use
----------
1. Open the project folder in your file explorer.
2. Open `index.html` in your browser (Chrome, Firefox, Edge, etc.).
3. Click any image to open it in the modal/lightbox.
4. While the modal is open: use the left/right arrows or arrow keys to navigate, and press `Esc` or click outside the image to close.

Notes
-----
- Styling is in `style.css` and `media-query.css`.
- Behavior is implemented in `script.js`.
- Refresh the page after making changes to see updates.

Adding images
-------------
There are two simple ways to add images to the gallery.

1) Use the in-page Add field (recommended)
- Open `index.html` in your browser.
- Paste an image URL (absolute like `https://example.com/photo.jpg`) or a relative path (for local files, e.g. `images/photo1.jpg`) into the "Paste Your Url Here..." field and click Add.
- For local images, create an `images` folder inside the project, put your image files there, and use paths like `images/your-file.jpg`.

2) Preload images in code
- Open `script.js` and replace the `allImages` declaration with a list of objects, for example:

```js
let allImages = [
	{ id: 1, imageUrl: 'images/photo1.jpg', alt: 'A sunset over the lake' },
	{ id: 2, imageUrl: 'images/photo2.jpg', alt: 'City skyline at night' }
];
```

- Save and refresh `index.html` to see the preloaded images.

Tip: If you add an `alt` property to each object, update the image template in `renderImages()` to include `alt="${img.alt || ''}"` so screen readers show the caption.
