var Story = {
    nothing: {
        start: function() {
            this.count = 1
            this.audio = new Audio("story/assets/nothing.mp3")
            this.audio.loop = true
            this.audio.play()

            window.document.title = 'nothing'
            Game.setPage( this.first, 1800 )
        },

        first: function() {
            return {
                lines: [ '.'.repeat( this.nothing.count ) ],
                buttons: [{
                    text: '.',
                    onclick: ()=> {
                        this.nothing.count++
                        Game.setPage( this.nothing.first, 1000 )
                    }
                }]
            }
        }
    }
}

