// Ensure that the TextPlugin is registered
gsap.registerPlugin(TextPlugin);

gsap.to("#scramble2", {
    duration: 2,
    text: "to Football Manager",
    ease: "none",
    scrambleText: {
        chars: "0123456789",
        revealDelay: 1,
        speed: 0.3
    },
    onUpdate: function () {
        document.querySelector("#scramble2").style.color = "cyan";
    }
});

gsap.to("#scramble", {
    duration: 2,
    text: "Welcome",
    ease: "none",
    scrambleText: {
        chars: "0123456789",
        revealDelay: 1,
        speed: 0.3
    },
    onUpdate: function () {
        document.querySelector("#scramble").style.color = "cyan";
    }
});

let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#part-5",
      start: "50% 50%",
      end: "150% 50%",
      pin: true,
      scrub: 9,
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
    x: "-30%", // Swipe left
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
    x: "-59%", // Swipe left
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
    x: "-88%", // Swipe left
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
    x: "-117%", // Swipe left
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
    x: "-146%", // Swipe left
  }, 'arrv')
  .to("#scroll-6", {
    bottom: "60vh",
  })
  .to("#scroll-6", {
    opacity: 0,
  });
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#input", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        stagger: 1,
        scrub: 5,
        scrollTrigger: {
            trigger: "#input",
            start: "top 80%", // Trigger when the top of #input is 80% from the top of the viewport
            end: "bottom 20%", // End when the bottom of #input is 20% from the top of the viewport
            toggleActions: "play none none none"
        }
    });
});

    gsap.from("#ourInfo", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: "#ourInfo",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });



    gsap.from(".SocialIcons i", {
        x: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.4,
        delay: 1,
        scrollTrigger: {
            trigger: ".SocialIcons",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });
