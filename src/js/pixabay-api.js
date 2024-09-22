export default function fetchImages(inputValue) {
    const searchParams = new URLSearchParams({
        key: '46126545-8899f9a6fbc888edd135bf332',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
