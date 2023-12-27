  function swapImages() {
    var imageContainer = document.querySelector('.image-container');
    var images = imageContainer.getElementsByTagName('img');

    // 交换两张图片的顺序
    imageContainer.insertBefore(images[1], images[0]);
  }