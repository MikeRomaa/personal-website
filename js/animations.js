inView.threshold(0.1)

anime({
    targets: '#name-desktop .cls-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1200,
    delay: function(el, i) { return i * 200 },
    direction: 'left',
})

anime({
    targets: '#name-mobile .cls-1',
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

anime({
    targets: '#intro',
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 1000,
})

inView('#projects').once('enter', () => {
    anime({
        targets: '#projects',
        opacity: [0, 1],
        easing: 'easeOutSine',
        duration: 1000,
    })
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
        targets: '#experience',
        opacity: [0, 1],
        easing: 'easeOutSine',
        duration: 1000,
    })
})

inView('#experience-list').once('enter', () => {
    anime({
        targets: '.experience',
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
    })
})