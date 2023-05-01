export default function getCropSize(illustration) {
  const cropWidth =
    illustration.size.width -
    illustration.image.crop.left * illustration.size.width -
    illustration.image.crop.right * illustration.size.width;
  const cropHeight =
    illustration.size.height -
    illustration.image.crop.top * illustration.size.height -
    illustration.image.crop.bottom * illustration.size.height;

  const cropRatio = cropWidth / cropHeight;

  return {
    width: cropWidth,
    height: cropHeight,
    ratio: cropRatio,
  };
}
