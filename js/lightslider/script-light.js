$(document).ready(function () {
  $('#responsive').lightSlider({


    item: 3,
    loop: false,
    responsive: [
      {
        breakpoint: 830,
        settings: {
          item: 2,
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