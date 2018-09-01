var Story = {
    reminder: {
        start: function() {
            window.document.title = 'THREAD #143'

            $("head").append("<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>")
            $('main').css('font-family', '"Oswald", sans')
            $('#dialog').css('line-height', '36px')

            $('body').css('background-position', '0 0') 
            $('body').css('background-image', `
                url("./story/assets/background.png"),

                radial-gradient(circle at 50% 0,
                    rgba(255,248,97,.38),
                    rgba(255,248,97,0) 79%),

                radial-gradient(circle at 9% 81%,
                    rgba(119,214,255,.38),
                    rgba(119,214,255,0) 79%),

                radial-gradient(circle at 100% 70%,
                    rgba(204,83,103,.38),
                    rgba(204,83,103,0) 79%)
            `)

            $(':root').css('--primary-color', 'bisque')
            $(':root').css('--accent-color', 'mintcream')
            $(':root').css('--bg-color', 'royalblue')
            $(':root').css('--anim-dur', '4s')
            Game.setPage( this.i, 1800 )
            $(':root').css('--anim-dur', '2s')
        },

        i: function() {
            return {
                lines: [ 'REMINDER:',
                         'YOU HAVE 40% REMAINING OF YOUR 150 YEAR LIFESPAN.',
                         'YOU MAY BE ELIGIBLE FOR AN EXTENSION,',
                         'PRESS \'<span>YES</span>\' FOR MORE DETAILS.',
                         'PRESS \'<span>NO</span>\' FOR EARLY CONTRACT TERMINATION.' ],
                buttons: [{
                    text: 'YES',
                    onclick: ()=> {
                        this.reminder.counter = 0
                        Game.setPage( this.reminder.i_yes, 1000 )
                    }
                }, {
                    text: 'NO',
                    onclick: ()=> {
                        this.reminder.counter = 0
                        Game.setPage( this.reminder.i_no, 1000 )
                    } 
                }]
            }
        },

        i_yes: function() {
            return {
                lines: [ 'LIMITED LIFESPAN EXTENSIONS ARE AVAILABLE',
                         'TO PERSONS OF ELO RATING OVER 2762.',
                         'YOUR ELO RATING IS: 1553.',
                         'END OF THREAD' ],
                buttons: [{
                    text: '...',
                    onclick: ()=> {
                        this.reminder.counter += 1
                        if( this.reminder.counter < 4 ) {
                            Game.setPage( this.reminder.i_yes, 400 )
                        } else {
                            Game.setPage( this.reminder.i, 1800 )
                        }
                    }
                }]
            }
        },

        i_no: function() {
            return {
                lines: [ 'YOU\'VE OPTED FOR EARLY CONTRACT TERMINATION.',
                         'PLEASE SUBMIT FEEDBACK',
                         'ON HOW YOU WOULD RATE YOUR EXPERIENCE WITH US.' ],
                buttons: [{
                    text: 'I FEEL UNSATISFIED WITH LIFE. '
                        + 'NOTHING REAL EVER HAPPENS. '
                        + 'I CAN\'T BREATHE.',
                    onclick: ()=> { Game.setPage( this.reminder.i_no_i, 1000 ) }
                }]
            }
        },

        i_no_i: function() {
            return {
                lines: [ 'WE\'RE SORRY TO INFORM YOU',
                         'WE CANNOT ACCEPT YOUR REQUEST AT THIS TIME.',
                         'PLEASE TRY AGAIN LATER.',
                         'END OF THREAD' ],
                buttons: [{
                    text: '...',
                    onclick: ()=> {
                        this.reminder.counter += 1
                        if( this.reminder.counter < 4 ) {
                            Game.setPage( this.reminder.i_no_i, 400 )
                        } else {
                            Game.setPage( this.reminder.i, 1800 )
                        }
                    }
                }]
            }
        }

    }
}
