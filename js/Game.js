(()=> {
    var Game = window.Game = {
        scenes: {
            first: {
                lines: [ 'Waxes the tide.' ],

                buttons: [{
                    text: 'Begone',
                    onclick: ()=>{ Game.setScene( Game.scenes.fetch ) }
                }]
            },
            fetch: {
                lines: [ 'Yield!', 'Wanes the tide.' ],
                buttons: [{
                    text:'Come',
                    onclick: ()=>{ Game.setScene( Game.scenes.first ) }
                }]
            }
        },

        init: function() {
            $('<div>').attr('id', 'display').appendTo('main')

            $('<div>').attr('id', 'dialog').appendTo('#display')
            $('<div>').attr('id', 'options').appendTo('#display')

            this.setScene(this.scenes.first)
        },

        setScene: function(scene) {
            var drawLines = function(index, complete) {
                var line = scene.lines[index]
                if(line) {
                    $('<p>').text(line).appendTo('#dialog')
                        .css('display', 'none')
                        .fadeIn(600, ()=>{ drawLines(index+1, complete) })
                } else {
                    complete()
                }
            }

            var clearLines = function(line, complete) {
                var lines = $('#dialog p')

                if(line < lines.length) {
                    $(lines[line]).animate({opacity: 0}, {
                        duration: 600,
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
                    duration: 600,
                    complete: ()=>{
                        $('#dialog').empty()
                        drawLines(0, ()=>{ $('#options').fadeIn() } )

                        $('#options').empty()
                        for(var button in scene.buttons) {
                            new Button( scene.buttons[button] ).appendTo('#options')
                        }
                    }
                })
            })

        }
    }

})()

$(()=> { Game.init() })

