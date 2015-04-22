$(document).ready(function() {
    $('#USBtext').draggable({
        opacity:.5,
        create: function(){$(this).data('position',$(this).position())},
        cursorAt:{left:15},
        cursor:'move',
        revert: 'invalid',
        start:function(){$(this).stop(true,true)}
		});
		
	$('#DVItext').draggable({
        opacity:.5,
        create: function(){$(this).data('position',$(this).position())},
        cursorAt:{left:15},
        cursor:'move',
        revert: 'invalid',
        start:function(){$(this).stop(true,true)}
	});
	$('#FireWiretext').draggable({
	    opacity: .5,
	    create: function () { $(this).data('position', $(this).position()) },
	    cursorAt: { left: 15 },
	    cursor: 'move',
	    revert: 'invalid',
	    start: function () { $(this).stop(true, true) }
	});

    $("#USBtext").data({'originalLeft': $("#USBtext").css('left'),
        'origionalTop': $("#USBtext").css('top')
    });
	 $("#DVItext").data({'originalLeft': $("#DVItext").css('left'),
        'origionalTop': $("#DVItext").css('top')
	 });
	 $("#FireWiretext").data({
	     'originalLeft': $("#FireWiretext").css('left'),
	     'origionalTop': $("#FireWiretext").css('top')
	 });

    $('#USBimg').droppable({
        drop: function( event, ui ) {
            $(this).droppable('option', 'accept', ui.draggable);
    
  },
  out: function( event, ui ) {
             $(this).droppable('option', 'accept');
 //           $(this).removeClass( "dropped-highlight" );
  }
});
    $('#DVIimg').droppable({
        drop: function( event, ui ) {
            $(this).droppable('option', 'accept', ui.draggable);
        },
  out: function( event, ui ) {
      $(this).droppable('option', 'accept');
      //           $(this).removeClass( "dropped-highlight" );
  }
});

    $(".reset").click(function () {
        $("#USBtext").css({
            'left': $("#USBtext").data('originalLeft'),
            'top': $("#USBtext").data('origionalTop')
        })
		  $("#DVItext").css({
            'left': $("#DVItext").data('originalLeft'),
            'top': $("#DVItext").data('origionalTop')
        })
    });


    });
    function snapToMiddle(dragger, target){
        var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 1;
        var leftMove= target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 2;
        dragger.animate({top:topMove,left:leftMove},{duration:600,easing:'easeOutBack'});
    }
