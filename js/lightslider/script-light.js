$(document).ready(function () {
  $('#responsive').lightSlider({


    item: 3,
    loop: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 1,
          slideMove: 1,

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