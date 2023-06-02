import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector("ul.gallery");
let galleryMarkup = '';

galleryItems.forEach((img) => {
    const imges =
        `<li class="gallery__item">
         <a class="gallery__link" href="${img.original}">
            <img
                class="gallery__image"
                src="${img.preview}"
                data-source="${img.original}"
                alt="Image description"
            />
        </a>    
    </li>`;

    galleryMarkup += imges;

});
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    } 
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}">
    `);
    instance.show();

    gallery.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
});


