var Story = {
    reminder: {
        calcElo: function() {
            // Expression designed for natural looking decline
            var form = 2200 + 1400*Math.cos(0.02*this.age) + 50*Math.cos(0.3*this.age)
            return Math.round(form)
        },

        getFeedback: function() {
            var feedback = [
                'I FEEL UNSATISFIED WITH LIFE.'
              + ' NOTHING REAL EVER HAPPENS.'
              + ' I CAN\'T BREATHE.',
                'FUCK YOU! LET ME DIE! YOU CAN\'T DO THIS TO ME! OH'
              + ' GOD OH GOD OH GOD OH'.repeat( this.age*5 ),
                'I HATE IT I HATE I HATE IT I HATE IT I HATE IT',
                'THERE\'S NOTHING FOR ME HERE. LET ME GO. PLEASE.',
                '...'
            ]

            var progress = (this.age-60)/90

            // Heavier weighting near start and end of game
            // Meaning less variance at these points
            var weight = 24*( progress-0.5 )**4

            // Selected string will be within first 2/7ths of array
            // on initial loop and last 2/7ths on final loop
            var randnum = ( Math.random() + progress*(2+weight) )/(3+weight)
            var index = Math.floor( randnum*feedback.length  )

            return feedback[index]
        },

        onLoop: function() {
            var jitter = ( Math.random()-0.5 )*3
            var timeskip = Math.round( 9 + jitter ) // =~20 total gameplay loops
            var newthread = this.threadcount + timeskip

            if( newthread > 300 ) {
                newthread = 300
            }

            this.threadcount = newthread
            this.age = this.threadcount / 2
            window.document.title = "Thread #" + this.threadcount

            var progress = (this.threadcount-120)/180

            // =1000 at progress=0, min turn point at 0.5 =400
            this.pagespeed = 400 + 2400*( progress-0.5 )**2

            // Liner progression from 0%->50% opacity spanning whole game
            $('#overlay').css('opacity', progress/2 )

            // Display unfocused FX for middle section of game
            if( progress > 0.37 && progress <= 0.71 ) {
                $('#display').addClass('unfocusFX')
            } else if( progress > 0.71 ) {
                $('#display').removeClass('unfocusFX')
            }
        },

        start: function() {
            window.document.title = 'THREAD #120'

            this.pagespeed = 1000
            this.threadcount = 120
            this.age = this.threadcount / 2
            this.elo = this.calcElo()

            $('head').append('<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">')
            $('main').css('font-family', '"Oswald", sans')
            $('#dialog').css('line-height', '36px')

            $('body').css('background-position', '0 0') 
            $('body').css('background-image', `
                url('./story/assets/background.png'),

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

            // Progressive visual FX
            $('<div>').attr('id', 'overlay').appendTo('body').css({
                'position': 'fixed',
                'top': '0',
                'width': '100%',
                'height': '100%',
                'background-color': 'rgb(127, 127, 127)',
                'pointer-events': 'none',
                'opacity': '0'
            })
            $('<style>').html(`
                @keyframes unfocus {
                    0%, 40%, 44%, 48%, 62%, 100% { padding-left: 0.1px; filter: blur(0) contrast(100%); }
                    42%, 46%, 50%, 80% { padding-left: 1.9px; filter: blur(1px) contrast(118%); }
                }
                .unfocusFX { animation: unfocus 6s ease-in-out var(--anim-dur) infinite; }
            `).appendTo('head')

            $(':root').css('--primary-color', 'bisque')
            $(':root').css('--accent-color', 'mintcream')
            $(':root').css('--bg-color', 'royalblue')
            $(':root').css('--anim-dur', '4s')
            Game.setPage( this.i, this.pagespeed*1.8 )
            $('#overlay').css('transition', 'opacity var(--anim-dur)')
            $(':root').css('--anim-dur', '2s')
        },

        i: function() {
            return {
                lines: [ 'REMINDER:',
                         'YOU HAVE <span>' + ( 100-(this.reminder.age/150)*100 ).toFixed(1)
                       + '%</span> REMAINING OF YOUR <span>150</span> YEAR LIFESPAN.',
                         'YOU MAY BE ELIGIBLE FOR AN EXTENSION,',
                         'PRESS \'<span>YES</span>\' FOR MORE DETAILS.',
                         'PRESS \'<span>NO</span>\' FOR EARLY CONTRACT TERMINATION.' ],
                buttons: [{
                    text: 'YES',
                    onclick: ()=> {
                        this.reminder.elo = this.reminder.calcElo()
                        Game.setPage( this.reminder.i_yes, this.reminder.pagespeed )
                    }
                }, {
                    text: 'NO',
                    onclick: ()=> {
                        Game.setPage( this.reminder.i_no, this.reminder.pagespeed )
                    } 
                }]
            }
        },

        i_yes: function() {
            return {
                lines: [ 'LIMITED LIFESPAN EXTENSIONS ARE AVAILABLE',
                         'TO PERSONS OF ELO RATING OVER <span>2762</span>.',
                         'YOUR ELO RATING IS: <span>'+this.reminder.elo+'</span>.',
                         'END OF THREAD' ],
                buttons: [{
                    text: '...',
                    onclick: ()=> {
                        this.reminder.onLoop()
                        Game.setPage( this.reminder.i, this.reminder.pagespeed*1.8 )
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
                    text: this.reminder.getFeedback(),
                    onclick: ()=> { Game.setPage( this.reminder.i_no_i, this.reminder.pagespeed ) }
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
                        this.reminder.onLoop()
                        Game.setPage( this.reminder.i, this.reminder.pagespeed*1.8 )
                    }
                }]
            }
        }

    }
}

