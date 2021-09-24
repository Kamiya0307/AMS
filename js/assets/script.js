$(function(){
    $('#sub-images img').on('click',function(){
        //mainに切り替えるimgのsrc取得
        img = $(this).attr('src');
        //currentクラス付け替え
        $('#sub-images li').removeClass('current');
        $(this).parent().addClass('current');
        //fadeOutできたらsrc変更してfadeIn
        $('#main-image img').fadeOut(50, function() {
            $('#main-image img').attr('src', img).on('load', function() {
                 $(this).fadeIn();
            })
       })
    });
});