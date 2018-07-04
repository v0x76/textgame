var Story = {
    waves: {
        flowcount: 0,

        first: {
            lines: [ 'Waxes the tide.' ],
            buttons: [{
                text: 'Set forth',
                onclick: ()=>{
                    if( Story.waves.flowcount != 5 ) {
                        Story.waves.flowcount += 1
                        Game.setPage( Story.waves.fetch, 1000 )
                    } else {
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
        first: {
            lines: ['Warmth builds.'],
            buttons: [{
                text: 'Let drops flow',
                onclick: ()=>{ Game.setPage( Story.clouds.fetch, 1000 ) }
            }]
        },

        fetch: {
            lines: ['Yield.', 'Drops the form.'],
            buttons: [{
                text: 'Let drops form',
                onclick: ()=>{ Game.setPage( Story.clouds.first, 1000 ) }
            }]
        }
    }
}

