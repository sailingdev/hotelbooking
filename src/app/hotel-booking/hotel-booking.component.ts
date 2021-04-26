import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent implements OnInit {

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

      // initialization of form validation
      $.HSCore.components.HSValidation.init('.js-validate', {
          rules: {
              confirmPassword: {
                  equalTo: '#signupPassword'
              }
          }
      });

      // initialization of show animations
      $.HSCore.components.HSShowAnimation.init('.js-animation-link');

      // initialization of forms
      $.HSCore.components.HSFocusState.init();

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

      // initialization of form validation
      $.HSCore.components.HSValidation.init('.js-validate');

      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');

      // initialization of HSScrollNav component
      $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
          duration: 700
      });
 
  }

}
