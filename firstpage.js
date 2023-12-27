document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.querySelector('.image-container');

    imageContainer.addEventListener('click', function() {
      var firefox = document.querySelector('.image-container img.First');
      var icefox = document.querySelector('.image-container img.Second');

      // 切换图片的可见性类
      firefox.classList.remove('First');
      firefox.classList.add('Second');

      icefox.classList.remove('Second');
      icefox.classList.add('First');
    });
  });