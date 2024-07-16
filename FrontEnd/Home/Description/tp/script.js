
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#part-5",
    start: "50% 50%",
    end: "150% 50%",
    pin: true,
    scrub: 2,
  },
});

tl2.to("#scroll-1", {
  bottom: "60vh",
})
.to("#scroll-1", {
  opacity: 0,
})
.to("#scroll-2", {
  opacity: 1,
}, 'arrf')
.to(".phone-img", {
  x: "-30%",
}, 'arrf')
.to("#scroll-2", {
  bottom: "60vh",
})
.to("#scroll-2", {
  opacity: 0,
})
.to("#scroll-3", {
  opacity: 1,
}, 'arrs')
.to(".phone-img", {
  x: "-59%",
}, 'arrs')
.to("#scroll-3", {
  bottom: "60vh",
})
.to("#scroll-3", {
  opacity: 0,
})
.to("#scroll-4", {
  opacity: 1,
}, 'arrt')
.to(".phone-img", {
  x: "-88%",
}, 'arrt')
.to("#scroll-4", {
  bottom: "60vh",
})
.to("#scroll-4", {
  opacity: 0,
})
.to("#scroll-5", {
  opacity: 1,
}, 'arru')
.to(".phone-img", {
  x: "-117%",
}, 'arru')
.to("#scroll-5", {
  bottom: "60vh",
})
.to("#scroll-5", {
  opacity: 0,
})
.to("#scroll-6", {
  opacity: 1,
}, 'arrv')
.to(".phone-img", {
  x: "-146%",
}, 'arrv')
.to("#scroll-6", {
  bottom: "60vh",
})
.to("#scroll-6", {
  opacity: 0,
});
