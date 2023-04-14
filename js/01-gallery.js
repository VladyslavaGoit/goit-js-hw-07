import { galleryItems } from './gallery-items.js';
// Change code below this line
// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   }
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt='${description}'
    />
  </a>
</li>`).join('');
gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onClick);
function onClick(event) {
    event.preventDefault()
    if (!event.target.classList.contains('gallery__image')){
        return;
    }
    const currentImageOriginal = event.target.dataset.source
    const instance = basicLightbox.create(`
    <img src=${currentImageOriginal} width="800" height="600">
`)
    instance.show();
    document.addEventListener('keydown', onEscape)
    function onEscape(event) {
    if (event.code === 'Escape') {
        instance.close()
        document.removeEventListener('keydown', onEscape)
        }   
    }
}


