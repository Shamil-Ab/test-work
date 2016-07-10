window.onload = function() {

	if($(window).width() <= 992){

		function slideNavigation(item) {
			if($(item).css("display") == "none"){
				$(item).slideDown();
			}
			else{
				$(item).slideUp();
			}
		}

		$(".menu-icon").click(function() {
			slideNavigation(".menu-list");
		})

		$("#categories").click(function() {
			slideNavigation(".category-list");
		})

		$("#archives").click(function() {
			slideNavigation(".archives-list");
		})

		$("#follow").click(function() {
			slideNavigation(".blog-sidebar .social-list");
		})

	}

}