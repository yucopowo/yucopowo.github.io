/* esm.sh - esbuild bundle(@ant-design/react-slick@0.29.2) es2022 development */
// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/slider.js
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/inner-slider.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/initial-state.js
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var initial_state_default = initialState;

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/inner-slider.js
import debounce from '/cdn/v99/lodash@4.17.21/es2022/debounce.development.js';
import classnames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = function safePreventDefault2(event) {
  var passiveEvents = ['onTouchStart', 'onTouchMove', 'onWheel'];
  if (!passiveEvents.includes(event._reactName)) {
    event.preventDefault();
  }
};
var getOnDemandLazySlides = function getOnDemandLazySlides2(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }
  return onDemandSlides;
};
var lazyStartIndex = function lazyStartIndex2(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = function lazyEndIndex2(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = function lazySlidesOnLeft2(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = function lazySlidesOnRight2(spec) {
  return spec.centerMode
    ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0)
    : spec.slidesToShow;
};
var getWidth = function getWidth2(elem) {
  return (elem && elem.offsetWidth) || 0;
};
var getHeight = function getHeight2(elem) {
  return (elem && elem.offsetHeight) || 0;
};
var getSwipeDirection = function getSwipeDirection2(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round((r * 180) / Math.PI);
  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }
  if ((swipeAngle <= 45 && swipeAngle >= 0) || (swipeAngle <= 360 && swipeAngle >= 315)) {
    return 'left';
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return 'right';
  }
  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return 'up';
    } else {
      return 'down';
    }
  }
  return 'vertical';
};
var canGoNext = function canGoNext2(spec) {
  var canGo = true;
  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }
  return canGo;
};
var extractObject = function extractObject2(spec, keys) {
  var newObject = {};
  keys.forEach(function(key) {
    return (newObject[key] = spec[key]);
  });
  return newObject;
};
var initializedState = function initializedState2(spec) {
  var slideCount = React.Children.count(spec.children);
  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;
  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
    if (typeof spec.centerPadding === 'string' && spec.centerPadding.slice(-1) === '%') {
      centerPaddingAdj *= listWidth / 100;
    }
    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }
  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === void 0 ? spec.initialSlide : spec.currentSlide;
  if (spec.rtl && spec.currentSlide === void 0) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }
  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(
    _objectSpread(
      _objectSpread({}, spec),
      {},
      {
        currentSlide,
        lazyLoadedList
      }
    )
  );
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount,
    slideWidth,
    listWidth,
    trackWidth,
    currentSlide,
    slideHeight,
    listHeight,
    lazyLoadedList
  };
  if (spec.autoplaying === null && spec.autoplay) {
    state['autoplaying'] = 'playing';
  }
  return state;
};
var slideHandler = function slideHandler2(spec) {
  var waitForAnimate = spec.waitForAnimate,
    animating = spec.animating,
    fade = spec.fade,
    infinite = spec.infinite,
    index = spec.index,
    slideCount = spec.slideCount,
    lazyLoad = spec.lazyLoad,
    currentSlide = spec.currentSlide,
    centerMode = spec.centerMode,
    slidesToScroll = spec.slidesToScroll,
    slidesToShow = spec.slidesToShow,
    useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
    finalSlide,
    animationLeft,
    finalLeft;
  var state = {},
    nextState = {};
  var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};
    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }
    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }
    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;
    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;
      else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - (slideCount % slidesToScroll);
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;
      else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }
    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }
    animationLeft = getTrackLeft(
      _objectSpread(
        _objectSpread({}, spec),
        {},
        {
          slideIndex: animationSlide
        }
      )
    );
    finalLeft = getTrackLeft(
      _objectSpread(
        _objectSpread({}, spec),
        {},
        {
          slideIndex: finalSlide
        }
      )
    );
    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }
    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(
        getOnDemandLazySlides(
          _objectSpread(
            _objectSpread({}, spec),
            {},
            {
              currentSlide: animationSlide
            }
          )
        )
      );
    }
    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(
          _objectSpread(
            _objectSpread({}, spec),
            {},
            {
              left: finalLeft
            }
          )
        ),
        lazyLoadedList,
        targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(
          _objectSpread(
            _objectSpread({}, spec),
            {},
            {
              left: animationLeft
            }
          )
        ),
        lazyLoadedList,
        targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(
          _objectSpread(
            _objectSpread({}, spec),
            {},
            {
              left: finalLeft
            }
          )
        ),
        swipeLeft: null,
        targetSlide
      };
    }
  }
  return {
    state,
    nextState
  };
};
var changeSlide = function changeSlide2(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
    slidesToShow = spec.slidesToShow,
    slideCount = spec.slideCount,
    currentSlide = spec.currentSlide,
    previousTargetSlide = spec.targetSlide,
    lazyLoad = spec.lazyLoad,
    infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
  if (options.message === 'previous') {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;
    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === 'next') {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;
    if (lazyLoad && !infinite) {
      targetSlide = ((currentSlide + slidesToScroll) % slideCount) + indexOffset;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === 'dots') {
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === 'children') {
    targetSlide = options.index;
    if (infinite) {
      var direction = siblingDirection(
        _objectSpread(
          _objectSpread({}, spec),
          {},
          {
            targetSlide
          }
        )
      );
      if (targetSlide > options.currentSlide && direction === 'left') {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === 'right') {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === 'index') {
    targetSlide = Number(options.index);
  }
  return targetSlide;
};
var keyHandler = function keyHandler2(e, accessibility, rtl) {
  if (e.target.tagName.match('TEXTAREA|INPUT|SELECT') || !accessibility) return '';
  if (e.keyCode === 37) return rtl ? 'next' : 'previous';
  if (e.keyCode === 39) return rtl ? 'previous' : 'next';
  return '';
};
var swipeStart = function swipeStart2(e, swipe, draggable) {
  e.target.tagName === 'IMG' && safePreventDefault(e);
  if (!swipe || (!draggable && e.type.indexOf('mouse') !== -1)) return '';
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};
var swipeMove = function swipeMove2(e, spec) {
  var scrolling = spec.scrolling,
    animating = spec.animating,
    vertical = spec.vertical,
    swipeToSlide = spec.swipeToSlide,
    verticalSwiping = spec.verticalSwiping,
    rtl = spec.rtl,
    currentSlide = spec.currentSlide,
    edgeFriction = spec.edgeFriction,
    edgeDragged = spec.edgeDragged,
    onEdge = spec.onEdge,
    swiped = spec.swiped,
    swiping = spec.swiping,
    slideCount = spec.slideCount,
    slidesToScroll = spec.slidesToScroll,
    infinite = spec.infinite,
    touchObject = spec.touchObject,
    swipeEvent = spec.swipeEvent,
    listHeight = spec.listHeight,
    listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return safePreventDefault(e);
  if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
  var swipeLeft,
    state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }
  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;
  if (!infinite) {
    if (
      (currentSlide === 0 && (swipeDirection === 'right' || swipeDirection === 'down')) ||
      (currentSlide + 1 >= dotCount && (swipeDirection === 'left' || swipeDirection === 'up')) ||
      (!canGoNext(spec) && (swipeDirection === 'left' || swipeDirection === 'up'))
    ) {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;
      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state['edgeDragged'] = true;
      }
    }
  }
  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state['swiped'] = true;
  }
  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }
  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }
  state = _objectSpread(
    _objectSpread({}, state),
    {},
    {
      touchObject,
      swipeLeft,
      trackStyle: getTrackCSS(
        _objectSpread(
          _objectSpread({}, spec),
          {},
          {
            left: swipeLeft
          }
        )
      )
    }
  );
  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }
  if (touchObject.swipeLength > 10) {
    state['swiping'] = true;
    safePreventDefault(e);
  }
  return state;
};
var swipeEnd = function swipeEnd2(e, spec) {
  var dragging = spec.dragging,
    swipe = spec.swipe,
    touchObject = spec.touchObject,
    listWidth = spec.listWidth,
    touchThreshold = spec.touchThreshold,
    verticalSwiping = spec.verticalSwiping,
    listHeight = spec.listHeight,
    swipeToSlide = spec.swipeToSlide,
    scrolling = spec.scrolling,
    onSwipe = spec.onSwipe,
    targetSlide = spec.targetSlide,
    currentSlide = spec.currentSlide,
    infinite = spec.infinite;
  if (!dragging) {
    if (swipe) safePreventDefault(e);
    return {};
  }
  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };
  if (scrolling) {
    return state;
  }
  if (!touchObject.swipeLength) {
    return state;
  }
  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e);
    if (onSwipe) {
      onSwipe(swipeDirection);
    }
    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;
    switch (swipeDirection) {
      case 'left':
      case 'up':
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state['currentDirection'] = 0;
        break;
      case 'right':
      case 'down':
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state['currentDirection'] = 1;
        break;
      default:
        slideCount = activeSlide;
    }
    state['triggerSlideHandler'] = slideCount;
  } else {
    var currentLeft = getTrackLeft(spec);
    state['trackStyle'] = getTrackAnimateCSS(
      _objectSpread(
        _objectSpread({}, spec),
        {},
        {
          left: currentLeft
        }
      )
    );
  }
  return state;
};
var getNavigableIndexes = function getNavigableIndexes2(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];
  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }
  return indexes;
};
var checkNavigable = function checkNavigable2(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;
  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }
      prevNavigable = navigables[n];
    }
  }
  return index;
};
var getSlideCount = function getSlideCount2(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = (slickList.querySelectorAll && slickList.querySelectorAll('.slick-slide')) || [];
    Array.from(slides).every(function(slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }
      return true;
    });
    if (!swipedSlide) {
      return 0;
    }
    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};
var checkSpecKeys = function checkSpecKeys2(spec, keysArray) {
  return keysArray.reduce(function(value, key) {
    return value && spec.hasOwnProperty(key);
  }, true)
    ? null
    : console.error('Keys Missing:', spec);
};
var getTrackCSS = function getTrackCSS2(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }
  var style = {
    opacity: 1,
    transition: '',
    WebkitTransition: ''
  };
  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical
      ? 'translate3d(' + spec.left + 'px, 0px, 0px)'
      : 'translate3d(0px, ' + spec.left + 'px, 0px)';
    var transform = !spec.vertical
      ? 'translate3d(' + spec.left + 'px, 0px, 0px)'
      : 'translate3d(0px, ' + spec.left + 'px, 0px)';
    var msTransform = !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)';
    style = _objectSpread(
      _objectSpread({}, style),
      {},
      {
        WebkitTransform,
        transform,
        msTransform
      }
    );
  } else {
    if (spec.vertical) {
      style['top'] = spec.left;
    } else {
      style['left'] = spec.left;
    }
  }
  if (spec.fade)
    style = {
      opacity: 1
    };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight;
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + 'px';
    } else {
      style.marginTop = spec.left + 'px';
    }
  }
  return style;
};
var getTrackAnimateCSS = function getTrackAnimateCSS2(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
  var style = getTrackCSS(spec);
  if (spec.useTransform) {
    style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
    style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = 'top ' + spec.speed + 'ms ' + spec.cssEase;
    } else {
      style.transition = 'left ' + spec.speed + 'ms ' + spec.cssEase;
    }
  }
  return style;
};
var getTrackLeft = function getTrackLeft2(spec) {
  if (spec.unslick) {
    return 0;
  }
  checkSpecKeys(spec, [
    'slideIndex',
    'trackRef',
    'infinite',
    'centerMode',
    'slideCount',
    'slidesToShow',
    'slidesToScroll',
    'slideWidth',
    'listWidth',
    'variableWidth',
    'slideHeight'
  ]);
  var slideIndex = spec.slideIndex,
    trackRef = spec.trackRef,
    infinite = spec.infinite,
    centerMode = spec.centerMode,
    slideCount = spec.slideCount,
    slidesToShow = spec.slidesToShow,
    slidesToScroll = spec.slidesToScroll,
    slideWidth = spec.slideWidth,
    listWidth = spec.listWidth,
    variableWidth = spec.variableWidth,
    slideHeight = spec.slideHeight,
    fade = spec.fade,
    vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;
  if (fade || spec.slideCount === 1) {
    return 0;
  }
  var slidesToOffset = 0;
  if (infinite) {
    slidesToOffset = -getPreClones(spec);
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount
        ? slidesToShow - (slideIndex - slideCount)
        : slideCount % slidesToScroll);
    }
    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - (slideCount % slidesToScroll);
    }
    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }
  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;
  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }
  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;
      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }
      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }
  return targetLeft;
};
var getPreClones = function getPreClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  if (spec.variableWidth) {
    return spec.slideCount;
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = function getPostClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  return spec.slideCount;
};
var getTotalSlides = function getTotalSlides2(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = function siblingDirection2(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return 'left';
    }
    return 'right';
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return 'right';
    }
    return 'left';
  }
};
var slidesOnRight = function slidesOnRight2(_ref) {
  var slidesToShow = _ref.slidesToShow,
    centerMode = _ref.centerMode,
    rtl = _ref.rtl,
    centerPadding = _ref.centerPadding;
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }
  if (rtl) {
    return 0;
  }
  return slidesToShow - 1;
};
var slidesOnLeft = function slidesOnLeft2(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
    centerMode = _ref2.centerMode,
    rtl = _ref2.rtl,
    centerPadding = _ref2.centerPadding;
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }
  if (rtl) {
    return slidesToShow - 1;
  }
  return 0;
};
var canUseDOM = function canUseDOM2() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/track.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classnames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var getSlideClasses = function getSlideClasses2(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;
  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }
  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }
  var focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  var slickCurrent = index === focusedSlide;
  return {
    'slick-slide': true,
    'slick-active': slickActive,
    'slick-center': slickCenter,
    'slick-cloned': slickCloned,
    'slick-current': slickCurrent
  };
};
var getSlideStyle = function getSlideStyle2(spec) {
  var style = {};
  if (spec.variableWidth === void 0 || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }
  if (spec.fade) {
    style.position = 'relative';
    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    if (spec.useCSS) {
      style.transition =
        'opacity ' + spec.speed + 'ms ' + spec.cssEase + ', visibility ' + spec.speed + 'ms ' + spec.cssEase;
    }
  }
  return style;
};
var getKey = function getKey2(child, fallbackKey) {
  return child.key + '-' + fallbackKey;
};
var renderSlides = function renderSlides2(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = React2.Children.count(spec.children);
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  React2.Children.forEach(spec.children, function(elem, index) {
    var child;
    var childOnClickOptions = {
      message: 'children',
      index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };
    if (!spec.lazyLoad || (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
      child = elem;
    } else {
      child = /* @__PURE__ */ React2.createElement('div', null);
    }
    var childStyle = getSlideStyle(
      _objectSpread2(
        _objectSpread2({}, spec),
        {},
        {
          index
        }
      )
    );
    var slideClass = child.props.className || '';
    var slideClasses = getSlideClasses(
      _objectSpread2(
        _objectSpread2({}, spec),
        {},
        {
          index
        }
      )
    );
    slides.push(
      /* @__PURE__ */ React2.cloneElement(child, {
        key: 'original' + getKey(child, index),
        'data-index': index,
        className: classnames(slideClasses, slideClass),
        tabIndex: '-1',
        'aria-hidden': !slideClasses['slick-active'],
        style: _objectSpread2(
          _objectSpread2(
            {
              outline: 'none'
            },
            child.props.style || {}
          ),
          childStyle
        ),
        onClick: function onClick(e) {
          child.props && child.props.onClick && child.props.onClick(e);
          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        }
      })
    );
    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;
      if (preCloneNo <= getPreClones(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(
          _objectSpread2(
            _objectSpread2({}, spec),
            {},
            {
              index: key
            }
          )
        );
        preCloneSlides.push(
          /* @__PURE__ */ React2.cloneElement(child, {
            key: 'precloned' + getKey(child, key),
            'data-index': key,
            tabIndex: '-1',
            className: classnames(slideClasses, slideClass),
            'aria-hidden': !slideClasses['slick-active'],
            style: _objectSpread2(_objectSpread2({}, child.props.style || {}), childStyle),
            onClick: function onClick(e) {
              child.props && child.props.onClick && child.props.onClick(e);
              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          })
        );
      }
      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;
        if (key < endIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(
          _objectSpread2(
            _objectSpread2({}, spec),
            {},
            {
              index: key
            }
          )
        );
        postCloneSlides.push(
          /* @__PURE__ */ React2.cloneElement(child, {
            key: 'postcloned' + getKey(child, key),
            'data-index': key,
            tabIndex: '-1',
            className: classnames(slideClasses, slideClass),
            'aria-hidden': !slideClasses['slick-active'],
            style: _objectSpread2(_objectSpread2({}, child.props.style || {}), childStyle),
            onClick: function onClick(e) {
              child.props && child.props.onClick && child.props.onClick(e);
              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          })
        );
      }
    }
  });
  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};
var Track = /* @__PURE__ */ (function(_React$PureComponent) {
  _inherits(Track2, _React$PureComponent);
  var _super = _createSuper(Track2);
  function Track2() {
    var _this;
    _classCallCheck(this, Track2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), 'node', null);
    _defineProperty(_assertThisInitialized(_this), 'handleRef', function(ref) {
      _this.node = ref;
    });
    return _this;
  }
  _createClass(Track2, [
    {
      key: 'render',
      value: function render() {
        var slides = renderSlides(this.props);
        var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
        var mouseEvents = {
          onMouseEnter,
          onMouseOver,
          onMouseLeave
        };
        return /* @__PURE__ */ React2.createElement(
          'div',
          _extends(
            {
              ref: this.handleRef,
              className: 'slick-track',
              style: this.props.trackStyle
            },
            mouseEvents
          ),
          slides
        );
      }
    }
  ]);
  return Track2;
})(React2.PureComponent);

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/dots.js
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classnames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var getDotCount = function getDotCount2(spec) {
  var dots;
  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }
  return dots;
};
var Dots = /* @__PURE__ */ (function(_React$PureComponent) {
  _inherits2(Dots2, _React$PureComponent);
  var _super = _createSuper2(Dots2);
  function Dots2() {
    _classCallCheck2(this, Dots2);
    return _super.apply(this, arguments);
  }
  _createClass2(Dots2, [
    {
      key: 'clickHandler',
      value: function clickHandler(options, e) {
        e.preventDefault();
        this.props.clickHandler(options);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave,
          infinite = _this$props.infinite,
          slidesToScroll = _this$props.slidesToScroll,
          slidesToShow = _this$props.slidesToShow,
          slideCount = _this$props.slideCount,
          currentSlide = _this$props.currentSlide;
        var dotCount = getDotCount({
          slideCount,
          slidesToScroll,
          slidesToShow,
          infinite
        });
        var mouseEvents = {
          onMouseEnter,
          onMouseOver,
          onMouseLeave
        };
        var dots = [];
        for (var i = 0; i < dotCount; i++) {
          var _rightBound = (i + 1) * slidesToScroll - 1;
          var rightBound = infinite ? _rightBound : clamp(_rightBound, 0, slideCount - 1);
          var _leftBound = rightBound - (slidesToScroll - 1);
          var leftBound = infinite ? _leftBound : clamp(_leftBound, 0, slideCount - 1);
          var className = classnames2({
            'slick-active': infinite
              ? currentSlide >= leftBound && currentSlide <= rightBound
              : currentSlide === leftBound
          });
          var dotOptions = {
            message: 'dots',
            index: i,
            slidesToScroll,
            currentSlide
          };
          var onClick = this.clickHandler.bind(this, dotOptions);
          dots = dots.concat(
            /* @__PURE__ */ React3.createElement(
              'li',
              {
                key: i,
                className
              },
              /* @__PURE__ */ React3.cloneElement(this.props.customPaging(i), {
                onClick
              })
            )
          );
        }
        return /* @__PURE__ */ React3.cloneElement(
          this.props.appendDots(dots),
          _objectSpread3(
            {
              className: this.props.dotsClass
            },
            mouseEvents
          )
        );
      }
    }
  ]);
  return Dots2;
})(React3.PureComponent);

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/arrows.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classnames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var PrevArrow = /* @__PURE__ */ (function(_React$PureComponent) {
  _inherits3(PrevArrow2, _React$PureComponent);
  var _super = _createSuper3(PrevArrow2);
  function PrevArrow2() {
    _classCallCheck3(this, PrevArrow2);
    return _super.apply(this, arguments);
  }
  _createClass3(PrevArrow2, [
    {
      key: 'clickHandler',
      value: function clickHandler(options, e) {
        if (e) {
          e.preventDefault();
        }
        this.props.clickHandler(options, e);
      }
    },
    {
      key: 'render',
      value: function render() {
        var prevClasses = {
          'slick-arrow': true,
          'slick-prev': true
        };
        var prevHandler = this.clickHandler.bind(this, {
          message: 'previous'
        });
        if (
          !this.props.infinite &&
          (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)
        ) {
          prevClasses['slick-disabled'] = true;
          prevHandler = null;
        }
        var prevArrowProps = {
          key: '0',
          'data-role': 'none',
          className: classnames3(prevClasses),
          style: {
            display: 'block'
          },
          onClick: prevHandler
        };
        var customProps = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        };
        var prevArrow;
        if (this.props.prevArrow) {
          prevArrow = /* @__PURE__ */ React4.cloneElement(
            this.props.prevArrow,
            _objectSpread4(_objectSpread4({}, prevArrowProps), customProps)
          );
        } else {
          prevArrow = /* @__PURE__ */ React4.createElement(
            'button',
            _extends2(
              {
                key: '0',
                type: 'button'
              },
              prevArrowProps
            ),
            ' ',
            'Previous'
          );
        }
        return prevArrow;
      }
    }
  ]);
  return PrevArrow2;
})(React4.PureComponent);
var NextArrow = /* @__PURE__ */ (function(_React$PureComponent2) {
  _inherits3(NextArrow2, _React$PureComponent2);
  var _super2 = _createSuper3(NextArrow2);
  function NextArrow2() {
    _classCallCheck3(this, NextArrow2);
    return _super2.apply(this, arguments);
  }
  _createClass3(NextArrow2, [
    {
      key: 'clickHandler',
      value: function clickHandler(options, e) {
        if (e) {
          e.preventDefault();
        }
        this.props.clickHandler(options, e);
      }
    },
    {
      key: 'render',
      value: function render() {
        var nextClasses = {
          'slick-arrow': true,
          'slick-next': true
        };
        var nextHandler = this.clickHandler.bind(this, {
          message: 'next'
        });
        if (!canGoNext(this.props)) {
          nextClasses['slick-disabled'] = true;
          nextHandler = null;
        }
        var nextArrowProps = {
          key: '1',
          'data-role': 'none',
          className: classnames3(nextClasses),
          style: {
            display: 'block'
          },
          onClick: nextHandler
        };
        var customProps = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        };
        var nextArrow;
        if (this.props.nextArrow) {
          nextArrow = /* @__PURE__ */ React4.cloneElement(
            this.props.nextArrow,
            _objectSpread4(_objectSpread4({}, nextArrowProps), customProps)
          );
        } else {
          nextArrow = /* @__PURE__ */ React4.createElement(
            'button',
            _extends2(
              {
                key: '1',
                type: 'button'
              },
              nextArrowProps
            ),
            ' ',
            'Next'
          );
        }
        return nextArrow;
      }
    }
  ]);
  return NextArrow2;
})(React4.PureComponent);

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/inner-slider.js
import ResizeObserver from '/cdn/v99/resize-observer-polyfill@1.5.1/es2022/resize-observer-polyfill.development.js';
var _excluded = ['animating'];
var InnerSlider = /* @__PURE__ */ (function(_React$Component) {
  _inherits4(InnerSlider2, _React$Component);
  var _super = _createSuper4(InnerSlider2);
  function InnerSlider2(props) {
    var _this;
    _classCallCheck4(this, InnerSlider2);
    _this = _super.call(this, props);
    _defineProperty2(_assertThisInitialized2(_this), 'listRefHandler', function(ref) {
      return (_this.list = ref);
    });
    _defineProperty2(_assertThisInitialized2(_this), 'trackRefHandler', function(ref) {
      return (_this.track = ref);
    });
    _defineProperty2(_assertThisInitialized2(_this), 'adaptHeight', function() {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector('[data-index="'.concat(_this.state.currentSlide, '"]'));
        _this.list.style.height = getHeight(elem) + 'px';
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), 'componentDidMount', function() {
      _this.props.onInit && _this.props.onInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = getOnDemandLazySlides(_objectSpread5(_objectSpread5({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      var spec = _objectSpread5(
        {
          listRef: _this.list,
          trackRef: _this.track
        },
        _this.props
      );
      _this.updateState(spec, true, function() {
        _this.adaptHeight();
        _this.props.autoplay && _this.autoPlay('playing');
      });
      if (_this.props.lazyLoad === 'progressive') {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1e3);
      }
      _this.ro = new ResizeObserver(function() {
        if (_this.state.animating) {
          _this.onWindowResized(false);
          _this.callbackTimers.push(
            setTimeout(function() {
              return _this.onWindowResized();
            }, _this.props.speed)
          );
        } else {
          _this.onWindowResized();
        }
      });
      _this.ro.observe(_this.list);
      document.querySelectorAll &&
        Array.prototype.forEach.call(document.querySelectorAll('.slick-slide'), function(slide) {
          slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
          slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
        });
      if (window.addEventListener) {
        window.addEventListener('resize', _this.onWindowResized);
      } else {
        window.attachEvent('onresize', _this.onWindowResized);
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), 'componentWillUnmount', function() {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }
      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }
      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function(timer) {
          return clearTimeout(timer);
        });
        _this.callbackTimers = [];
      }
      if (window.addEventListener) {
        window.removeEventListener('resize', _this.onWindowResized);
      } else {
        window.detachEvent('onresize', _this.onWindowResized);
      }
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      _this.ro.disconnect();
    });
    _defineProperty2(_assertThisInitialized2(_this), 'componentDidUpdate', function(prevProps) {
      _this.checkImagesLoad();
      _this.props.onReInit && _this.props.onReInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = getOnDemandLazySlides(_objectSpread5(_objectSpread5({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      _this.adaptHeight();
      var spec = _objectSpread5(
        _objectSpread5(
          {
            listRef: _this.list,
            trackRef: _this.track
          },
          _this.props
        ),
        _this.state
      );
      var setTrackStyle = _this.didPropsChange(prevProps);
      setTrackStyle &&
        _this.updateState(spec, setTrackStyle, function() {
          if (_this.state.currentSlide >= React5.Children.count(_this.props.children)) {
            _this.changeSlide({
              message: 'index',
              index: React5.Children.count(_this.props.children) - _this.props.slidesToShow,
              currentSlide: _this.state.currentSlide
            });
          }
          if (prevProps.autoplay !== _this.props.autoplay || prevProps.autoplaySpeed !== _this.props.autoplaySpeed) {
            if (!prevProps.autoplay && _this.props.autoplay) {
              _this.autoPlay('playing');
            } else if (_this.props.autoplay) {
              _this.autoPlay('update');
            } else {
              _this.pause('paused');
            }
          }
        });
    });
    _defineProperty2(_assertThisInitialized2(_this), 'onWindowResized', function(setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = debounce(function() {
        return _this.resizeWindow(setTrackStyle);
      }, 50);
      _this.debouncedResize();
    });
    _defineProperty2(_assertThisInitialized2(_this), 'resizeWindow', function() {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node);
      if (!isTrackMounted) return;
      var spec = _objectSpread5(
        _objectSpread5(
          {
            listRef: _this.list,
            trackRef: _this.track
          },
          _this.props
        ),
        _this.state
      );
      _this.updateState(spec, setTrackStyle, function() {
        if (_this.props.autoplay) _this.autoPlay('update');
        else _this.pause('paused');
      });
      _this.setState({
        animating: false
      });
      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });
    _defineProperty2(_assertThisInitialized2(_this), 'updateState', function(spec, setTrackStyle, callback) {
      var updatedState = initializedState(spec);
      spec = _objectSpread5(
        _objectSpread5(_objectSpread5({}, spec), updatedState),
        {},
        {
          slideIndex: updatedState.currentSlide
        }
      );
      var targetLeft = getTrackLeft(spec);
      spec = _objectSpread5(
        _objectSpread5({}, spec),
        {},
        {
          left: targetLeft
        }
      );
      var trackStyle = getTrackCSS(spec);
      if (setTrackStyle || React5.Children.count(_this.props.children) !== React5.Children.count(spec.children)) {
        updatedState['trackStyle'] = trackStyle;
      }
      _this.setState(updatedState, callback);
    });
    _defineProperty2(_assertThisInitialized2(_this), 'ssrInit', function() {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
          _trackLeft = 0;
        var childrenWidths = [];
        var preClones = getPreClones(
          _objectSpread5(
            _objectSpread5(_objectSpread5({}, _this.props), _this.state),
            {},
            {
              slideCount: _this.props.children.length
            }
          )
        );
        var postClones = getPostClones(
          _objectSpread5(
            _objectSpread5(_objectSpread5({}, _this.props), _this.state),
            {},
            {
              slideCount: _this.props.children.length
            }
          )
        );
        _this.props.children.forEach(function(child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });
        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }
        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }
        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }
        var _trackStyle = {
          width: _trackWidth + 'px',
          left: -_trackLeft + 'px'
        };
        if (_this.props.centerMode) {
          var currentWidth = ''.concat(childrenWidths[_this.state.currentSlide], 'px');
          _trackStyle.left = 'calc('.concat(_trackStyle.left, ' + (100% - ').concat(currentWidth, ') / 2 ) ');
        }
        return {
          trackStyle: _trackStyle
        };
      }
      var childrenCount = React5.Children.count(_this.props.children);
      var spec = _objectSpread5(
        _objectSpread5(_objectSpread5({}, _this.props), _this.state),
        {},
        {
          slideCount: childrenCount
        }
      );
      var slideCount = getPreClones(spec) + getPostClones(spec) + childrenCount;
      var trackWidth = (100 / _this.props.slidesToShow) * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = (-slideWidth * (getPreClones(spec) + _this.state.currentSlide) * trackWidth) / 100;
      if (_this.props.centerMode) {
        trackLeft += (100 - (slideWidth * trackWidth) / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + '%',
        left: trackLeft + '%'
      };
      return {
        slideWidth: slideWidth + '%',
        trackStyle
      };
    });
    _defineProperty2(_assertThisInitialized2(_this), 'checkImagesLoad', function() {
      var images = (_this.list && _this.list.querySelectorAll && _this.list.querySelectorAll('.slick-slide img')) || [];
      var imagesCount = images.length,
        loadedCount = 0;
      Array.prototype.forEach.call(images, function(image) {
        var handler = function handler2() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };
        if (!image.onclick) {
          image.onclick = function() {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function() {
            prevClickHandler();
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function() {
              _this.adaptHeight();
              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;
            image.onerror = function() {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });
    _defineProperty2(_assertThisInitialized2(_this), 'progressiveLazyLoad', function() {
      var slidesToLoad = [];
      var spec = _objectSpread5(_objectSpread5({}, _this.props), _this.state);
      for (var index = _this.state.currentSlide; index < _this.state.slideCount + getPostClones(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }
      for (var _index = _this.state.currentSlide - 1; _index >= -getPreClones(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        _this.setState(function(state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), 'slideHandler', function(index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var _this$props = _this.props,
        asNavFor = _this$props.asNavFor,
        beforeChange = _this$props.beforeChange,
        onLazyLoad = _this$props.onLazyLoad,
        speed = _this$props.speed,
        afterChange = _this$props.afterChange;
      var currentSlide = _this.state.currentSlide;
      var _slideHandler = slideHandler(
          _objectSpread5(
            _objectSpread5(
              _objectSpread5(
                {
                  index
                },
                _this.props
              ),
              _this.state
            ),
            {},
            {
              trackRef: _this.track,
              useCSS: _this.props.useCSS && !dontAnimate
            }
          )
        ),
        state = _slideHandler.state,
        nextState = _slideHandler.nextState;
      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function(value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }
      _this.setState(state, function() {
        if (asNavFor && _this.asNavForIndex !== index) {
          _this.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function() {
          var animating = nextState.animating,
            firstBatch = _objectWithoutProperties(nextState, _excluded);
          _this.setState(firstBatch, function() {
            _this.callbackTimers.push(
              setTimeout(function() {
                return _this.setState({
                  animating
                });
              }, 10)
            );
            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });
    _defineProperty2(_assertThisInitialized2(_this), 'changeSlide', function(options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var spec = _objectSpread5(_objectSpread5({}, _this.props), _this.state);
      var targetSlide = changeSlide(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;
      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
      _this.props.autoplay && _this.autoPlay('update');
      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll('.slick-current');
        nodes[0] && nodes[0].focus();
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), 'clickHandler', function(e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.clickable = true;
    });
    _defineProperty2(_assertThisInitialized2(_this), 'keyHandler', function(e) {
      var dir = keyHandler(e, _this.props.accessibility, _this.props.rtl);
      dir !== '' &&
        _this.changeSlide({
          message: dir
        });
    });
    _defineProperty2(_assertThisInitialized2(_this), 'selectHandler', function(options) {
      _this.changeSlide(options);
    });
    _defineProperty2(_assertThisInitialized2(_this), 'disableBodyScroll', function() {
      var preventDefault = function preventDefault2(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    });
    _defineProperty2(_assertThisInitialized2(_this), 'enableBodyScroll', function() {
      window.ontouchmove = null;
    });
    _defineProperty2(_assertThisInitialized2(_this), 'swipeStart', function(e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }
      var state = swipeStart(e, _this.props.swipe, _this.props.draggable);
      state !== '' && _this.setState(state);
    });
    _defineProperty2(_assertThisInitialized2(_this), 'swipeMove', function(e) {
      var state = swipeMove(
        e,
        _objectSpread5(
          _objectSpread5(_objectSpread5({}, _this.props), _this.state),
          {},
          {
            trackRef: _this.track,
            listRef: _this.list,
            slideIndex: _this.state.currentSlide
          }
        )
      );
      if (!state) return;
      if (state['swiping']) {
        _this.clickable = false;
      }
      _this.setState(state);
    });
    _defineProperty2(_assertThisInitialized2(_this), 'swipeEnd', function(e) {
      var state = swipeEnd(
        e,
        _objectSpread5(
          _objectSpread5(_objectSpread5({}, _this.props), _this.state),
          {},
          {
            trackRef: _this.track,
            listRef: _this.list,
            slideIndex: _this.state.currentSlide
          }
        )
      );
      if (!state) return;
      var triggerSlideHandler = state['triggerSlideHandler'];
      delete state['triggerSlideHandler'];
      _this.setState(state);
      if (triggerSlideHandler === void 0) return;
      _this.slideHandler(triggerSlideHandler);
      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), 'touchEnd', function(e) {
      _this.swipeEnd(e);
      _this.clickable = true;
    });
    _defineProperty2(_assertThisInitialized2(_this), 'slickPrev', function() {
      _this.callbackTimers.push(
        setTimeout(function() {
          return _this.changeSlide({
            message: 'previous'
          });
        }, 0)
      );
    });
    _defineProperty2(_assertThisInitialized2(_this), 'slickNext', function() {
      _this.callbackTimers.push(
        setTimeout(function() {
          return _this.changeSlide({
            message: 'next'
          });
        }, 0)
      );
    });
    _defineProperty2(_assertThisInitialized2(_this), 'slickGoTo', function(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return '';
      _this.callbackTimers.push(
        setTimeout(function() {
          return _this.changeSlide(
            {
              message: 'index',
              index: slide,
              currentSlide: _this.state.currentSlide
            },
            dontAnimate
          );
        }, 0)
      );
    });
    _defineProperty2(_assertThisInitialized2(_this), 'play', function() {
      var nextIndex;
      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if (canGoNext(_objectSpread5(_objectSpread5({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }
      _this.slideHandler(nextIndex);
    });
    _defineProperty2(_assertThisInitialized2(_this), 'autoPlay', function(playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      var autoplaying = _this.state.autoplaying;
      if (playType === 'update') {
        if (autoplaying === 'hovered' || autoplaying === 'focused' || autoplaying === 'paused') {
          return;
        }
      } else if (playType === 'leave') {
        if (autoplaying === 'paused' || autoplaying === 'focused') {
          return;
        }
      } else if (playType === 'blur') {
        if (autoplaying === 'paused' || autoplaying === 'hovered') {
          return;
        }
      }
      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
      _this.setState({
        autoplaying: 'playing'
      });
    });
    _defineProperty2(_assertThisInitialized2(_this), 'pause', function(pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }
      var autoplaying = _this.state.autoplaying;
      if (pauseType === 'paused') {
        _this.setState({
          autoplaying: 'paused'
        });
      } else if (pauseType === 'focused') {
        if (autoplaying === 'hovered' || autoplaying === 'playing') {
          _this.setState({
            autoplaying: 'focused'
          });
        }
      } else {
        if (autoplaying === 'playing') {
          _this.setState({
            autoplaying: 'hovered'
          });
        }
      }
    });
    _defineProperty2(_assertThisInitialized2(_this), 'onDotsOver', function() {
      return _this.props.autoplay && _this.pause('hovered');
    });
    _defineProperty2(_assertThisInitialized2(_this), 'onDotsLeave', function() {
      return _this.props.autoplay && _this.state.autoplaying === 'hovered' && _this.autoPlay('leave');
    });
    _defineProperty2(_assertThisInitialized2(_this), 'onTrackOver', function() {
      return _this.props.autoplay && _this.pause('hovered');
    });
    _defineProperty2(_assertThisInitialized2(_this), 'onTrackLeave', function() {
      return _this.props.autoplay && _this.state.autoplaying === 'hovered' && _this.autoPlay('leave');
    });
    _defineProperty2(_assertThisInitialized2(_this), 'onSlideFocus', function() {
      return _this.props.autoplay && _this.pause('focused');
    });
    _defineProperty2(_assertThisInitialized2(_this), 'onSlideBlur', function() {
      return _this.props.autoplay && _this.state.autoplaying === 'focused' && _this.autoPlay('blur');
    });
    _defineProperty2(_assertThisInitialized2(_this), 'render', function() {
      var className = classnames4('slick-slider', _this.props.className, {
        'slick-vertical': _this.props.vertical,
        'slick-initialized': true
      });
      var spec = _objectSpread5(_objectSpread5({}, _this.props), _this.state);
      var trackProps = extractObject(spec, [
        'fade',
        'cssEase',
        'speed',
        'infinite',
        'centerMode',
        'focusOnSelect',
        'currentSlide',
        'lazyLoad',
        'lazyLoadedList',
        'rtl',
        'slideWidth',
        'slideHeight',
        'listHeight',
        'vertical',
        'slidesToShow',
        'slidesToScroll',
        'slideCount',
        'trackStyle',
        'variableWidth',
        'unslick',
        'centerPadding',
        'targetSlide',
        'useCSS'
      ]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread5(
        _objectSpread5({}, trackProps),
        {},
        {
          onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
          onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
          onMouseOver: pauseOnHover ? _this.onTrackOver : null,
          focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
        }
      );
      var dots;
      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = extractObject(spec, [
          'dotsClass',
          'slideCount',
          'slidesToShow',
          'currentSlide',
          'slidesToScroll',
          'clickHandler',
          'children',
          'customPaging',
          'infinite',
          'appendDots'
        ]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread5(
          _objectSpread5({}, dotProps),
          {},
          {
            clickHandler: _this.changeSlide,
            onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
            onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
            onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
          }
        );
        dots = /* @__PURE__ */ React5.createElement(Dots, dotProps);
      }
      var prevArrow, nextArrow;
      var arrowProps = extractObject(spec, [
        'infinite',
        'centerMode',
        'currentSlide',
        'slideCount',
        'slidesToShow',
        'prevArrow',
        'nextArrow'
      ]);
      arrowProps.clickHandler = _this.changeSlide;
      if (_this.props.arrows) {
        prevArrow = /* @__PURE__ */ React5.createElement(PrevArrow, arrowProps);
        nextArrow = /* @__PURE__ */ React5.createElement(NextArrow, arrowProps);
      }
      var verticalHeightStyle = null;
      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }
      var centerPaddingStyle = null;
      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: '0px ' + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + ' 0px'
          };
        }
      }
      var listStyle = _objectSpread5(_objectSpread5({}, verticalHeightStyle), centerPaddingStyle);
      var touchMove = _this.props.touchMove;
      var listProps = {
        className: 'slick-list',
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className,
        dir: 'ltr',
        style: _this.props.style
      };
      if (_this.props.unslick) {
        listProps = {
          className: 'slick-list'
        };
        innerSliderProps = {
          className
        };
      }
      return /* @__PURE__ */ React5.createElement(
        'div',
        innerSliderProps,
        !_this.props.unslick ? prevArrow : '',
        /* @__PURE__ */ React5.createElement(
          'div',
          _extends3(
            {
              ref: _this.listRefHandler
            },
            listProps
          ),
          /* @__PURE__ */ React5.createElement(
            Track,
            _extends3(
              {
                ref: _this.trackRefHandler
              },
              trackProps
            ),
            _this.props.children
          )
        ),
        !_this.props.unslick ? nextArrow : '',
        !_this.props.unslick ? dots : ''
      );
    });
    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread5(
      _objectSpread5({}, initial_state_default),
      {},
      {
        currentSlide: _this.props.initialSlide,
        slideCount: React5.Children.count(_this.props.children)
      }
    );
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    var ssrState = _this.ssrInit();
    _this.state = _objectSpread5(_objectSpread5({}, _this.state), ssrState);
    return _this;
  }
  _createClass4(InnerSlider2, [
    {
      key: 'didPropsChange',
      value: function didPropsChange(prevProps) {
        var setTrackStyle = false;
        for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
          var key = _Object$keys[_i3];
          if (!prevProps.hasOwnProperty(key)) {
            setTrackStyle = true;
            break;
          }
          if (_typeof(prevProps[key]) === 'object' || typeof prevProps[key] === 'function') {
            continue;
          }
          if (prevProps[key] !== this.props[key]) {
            setTrackStyle = true;
            break;
          }
        }
        return (
          setTrackStyle || React5.Children.count(this.props.children) !== React5.Children.count(prevProps.children)
        );
      }
    }
  ]);
  return InnerSlider2;
})(React5.Component);

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/slider.js
import json2mq from '/cdn/v99/json2mq@0.2.0/es2022/json2mq.development.js';

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/default-props.js
import React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return /* @__PURE__ */ React6.createElement(
      'ul',
      {
        style: {
          display: 'block'
        }
      },
      dots
    );
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3e3,
  beforeChange: null,
  centerMode: false,
  centerPadding: '50px',
  className: '',
  cssEase: 'ease',
  customPaging: function customPaging(i) {
    return /* @__PURE__ */ React6.createElement('button', null, i + 1);
  },
  dots: false,
  dotsClass: 'slick-dots',
  draggable: true,
  easing: 'linear',
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: 'div',
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var default_props_default = defaultProps;

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/slider.js
var Slider = /* @__PURE__ */ (function(_React$Component) {
  _inherits5(Slider2, _React$Component);
  var _super = _createSuper5(Slider2);
  function Slider2(props) {
    var _this;
    _classCallCheck5(this, Slider2);
    _this = _super.call(this, props);
    _defineProperty3(_assertThisInitialized3(_this), 'innerSliderRefHandler', function(ref) {
      return (_this.innerSlider = ref);
    });
    _defineProperty3(_assertThisInitialized3(_this), 'slickPrev', function() {
      return _this.innerSlider.slickPrev();
    });
    _defineProperty3(_assertThisInitialized3(_this), 'slickNext', function() {
      return _this.innerSlider.slickNext();
    });
    _defineProperty3(_assertThisInitialized3(_this), 'slickGoTo', function(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });
    _defineProperty3(_assertThisInitialized3(_this), 'slickPause', function() {
      return _this.innerSlider.pause('paused');
    });
    _defineProperty3(_assertThisInitialized3(_this), 'slickPlay', function() {
      return _this.innerSlider.autoPlay('play');
    });
    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }
  _createClass5(Slider2, [
    {
      key: 'media',
      value: function media(query, handler) {
        var mql = window.matchMedia(query);
        var listener = function listener2(_ref) {
          var matches = _ref.matches;
          if (matches) {
            handler();
          }
        };
        mql.addListener(listener);
        listener(mql);
        this._responsiveMediaHandlers.push({
          mql,
          query,
          listener
        });
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
        if (this.props.responsive) {
          var breakpoints = this.props.responsive.map(function(breakpt) {
            return breakpt.breakpoint;
          });
          breakpoints.sort(function(x, y) {
            return x - y;
          });
          breakpoints.forEach(function(breakpoint, index) {
            var bQuery;
            if (index === 0) {
              bQuery = json2mq({
                minWidth: 0,
                maxWidth: breakpoint
              });
            } else {
              bQuery = json2mq({
                minWidth: breakpoints[index - 1] + 1,
                maxWidth: breakpoint
              });
            }
            canUseDOM() &&
              _this2.media(bQuery, function() {
                _this2.setState({
                  breakpoint
                });
              });
          });
          var query = json2mq({
            minWidth: breakpoints.slice(-1)[0]
          });
          canUseDOM() &&
            this.media(query, function() {
              _this2.setState({
                breakpoint: null
              });
            });
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._responsiveMediaHandlers.forEach(function(obj) {
          obj.mql.removeListener(obj.listener);
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this;
        var settings;
        var newProps;
        if (this.state.breakpoint) {
          newProps = this.props.responsive.filter(function(resp) {
            return resp.breakpoint === _this3.state.breakpoint;
          });
          settings =
            newProps[0].settings === 'unslick'
              ? 'unslick'
              : _objectSpread6(
                  _objectSpread6(_objectSpread6({}, default_props_default), this.props),
                  newProps[0].settings
                );
        } else {
          settings = _objectSpread6(_objectSpread6({}, default_props_default), this.props);
        }
        if (settings.centerMode) {
          if (settings.slidesToScroll > 1 && true) {
            console.warn(
              'slidesToScroll should be equal to 1 in centerMode, you are using '.concat(settings.slidesToScroll)
            );
          }
          settings.slidesToScroll = 1;
        }
        if (settings.fade) {
          if (settings.slidesToShow > 1 && true) {
            console.warn(
              "slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow)
            );
          }
          if (settings.slidesToScroll > 1 && true) {
            console.warn(
              "slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll)
            );
          }
          settings.slidesToShow = 1;
          settings.slidesToScroll = 1;
        }
        var children = React7.Children.toArray(this.props.children);
        children = children.filter(function(child) {
          if (typeof child === 'string') {
            return !!child.trim();
          }
          return !!child;
        });
        if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
          console.warn('variableWidth is not supported in case of rows > 1 or slidesPerRow > 1');
          settings.variableWidth = false;
        }
        var newChildren = [];
        var currentWidth = null;
        for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
          var newSlide = [];
          for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
            var row = [];
            for (var k = j; k < j + settings.slidesPerRow; k += 1) {
              if (settings.variableWidth && children[k].props.style) {
                currentWidth = children[k].props.style.width;
              }
              if (k >= children.length) break;
              row.push(
                /* @__PURE__ */ React7.cloneElement(children[k], {
                  key: 100 * i + 10 * j + k,
                  tabIndex: -1,
                  style: {
                    width: ''.concat(100 / settings.slidesPerRow, '%'),
                    display: 'inline-block'
                  }
                })
              );
            }
            newSlide.push(
              /* @__PURE__ */ React7.createElement(
                'div',
                {
                  key: 10 * i + j
                },
                row
              )
            );
          }
          if (settings.variableWidth) {
            newChildren.push(
              /* @__PURE__ */ React7.createElement(
                'div',
                {
                  key: i,
                  style: {
                    width: currentWidth
                  }
                },
                newSlide
              )
            );
          } else {
            newChildren.push(
              /* @__PURE__ */ React7.createElement(
                'div',
                {
                  key: i
                },
                newSlide
              )
            );
          }
        }
        if (settings === 'unslick') {
          var className = 'regular slider ' + (this.props.className || '');
          return /* @__PURE__ */ React7.createElement(
            'div',
            {
              className
            },
            children
          );
        } else if (newChildren.length <= settings.slidesToShow) {
          settings.unslick = true;
        }
        return /* @__PURE__ */ React7.createElement(
          InnerSlider,
          _extends4(
            {
              style: this.props.style,
              ref: this.innerSliderRefHandler
            },
            settings
          ),
          newChildren
        );
      }
    }
  ]);
  return Slider2;
})(React7.Component);

// esm-build-d0c1ec5bfbd1a2b67b74281b94cc33046a6ad9ba-caf8ad28/node_modules/@ant-design/react-slick/es/index.js
var es_default = Slider;
export { es_default as default };