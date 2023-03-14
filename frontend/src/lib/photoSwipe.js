import PhotoSwipeLightbox from "photoswipe/lightbox";

const lightboxGallery = new PhotoSwipeLightbox({
  gallery: ".gallery",
  children: ".ps-image",
  showHideAnimationType: "none",
  zoomAnimationDuration: false,
  pswpModule: () => import("photoswipe"),
});

lightboxGallery.init();
