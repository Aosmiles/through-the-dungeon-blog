import PhotoSwipeLightbox from "photoswipe/lightbox";

const options = {
  gallery: ".gallery",
  children: ".ps-image",
  pswpModule: () => import("photoswipe"),
};

const lightboxGallery = new PhotoSwipeLightbox(options);

lightboxGallery.init();
