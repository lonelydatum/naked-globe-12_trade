(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var banner = document.querySelector("#banner");
var size = { w: banner.offsetWidth, h: banner.offsetHeight };
TweenLite.defaultEase = Power2.easeInOut;
function start() {
    var tl = new TimelineMax();
    tl.add('f1');
    tl.set('.frame1', { opacity: 1 });
    tl.from(['.t1.a', '.t1.b'], .3, { opacity: 0 });
    tl.from(['.t1.c', '.t1.d'], .3, { opacity: 0 }, '+=1');
    tl.to('.frame1', .3, { opacity: 0 }, '+=2');

    tl.add('f2');
    tl.set('.frame2', { opacity: 1 });
    tl.from('.t2', .3, { opacity: 0 }, '+=.2');
    tl.to('.frame2', .3, { opacity: 0 }, '+=2');

    var medium = .5;
    tl.add('f3');
    tl.set('.frame3', { opacity: 1 });
    tl.from('.frame3 .desktop', .3, { opacity: 0 });
    tl.to('.frame3 .desktop', .3, { opacity: 0 }, '+=' + medium);
    tl.from('.frame3 .phone', .3, { opacity: 0 });
    tl.to('.frame3 .phone', .3, { opacity: 0 }, '+=' + medium);
    tl.from('.frame3 .tablet', .3, { opacity: 0 });
    tl.to('.frame3 .tablet', .3, { opacity: 0 }, '+=' + medium);
    tl.from('.frame3 .news', .3, { opacity: 0 });
    tl.to('.frame3 .news', .3, { opacity: 0 }, '+=' + medium);

    tl.add('f4');
    tl.set('.frame4', { opacity: 1 });
    tl.from('.frame4 .t4.a', .3, { opacity: 0 });
    tl.from(['.frame4 .t4.b', '.dot1'], .3, { opacity: 0 }, '+=2');
    tl.from(['.frame4 .t4.c', '.dot2'], .3, { opacity: 0 }, '+=2');
    tl.to('.frame4', .3, { opacity: 0 }, '+=2');

    tl.add('f5');
    tl.set('.frame5', { opacity: 1 });
    tl.from('#triangles', .4, { y: size.h });
    tl.add('products');
    tl.from('.frame5 .desktop', .4, { y: size.h, ease: Power1.easeOut }, 'products');
    tl.from('.frame5 .phone', .4, { y: size.h, ease: Power2.easeOut }, 'products');
    tl.from('.frame5 .tablet', .4, { y: size.h, ease: Power3.easeOut }, 'products');
    tl.from('.frame5 .news', .4, { y: size.h, ease: Power2.easeOut }, 'products');

    tl.add('branding');
    tl.from('.branding', .4, { opacity: 0, y: '+=20', ease: Power2.easeOut }, '+=.3');

    // tl.gotoAndPlay('f4')
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
