import SearchPixaBuy from '../js/searchPixaBuy.js';
import template_galleryList from '../template/gallery.hbs';
import * as basicLightbox from 'basiclightbox';

const searchImagesform = document.querySelector('#search-form');

const searchPixaBuy = new SearchPixaBuy(
  '20996024-19aac0cac2354f2b824e2c88f',
  template_galleryList,
);

searchImagesform.addEventListener('submit', event => {
  event.preventDefault();
  searchPixaBuy.searchQuery = searchImagesform.elements.query.value;
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
