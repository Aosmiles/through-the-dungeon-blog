import MiniMasonry from "minimasonry";

const gallery = document.querySelector(".masonry");
const galleryItem = document.querySelectorAll(".masonry-item");

const masonry = new MiniMasonry({
  container: ".masonry",
  baseWidth: 200,
  gutter: 15,
  ultimateGutter: 10,
});

gallery.classList.replace("grid", "relative");

galleryItem.forEach((item) => {
  item.classList.replace("hidden", "absolute");
});

masonry.layout();
