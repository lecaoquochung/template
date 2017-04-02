/* -----------------------------------
	#Google Maps
-------------------------------------*/
if($('#maps').length){
	function initialize() {
	  var myLatlng = new google.maps.LatLng(42.300452,-71.483182);
	  var mapOptions = {
		zoom: 14,
		center: myLatlng,
		scrollwheel: false
	  }
	  
	  var contentString = '<div>IzPixel</div>';
	  
	  var infowindow = new google.maps.InfoWindow({
		  content: contentString
	  });
	  var map = new google.maps.Map(document.getElementById('maps'), mapOptions);
	
	  var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title: 'IzPixel'
	  });
	  google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);
}

jQuery(function () {
	/*-------------------------------------
		#Tooltip
	-------------------------------------*/
	$('[data-toggle="tooltip"]').tooltip({'placement': 'top'});

	/*-------------------------------------
		#Scroll Spy
	-------------------------------------*/
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
	});
	
	/*-------------------------------------
		#Scroll to
	-------------------------------------*/
    $('a.scrollTo').click(function () {
        $('body').scrollTo($(this).attr('href'), 800);
        return false;
    });
	
	/*-------------------------------------
		#Color Changer
	-------------------------------------*/
	$("#blue" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/blue.css" );
		return false;
	});
	
	$("#green" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/green.css" );
		return false;
	});
	
	$("#red" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/red.css" );
		return false;
	});
	
	$("#orange" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/orange.css" );
		return false;
	});
	
	$("#teal" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/teal.css" );
		return false;
	});
	
	$("#style-switcher h2 a").click(function(e){
		e.preventDefault();
		var div = $("#style-switcher");
		console.log(div.css("left"));
		if (div.css("left") === "-172px") {
			$("#style-switcher").animate({
				left: "0px"
			}); 
		} else {
			$("#style-switcher").animate({
				left: "-172px"
			});
		}
	});

});

window.scrollReveal = new scrollReveal();

/*-------------------------------------
	#SuperSlides
-------------------------------------*/
if($('#slides').length){
	$('#slides').superslides({
	  animation: 'fade',
	  play: 4000
	});
}

jQuery(function () {
	/*-------------------------------------
	#Portfolio Filter
	-------------------------------------*/
	$('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
	
	if($('#list-project').length){
		var jQuerycontainer = jQuery('#list-project');
	
		jQuerycontainer.isotope({
			itemSelector: '.element'
		});
	
	
		var jQueryoptionSets = jQuery('#options .option-set'),
			jQueryoptionLinks = jQueryoptionSets.find('a');
	
		jQueryoptionLinks.click(function () {
			var jQuerythis = jQuery(this);
			
			var jQueryoptionSet = jQuerythis.parents('.option-set');
			jQueryoptionSet.find('.selected').removeClass('selected');
			jQuerythis.addClass('selected');
	
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
				key = jQueryoptionSet.attr('data-option-key'),
				value = jQuerythis.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[key] = value;
			if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
				// changes in layout modes need extra logic
				changeLayoutMode(jQuerythis, options)
			} else {
				// otherwise, apply new options
				jQuerycontainer.isotope(options);
			}
	
			return false;
		});
	}
});