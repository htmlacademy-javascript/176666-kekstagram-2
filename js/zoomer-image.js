const RADIX = 10;
const TRANSFORM_SCALE = 0.01;

const ImageZoom = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const imageElement = imageUploadOverlay.querySelector('img');
const scaleControlValue = imageUploadOverlay.querySelector('.scale__control--value');
const scaleControlSmaller = imageUploadOverlay.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUploadOverlay.querySelector('.scale__control--bigger');

const updateImageZoom = (newSize) => {
  scaleControlValue.value = `${newSize}%`;
  imageElement.style.transform = `scale(${newSize * TRANSFORM_SCALE})`;
};

const changeImageZoom = (factor) => {
  const currentSize = parseInt(scaleControlValue.value, RADIX);
  let newSize = currentSize + (ImageZoom.STEP * factor);
  newSize = Math.max(ImageZoom.MIN, Math.min(newSize, ImageZoom.MAX));
  updateImageZoom(newSize);
};

const resetImageZoom = () => {
  updateImageZoom(ImageZoom.MAX);
};

scaleControlSmaller.addEventListener('click', () => changeImageZoom(-1));
scaleControlBigger.addEventListener('click', () => changeImageZoom(1));

export { resetImageZoom };
