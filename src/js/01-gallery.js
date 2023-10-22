// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const list = document.querySelector(".gallery");

  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
  list.innerHTML = markup;
  
  list.addEventListener("click", imageOpen);

  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
  });
  
function imageOpen(event) {
    event.preventDefault();
    lightbox.on('show.simplelightbox', function () {
    });
};