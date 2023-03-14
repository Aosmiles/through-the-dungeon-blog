import PhotoSwipeLightbox from "photoswipe/lightbox";

const lightbox = new PhotoSwipeLightbox({
  gallery: ".gallery",
  children: "a",
  showHideAnimationType: "none",
  zoomAnimationDuration: false,
  pswpModule: () => import("photoswipe"),
});

lightbox.init();
