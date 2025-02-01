function splitText () {
    let h1 = document.getElementById('h1')
let heading = document.getElementById('h1').textContent;
let splitted = heading.split('')
let clutter = '';
splitted.forEach((e)=>{
    clutter += `<span>${e}</span>`
    h1.innerHTML = clutter
})
}
function loaderAnimation(){
    let tl = gsap.timeline()
tl.to('#a1' ,{
    opacity : 1,
    duration : .1,
    delay: 2
})
tl.to('#a1' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a2' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a2' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a3' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a3' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a4' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a4' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a5' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a5' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a6' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a6' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a7' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a7' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a8' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a8' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a9' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a9' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a10' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a10' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.to('#a11' ,{
    opacity : 1,
    duration : .1,
    delay: .05
})
tl.to('#a11' ,{
    opacity : 0,
    duration : .1,
    delay: .2
})
tl.from('#logo',{
    y : 30,
    opacity : 0,
    duration : .2,
})
tl.to('#loader' ,{
    Transform : "translateY(-100%)",
    duration : .5,
    delay: 1
})
tl.to('#body' ,{
    height : '100%',
    duration : .4,
    stagger : .2,
})
tl.from('#h1 span' ,{
    y : 130,
    opacity : 0,
    duration : .4,
    stagger : .2,
})

};
function offcanvasNavbar(){
    let menu = document.getElementById('menu')
let close = document.getElementById('close')
let line = gsap.timeline()
line.to('#section',{
    right :0,
    duration : .5
})
line.from('#close',{
    opacity : 0,
    duration : .5,
    delay : .1
})
line.from('.list',{
    x : 150,
    opacity : 0,
    scale : .1,
    stagger : .2
})
line.pause()

menu.addEventListener('click',()=>{
    line.play()
})
close.addEventListener('click',()=>{
    line.reverse()
})
};
function videoAnimation(){
    gsap.to('#video',{
        scaleX : 3.4,
        scaleY : 3,
        y: 230,
        scrollTrigger : {
            trigger : '#video',
            scroller : 'body',
            start : 'top 90%',
            end : 'top 20%',
            scrub : true
        }
    })
}
function textAnimation(){
    gsap.from('.about-text',{
        opacity : 0,
        x : -330,
        scale : 0.4 ,
        scrollTrigger : {
            trigger : '.about-text',
            scroller : 'body',
            start : 'top 90%',
            end : 'top 70%',
            scrub : true
        }
    })
}
function textPageAnimation(){
    
gsap.from('#t div',{
    y : 160,
    opacity : 0,
    stagger : .2,
    scrollTrigger : {
        trigger : '#t div',
        scroller : 'body',
        start : 'top 90%',
        end : 'top 20%',
        scrub : true
    }
})
gsap.from('#t .absolute',{
    x : 160,
    opacity : 0,
    scrollTrigger : {
        trigger : '#t div',
        scroller : 'body',
        start : 'top 40%',
        end : 'top 25%',
        scrub : true
    }
})
}
function rotationAnimation(){
    let circleText = document.getElementById('rotate')
let rotateText = document.getElementById('rotate').textContent
let splt = rotateText.split('')
clutter = ''
splt.forEach((e,i)=>{
    clutter += `<span style="transform:rotate(${i * 8.3}deg)">${e}</span>`
    circleText.innerHTML = clutter
})
let spans = document.querySelectorAll('#rotate span')
for(i = 1 ; i < spans.length;i++){
    spans[i].style.transform="rotate('+i*90+'deg)"
}
gsap.to('#rotate',{
    rotate : 360,
    duration : 7,
    repeat : -1,
    ease : 'linear'
})

}
function arrowAnimation(){
    gsap.to('#arrow',{
        rotate : 180,
        scrollTrigger : {
            trigger : "#arrow",
            scroller : 'body',
            start : 'top 90%',
            end :'top 50%',
            scrub : true,
        }
    })
}
function cursorAnimation(){
    let card = document.getElementById('card')
let cursor = document.getElementById('cursor')
card.addEventListener('mouseenter',(e)=>{
    gsap.to(cursor,{
        opacity : 1,
    })
    console.log(e)
})
card.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        opacity : 1,
        x : `${e.x}`,
        y : `${e.y}`,
        ease : 'power1.out'
    })
    console.log(e)
})
card.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        opacity : 0,
    })
})
let card2 = document.getElementById('card2')
let cursor2 = document.getElementById('cursor2')
card2.addEventListener('mouseenter',(e)=>{
    gsap.to(cursor2,{
        opacity : 1,
    })
    console.log(e)
})
card2.addEventListener('mousemove',(e)=>{
    gsap.to(cursor2,{
        opacity : 1,
        x : e.x-760,
        y : e.y-100,
    })
    console.log(e)
})
card2.addEventListener('mouseleave',()=>{
    gsap.to(cursor2,{
        opacity : 0,
    })
})
let card3 = document.getElementById('card3')
let cursor3 = document.getElementById('cursor3')
card3.addEventListener('mouseenter',(e)=>{
    gsap.to(cursor3,{
        opacity : 1,
    })
    console.log(e)
})
card3.addEventListener('mousemove',(e)=>{
    gsap.to(cursor3,{
        opacity : 1,
        x : e.x-100,
        y : e.y-250,
    })
    console.log(e)
})
card3.addEventListener('mouseleave',()=>{
    gsap.to(cursor3,{
        opacity : 0,
    })
})
let card4 = document.getElementById('card4')
let cursor4 = document.getElementById('cursor4')
card4.addEventListener('mouseenter',(e)=>{
    gsap.to(cursor4,{
        opacity : 1,
    })
    console.log(e)
})
card4.addEventListener('mousemove',(e)=>{
    gsap.to(cursor4,{
        opacity : 1,
        x : e.x-700,
        y : e.y-150,
    })
    console.log(e)
})
card4.addEventListener('mouseleave',()=>{
    gsap.to(cursor4,{
        opacity : 0,
    })
})
}
function ExperiencesAnimation(){
    let h1 = document.getElementById('ex')
    gsap.to(h1,{
        x : -2400,
        scrollTrigger : {
            trigger : h1,
            scroller : 'body ',
            scrub : 2,
            start : 'top 0%',
            end : 'top -180%',
            pin : true
        }
    })
}
splitText();
loaderAnimation();
offcanvasNavbar();
videoAnimation();
textAnimation();
textPageAnimation();
rotationAnimation();
arrowAnimation();
cursorAnimation();
ExperiencesAnimation();