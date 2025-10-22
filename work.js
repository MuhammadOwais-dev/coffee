var tl = gsap.timeline();

tl.from("#coffee",{
    x:40,
    delay:1,
    duration:0.7,
    opacity:0,

})
tl.from(".con-6",{
    y:50,
    opacity:0,
    duration:0.7,
    // delay:1,
    stagger:1
})
tl.from(".con-7",{
    y:50,
    opacity:0,
    duration:0.7,
    // delay:1.7,
    stagger:1
})
tl.from(".con-8",{
    y:50,
    opacity:0,
    duration:0.7,
    // delay:2.2,
    stagger:1
})
tl.from(".con-9",{
    y:50,
    opacity:0,
    duration:0.7,
    // delay:2.9,
    stagger:1
})

tl.from("#img-1",{
    x:22,
    // delay:1,
    duration:0.8,
    opacity:0,
    rotate:365
})

gsap.from("#about-us",{
    y:40,
    duration:0.7,
    opacity:0,
    delay:1,
    stagger:1,
    scrollTrigger:{
        trigger:".con-12",
        scroller:"body",
    }
})
gsap.from(".p-1",{
    y:40,
    duration:0.7,
    opacity:0,
    delay:1.7,
    stagger:1,
      scrollTrigger:{
        trigger:".con-12",
        scroller:"body",
    }
})
gsap.from(".bibi-facebook",{
    x:-50,
    duration:0.7,
    delay:2.4,
    opacity:0,
      scrollTrigger:{
        trigger:".con-12",
        scroller:"body",
    }
})
gsap.from(".bibi-whatsapp",{
    y:60,
    delay:2.4,
    opacity:0,
    duration:0.7,
      scrollTrigger:{
        trigger:".con-12",
        scroller:"body",
    }
})
gsap.from(".bibi-instagram",{
    x:50,
    delay:2.4,
    opacity:0,
    duration:0.7,
      scrollTrigger:{
        trigger:".con-12",
        scroller:"body",
    }
})