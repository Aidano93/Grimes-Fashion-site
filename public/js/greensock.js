
gsap.fromTo(".logo", 2.3, {autoAlpha: 0}, {autoAlpha: 1, immediateRender:false})
gsap.from(".logo", {duration: 2, scale: 0.3, ease: "bounce"});

gsap.fromTo(".logotext", 2.3, {autoAlpha: 0}, {autoAlpha: 1, immediateRender:false})
gsap.from(".logotext", {duration: 2, scale: 0.3, opacity: 100, delay: .2, ease: "bounce"});

gsap.fromTo(".tagline", 1, {autoAlpha: 0,}, {autoAlpha: 1, immediateRender:false})
gsap.from(".tagline", {duration: 2, x: 300, delay: 1, ease: "bounce"});

