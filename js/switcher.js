function setActiveStyle(colorName) {
    $(".alternate-style").attr("disabled", "true");
    $(".alternate-style[title="+colorName+"]").removeAttr("disabled");
}

$('.switcher-toggler').click(function(){
    $('.style-switcher').toggleClass('open');
})