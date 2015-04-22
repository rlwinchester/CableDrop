$(document).ready(function () {
    $('#USBtext,#DVItext,#FireWiretext,#HDMItext,#VGAtext,#Fibertext').draggable({
        opacity: .5,
        create: function () { $(this).data('position', $(this).position()) },
        cursorAt: { left: 15 },
        cursor: 'move',
        revert: 'invalid',
        start: function () { $(this).stop(true, true) }
    });
    $('#USBtext,#DVItext,#FireWiretext,#HDMItext,#VGAtext,#Fibertext').data({
        'originalLeft': $('#USBtext,#DVItext,#FireWiretext,#HDMItext,#VGAtext,#Fibertext').css('left'),
        'origionalTop': $('#USBtext,#DVItext,#FireWiretext,#HDMItext,#VGAtext,#Fibertext').css('top')
    });

    $('#USBimg,#DVIimg,#FireWireimg,#HDMIimg,#VGAimg,#Fiberimg').droppable({
        drop: function (event, ui) {
            snapToMiddle(ui.draggable, $(this));
        }
    });

    $(".reset").click(function () {
        $('#USBtext,#DVItext,#FireWiretext,#HDMItext,#VGAtext,#Fibertext').css({
            'left': $('#USBtext,#DVItext,#FireWiretext,#HDMItext,#VGAtext,#Fibertext').data('originalLeft'),
            'top': $('#USBtext,#DVItext,#FireWiretext,#HDMItext,#VGAtext,#Fibertext').data('origionalTop')
        })
    });


});
function snapToMiddle(dragger, target) {
    var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
    var leftMove = target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 2;
    dragger.animate({ top: topMove, left: leftMove }, { duration: 600, easing: 'easeOutBack' });
}