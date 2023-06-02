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


const galleryLinks = document.querySelectorAll('.gallery__link');
galleryLinks.forEach((link) => {
    link.onclick = (event) => {
        event.preventDefault();
        const url = event.currentTarget;
        basicLightbox.create(`
                <img width="1400" height="900" src="${url.href}">
            `).show();
    };
});

// const close = document.querySelector(".gallery__item");

gallery.addEventListener("keydown", (event) => {
    if (event.code === 'Escape') {
        console.log(event);
        basicLightbox.close();
        // basicLightbox.close(() => console.log('la caja de luz ya no es visible'))
    }
});
