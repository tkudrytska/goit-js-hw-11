import { gallery } from '../main';

export default function renderImages(images) {
    const markup = images
        .map((image) => {
            const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
            return `
            <a href="${largeImageURL}" class="gallery-item">
                <img src="${webformatURL}" alt="${tags}" 
                    data-likes="${likes}" data-views="${views}" 
                    data-comments="${comments}" data-downloads="${downloads}" />
                <div class="image-info">
                    <p>Likes: ${likes}</p>
                    <p>Views: ${views}</p>
                    <p>Comments: ${comments}</p>
                    <p>Downloads: ${downloads}</p>
                </div>
            </a>`;
        })
        .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
};
