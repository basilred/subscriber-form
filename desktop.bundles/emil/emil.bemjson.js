({
    block: 'page',
    title: 'emil',
    head: [
        { elem: 'css', url: '_emil.css' }
    ],
    scripts: [{ elem: 'js', url: '_emil.js' }],
    content: [
       {
           block : 'subscriber',
           content : [
              {
                block : 'subscription',
                content: [
                    { tag : 'h3', content : 'Subscribe to our newsletter.' },
                    { tag : 'hr' },
                    { tag : 'p', content : 'Subscribe to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!' }
                ]
              },
              {
                block : 'email',
                content : [
                    {
                        block : 'address',
                        mix : { block : 'email', elem : 'address' },
                        content : [
                            {
                                block : 'input',
                                mods : { theme : 'default' },
                                placeholder : 'enter your email address'
                            },
                            {
                                block : 'button',
                                text : 'subscribe'
                            }
                        ]
                    },
                    {
                        block: 'success',
                        content : [
                            {
                                elem : 'sign',
                                tag : 'span'
                            },
                            {
                                elem : 'typemessage',
                                tag : 'span'
                            }
                        ]
                    }
                ]
              }
           ]
       }
    ]
})
