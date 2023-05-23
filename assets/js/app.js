window.addEventListener('scroll', e =>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
// получение координат прокрутки колёсика
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
ScrollSmoother.create({
    wrapper:'.wrapper',
    content:'.container'
})
