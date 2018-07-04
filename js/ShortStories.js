var Story = {
    waves: {
        start: function() {
            this.flowcount = 0
            this.audio = new Audio("assets/waves.mp3")
            this.audio.loop = true
            this.audio.play()
            this.audio.volume = 0
            $(this.audio).animate({volume: 0.2}, 1800)

            Game.setPage( Story.waves.first, 1800 )
        },

        first: {
            lines: [ 'Waxes the tide.' ],
            buttons: [{
                text: 'Set forth',
                onclick: ()=>{
                    if( Story.waves.flowcount != 5 ) {
                        if( Story.waves.flowcount == 0 ) {
                            Story.waves.audio.play()
                        }

                        Story.waves.flowcount += 1
                        Game.setPage( Story.waves.fetch, 1000 )
                    } else {
                        $(Story.waves.audio).animate({volume: 0}, 1000)
                        Story.waves.audio.loop = false

                        Game.setPage( Story.waves.nought, 1000 )
                    }
                }
            }]
        },

        fetch: {
            lines: [ 'Yield.', 'Wanes the tide.' ],
            buttons: [{
                text: 'Return',
                onclick: ()=>{
                    Game.setPage( Story.waves.first, 1000 )
                }
            }]
        },

        nought: {
            lines: [ 'Yield.', '...', 'Wanes to nought.' ],
            buttons: [{
                text: 'Return',
                onclick: ()=>{
                    Story.waves.audio.loop = true
                    Story.waves.audio.play()
                    $(Story.waves.audio).animate({volume: 0.2}, 2000)

                    Game.setPage( Story.waves.insist, 2000 )
                }
            }, {
                text: 'Give',
                onclick: ()=>{
                    Game.setPage( Story.waves.give, 2000 )
                }
            }]
        },

        give: {
            lines: [ 'Waxes silence' ],
            buttons: [{
                text: 'Set forth',
                onclick: ()=>{
                    Game.setPage( Story.waves.regret, 2000 )
                }
            }]
        },

        regret: {
            lines: [ 'Wanes silence.' ],
            buttons: [{
                text: 'Return',
                onclick: ()=>{
                    Game.setPage( Story.waves.give, 2000 )
                }
            }]
        },

        insist: {
            lines: [ 'Yield.', '...', 'Leisurely waxes the tide.' ],
            buttons: [{
                text: 'Set forth',
                onclick: ()=>{
                    Game.setPage( Story.waves.first, 1000 )
                }
            }]
        }
        
    },

    clouds: {
            
        start: function() {
            Game.setPage( Story.clouds.first, 1800 )
        },

        first: {
            lines: ['Warmth builds.'],
            buttons: [{
                text: 'Drops flow',
                onclick: ()=>{ Game.setPage( Story.clouds.fetch, 1000 ) }
            }]
        },

        fetch: {
            lines: ['Yield.', 'Drops the form.'],
            buttons: [{
                text: 'Drops form',
                onclick: ()=>{ Game.setPage( Story.clouds.first, 1000 ) }
            }]
        }
    }
}

