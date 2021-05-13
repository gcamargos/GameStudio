$(document).ready(function () {
  $('#responsive').lightSlider({


    item: 3,
    loop: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          item: 3,
          slideMove: 1,
          loop: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,

        }
      }
    ],
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});