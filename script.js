let tl = gsap.timeline();

tl.from(".section",{
    stagger: .3,
    width: 0,
    duration: 2,
    opacity: 0,
    ease: "Expo.easeInOut"
}).from("nav a",{
    stagger: .1,
    x: 30,
    duration: 1.5,
    opacity: 0,
    ease: "Expo.easeInOut"
}, "-=1").from("#bigcircle",{
    rotate: '90deg',
    duration: 2,
    opacity: 0,
    ease: "Expo.easeInOut"
}, "-=2").from("#vmcircle",{
    rotate: '90deg',
    duration: 2,
    ease: "Expo.easeInOut"
}, "-=1.5").from("#vmcircle i",{
    duration: 1,
    opacity: 0,
    scale:.6,
    ease: "Expo.easeInOut"
}, "-=.5").from("#bigcircle img",{
    duration: 1.5,
    y:800,
    ease: "Expo.easeInOut"
}, "-=1").from(".rtem",{
    stagger: .2,
    y: 60,
    duration: 3,
    opacity: 0,
    ease: "Expo.easeInOut"
}, '-=3')