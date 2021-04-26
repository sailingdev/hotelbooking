import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hotel-single-v1',
  templateUrl: './hotel-single-v1.component.html',
  styleUrls: ['./hotel-single-v1.component.scss']
})
export class HotelSingleV1Component implements OnInit {

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

      // initialization of autonomous popups
      $.HSCore.components.HSModalWindow.init('[data-modal-target]', '.js-modal-window', {
          autonomous: true
      });

      // initialization of unfold component
      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

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
