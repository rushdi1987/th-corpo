$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
  	//Autoplay
    autoPlay : false,
    stopOnHover : true,
 
    // Navigation
    navigation : true,
    navigationText : ["<i class='fa fa-chevron-left '></i>","<i class='fa fa-chevron-right '></i>"],
    rewindNav : true,
    scrollPerPage : false,

     // CSS Styles
    // baseClass : "owl-carousel",
       theme : "owl-theme-2",
  
    //Auto height
    autoHeight : true,
  });
 
});
