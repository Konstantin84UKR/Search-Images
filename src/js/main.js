import SearchPixaBay from '../js/searchPixaBay.js';
import template_galleryList from '../template/gallery.hbs';
import * as basicLightbox from 'basiclightbox';

const searchImagesform = document.querySelector('#search-form');

const searchPixaBay = new SearchPixaBay(
  '20996024-19aac0cac2354f2b824e2c88f',
  template_galleryList,
);

searchImagesform.addEventListener('submit', event => {
  event.preventDefault();
  searchPixaBay.searchQuery = searchImagesform.elements.query.value;
});

document.addEventListener('click', event => {
  console.log('click');
  console.log(event.target.className);

  if (event.target.className == 'photo') {
    console.log('photo');
    const instance = basicLightbox.create(
      `<img src=${event.target.dataset.largeimage}> `,
    );
    instance.show(() => console.log('lightbox now visible'));
  }
});
