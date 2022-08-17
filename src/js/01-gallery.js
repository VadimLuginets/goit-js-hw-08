import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const genGalleryGrid = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', genGalleryGrid);

let gallery = new SimpleLightbox('.gallery a');

galleryEl.addEventListener('click', e => {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  gallery.on('show.simplelightbox', function () {
    gallery.defaultOptions.captionDelay = 250;
  });
});
