var Story = {
    waves: {
        first: {
            lines: [ 'Waxes the tide.' ],

            buttons: [{
                text: 'Leave forth',
                onclick: ()=>{ Game.setPage( Story.waves.fetch, 1000 ) }
            }]
        },

        fetch: {
            lines: [ 'Yield.', 'Wanes the tide.' ],
            buttons: [{
                text: 'Return',
                onclick: ()=>{ Game.setPage( Story.waves.first, 1000 ) }
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
            lines: ['Yield.', 'Drops the form'],
            buttons: [{
                text: 'Let drops form',
                onclick: ()=>{ Game.setPage( Story.clouds.first, 1000 ) }
            }]
        }
    }
}

