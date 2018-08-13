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
                    onclick: ()=> { Game.setPage( this.nothing.ii, 1000 ) }
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
                    onclick: ()=> {
                        Game.setPage( this.nothing.iii, 1000 )
                        $(':root').css('--primary-color', 'lightskyblue')
                        $(':root').css('--bg-color', 'aliceblue')
                    }
                }]
            }
        },

        ii_a: function() {
            return {
                lines: [ 'A waking function.', 'Internal.' ],
                buttons: [{
                    text: 'Get up',
                    onclick: ()=> {
                        Game.setPage( this.nothing.iii, 1000 )
                        $(':root').css('--primary-color', 'deepskyblue')
                        $(':root').css('--bg-color', 'aliceblue')
                    }
                }]
            }
        },

        iii: function() {
            return {
                lines: [ 'Work had called,', 'so he got himself ready', 'and left home.' ],
                buttons: [{
                    text: 'Leave',
                    onclick: ()=> { Game.setPage( this.nothing.iv, 1000 ) }
                }]
            }
        },

        iv: function() {
            return {
                lines: [ 'He was happy to find', 'it was snowing.' ],
                buttons: [{
                    text: 'Jog',
                    onclick: ()=> { Game.setPage( this.nothing.v, 1000 ) }
                }]
            }
        },

        v: function() {
            return {
                lines: [ 'Like always, he would jog to work.', 'Though he still felt drowsy', 'after sleeping so long.' ],
                buttons: [{
                    text: 'Scenic route',
                    onclick: ()=> { Game.setPage( this.nothing.v_a, 1000 ) }
                }, {
                    text: 'Fast route',
                    onclick: ()=> { Game.setPage( this.nothing.v_b, 1000 ) }
                }]
            }
        },

        v_a: function() {
            return {
                lines: [ 'So he decided to take the scenic route.' ],
                buttons: [{
                    text: 'Mindfulness',
                    onclick: ()=> { Game.setPage( this.nothing.v_a_i, 1000 ) }
                }]
            }
        },

        v_b: function() {
            return {
                lines: [ 'So he decided to get straight to work.' ],
                buttons: [{
                    text: 'Work',
                    onclick: ()=> { Game.setPage( this.nothing.v_b, 1000 ) }
                }]
            }
        },

        v_a_i: function() {
            return {
                lines: [ 'Taking in the scenery', 'was one of James\' greatest joys.' ],
                buttons: [{
                    text: 'Feel',
                    onclick: ()=> { Game.setPage( this.nothing.v_a_i, 1000 ) }
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

