/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * scrollBtn
  * onepage_nav 
  * ajaxAppointmentl
  * ajaxContactForm
  * alertBox
  * detectViewport
  * counter
  * tabs
  * flatPricingCarousel
  * flatTestimonials
  * simpleSlider
  * datepicker
  * sectionVideo
  * googleMap  
  * responsiveVideo
  * flatAnimation
  * goTop
  * retinaLogos
  * parallax
  * removePreloader
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var headerFixed = function() {
        if ( $('body').hasClass('header-sticky') ) {
            var nav = $('.header');

            if ( nav.size() !== 0 ) {
                var offsetTop = $('.header').offset().top,
                    headerHeight = $('.header').height(),
                    injectSpace = $('<div />', { height: 80 }).insertAfter(nav);   
                    injectSpace.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop ) {
                        if ( $('.header').hasClass('header-classic') ) {
                            injectSpace.show();
                        }
                        $('.header').addClass('downscrolled');                        
                    } else {
                        $('.header').removeClass('header-small downscrolled');
                        injectSpace.hide();
                    }                    
                })
            }
        }     
    };

    var topSearch = function () {
      $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 's' ) ) {
                $('.top-search').removeClass('show');                
            } 
        });

        $('.show-search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.show-search').on('click', function (event) {
            if(!$('.top-search').hasClass( "show" )) {
                $('.top-search').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.top-search').removeClass('show');
                event.preventDefault();

            if( !$('.show-search' ).hasClass( "active" ) )
                $( '.show-search' ).addClass( 'active' );
            else
                $( '.show-search' ).removeClass( 'active' );
        });   
   
    }   

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {        	
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }


    
    var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.parallax1').parallax("50%", 0.2);
            $('.parallax2').parallax("50%", 0.4);  
            $('.parallax3').parallax("50%", 0.5);            
        }
    }; 

    var counter = function() {       
        $('.flat-counter').on('on-appear', function() {             
            $(this).find('.numb-count').each(function() { 
                var to = parseInt( ($(this).attr('data-to')),10 ), speed = parseInt( ($(this).attr('data-speed')),10 );
                if ( $().countTo ) {
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                }
            });
       });
    };    



    var swClick = function () {
        function activeLayout () {
            $(".switcher-container" )
            .on( "click", "a.sw-light", function() {
                $(this).toggleClass( "active" );
                $('body').addClass('home-boxed');                               
                $('.sw-pattern.pattern').css ({ "top": "100%", "opacity": 1, "z-index": "10"});
            })
            .on( "click", "a.sw-dark", function() {
                $('.sw-pattern.pattern').css ({ "top": "98%", "opacity": 0, "z-index": "-1"});
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');   
                $('body').css({'background': '#fff' });             
                return false;
            })       
        }

        function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout(); 
        activePattern();
    }

    var removePreloader = function() {        
        $('.loader').fadeOut('slow',function () {
            $(this).remove();
        });
    };

    var backgroundBlog = function() {
        var backgroundheight = 5000;
        $('<style>.bg-sidebar .wrap-main-post:before{height:'+backgroundheight+'px}</style>').appendTo('head');      
    }


   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
            headerFixed(); 
        }      
        topSearch();
        responsiveMenu();        
        backgroundBlog();
        parallax();
        swClick();
        counter();
        removePreloader();
   	});

})(jQuery);