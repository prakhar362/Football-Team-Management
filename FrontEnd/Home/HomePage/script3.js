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
