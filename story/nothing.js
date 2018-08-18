var Story = {
    nothing: {
        start: function() {
            //this.audio = new Audio("story/assets/nothing.mp3")
            //this.audio.loop = true
            //this.audio.play()

            window.document.title = 'nothing'

            $('body').css('background-position', '0 0') 
            $('body').css('background-image', `
                url("./story/assets/background.png"),

                radial-gradient(circle at 50% 0,
                    rgba(255,248,97,.16),
                    rgba(255,248,97,0) 79%),

                radial-gradient(circle at 9% 81%,
                    rgba(119,214,255,.16),
                    rgba(119,214,255,0) 79%),

                radial-gradient(circle at 100% 70%,
                    rgba(204,83,103,.16),
                    rgba(204,83,103,0) 79%)
            `)

            $(':root').css('--primary-color', 'peachpuff')
            $(':root').css('--bg-color', 'midnightblue')
            $(':root').css('--anim-dur', '4s')
            Game.setPage( this.i, 1800 )
            $(':root').css('--anim-dur', '2s')
        },

        i: function() {
            return {
                lines: [ '...' ],
                buttons: [{
                    text: 'Start',
                    onclick: ()=> { Game.setPage( this.nothing.epigraph, 1000 ) }
                }]
            }
        },

        epigraph: function() {
            return {
                lines: [ 'Unbeaten by the rain',
                         'Unbeaten by the wind',
                         'Nor the snow, nor summer heat.' ],
                buttons: [{
                    text: 'Become',
                    onclick: ()=> {
                        Game.setPage( this.nothing.prologue, 1800 )
                        $(':root').css('--primary-color', 'bisque')
                        $(':root').css('--bg-color', 'royalblue')
                    }
                }]
            }
        },

        prologue: function() {
            return {
                lines: [ 'In the city centre, sitting at the side',
                         'of a small water fountain surrounded by oak trees,',
                         'I sipped my coffee.' ],
                buttons: [{
                    text: 'Collect',
                    onclick: ()=> { Game.setPage( this.nothing.prologue_ii, 1000 ) }
                }]
            }
        },

        prologue_ii: function() {
            return {
                lines: [ 'After taking a few moments',
                         'to collect my thoughts,',
                         'I reread the report.' ],
                buttons: [{
                    text: 'Read',
                    onclick: ()=> {
                        Game.setPage( this.nothing.ii, 1000 )
                        $(':root').css('--primary-color', 'peachpuff')
                        $(':root').css('--bg-color', 'midnightblue')
                    }
                }]
            }
        },

        ii: function() {
            return {
                lines: [ 'Last week,', 'James woke up.' ],
                buttons: [{
                    text: 'Introspect',
                    onclick: ()=> { Game.setPage( this.nothing.ii_a, 1000 ) }
                }, {
                    text: 'Get up',
                    onclick: ()=> { Game.setPage( this.nothing.iii, 1000 ) }
                }]
            }
        },

        ii_a: function() {
            return {
                lines: [ 'A waking function.', 'Internal.' ],
                buttons: [{
                    text: 'Get up',
                    onclick: ()=> { Game.setPage( this.nothing.iii, 1000 ) }
                }]
            }
        },

        iii: function() {
            return {
                lines: [ 'Work had called,', 'so he got himself ready', 'and left home.' ],
                buttons: [{
                    text: 'Leave',
                    onclick: ()=> { Game.setPage( this.nothing.iv, 1000 )
                        $(':root').css('--primary-color', 'deepskyblue')
                        $(':root').css('--bg-color', 'aliceblue')
                        $('body').css('background-image', `
                            radial-gradient(circle at 50% 0,
                                rgba(255,248,97,.16),
                                rgba(255,248,97,0) 79%),

                            radial-gradient(circle at 9% 81%,
                                rgba(119,214,255,.16),
                                rgba(119,214,255,0) 79%),

                            radial-gradient(circle at 100% 70%,
                                rgba(204,83,103,.16),
                                rgba(204,83,103,0) 79%)
                        `)
                    }
                }]
            }
        },

        iv: function() {
            return {
                lines: [ 'He was happy to find', 'it was snowing.',
                         'A sense of calm took him', 'as he started to jog.' ],
                buttons: [{
                    text: 'Jog',
                    onclick: ()=> { Game.setPage( this.nothing.v, 1000 ) }
                }]
            }
        },

        v: function() {
            return {
                lines: [ 'He always travelled to work this way.',
                         'It was efficient for sure', '—James didn\'t tire so easily—',
                         'but perhaps he enjoyed the act itself.' ],
                buttons: [{
                    text: 'To jog',
                    onclick: ()=> { Game.setPage( this.nothing.vi, 1000 ) }
                }]
            }
        },

        vi: function() {
            return {
                lines: [ 'The constant process', 'of placing one leg in front of the other,',
                         'tasting the cold air as it breezes by.' ],
                buttons: [{
                    text: 'Continue',
                    onclick: ()=> { Game.setPage( this.nothing.vii, 1000 ) }
                }]
            }
        },

        vii: function() {
            return {
                lines: [ 'Though he still felt drowsy', 'after sleeping so long.' ],
                buttons: [{
                    text: 'Scenic route',
                    onclick: ()=> { Game.setPage( this.nothing.vii_a, 1000 ) }
                }, {
                    text: 'Fast route',
                    onclick: ()=> { Game.setPage( this.nothing.vii_b, 1000 ) }
                }]
            }
        },

        vii_a: function() {
            return {
                lines: [ 'So he decided to take the scenic route.' ],
                buttons: [{
                    text: 'Mindful',
                    onclick: ()=> { Game.setPage( this.nothing.vii_a_i, 1000 ) }
                }]
            }
        },

        vii_b: function() {
            return {
                lines: [ 'So he decided to get straight to work.' ],
                buttons: [{
                    text: 'Work',
                    onclick: ()=> { Game.setPage( this.nothing.vii_b, 1000 ) }
                }]
            }
        },

        vii_a_i: function() {
            return {
                lines: [ 'Taking in the scenery', 'was one of James\' greatest joys.' ],
                buttons: [{
                    text: 'Feel',
                    onclick: ()=> { Game.setPage( this.nothing.vii_a_i, 1000 ) }
                }]
            }
        }

    }
}

/*
        ex: function() {
            return {
                lines: [ '' ],
                buttons: [{
                    text: '',
                    onclick: ()=> { Game.setPage( this.nothing., 1000 ) }
                }]
            }
        }
*/

