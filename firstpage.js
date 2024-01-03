// script.js

document.addEventListener('DOMContentLoaded', function () {
  var movableImage = document.getElementById('icefox');
  var isAnimationInProgress = false;

  movableImage.addEventListener('click', function () {
    if (!isAnimationInProgress) {
      moveAndShrinkImage(movableImage, 200, 0.8); // 指定的目?位置和?小比例，可以根据需要?整
    }
  });
});

function moveAndShrinkImage(image, targetPosition, scaleRatio) {
  var currentPosition = image.getBoundingClientRect().left;
  var moveDistance = targetPosition - currentPosition;

  // ?置?式，????效果
  image.style.transition = 'left 0.5s ease-in-out, transform 0.5s ease-in-out';
  image.style.left = moveDistance + 'px';
  image.style.transform = 'scale(' + scaleRatio + ')';

  // ?定????
  isAnimationInProgress = true;

  // 在???束后解???
  setTimeout(function () {
    isAnimationInProgress = false;
  }, 500); // ?里的????与??的???一致
}
