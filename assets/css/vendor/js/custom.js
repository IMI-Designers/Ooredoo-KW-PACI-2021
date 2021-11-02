/* <!-- Initialize Swiper --> */

////////////////////
let options = {};
if ( $(".sw_produts--swiper .swiper-slide").length == 1 ) {
	options = {
	slidesPerView: 3,
	spaceBetween: 0,
	breakpoints: {
	480: {
	slidesPerView: 1,
	spaceBetween: 0,
	},
	}
	}
   } else {
	options = {
	slidesPerView: 3,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// init: false,
	breakpoints: {
		991: {
			slidesPerView: 3,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 1.5,
			centeredSlides: false,
		},
		425: {
			slidesPerView: 1.3,
			centeredSlides: false,
		},
		320: {
			slidesPerView: 1.3,
			centeredSlides: false,
		},
	}
	}
   }

   var swiper1 = new Swiper('.sw_produts--swiper', options);
    var sw_length = swiper1.slides.length;
    if(sw_length <= 3){
    $('.sw_produts--swiper .swiper-pagination').addClass('pagenav');
    }