import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import fetchImages from "./js/pixabay-api";
import renderImages from "./js/render-functions";

const form = document.querySelector('.search-form');
export const gallery = document.querySelector('.image-gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.image-gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

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

    gallery.innerHTML = '';
    loader.style.display = 'block';

    fetchImages(inputValue)
        .then((images) => {
            if (images.hits.length === 0) {
                iziToast.show({
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    color: 'red',
                    position: 'topRight',
                });
                gallery.innerHTML = '';
                return;
            }
            
            renderImages(images.hits);

            if (lightbox) {
                lightbox.refresh();
            };
        })
        .catch(() => {
            iziToast.show({
                message: `An error occurred while fetching images. Please try again!`,
                color: 'red',
                position: 'topRight',
            });
            gallery.innerHTML = '';
        })
        .finally(() => {
            loader.style.display = 'none';
        });
    
    form.reset();
});
