(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PubSub = require('pubsub');

var Frame = (function () {
	function Frame(frameID) {
		_classCallCheck(this, Frame);

		this.tl = new TimelineLite();
		if (frameID) {
			this.frame = document.querySelector(frameID);
		}

		this.banner = document.getElementById("banner");
		this.pubsub = new PubSub();
		this.setDOM();
	}

	_createClass(Frame, [{
		key: "setDOM",
		value: function setDOM() {
			// usually overridden
		}
	}, {
		key: "fade",
		value: function fade() {
			var value = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

			return { opacity: value, ease: Sine.easeIn };
		}
	}, {
		key: "play",
		value: function play() {
			this.tl.vars.onComplete = this.frameDone.bind(this);
			if (this.frame) {
				TweenLite.set(this.frame, { opacity: 1 });
			}
		}
	}, {
		key: "tweenProps",
		value: function tweenProps(element, name, time, props) {
			element.tween = {};
			element.tween[name] = { time: time, props: props };
		}

		// call when the frame is done.
		// if there is a nextFrame it will automatically play
		// the this.nextFrame is passed in from the constructor
	}, {
		key: "frameDone",
		value: function frameDone() {
			this.pubsub.publish(this);
		}
	}, {
		key: "width",
		get: function get() {
			return banner.offsetWidth;
		}
	}, {
		key: "height",
		get: function get() {
			return banner.offsetHeight;
		}
	}]);

	return Frame;
})();

module.exports = Frame;

},{"pubsub":6}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FrameTrain = (function () {
	function FrameTrain(frameList) {
		_classCallCheck(this, FrameTrain);

		this.frameIndex = 0;
		this.list = frameList;

		var results = document.querySelectorAll(".frame img.trace");
		for (var i = 0; i < results.length; i++) {
			var item = results[i];
			var _parent = item.parentNode;
			_parent.style.opacity = 1;
		}
	}

	_createClass(FrameTrain, [{
		key: "playNext",
		value: function playNext() {
			var frame = this.list[this.frameIndex];
			frame.pubsub.subscribe(this.frameDone.bind(this));
			this.playFrame(frame);
		}
	}, {
		key: "frameDone",
		value: function frameDone(_frame_) {
			this.frameIndex++;

			var nextFrame = this.list[this.frameIndex];
			if (nextFrame) {
				this.playNext();
			}
		}
	}, {
		key: "playFrame",
		value: function playFrame(frame) {
			frame.play();
		}
	}, {
		key: "allABoard",
		value: function allABoard() {
			this.playNext();
		}
	}]);

	return FrameTrain;
})();

module.exports = FrameTrain;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrameBasic = require('../../_common/_js/FrameBasic.js');

var Frame = (function (_FrameBasic) {
	_inherits(Frame, _FrameBasic);

	function Frame() {
		_classCallCheck(this, Frame);

		_get(Object.getPrototypeOf(Frame.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Frame, [{
		key: 'setDOM',
		value: function setDOM() {
			this.t1 = document.querySelector('.frame1 .t1');
			this.t2 = document.querySelector('.frame1 .t2');
			this.phone = document.querySelector('.frame1 .phone.black');
			this.frame = document.querySelector('.frame1');
		}
	}, {
		key: 'play',
		value: function play() {

			_get(Object.getPrototypeOf(Frame.prototype), 'play', this).call(this);

			this.tl.add('in');
			this.tl.from(this.t1, .5, { x: -this.width }, 'in');
			this.tl.from(this.t2, .5, { x: this.width }, 'in');
			this.tl.from(this.phone, .5, { y: this.height });

			// //frame1 fades away after 2 seconds to read
			this.tl.to(this.frame, .3, { opacity: 0 }, "+=2");
		}
	}]);

	return Frame;
})(FrameBasic);

module.exports = Frame;

},{"../../_common/_js/FrameBasic.js":1}],4:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrameBasic = require('../../_common/_js/FrameBasic.js');

var Frame = (function (_FrameBasic) {
	_inherits(Frame, _FrameBasic);

	function Frame() {
		_classCallCheck(this, Frame);

		_get(Object.getPrototypeOf(Frame.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Frame, [{
		key: 'setDOM',
		value: function setDOM() {
			this.t1 = document.querySelector('.frame2 .t1');
			this.t2 = document.querySelector('.frame2 .t2');
			this.phone = document.querySelector('.frame2 .phone.white');
			this.frame = document.querySelector('.frame2');
		}
	}, {
		key: 'play',
		value: function play() {

			_get(Object.getPrototypeOf(Frame.prototype), 'play', this).call(this);

			// t1 and t2 comes in at the same time
			this.tl.add('in');
			this.tl.from(this.t1, .5, { x: -this.width }, 'in');
			this.tl.from(this.t2, .5, { x: this.width }, 'in');

			// phone comes in right after 'in' is done
			this.tl.from(this.phone, .5, { y: this.height });
		}
	}]);

	return Frame;
})(FrameBasic);

module.exports = Frame;

},{"../../_common/_js/FrameBasic.js":1}],5:[function(require,module,exports){
'use strict';

var FrameTrain = require('../../_common/_js/FrameTrain.js');
var Frame1 = require('./Frame1.js');
var Frame2 = require('./Frame2.js');

var _frame1 = new Frame1('.frame1');
var _frame2 = new Frame2('.frame2');

// _frame2.play();

var frameTrain = new FrameTrain([_frame1, _frame2]);
frameTrain.allABoard();

module.exports = {};

},{"../../_common/_js/FrameTrain.js":2,"./Frame1.js":3,"./Frame2.js":4}],6:[function(require,module,exports){
module.exports = pubsub;

function pubsub (mix) {
  var subscribers;
  var subscribersForOnce;

  mix || (mix = function (fn) {
    if (fn) mix.subscribe(fn);
  });

  mix.subscribe = function (fn) {
    if (!subscribers) return subscribers = fn;
    if (typeof subscribers == 'function') subscribers = [subscribers];
    subscribers.push(fn);
  };

  mix.subscribe.once = function (fn) {
    if (!subscribersForOnce) return subscribersForOnce = fn;
    if (typeof subscribersForOnce == 'function') subscribersForOnce = [subscribersForOnce];
    subscribersForOnce.push(fn);
  };

  mix.unsubscribe = function (fn) {
    if (!subscribers) return;

    if (typeof subscribers == 'function') {
      if (subscribers != fn) return;
      subscribers = undefined;
      return;
    }

    var i = subscribers.length;

    while (i--) {
      if (subscribers[i] && subscribers[i] == fn){
        subscribers[i] = undefined;
        return;
      }
    }
  };

  mix.unsubscribe.once = function (fn) {
    if (!subscribersForOnce) return;

    if (typeof subscribersForOnce == 'function') {
      if (subscribersForOnce != fn) return;
      subscribersForOnce = undefined;
      return;
    }

    var i = subscribersForOnce.length;

    while (i--) {
      if (subscribersForOnce[i] && subscribersForOnce[i] == fn){
        subscribersForOnce[i] = undefined;
        return;
      }
    }
  };

  mix.publish = function () {
    var params = arguments;
    var i, len;

    if (subscribers && typeof subscribers != 'function' && subscribers.length) {
      i = -1;
      len = subscribers.length;

      while (++i < len) {
        if (!subscribers[i] || typeof subscribers[i] != 'function') continue;

        try {
          subscribers[i].apply(undefined, params);
        } catch(err) {
          setTimeout(function () { throw err; }, 0);
        }
      };
    } else if (typeof subscribers == 'function') {
      try {
        subscribers.apply(undefined, params);
      } catch(err) {
        setTimeout(function () { throw err; }, 0);
      }
    }

    if (subscribersForOnce && typeof subscribersForOnce != 'function' && subscribersForOnce.length) {
      i = -1;
      len = subscribersForOnce.length;

      while (++i < len) {
        if (!subscribersForOnce[i] || typeof subscribersForOnce[i] != 'function') continue;

        try {
          subscribersForOnce[i].apply(undefined, params);
        } catch(err) {
          setTimeout(function () { throw err; }, 0);
        }
      };

      subscribersForOnce = undefined;
    } else if (typeof subscribersForOnce == 'function') {
      try {
        subscribersForOnce.apply(undefined, params);
      } catch(err) {
        setTimeout(function () { throw err; }, 0);
      }
      subscribersForOnce = undefined;
    }
  };

  return mix;
}

},{}]},{},[5])


//# sourceMappingURL=main.js.map
