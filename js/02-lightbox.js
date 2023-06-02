import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("ul.gallery");
let galleryMarkup = '';

galleryItems.forEach((img) => {
    const imges =
        `<li class="gallery__item">
            <a class="gallery__link" href="${img.original}">
            <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
            </a>
     </li>`;

    galleryMarkup += imges;

});

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: "alt",
    captionDelay: 250,
});



// const galleryDescrip = document.querySelectorAll('.gallery__image');
// galleryDescrip.forEach((link) => {
//     link.onclick = (event) => {
//         event.preventDefault();

      

//     };
// });

