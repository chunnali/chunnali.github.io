$(document).ready(function(){
    var $content = $(".content-about").hide();
    $(document).on("click", function(e) {
        if( $(e.target).is(".about") ) {
            $(this).toggleClass(".about");
            $content.slideToggle();

        } else {
            $content.slideUp();
        }
    });
});


$(document).ready(function(){
    var $content = $(".content-contact").hide();
    $(document).on("click", function(e) {
        if( $(e.target).is(".contact") ) {
            $(this).toggleClass(".content");
            $content.slideToggle();

        } else {
            $content.slideUp();
        }
    });
});
