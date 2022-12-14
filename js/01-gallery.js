import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");


const addGalleryItems = galleryItems.map((item) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>
    `).join("");

gallery.insertAdjacentHTML("afterbegin", addGalleryItems)  

const selectImg = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const modal = basicLightbox.create(
        `<img src="${event.target.closest("img").dataset.source
    }">`
    );
    
  console.log(event.target);
  console.log(modal.show());

}




 gallery.addEventListener("click", selectImg)