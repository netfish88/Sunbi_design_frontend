/**
 * Created by DavidHong on 2015. 4. 7..
 */

$(function() {

    $('#func-history-reason1').click(function(e) {

        e.preventDefault();
        $('#pop-history-desc1').slideDown();
    });


    $('#func-history-reason2').click(function(e) {

        e.preventDefault();
        $('#pop-history-desc2').slideDown();
    });

    $('.close').click(function(e) {
        e.preventDefault();
        $('#pop-history-desc1').slideUp();
        $('#pop-history-desc2').slideUp();
    });
});