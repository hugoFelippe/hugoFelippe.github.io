$(document).ready(function(){
    $('a.see-more').click(function() {
        $('section.skills').addClass('open');
        $(this).addClass('hidden')
    })
});