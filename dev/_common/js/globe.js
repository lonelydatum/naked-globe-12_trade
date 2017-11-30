
const banner = document.querySelector("#banner")
const size = {w:banner.offsetWidth, h:banner.offsetHeight}
TweenLite.defaultEase = Power2.easeInOut
function start(products, time=.6, desktop_static=false){
    const startTime = new Date()
    var tl = new TimelineMax({onComplete:()=>{
        const end = new Date()
        console.log(end-startTime);
        
    }})
    tl.timeScale(1.3)
    
    
    tl.add('f1')
    tl.set('.frame1', {opacity:1})
    tl.from(['.t1.a', '.t1.b'], .3, {opacity:0})
    tl.from(['.t1.c', '.t1.d'], .3, {opacity:0}, '+=1')
    tl.to('.frame1', .3, {opacity:0}, '+=2')
    
    tl.add('f2')
    tl.set('.frame2', {opacity:1})
    tl.from('.t2', .3, {opacity:0}, '+=.2')
    tl.to('.frame2', .3, {opacity:0}, '+=2')

    const medium = .3
    tl.add('f3')
    tl.set('.frame3', {opacity:1})

    // items(tl, products)
    
    const inner = {
        props: {opacity:0, x:-300, ease:Power1.easeOut},
        time: .5
    }

    const outter = {
        props: {opacity:0, x:300, ease:Power1.easeOut},
        time: .5
    }
    tl.from('#desktop', inner.time, {...inner.props})
    if(desktop_static){
        tl.to('#desktop .holder', 1.5, {y:"+=0"})
    }else{
        tl.to('#desktop .holder', 1.5, {y:-126})
    }
    
    
    tl.add('3a', "+=1")
    tl.to('#desktop', outter.time, {...outter.props}, '3a')
    tl.from('#phone', inner.time, {...inner.props}, '3a')
    tl.to('#phone .holder', 2, {y:-288})

    tl.add('3b', "+=1")
    tl.to('#phone', outter.time, {...outter.props}, '3b')
    tl.from('#tablet', inner.time, {...inner.props}, '3b')
    tl.to('#tablet .holder', 2, {y:-139})
    tl.to('#tablet', outter.time, {...outter.props}, '+=1')
    tl.from('#news', inner.time, {opacity:0})
    tl.to('#news', 2.5, {y:12})
    tl.to('#news', inner.time, {opacity:0}, '+=.5')
    

    tl.add('f4')
    tl.set('.frame4', {opacity:1})
    tl.from('.frame4 .t4.a', .3, {opacity:0})
    tl.from(['.frame4 .t4.b', '.dot1'], .5, {opacity:0}, '+=.1')
    tl.from(['.frame4 .t4.c', '.dot2'], .5, {opacity:0}, '+=.1')
    tl.to('.frame4', .3, {opacity:0}, '+=3.5')
    
    tl.add('f5')
    tl.set('.frame5', {opacity:1})
    tl.from('#triangles', .4, {y:size.h})

    
    tl.add('products')
    tl.from('.frame5 .desktop', time, {y:size.h, ease:Power1.easeOut}, 'products')
    tl.from('.frame5 .phone', time, {y:size.h, ease:Power2.easeOut}, 'products')
    tl.from('.frame5 .tablet', time, {y:size.h, ease:Power3.easeOut}, 'products')
    tl.from('.frame5 .news', time, {y:size.h, ease:Power2.easeOut}, 'products')

    tl.add('branding')
    tl.from('.branding', .4, {opacity:0, y:'+=20', ease:Power2.easeOut}, '+=.35')
    
    
    // tl.gotoAndPlay('f3')
    
}

function items(tl, list){
    for(let str in list){
        const item = list[str]
        const name = `.frame3 .${str}`
        tl.from(name, .2, {opacity:0})    
        tl.to(name, 3, {y:item, ease:Sine.easeInOut})    
        tl.to(name, .2, {opacity:0})    
    }
}





export default start


