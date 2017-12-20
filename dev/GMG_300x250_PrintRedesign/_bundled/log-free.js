(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsGlobe = require('../../_common/js/globe');

var _commonJsGlobe2 = _interopRequireDefault(_commonJsGlobe);

var data = {
    desktop: 181,
    phone: -360,
    tablet: 162,
    news: -278
};

(0, _commonJsGlobe2['default'])(data, .5);

},{"../../_common/js/globe":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var banner = document.querySelector("#banner");
var size = { w: banner.offsetWidth, h: banner.offsetHeight };
TweenLite.defaultEase = Power2.easeInOut;
function start(products) {
    var time = arguments.length <= 1 || arguments[1] === undefined ? .6 : arguments[1];

    var startTime = new Date();
    var tl = new TimelineMax({ onComplete: function onComplete() {
            var end = new Date();
            void 0;
        } });
    tl.timeScale(1.3);

    tl.add('f1');
    tl.set('.frame1', { opacity: 1 });
    tl.from(['.t1.a', '.t1.b'], .3, { opacity: 0 });
    tl.from(['.t1.c', '.t1.d'], .3, { opacity: 0 }, '+=1');
    tl.to('.frame1', .3, { opacity: 0 }, '+=2');

    tl.add('f2');
    tl.set('.frame2', { opacity: 1 });
    tl.from('.t2', .3, { opacity: 0 }, '+=.2');
    tl.to('.frame2', .3, { opacity: 0 }, '+=2');

    var medium = .3;
    tl.add('f3');
    tl.set('.frame3', { opacity: 1 });

    items(tl, products);

    tl.add('f4');
    tl.set('.frame4', { opacity: 1 });
    tl.from('.frame4 .t4.a', .3, { opacity: 0 });
    tl.from(['.frame4 .t4.b', '.dot1'], .5, { opacity: 0 }, '+=.1');
    tl.from(['.frame4 .t4.c', '.dot2'], .5, { opacity: 0 }, '+=.1');
    tl.to('.frame4', .3, { opacity: 0 }, '+=3.5');

    tl.add('f5');
    tl.set('.frame5', { opacity: 1 });
    tl.from('#triangles', .4, { y: size.h });

    tl.add('products');
    tl.from('.frame5 .desktop', time, { y: size.h, ease: Power1.easeOut }, 'products');
    tl.from('.frame5 .phone', time, { y: size.h, ease: Power2.easeOut }, 'products');
    tl.from('.frame5 .tablet', time, { y: size.h, ease: Power3.easeOut }, 'products');
    tl.from('.frame5 .news', time, { y: size.h, ease: Power2.easeOut }, 'products');

    tl.add('branding');
    tl.from('.branding', .4, { opacity: 0, y: '+=20', ease: Power2.easeOut }, '+=.35');

    // tl.gotoAndPlay('f3')
}

function items(tl, list) {
    for (var str in list) {
        var item = list[str];
        var _name = '.frame3 .' + str;
        tl.from(_name, .2, { opacity: 0 });
        tl.to(_name, 3, { y: item, ease: Sine.easeInOut });
        tl.to(_name, .2, { opacity: 0 });
    }
}

exports['default'] = start;
module.exports = exports['default'];

},{}]},{},[1])


//# sourceMappingURL=main.js.map
