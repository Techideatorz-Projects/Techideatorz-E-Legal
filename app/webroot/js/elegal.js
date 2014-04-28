$(document).ready(function(){
    //themes, change CSS with JS
    //default theme(CSS) is cerulean, change it if needed
    var current_theme = 'cerulean';
    switch_theme(current_theme);
	
    $('#themes a[data-value="'+current_theme+'"]').find('i').addClass('icon-ok');
				 
    $('#themes a').click(function(e){
        e.preventDefault();
        current_theme=$(this).attr('data-value');
        $.cookie('current_theme',current_theme,{
            expires:365
        });
        switch_theme(current_theme);
        $('#themes i').removeClass('icon-ok');
        $(this).find('i').addClass('icon-ok');
    });
	
	
    function switch_theme(theme_name)
    {
        $('#bs-css').attr('href','css/bootstrap-'+theme_name+'.css');
    }
	
    //highlight current / active link
    $('ul.main-menu li a').each(function(){
        if($($(this))[0].href==String(window.location))
            $(this).parent().addClass('active');
    });
	
    //animating menus on hover
    $('ul.main-menu li:not(.nav-header)').hover(function(){
        $(this).animate({
            'margin-left':'+=5'
        },300);
    },
    function(){
        $(this).animate({
            'margin-left':'-=5'
        },300);
    });
	
    //other things to do on document ready, seperated for ajax calls
    docReady();
});
		
		
function docReady(){
    //prevent # links from moving to top
    $('a[href="#"][data-top!=true]').click(function(e){
        e.preventDefault();
    });


    //uniform - styler for checkbox, radio and file input
    $("input:checkbox, input:radio, input:file").not('[data-no-uniform="true"],#uniform-is-ajax').uniform();

    //chosen - improves select
    $('[data-rel="chosen"],[rel="chosen"]').chosen();

    //tabs
    $('#myTab a:first').tab('show');
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });


    $('.btn-close').click(function(e){
        e.preventDefault();
        $(this).parent().parent().parent().fadeOut();
    });
    $('.btn-minimize').click(function(e){
        e.preventDefault();
        var $target = $(this).parent().parent().next('.box-content');
        if($target.is(':visible')) $('i',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
        else 					   $('i',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
        $target.slideToggle();
    });
    $('.btn-setting').click(function(e){
        e.preventDefault();
        $('#myModal').modal('show');
    });

}

