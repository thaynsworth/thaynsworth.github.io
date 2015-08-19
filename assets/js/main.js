var portfolio = new Portfolio({collection: projects});
var about = new About({collection: about});
var contact = new Contact({collection: contact});

new WOW(
  { offset: 150 }
).init();

$(function(){

  $("#nav-menu li").click(function(){
    var el = $(this);  
    updateSection(el)
  })

});

  function emptySections() {
    console.log("Sections empty");
    $("#portfolio").hide();
    $("#about").hide();
    $("#contact").hide();
  }

  function updateSection(obj) {
  	$( "label.menu-toggle" ).trigger( "click" );
    emptySections();
    var section = obj.attr('id');
      if (section === 'portfolio') {
        var portfolio = $('#portfolio');
        portfolio.fadeIn(400, function(){
          portfolio.show();
        })
      } else if (section === 'about') {
        var about = $('#about');
        about.fadeIn(400, function(){
          about.show();
        });
        console.log('showing hcl history');   
      } else if (section === 'contact') {
        var contact = $('#contact');
        contact.fadeIn(400, function(){
          contact.show();
        });    
      }
  }

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		header = container.querySelector( 'header.ip-header' ),
		loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		};

	}

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );

					instance.setProgress( progress );

					// reached the end
					if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							classie.add( document.body, 'layout-switch' );
							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
				}, 80 );
		};

		loader.setProgressFn( simulationFn );
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

})();

$(window).resize(function() {
  var height = $('.loaded .ip-header .ip-logo svg').height();
  var padding = height;

  $('.section-main').css({'paddingTop': padding});
});
