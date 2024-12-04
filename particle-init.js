particlesJS('particles-js', {
    particles:{
        number:{
            value:50,
            density:{
                enable:true,
                value_area: 800,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape:{
            type:'cicrle',
        },
        opacity:{
            value:0.5,
        },
        size:{
            value:3,
        },
        line_linked:{
            enable:true,
            distance:150,
            color:'#ffffff',
            opacity:0.4,
        },
        move:{
            enable: true,
            speed:6,
        },
    },
    interactivity:{
        detect_on:'canvas',
        events:{
            onhover:{
                enable:true,
                mode:'repulse',
            },
            onclick:{
                enable:true,
                mode:'push',
            },
        },
    },
    retina_detect:true,
});