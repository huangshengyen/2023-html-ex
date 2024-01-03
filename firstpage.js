// script.js

document.addEventListener('DOMContentLoaded', function () {
  var movableImage = document.getElementById('icefox');
  var isAnimationInProgress = false;

  movableImage.addEventListener('click', function () {
    if (!isAnimationInProgress) {
      moveAndShrinkImage(movableImage, 200, 0.8); // ���w����?��m�M?�p��ҡA�i�H���u�ݭn?��
    }
  });
});

function moveAndShrinkImage(image, targetPosition, scaleRatio) {
  var currentPosition = image.getBoundingClientRect().left;
  var moveDistance = targetPosition - currentPosition;

  // ?�m?���A????�ĪG
  image.style.transition = 'left 0.5s ease-in-out, transform 0.5s ease-in-out';
  image.style.left = moveDistance + 'px';
  image.style.transform = 'scale(' + scaleRatio + ')';

  // ?�w????
  isAnimationInProgress = true;

  // �b???���Z��???
  setTimeout(function () {
    isAnimationInProgress = false;
  }, 500); // ?����????�O??��???�@�P
}
