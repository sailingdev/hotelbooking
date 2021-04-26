import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hotel-list-with-map',
  templateUrl: './hotel-list-with-map.component.html',
  styleUrls: ['./hotel-list-with-map.component.scss']
})
export class HotelListWithMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
          event: 'hover',
          pageContainer: $('.container'),
          breakpoint: 1199.98,
          hideTimeOut: 0
      });

      // Page preloader
      setTimeout(function() {
        $('#jsPreloader').fadeOut(500)
      }, 800);

      // initialization of header
      $.HSCore.components.HSHeader.init($('#header'));

      // initialization of google map
      function initMap() {
          $.HSCore.components.HSGMap.init('.js-g-map');
      }

      // initialization of unfold component
      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

      // initialization of toggle state
      // $.HSCore.components.HSToggleState.init('.js-toggle-state');

      // initialization of show animations
      $.HSCore.components.HSShowAnimation.init('.js-animation-link');

      // initialization of datepicker
      $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');

      // initialization of forms
      $.HSCore.components.HSRangeSlider.init('.js-range-slider');

      // initialization of malihu scrollbar
      $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

      // initialization of select
      $.HSCore.components.HSSelectPicker.init('.js-select');

      // initialization of quantity counter
      $.HSCore.components.HSQantityCounter.init('.js-quantity');

      // initialization of slick carousel
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');
  
  }

}
