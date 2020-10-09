$(document).ready(function () {
    var chevronSize = document.getElementById("chevron-size");
$(function () {
    var sortOrder = 'asc',
        $toggleSortSize = $('.toggle-sort-size');

    var mixer = mixitup('#feed', {
        multifilter: {
            enable: true // enable the multifilter extension for the mixer
        },
        pagination: {
            limit: 24
        },
        load: {
            sort: 'size:asc'
        }
    });
    $toggleSortSize.on('click', function () {
        $('button').removeClass('text-rug-grey');
        $(this).addClass('text-rug-grey');
        switch (sortOrder) {
            case 'asc':
                sortOrder = 'desc';
                chevronSize.classList.add("rotate-180");
                break;
            case 'desc':
                sortOrder = 'asc';
                chevronSize.classList.remove("rotate-180");
                break;
        }
        mixer.sort('sort', 'size:' + sortOrder);
    });
});
function lazyload() {
    //lazy load using IntersectionObserver API
    var images = document.querySelectorAll('[data-src]'); //look at images with data-src
    var config = {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0
    };
    var loaded = 0;

    var observer = new IntersectionObserver(function (entries, self) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            //console.log("Image" .concat(entry.target.src, "is in the viewport!"));
          preloadImage(entry.target);
          // Stop watching and load the image
          self.unobserve(entry.target);
        }
      });
    }, config);

    images.forEach(function(image) {
      observer.observe(image);
    });
    //set each observed image src to its data-src value
    function preloadImage(img) {
      var src = img.getAttribute('data-src');
      if (!src) { return; }
      img.src = src;
    }
}
  });