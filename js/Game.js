(()=> {
    var Game = window.Game = {
        init: function(pages) {
            $('<div>').attr('id', 'display').appendTo('main')

            $('<div>').attr('id', 'dialog').appendTo('#display')
            $('<div>').attr('id', 'options').appendTo('#display')

            this.setPage(pages.first, 2000)
        },

        setPage: function(page, speed) {
            var animdur = speed;

            var drawLines = function(index, complete) {
                var line = page.lines[index]
                if(line) {
                    $('<p>').text(line).appendTo('#dialog')
                        .css('display', 'none')
                        .fadeIn(animdur, ()=>{ drawLines(index+1, complete) })
                } else {
                    complete()
                }
            }

            var clearLines = function(line, complete) {
                var lines = $('#dialog p')

                if(line < lines.length) {
                    $(lines[line]).animate({opacity: 0}, {
                        duration: animdur,
                        complete: ()=>{
                            clearLines(line+1, complete)
                            }
                    })
                } else {
                    complete()
                }
            }

            clearLines(0, ()=>{
                $('#options').fadeOut({
                    duration: animdur,
                    complete: ()=>{
                        $('#dialog').empty()
                        drawLines(0, ()=>{ $('#options').fadeIn(animdur) } )

                        $('#options').empty()
                        for(var button in page.buttons) {
                            new Button( page.buttons[button] ).appendTo('#options')
                        }
                    }
                })
            })

        }
    }

})()

