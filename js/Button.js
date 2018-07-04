class Button {
    constructor(settings) {
        // settings = {
        //     id: string,
        //     text: string,
        //     onclick: function,
        //     disabled: bool
        // }

        this.handler = settings.click

        var el = $('<div>')
            .addClass('button')
            .text(settings.text)
            .click( function() {
                if( !$(this).hasClass('disabled') ) {
                    $('.button').addClass('disabled')
                    $(this).data('handler')( $(this) )
                }
            })
            .data('handler', settings.onclick)

        if(settings.id) {
            el.attr('id', settings.id)
        }

        return el
    }

    setDisabled(disabled) {
        if(disabled) {
            $(this).addClass('disabled')
        } else {
            $(this).removeClass('disabled')
        }
    }
}

