
gsap.fromTo(".logo", 2.3, {autoAlpha: 0}, {autoAlpha: 1, immediateRender:false})
gsap.from(".logo", {duration: 2, scale: 0.3, ease: "bounce"});

gsap.fromTo(".logotext", 2.3, {autoAlpha: 0}, {autoAlpha: 1, immediateRender:false})
gsap.from(".logotext", {duration: 2, scale: 0.3, opacity: 100, delay: .2, ease: "bounce"});


// const $el = document.querySelector('.fade-in');
// const duration = 2;
// const from = { opacity: 0, ease: Linear.ease };
// const to = { opacity: 1 };

// function fadeIn() {
//    TweenLite.fromTo($el, duration, from, to);
// }
