
/* Prettyify */
$( document ).ready(function() {
    prettyPrint();

    $('.main-nav .navbar-toggle, .main-nav .navbar-toggle .fa').click(function(){
        if($(this).hasClass('collapsed')){
            $('.main-nav .navbar-toggle .fa').addClass('fa-rotate-180');
        } else {
            $('.main-nav .navbar-toggle .fa').removeClass('fa-rotate-180');
        }
    });
});


/* Scrollspy */
var navHeight = $('.navbar').outerHeight(true) + 10

$('body').scrollspy({
    target: '.bs-sidebar',
    offset: navHeight
});

var headerHeight = $('#ninefold-nav').height()+62;

/* Give search field focus on modal */

$('body').on('shown.bs.modal', '.modal', function () {
  $('[id$=cse-search-input-box-id]').focus();
})


$(document).scroll(function(){
    var topOffset = $(this).scrollTop();
    if(headerHeight < topOffset){
        if($('.main-nav').hasClass('navbar-fixed-top')){
            // Dont do anything
        } else {
            $('.main-nav').addClass('navbar-fixed-top');    
            $('.bs-sidebar').addClass('sticky');
            $('body').css({"margin-top":"51px"});
        }
        
    } else {
        $('.main-nav').removeClass('navbar-fixed-top');
        $('.bs-sidebar').removeClass('sticky');
        $('body').css({"margin-top":"0px"});
    }

    
});

/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});


/* Adjust the scroll height of anchors to compensate for the fixed navbar */
window.disableShift = false;
var shiftWindow = function() {
    if (window.disableShift) {
        window.disableShift = false;
    } else {
        /* If we're at the bottom of the page, don't erronously scroll up */
        var scrolledToBottomOfPage = (
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight
        );
        if (!scrolledToBottomOfPage) {
            scrollBy(0, -60);
        };
    };
};
if (location.hash) {shiftWindow();}
window.addEventListener("hashchange", shiftWindow);


/* Deal with clicks on nav links that do not change the current anchor link. */
$("ul.nav a" ).click(function() {
    var href = this.href;
    var suffix = location.hash;
    var matchesCurrentHash = (href.indexOf(suffix, href.length - suffix.length) !== -1);
    if (location.hash && matchesCurrentHash) {
        /* Force a single 'hashchange' event to occur after the click event */
        window.disableShift = true;
        location.hash='';
    };
});
