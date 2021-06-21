inView.threshold(0.1)

anime({
    targets: '.cls-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1200,
    delay: function(el, i) { return i * 200 },
    direction: 'left',
})

anime({
    targets: '#title, #socials',
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: 600,
})

inView('#houston').once('enter', () => {
    anime({
        targets: '#houston',
        translateX: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: 200,
    })
})

inView('#bths-mao').once('enter', () => {
    anime({
        targets: '#bths-mao',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: 200,
    })
})

inView('#arctex').once('enter', () => {
    anime({
        targets: '#arctex',
        translateX: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: 200,
    })
})

inView('#experience').once('enter', () => {
    anime({
        targets: '.experience',
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
    })
})