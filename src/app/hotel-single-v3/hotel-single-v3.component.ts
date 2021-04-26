import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hotel-single-v3',
  templateUrl: './hotel-single-v3.component.html',
  styleUrls: ['./hotel-single-v3.component.scss']
})
export class HotelSingleV3Component implements OnInit {

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

      // initialization of show animations
      $.HSCore.components.HSShowAnimation.init('.js-animation-link');

      // initialization of popups
      $.HSCore.components.HSFancyBox.init('.js-fancybox');

      // initialization of datepicker
      $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');

      // initialization of select
      $.HSCore.components.HSSelectPicker.init('.js-select');

      // initialization of sticky blocks
      $.HSCore.components.HSStickyBlock.init('.js-sticky-block');

      // initialization of quantity counter
      $.HSCore.components.HSQantityCounter.init('.js-quantity');

      // initialization of slick carousel
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');

      // initialization of HSScrollNav component
      $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
          duration: 700
      });
 
  }

}
