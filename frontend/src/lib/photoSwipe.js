import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

const options = {
  gallery: ".gallery",
  children: ".ps-image",
  pswpModule: () => import("photoswipe"),
  padding: { top: 10, bottom: 20, left: 20, right: 20 },
};

const lightboxGallery = new PhotoSwipeLightbox(options);

const captions = new PhotoSwipeDynamicCaption(lightboxGallery, {
  type: "auto",
  captionContent: ".caption-content",
});

lightboxGallery.init();
