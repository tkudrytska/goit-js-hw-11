import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import fetchImages from "./js/pixabay-api";
import renderImages from "./js/render-functions";

const form = document.querySelector('.search-form');
export const gallery = document.querySelector('.image-gallery');
const loader = document.querySelector('.loader');

let lightbox = null;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const inputValue = form.elements.query.value.trim();
    
    if (!inputValue) {
        iziToast.show({
            message: 'Please enter a search query.',
            color: 'red',
            position: 'topRight',
        });
        return;
    }

    loader.style.display = 'block';

    fetchImages(inputValue)
        .then((images) => {
            if (images.hits.length === 0) {
                iziToast.show({
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    color: 'red',
                    position: 'topRight',
                });
                return;
            }
            gallery.innerHTML = '';
            renderImages(images.hits);
            if (lightbox) {
                lightbox.refresh();
            } else {
                lightbox = new SimpleLightbox('.gallery a', {
                    captions: true,
                    captionSelector: 'img',
                    captionsData: 'alt',
                    captionPosition: 'bottom',
                    captionDelay: 250,
                });
            };
        })
        .catch(() => {
            iziToast.show({
                message: `An error occurred while fetching images. Please try again!`,
                color: 'red',
                position: 'topRight',
            });
        })
        .finally(() => {
            loader.style.display = 'none';
        });
    
    form.reset();
});
