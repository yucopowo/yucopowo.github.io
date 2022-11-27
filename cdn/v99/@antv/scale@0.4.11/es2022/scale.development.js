/* esm.sh - esbuild bundle(@antv/scale@0.4.11) es2022 development */
// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/compose.js
function compose(fn, ...rest) {
  return rest.reduce((pre, cur) => x => pre(cur(x)), fn);
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/normalize.js
function createNormalize(a, b) {
  return b - a ? t => (t - a) / (b - a) : _ => 0.5;
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/clamp.js
function createClamp(a, b) {
  const lo = b < a ? b : a;
  const hi = a > b ? a : b;
  return x => Math.min(Math.max(lo, x), hi);
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/bisect.js
function bisect(array, x, lo, hi, getter) {
  let i = lo || 0;
  let j = hi || array.length;
  const get = getter || (x2 => x2);
  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (get(array[mid]) > x) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }
  return i;
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickIncrement(start, stop, count) {
  const step = (stop - start) / Math.max(0, count);
  const power = Math.floor(Math.log(step) / Math.LN10);
  const error = step / 10 ** power;
  if (power >= 0) {
    return (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * 10 ** power;
  }
  return -(10 ** -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
  const step0 = Math.abs(stop - start) / Math.max(0, count);
  let step1 = 10 ** Math.floor(Math.log(step0) / Math.LN10);
  const error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/d3-linear-nice.js
var d3LinearNice = (min, max, count = 5) => {
  const d = [min, max];
  let i0 = 0;
  let i1 = d.length - 1;
  let start = d[i0];
  let stop = d[i1];
  let step;
  if (stop < start) {
    [start, stop] = [stop, start];
    [i0, i1] = [i1, i0];
  }
  step = tickIncrement(start, stop, count);
  if (step > 0) {
    start = Math.floor(start / step) * step;
    stop = Math.ceil(stop / step) * step;
    step = tickIncrement(start, stop, count);
  } else if (step < 0) {
    start = Math.ceil(start * step) / step;
    stop = Math.floor(stop * step) / step;
    step = tickIncrement(start, stop, count);
  }
  if (step > 0) {
    d[i0] = Math.floor(start / step) * step;
    d[i1] = Math.ceil(stop / step) * step;
  } else if (step < 0) {
    d[i0] = Math.ceil(start * step) / step;
    d[i1] = Math.floor(stop * step) / step;
  }
  return d;
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/time-interval.js
var DURATION_SECOND = 1e3;
var DURATION_MINUTE = DURATION_SECOND * 60;
var DURATION_HOUR = DURATION_MINUTE * 60;
var DURATION_DAY = DURATION_HOUR * 24;
var DURATION_WEEK = DURATION_DAY * 7;
var DURATION_MONTH = DURATION_DAY * 30;
var DURATION_YEAR = DURATION_DAY * 365;
function createInterval(duration, floorish, offseti, field) {
  const adjust = (date, step) => {
    const test = date2 => field(date2) % step === 0;
    let i = step;
    while (i && !test(date)) {
      offseti(date, -1);
      i -= 1;
    }
    return date;
  };
  const floori = (date, step) => {
    if (step) adjust(date, step);
    floorish(date);
  };
  const floor = (date, step) => {
    const d = new Date(+date);
    floori(d, step);
    return d;
  };
  const ceil = (date, step) => {
    const d = new Date(+date - 1);
    floori(d, step);
    offseti(d, step);
    floori(d);
    return d;
  };
  const range = (start, stop, step, shouldAdjust) => {
    const ticks = [];
    const roundStep = Math.floor(step);
    const t = shouldAdjust ? ceil(start, step) : ceil(start);
    for (let i = t; +i < +stop; offseti(i, roundStep), floori(i)) {
      ticks.push(new Date(+i));
    }
    return ticks;
  };
  return {
    ceil,
    floor,
    range,
    duration
  };
}
var millisecond = createInterval(
  1,
  date => date,
  (date, step = 1) => {
    date.setTime(+date + step);
  },
  date => date.getTime()
);
var second = createInterval(
  DURATION_SECOND,
  date => {
    date.setMilliseconds(0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_SECOND * step);
  },
  date => date.getSeconds()
);
var minute = createInterval(
  DURATION_MINUTE,
  date => {
    date.setSeconds(0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_MINUTE * step);
  },
  date => date.getMinutes()
);
var hour = createInterval(
  DURATION_HOUR,
  date => {
    date.setMinutes(0, 0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_HOUR * step);
  },
  date => date.getHours()
);
var day = createInterval(
  DURATION_DAY,
  date => {
    date.setHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_DAY * step);
  },
  date => date.getDate() - 1
);
var month = createInterval(
  DURATION_MONTH,
  date => {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    const month2 = date.getMonth();
    date.setMonth(month2 + step);
  },
  date => date.getMonth()
);
var week = createInterval(
  DURATION_WEEK,
  date => {
    date.setDate(date.getDate() - (date.getDay() % 7));
    date.setHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_WEEK * step);
  },
  date => {
    const start = month.floor(date);
    const end = new Date(+date);
    return Math.floor((+end - +start) / DURATION_WEEK);
  }
);
var year = createInterval(
  DURATION_YEAR,
  date => {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    const year2 = date.getFullYear();
    date.setFullYear(year2 + step);
  },
  date => date.getFullYear()
);
var localIntervalMap = {
  millisecond,
  second,
  minute,
  hour,
  day,
  week,
  month,
  year
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/utc-interval.js
var utcMillisecond = createInterval(
  1,
  date => date,
  (date, step = 1) => {
    date.setTime(+date + step);
  },
  date => date.getTime()
);
var utcSecond = createInterval(
  DURATION_SECOND,
  date => {
    date.setUTCMilliseconds(0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_SECOND * step);
  },
  date => date.getUTCSeconds()
);
var utcMinute = createInterval(
  DURATION_MINUTE,
  date => {
    date.setUTCSeconds(0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_MINUTE * step);
  },
  date => date.getUTCMinutes()
);
var utcHour = createInterval(
  DURATION_HOUR,
  date => {
    date.setUTCMinutes(0, 0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_HOUR * step);
  },
  date => date.getUTCHours()
);
var utcDay = createInterval(
  DURATION_DAY,
  date => {
    date.setUTCHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_DAY * step);
  },
  date => date.getUTCDate() - 1
);
var utcMonth = createInterval(
  DURATION_MONTH,
  date => {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    const month2 = date.getUTCMonth();
    date.setUTCMonth(month2 + step);
  },
  date => date.getUTCMonth()
);
var utcWeek = createInterval(
  DURATION_WEEK,
  date => {
    date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 7) % 7));
    date.setUTCHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    date.setTime(+date + DURATION_WEEK * step);
  },
  date => {
    const start = utcMonth.floor(date);
    const end = new Date(+date);
    return Math.floor((+end - +start) / DURATION_WEEK);
  }
);
var utcYear = createInterval(
  DURATION_YEAR,
  date => {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  },
  (date, step = 1) => {
    const year2 = date.getUTCFullYear();
    date.setUTCFullYear(year2 + step);
  },
  date => date.getUTCFullYear()
);
var utcIntervalMap = {
  millisecond: utcMillisecond,
  second: utcSecond,
  minute: utcMinute,
  hour: utcHour,
  day: utcDay,
  week: utcWeek,
  month: utcMonth,
  year: utcYear
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/find-tick-interval.js
function chooseTickIntervals(utc) {
  const intervalMap = utc ? utcIntervalMap : localIntervalMap;
  const {
    year: year2,
    month: month2,
    week: week2,
    day: day2,
    hour: hour2,
    minute: minute2,
    second: second2,
    millisecond: millisecond2
  } = intervalMap;
  const tickIntervals = [
    [second2, 1],
    [second2, 5],
    [second2, 15],
    [second2, 30],
    [minute2, 1],
    [minute2, 5],
    [minute2, 15],
    [minute2, 30],
    [hour2, 1],
    [hour2, 3],
    [hour2, 6],
    [hour2, 12],
    [day2, 1],
    [day2, 2],
    [week2, 1],
    [month2, 1],
    [month2, 3],
    [year2, 1]
  ];
  return {
    tickIntervals,
    year: year2,
    millisecond: millisecond2
  };
}
function findTickInterval(start, stop, count, interval, utc) {
  const lo = +start;
  const hi = +stop;
  const { tickIntervals, year: year2, millisecond: millisecond2 } = chooseTickIntervals(utc);
  const getter = ([interval2, count2]) => interval2.duration * count2;
  const targetCount = interval ? (hi - lo) / interval : count || 5;
  const targetInterval = interval || (hi - lo) / targetCount;
  const len = tickIntervals.length;
  const i = bisect(tickIntervals, targetInterval, 0, len, getter);
  let matchInterval;
  if (i === len) {
    const step = tickStep(lo / year2.duration, hi / year2.duration, targetCount);
    matchInterval = [year2, step];
  } else if (i) {
    const closeToLow = targetInterval / getter(tickIntervals[i - 1]) < getter(tickIntervals[i]) / targetInterval;
    const [timeInterval, targetStep] = closeToLow ? tickIntervals[i - 1] : tickIntervals[i];
    const step = interval ? Math.ceil(interval / timeInterval.duration) : targetStep;
    matchInterval = [timeInterval, step];
  } else {
    const step = Math.max(tickStep(lo, hi, targetCount), 1);
    matchInterval = [millisecond2, step];
  }
  return matchInterval;
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/d3-time-nice.js
var d3TimeNice = (min, max, count, interval, utc) => {
  const r = min > max;
  const lo = r ? max : min;
  const hi = r ? min : max;
  const [tickInterval, step] = findTickInterval(lo, hi, count, interval, utc);
  const domain = [tickInterval.floor(lo, step), tickInterval.ceil(hi, step)];
  return r ? domain.reverse() : domain;
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/is-valid.js
import { isNull, isUndefined } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function isValid(x) {
  return !isUndefined(x) && !isNull(x) && !Number.isNaN(x);
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/log.js
var reflect = f => {
  return x => -f(-x);
};
var logs = (base, shouldReflect) => {
  const baseCache = Math.log(base);
  const log = base === Math.E ? Math.log : x => Math.log(x) / baseCache;
  return shouldReflect ? reflect(log) : log;
};
var pows = (base, shouldReflect) => {
  const pow = base === Math.E ? Math.exp : x => base ** x;
  return shouldReflect ? reflect(pow) : pow;
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/d3-log-nice.js
var d3LogNice = (a, b, _, base) => {
  const shouldReflect = a < 0;
  const log = logs(base, shouldReflect);
  const pow = pows(base, shouldReflect);
  const r = a > b;
  const min = r ? b : a;
  const max = r ? a : b;
  const niceDomain = [pow(Math.floor(log(min))), pow(Math.ceil(log(max)))];
  return r ? niceDomain.reverse() : niceDomain;
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/interpolatize.js
import { isNumber } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var createInterpolatorRound = interpolator => {
  return t => {
    const res = interpolator(t);
    return isNumber(res) ? Math.round(res) : res;
  };
};
function interpolatize(rangeOf3, normalizeDomain3) {
  return Scale => {
    Scale.prototype.rescale = function() {
      this.initRange();
      this.nice();
      const [transform] = this.chooseTransforms();
      this.composeOutput(transform, this.chooseClamp(transform));
    };
    Scale.prototype.initRange = function() {
      const { interpolator } = this.options;
      this.options.range = rangeOf3(interpolator);
    };
    Scale.prototype.composeOutput = function(transform, clamp) {
      const { domain, interpolator, round: round2 } = this.getOptions();
      const normalize2 = normalizeDomain3(domain.map(transform));
      const interpolate = round2 ? createInterpolatorRound(interpolator) : interpolator;
      this.output = compose(interpolate, normalize2, clamp, transform);
    };
    Scale.prototype.invert = void 0;
  };
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/color.js
import colorString from '/cdn/v99/color-string@1.9.1/es2022/color-string.development.js';
function hue2rgb(p, q, m) {
  let t = m;
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hsl2rbg(hsl) {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  const a = hsl[3];
  if (s === 0) return [l * 255, l * 255, l * 255, a];
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return [r * 255, g * 255, b * 255, a];
}
function string2rbg(s) {
  const color = colorString.get(s);
  if (!color) return null;
  const { model, value } = color;
  if (model === 'rgb') return value;
  if (model === 'hsl') return hsl2rbg(value);
  return null;
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/interpolate.js
var createInterpolateNumber = (a, b) => {
  return t => a * (1 - t) + b * t;
};
var createInterpolateColor = (a, b) => {
  const c1 = string2rbg(a);
  const c2 = string2rbg(b);
  if (c1 === null || c2 === null) return c1 ? () => a : () => b;
  return t => {
    const values = new Array(4);
    for (let i = 0; i < 4; i += 1) {
      const from = c1[i];
      const to = c2[i];
      values[i] = from * (1 - t) + to * t;
    }
    const [r, g, b2, a2] = values;
    return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b2)}, ${a2})`;
  };
};
var createInterpolateValue = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') return createInterpolateNumber(a, b);
  if (typeof a === 'string' && typeof b === 'string') return createInterpolateColor(a, b);
  return () => a;
};
var createInterpolateRound = (a, b) => {
  const interpolateNumber = createInterpolateNumber(a, b);
  return t => Math.round(interpolateNumber(t));
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/choose-mask.js
function chooseNiceTimeMask(date, intervalMap) {
  const {
    second: second2,
    minute: minute2,
    hour: hour2,
    day: day2,
    week: week2,
    month: month2,
    year: year2
  } = intervalMap;
  if (second2.floor(date) < date) return '.SSS';
  if (minute2.floor(date) < date) return ':ss';
  if (hour2.floor(date) < date) return 'hh:mm';
  if (day2.floor(date) < date) return 'hh A';
  if (month2.floor(date) < date) {
    if (week2.floor(date) < date) return 'MMM DD';
    return 'ddd DD';
  }
  if (year2.floor(date) < date) return 'MMMM';
  return 'YYYY';
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/internMap.js
function internGet({ map, initKey }, value) {
  const key = initKey(value);
  return map.has(key) ? map.get(key) : value;
}
function internSet({ map, initKey }, value) {
  const key = initKey(value);
  if (map.has(key)) return map.get(key);
  map.set(key, value);
  return value;
}
function internDelete({ map, initKey }, value) {
  const key = initKey(value);
  if (map.has(key)) {
    value = map.get(key);
    map.delete(key);
  }
  return value;
}
function keyof(value) {
  return typeof value === 'object' ? value.valueOf() : value;
}
var InternMap = class extends Map {
  constructor(entries) {
    super();
    this.map = /* @__PURE__ */ new Map();
    this.initKey = keyof;
    if (entries !== null) {
      for (const [key, value] of entries) {
        this.set(key, value);
      }
    }
  }
  get(key) {
    return super.get(
      internGet(
        {
          map: this.map,
          initKey: this.initKey
        },
        key
      )
    );
  }
  has(key) {
    return super.has(
      internGet(
        {
          map: this.map,
          initKey: this.initKey
        },
        key
      )
    );
  }
  set(key, value) {
    return super.set(
      internSet(
        {
          map: this.map,
          initKey: this.initKey
        },
        key
      ),
      value
    );
  }
  delete(key) {
    return super.delete(
      internDelete(
        {
          map: this.map,
          initKey: this.initKey
        },
        key
      )
    );
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/base.js
import { deepMix } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Base = class {
  constructor(options) {
    this.options = deepMix({}, this.getDefaultOptions());
    this.update(options);
  }
  getOptions() {
    return this.options;
  }
  update(updateOptions = {}) {
    this.options = deepMix({}, this.options, updateOptions);
    this.rescale(updateOptions);
  }
  rescale(options) {}
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/ordinal.js
var defaultUnknown = Symbol('defaultUnknown');
function updateIndexMap(target, arr, key) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!target.has(arr[i])) {
      target.set(key(arr[i]), i);
    }
  }
}
function mapBetweenArrByMapIndex(options) {
  const { value, from, to, mapper, notFoundReturn } = options;
  let mappedIndex = mapper.get(value);
  if (mappedIndex === void 0) {
    if (notFoundReturn !== defaultUnknown) {
      return notFoundReturn;
    }
    mappedIndex = from.push(value) - 1;
    mapper.set(value, mappedIndex);
  }
  return to[mappedIndex % to.length];
}
function createKey(d) {
  if (d instanceof Date) return d2 => `${d2}`;
  if (typeof d === 'object') return d2 => JSON.stringify(d2);
  return d2 => d2;
}
var Ordinal = class extends Base {
  constructor(options) {
    super(options);
  }
  getDefaultOptions() {
    return {
      domain: [],
      range: [],
      unknown: defaultUnknown
    };
  }
  map(x) {
    if (this.domainIndexMap.size === 0) {
      updateIndexMap(this.domainIndexMap, this.getDomain(), this.domainKey);
    }
    return mapBetweenArrByMapIndex({
      value: this.domainKey(x),
      mapper: this.domainIndexMap,
      from: this.getDomain(),
      to: this.getRange(),
      notFoundReturn: this.options.unknown
    });
  }
  invert(y) {
    if (this.rangeIndexMap.size === 0) {
      updateIndexMap(this.rangeIndexMap, this.getRange(), this.rangeKey);
    }
    return mapBetweenArrByMapIndex({
      value: this.rangeKey(y),
      mapper: this.rangeIndexMap,
      from: this.getRange(),
      to: this.getDomain(),
      notFoundReturn: this.options.unknown
    });
  }
  rescale(options) {
    const [d] = this.options.domain;
    const [r] = this.options.range;
    this.domainKey = createKey(d);
    this.rangeKey = createKey(r);
    if (!this.rangeIndexMap) {
      this.rangeIndexMap = /* @__PURE__ */ new Map();
      this.domainIndexMap = /* @__PURE__ */ new Map();
      return;
    }
    if (!options || options.range) {
      this.rangeIndexMap.clear();
    }
    if (!options || options.domain || options.compare) {
      this.domainIndexMap.clear();
      this.sortedDomain = void 0;
    }
  }
  clone() {
    return new Ordinal(this.options);
  }
  getRange() {
    return this.options.range;
  }
  getDomain() {
    if (this.sortedDomain) return this.sortedDomain;
    const { domain, compare } = this.options;
    this.sortedDomain = compare ? [...domain].sort(compare) : domain;
    return this.sortedDomain;
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/band.js
function normalize(array) {
  const min = Math.min(...array);
  return array.map(d => d / min);
}
function splice(array, n) {
  const sn = array.length;
  const diff = n - sn;
  return diff > 0 ? [...array, ...new Array(diff).fill(1)] : diff < 0 ? array.slice(0, n) : array;
}
function pretty(n) {
  return Math.round(n * 1e12) / 1e12;
}
function computeFlexBandState(options) {
  const { domain, range, paddingOuter, paddingInner, flex: F, round: round2, align } = options;
  const n = domain.length;
  const flex = splice(F, n);
  const [start, end] = range;
  const width = end - start;
  const ratio = (2 / n) * paddingOuter + 1 - (1 / n) * paddingInner;
  const stepSum = width / ratio;
  const PI = (stepSum * paddingInner) / n;
  const bandWidthSum = stepSum - n * PI;
  const normalizedFlex = normalize(flex);
  const flexSum = normalizedFlex.reduce((sum, value) => sum + value);
  const minBandWidth = bandWidthSum / flexSum;
  const valueBandWidth = new InternMap(
    domain.map((d, i) => {
      const bandWidth = normalizedFlex[i] * minBandWidth;
      return [d, round2 ? Math.floor(bandWidth) : bandWidth];
    })
  );
  const valueStep = new InternMap(
    domain.map((d, i) => {
      const bandWidth = normalizedFlex[i] * minBandWidth;
      const step = bandWidth + PI;
      return [d, round2 ? Math.floor(step) : step];
    })
  );
  const finalStepSum = Array.from(valueStep.values()).reduce((sum, value) => sum + value);
  const outerPaddingSum = width - (finalStepSum - (finalStepSum / n) * paddingInner);
  const offset2 = outerPaddingSum * align;
  const bandStart = start + offset2;
  let prev = round2 ? Math.round(bandStart) : bandStart;
  const adjustedRange = new Array(n);
  for (let i = 0; i < n; i += 1) {
    adjustedRange[i] = pretty(prev);
    const value = domain[i];
    prev += valueStep.get(value);
  }
  return {
    valueBandWidth,
    valueStep,
    adjustedRange
  };
}
function computeBandState(options) {
  var _a;
  const { domain } = options;
  const n = domain.length;
  if (n === 0) {
    return {
      valueBandWidth: void 0,
      valueStep: void 0,
      adjustedRange: []
    };
  }
  const hasFlex = !!((_a = options.flex) === null || _a === void 0 ? void 0 : _a.length);
  if (hasFlex) {
    return computeFlexBandState(options);
  }
  const { range, paddingOuter, paddingInner, round: round2, align } = options;
  let step;
  let bandWidth;
  let rangeStart = range[0];
  const rangeEnd = range[1];
  const deltaRange = rangeEnd - rangeStart;
  const outerTotal = paddingOuter * 2;
  const innerTotal = n - paddingInner;
  step = deltaRange / Math.max(1, outerTotal + innerTotal);
  if (round2) {
    step = Math.floor(step);
  }
  rangeStart += (deltaRange - step * (n - paddingInner)) * align;
  bandWidth = step * (1 - paddingInner);
  if (round2) {
    rangeStart = Math.round(rangeStart);
    bandWidth = Math.round(bandWidth);
  }
  const adjustedRange = new Array(n).fill(0).map((_, i) => rangeStart + i * step);
  return {
    valueStep: step,
    valueBandWidth: bandWidth,
    adjustedRange
  };
}
var Band = class extends Ordinal {
  constructor(options) {
    super(options);
  }
  getDefaultOptions() {
    return {
      domain: [],
      range: [0, 1],
      align: 0.5,
      round: false,
      paddingInner: 0,
      paddingOuter: 0,
      padding: 0,
      unknown: defaultUnknown,
      flex: []
    };
  }
  clone() {
    return new Band(this.options);
  }
  getStep(x) {
    if (this.valueStep === void 0) return 1;
    if (typeof this.valueStep === 'number') {
      return this.valueStep;
    }
    if (x === void 0) return Array.from(this.valueStep.values())[0];
    return this.valueStep.get(x);
  }
  getBandWidth(x) {
    if (this.valueBandWidth === void 0) return 1;
    if (typeof this.valueBandWidth === 'number') {
      return this.valueBandWidth;
    }
    if (x === void 0) return Array.from(this.valueBandWidth.values())[0];
    return this.valueBandWidth.get(x);
  }
  getRange() {
    return this.adjustedRange;
  }
  getPaddingInner() {
    const { padding, paddingInner } = this.options;
    return padding > 0 ? padding : paddingInner;
  }
  getPaddingOuter() {
    const { padding, paddingOuter } = this.options;
    return padding > 0 ? padding : paddingOuter;
  }
  rescale() {
    super.rescale();
    const { align, domain, range, round: round2, flex } = this.options;
    const { adjustedRange, valueBandWidth, valueStep } = computeBandState({
      align,
      range,
      round: round2,
      flex,
      paddingInner: this.getPaddingInner(),
      paddingOuter: this.getPaddingOuter(),
      domain
    });
    this.valueStep = valueStep;
    this.valueBandWidth = valueBandWidth;
    this.adjustedRange = adjustedRange;
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/constant.js
import { isNumber as isNumber2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/tick-methods/d3-ticks.js
var d3Ticks = (begin, end, count) => {
  let n;
  let ticks;
  let start = begin;
  let stop = end;
  if (start === stop && count > 0) {
    return [start];
  }
  let step = tickIncrement(start, stop, count);
  if (step === 0 || !Number.isFinite(step)) {
    return [];
  }
  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array((n = Math.ceil(stop - start + 1)));
    for (let i = 0; i < n; i += 1) {
      ticks[i] = (start + i) * step;
    }
  } else {
    step = -step;
    start = Math.ceil(start * step);
    stop = Math.floor(stop * step);
    ticks = new Array((n = Math.ceil(stop - start + 1)));
    for (let i = 0; i < n; i += 1) {
      ticks[i] = (start + i) / step;
    }
  }
  return ticks;
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/constant.js
var Constant = class extends Base {
  getDefaultOptions() {
    return {
      range: [0],
      domain: [0, 1],
      unknown: void 0,
      tickCount: 5,
      tickMethod: d3Ticks
    };
  }
  map(_) {
    const [v] = this.options.range;
    return v !== void 0 ? v : this.options.unknown;
  }
  invert(x) {
    const [v] = this.options.range;
    return x === v && v !== void 0 ? this.options.domain : [];
  }
  getTicks() {
    const { tickMethod, domain, tickCount } = this.options;
    const [a, b] = domain;
    if (!isNumber2(a) || !isNumber2(b)) return [];
    return tickMethod(a, b, tickCount);
  }
  clone() {
    return new Constant(this.options);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/identity.js
import { isNumber as isNumber3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/tick-methods/wilkinson-extended.js
import { indexOf, size } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/pretty-number.js
function prettyNumber(n) {
  return Math.abs(n) < 1e-15 ? n : parseFloat(n.toFixed(15));
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/tick-methods/wilkinson-extended.js
var DEFAULT_Q = [1, 5, 2, 2.5, 4, 3];
var eps = Number.EPSILON * 100;
function mod(n, m) {
  return ((n % m) + m) % m;
}
function round(n) {
  return Math.round(n * 1e12) / 1e12;
}
function simplicity(q, Q, j, lmin, lmax, lstep) {
  const n = size(Q);
  const i = indexOf(Q, q);
  let v = 0;
  const m = mod(lmin, lstep);
  if ((m < eps || lstep - m < eps) && lmin <= 0 && lmax >= 0) {
    v = 1;
  }
  return 1 - i / (n - 1) - j + v;
}
function simplicityMax(q, Q, j) {
  const n = size(Q);
  const i = indexOf(Q, q);
  const v = 1;
  return 1 - i / (n - 1) - j + v;
}
function density(k, m, dMin, dMax, lMin, lMax) {
  const r = (k - 1) / (lMax - lMin);
  const rt = (m - 1) / (Math.max(lMax, dMax) - Math.min(dMin, lMin));
  return 2 - Math.max(r / rt, rt / r);
}
function densityMax(k, m) {
  if (k >= m) {
    return 2 - (k - 1) / (m - 1);
  }
  return 1;
}
function coverage(dMin, dMax, lMin, lMax) {
  const range = dMax - dMin;
  return 1 - (0.5 * ((dMax - lMax) ** 2 + (dMin - lMin) ** 2)) / (0.1 * range) ** 2;
}
function coverageMax(dMin, dMax, span) {
  const range = dMax - dMin;
  if (span > range) {
    const half = (span - range) / 2;
    return 1 - half ** 2 / (0.1 * range) ** 2;
  }
  return 1;
}
function legibility() {
  return 1;
}
var wilkinsonExtended = (dMin, dMax, n = 5, onlyLoose = true, Q = DEFAULT_Q, w = [0.25, 0.2, 0.5, 0.05]) => {
  const m = n < 0 ? 0 : Math.round(n);
  if (Number.isNaN(dMin) || Number.isNaN(dMax) || typeof dMin !== 'number' || typeof dMax !== 'number' || !m) {
    return [];
  }
  if (dMax - dMin < 1e-15 || m === 1) {
    return [dMin];
  }
  const best = {
    score: -2,
    lmin: 0,
    lmax: 0,
    lstep: 0
  };
  let j = 1;
  while (j < Infinity) {
    for (let i = 0; i < Q.length; i += 1) {
      const q = Q[i];
      const sm = simplicityMax(q, Q, j);
      if (w[0] * sm + w[1] + w[2] + w[3] < best.score) {
        j = Infinity;
        break;
      }
      let k = 2;
      while (k < Infinity) {
        const dm = densityMax(k, m);
        if (w[0] * sm + w[1] + w[2] * dm + w[3] < best.score) {
          break;
        }
        const delta = (dMax - dMin) / (k + 1) / j / q;
        let z = Math.ceil(Math.log10(delta));
        while (z < Infinity) {
          const step = j * q * 10 ** z;
          const cm = coverageMax(dMin, dMax, step * (k - 1));
          if (w[0] * sm + w[1] * cm + w[2] * dm + w[3] < best.score) {
            break;
          }
          const minStart = Math.floor(dMax / step) * j - (k - 1) * j;
          const maxStart = Math.ceil(dMin / step) * j;
          if (minStart <= maxStart) {
            const count = maxStart - minStart;
            for (let i2 = 0; i2 <= count; i2 += 1) {
              const start = minStart + i2;
              const lMin = start * (step / j);
              const lMax = lMin + step * (k - 1);
              const lStep = step;
              const s = simplicity(q, Q, j, lMin, lMax, lStep);
              const c = coverage(dMin, dMax, lMin, lMax);
              const g = density(k, m, dMin, dMax, lMin, lMax);
              const l = legibility();
              const score = w[0] * s + w[1] * c + w[2] * g + w[3] * l;
              if (score > best.score && (!onlyLoose || (lMin <= dMin && lMax >= dMax))) {
                best.lmin = lMin;
                best.lmax = lMax;
                best.lstep = lStep;
                best.score = score;
              }
            }
          }
          z += 1;
        }
        k += 1;
      }
    }
    j += 1;
  }
  const lmax = prettyNumber(best.lmax);
  const lmin = prettyNumber(best.lmin);
  const lstep = prettyNumber(best.lstep);
  const tickCount = Math.floor(round((lmax - lmin) / lstep)) + 1;
  const ticks = new Array(tickCount);
  ticks[0] = prettyNumber(lmin);
  for (let i = 1; i < tickCount; i += 1) {
    ticks[i] = prettyNumber(ticks[i - 1] + lstep);
  }
  return ticks;
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/identity.js
var Identity = class extends Base {
  getDefaultOptions() {
    return {
      domain: [0, 1],
      range: [0, 1],
      tickCount: 5,
      unknown: void 0,
      tickMethod: wilkinsonExtended
    };
  }
  map(x) {
    return isValid(x) ? x : this.options.unknown;
  }
  invert(x) {
    return this.map(x);
  }
  clone() {
    return new Identity(this.options);
  }
  getTicks() {
    const { domain, tickCount, tickMethod } = this.options;
    const [min, max] = domain;
    if (!isNumber3(min) || !isNumber3(max)) return [];
    return tickMethod(min, max, tickCount);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/linear.js
import { identity as identity2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/continuous.js
import { identity } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var createBiMap = (domain, range, createInterpolate) => {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  let normalize2;
  let interpolate;
  if (d0 < d1) {
    normalize2 = createNormalize(d0, d1);
    interpolate = createInterpolate(r0, r1);
  } else {
    normalize2 = createNormalize(d1, d0);
    interpolate = createInterpolate(r1, r0);
  }
  return compose(interpolate, normalize2);
};
var createPolyMap = (domain, range, createInterpolate) => {
  const len = Math.min(domain.length, range.length) - 1;
  const normalizeList = new Array(len);
  const interpolateList = new Array(len);
  const reverse = domain[0] > domain[len];
  const ascendingDomain = reverse ? [...domain].reverse() : domain;
  const ascendingRange = reverse ? [...range].reverse() : range;
  for (let i = 0; i < len; i += 1) {
    normalizeList[i] = createNormalize(ascendingDomain[i], ascendingDomain[i + 1]);
    interpolateList[i] = createInterpolate(ascendingRange[i], ascendingRange[i + 1]);
  }
  return x => {
    const i = bisect(domain, x, 1, len) - 1;
    const normalize2 = normalizeList[i];
    const interpolate = interpolateList[i];
    return compose(interpolate, normalize2)(x);
  };
};
var choosePiecewise = (domain, range, interpolate, shouldRound) => {
  const n = Math.min(domain.length, range.length);
  const createPiecewise = n > 2 ? createPolyMap : createBiMap;
  const createInterpolate = shouldRound ? createInterpolateRound : interpolate;
  return createPiecewise(domain, range, createInterpolate);
};
var Continuous = class extends Base {
  getDefaultOptions() {
    return {
      domain: [0, 1],
      range: [0, 1],
      nice: false,
      clamp: false,
      round: false,
      interpolate: createInterpolateNumber,
      tickCount: 5
    };
  }
  map(x) {
    if (!isValid(x)) return this.options.unknown;
    return this.output(x);
  }
  invert(x) {
    if (!isValid(x)) return this.options.unknown;
    return this.input(x);
  }
  nice() {
    if (!this.options.nice) return;
    const [min, max, tickCount, ...rest] = this.getTickMethodOptions();
    this.options.domain = this.chooseNice()(min, max, tickCount, ...rest);
  }
  getTicks() {
    const { tickMethod } = this.options;
    const [min, max, tickCount, ...rest] = this.getTickMethodOptions();
    return tickMethod(min, max, tickCount, ...rest);
  }
  getTickMethodOptions() {
    const { domain, tickCount } = this.options;
    const min = domain[0];
    const max = domain[domain.length - 1];
    return [min, max, tickCount];
  }
  chooseNice() {
    return d3LinearNice;
  }
  rescale() {
    this.nice();
    const [transform, untransform] = this.chooseTransforms();
    this.composeOutput(transform, this.chooseClamp(transform));
    this.composeInput(transform, untransform, this.chooseClamp(untransform));
  }
  chooseClamp(transform) {
    const { clamp: shouldClamp, range } = this.options;
    const domain = this.options.domain.map(transform);
    const n = Math.min(domain.length, range.length);
    return shouldClamp ? createClamp(domain[0], domain[n - 1]) : identity;
  }
  composeOutput(transform, clamp) {
    const { domain, range, round: round2, interpolate } = this.options;
    const piecewise = choosePiecewise(domain.map(transform), range, interpolate, round2);
    this.output = compose(piecewise, clamp, transform);
  }
  composeInput(transform, untransform, clamp) {
    const { domain, range } = this.options;
    const piecewise = choosePiecewise(range, domain.map(transform), createInterpolateNumber);
    this.input = compose(untransform, clamp, piecewise);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/linear.js
var Linear = class extends Continuous {
  getDefaultOptions() {
    return {
      domain: [0, 1],
      range: [0, 1],
      unknown: void 0,
      nice: false,
      clamp: false,
      round: false,
      interpolate: createInterpolateValue,
      tickMethod: d3Ticks,
      tickCount: 5
    };
  }
  chooseTransforms() {
    return [identity2, identity2];
  }
  clone() {
    return new Linear(this.options);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/point.js
var Point = class extends Band {
  getDefaultOptions() {
    return {
      domain: [],
      range: [0, 1],
      align: 0.5,
      round: false,
      padding: 0,
      unknown: defaultUnknown,
      paddingInner: 1,
      paddingOuter: 0
    };
  }
  constructor(options) {
    super(options);
  }
  getPaddingInner() {
    return 1;
  }
  clone() {
    return new Point(this.options);
  }
  update(options) {
    super.update(options);
  }
  getPaddingOuter() {
    return this.options.padding;
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/pow.js
import { identity as identity3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var transformPow = exponent => {
  return x => {
    return x < 0 ? -((-x) ** exponent) : x ** exponent;
  };
};
var transformPowInvert = exponent => {
  return x => {
    return x < 0 ? -((-x) ** (1 / exponent)) : x ** (1 / exponent);
  };
};
var transformSqrt = x => {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
};
var Pow = class extends Continuous {
  getDefaultOptions() {
    return {
      domain: [0, 1],
      range: [0, 1],
      nice: false,
      clamp: false,
      round: false,
      exponent: 2,
      interpolate: createInterpolateValue,
      tickMethod: d3Ticks,
      tickCount: 5
    };
  }
  constructor(options) {
    super(options);
  }
  chooseTransforms() {
    const { exponent } = this.options;
    if (exponent === 1) return [identity3, identity3];
    const transform = exponent === 0.5 ? transformSqrt : transformPow(exponent);
    const untransform = transformPowInvert(exponent);
    return [transform, untransform];
  }
  clone() {
    return new Pow(this.options);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/sqrt.js
var Sqrt = class extends Pow {
  getDefaultOptions() {
    return {
      domain: [0, 1],
      range: [0, 1],
      nice: false,
      clamp: false,
      round: false,
      interpolate: createInterpolateValue,
      tickMethod: d3Ticks,
      tickCount: 5,
      exponent: 0.5
    };
  }
  constructor(options) {
    super(options);
  }
  update(options) {
    super.update(options);
  }
  clone() {
    return new Sqrt(this.options);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/threshold.js
var Threshold = class extends Base {
  constructor(options) {
    super(options);
  }
  getDefaultOptions() {
    return {
      domain: [0.5],
      range: [0, 1]
    };
  }
  map(x) {
    if (!isValid(x)) return this.options.unknown;
    const index = bisect(this.thresholds, x, 0, this.n);
    return this.options.range[index];
  }
  invert(y) {
    const { range } = this.options;
    const index = range.indexOf(y);
    const domain = this.thresholds;
    return [domain[index - 1], domain[index]];
  }
  clone() {
    return new Threshold(this.options);
  }
  rescale() {
    const { domain, range } = this.options;
    this.n = Math.min(domain.length, range.length - 1);
    this.thresholds = domain;
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/tick-methods/d3-log.js
var d3Log = (a, b, n, base = 10) => {
  const shouldReflect = a < 0;
  const pow = pows(base, shouldReflect);
  const log = logs(base, shouldReflect);
  const r = b < a;
  const min = r ? b : a;
  const max = r ? a : b;
  let i = log(min);
  let j = log(max);
  let ticks = [];
  if (!(base % 1) && j - i < n) {
    i = Math.floor(i);
    j = Math.ceil(j);
    if (shouldReflect) {
      for (; i <= j; i += 1) {
        const p = pow(i);
        for (let k = base - 1; k >= 1; k -= 1) {
          const t = p * k;
          if (t > max) break;
          if (t >= min) ticks.push(t);
        }
      }
    } else {
      for (; i <= j; i += 1) {
        const p = pow(i);
        for (let k = 1; k < base; k += 1) {
          const t = p * k;
          if (t > max) break;
          if (t >= min) ticks.push(t);
        }
      }
    }
    if (ticks.length * 2 < n) ticks = d3Ticks(min, max, n);
  } else {
    ticks = d3Ticks(i, j, Math.min(j - i, n)).map(pow);
  }
  return r ? ticks.reverse() : ticks;
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/log.js
var Log = class extends Continuous {
  getDefaultOptions() {
    return {
      domain: [1, 10],
      range: [0, 1],
      base: 10,
      interpolate: createInterpolateValue,
      tickMethod: d3Log,
      tickCount: 5
    };
  }
  chooseNice() {
    return d3LogNice;
  }
  getTickMethodOptions() {
    const { domain, tickCount, base } = this.options;
    const min = domain[0];
    const max = domain[domain.length - 1];
    return [min, max, tickCount, base];
  }
  chooseTransforms() {
    const { base, domain } = this.options;
    const shouldReflect = domain[0] < 0;
    return [logs(base, shouldReflect), pows(base, shouldReflect)];
  }
  clone() {
    return new Log(this.options);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/quantize.js
var Quantize = class extends Threshold {
  getDefaultOptions() {
    return {
      domain: [0, 1],
      range: [0.5],
      nice: false,
      tickCount: 5,
      tickMethod: wilkinsonExtended
    };
  }
  constructor(options) {
    super(options);
  }
  nice() {
    const { nice } = this.options;
    if (nice) {
      const [min, max, tickCount] = this.getTickMethodOptions();
      this.options.domain = d3LinearNice(min, max, tickCount);
    }
  }
  getTicks() {
    const { tickMethod } = this.options;
    const [min, max, tickCount] = this.getTickMethodOptions();
    return tickMethod(min, max, tickCount);
  }
  getTickMethodOptions() {
    const { domain, tickCount } = this.options;
    const min = domain[0];
    const max = domain[domain.length - 1];
    return [min, max, tickCount];
  }
  rescale() {
    this.nice();
    const { range, domain } = this.options;
    const [x0, x1] = domain;
    this.n = range.length - 1;
    this.thresholds = new Array(this.n);
    for (let i = 0; i < this.n; i += 1) {
      this.thresholds[i] = ((i + 1) * x1 - (i - this.n) * x0) / (this.n + 1);
    }
  }
  invert(y) {
    const [a, b] = super.invert(y);
    const [x0, x1] = this.options.domain;
    return a === void 0 && b === void 0 ? [a, b] : [a || x0, b || x1];
  }
  getThresholds() {
    return this.thresholds;
  }
  clone() {
    return new Quantize(this.options);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/utils/create-quartile.js
function quantileSorted(arr, percentage) {
  const len = arr.length;
  if (!len) {
    return void 0;
  }
  if (len < 2) {
    return arr[len - 1];
  }
  const i = (len - 1) * percentage;
  const i0 = Math.floor(i);
  const v0 = arr[i0];
  const v1 = arr[i0 + 1];
  return v0 + (v1 - v0) * (i - i0);
}
function createQuartile(arr, n, isSorted = false) {
  const numberArr = arr;
  if (!isSorted) {
    numberArr.sort((a, b) => a - b);
  }
  const tmp = [];
  for (let i = 1; i < n; i += 1) {
    tmp.push(quantileSorted(numberArr, i / n));
  }
  return tmp;
}

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/quantile.js
var Quantile = class extends Threshold {
  getDefaultOptions() {
    return {
      domain: [],
      range: [],
      tickCount: 5,
      unknown: void 0,
      tickMethod: wilkinsonExtended
    };
  }
  constructor(options) {
    super(options);
  }
  rescale() {
    const { domain, range } = this.options;
    this.n = range.length - 1;
    this.thresholds = createQuartile(domain, this.n + 1, false);
  }
  invert(y) {
    const [a, b] = super.invert(y);
    const { domain } = this.options;
    const dMin = domain[0];
    const dMax = domain[domain.length - 1];
    return a === void 0 && b === void 0 ? [a, b] : [a || dMin, b || dMax];
  }
  getThresholds() {
    return this.thresholds;
  }
  clone() {
    return new Quantile(this.options);
  }
  getTicks() {
    const { tickCount, domain, tickMethod } = this.options;
    const lastIndex = domain.length - 1;
    const min = domain[0];
    const max = domain[lastIndex];
    return tickMethod(min, max, tickCount);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/time.js
import { identity as identity4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import { format } from '/cdn/v99/fecha@4.2.3/es2022/fecha.development.js';

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/tick-methods/d3-time.js
var d3Time = (min, max, count, interval, utc) => {
  const r = min > max;
  const lo = r ? max : min;
  const hi = r ? min : max;
  const [tickInterval, step] = findTickInterval(lo, hi, count, interval, utc);
  const ticks = tickInterval.range(lo, new Date(+hi + 1), step, true);
  return r ? ticks.reverse() : ticks;
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/time.js
function offset(date) {
  const minuteOffset = date.getTimezoneOffset();
  const d = new Date(date);
  d.setMinutes(d.getMinutes() + minuteOffset, d.getSeconds(), d.getMilliseconds());
  return d;
}
var Time = class extends Continuous {
  getDefaultOptions() {
    return {
      domain: [new Date(2e3, 0, 1), new Date(2e3, 0, 2)],
      range: [0, 1],
      nice: false,
      tickCount: 5,
      tickInterval: void 0,
      unknown: void 0,
      clamp: false,
      tickMethod: d3Time,
      interpolate: createInterpolateNumber,
      mask: void 0,
      utc: false
    };
  }
  chooseTransforms() {
    const transform = x => +x;
    const untransform = x => new Date(x);
    return [transform, untransform];
  }
  chooseNice() {
    return d3TimeNice;
  }
  getTickMethodOptions() {
    const { domain, tickCount, tickInterval, utc } = this.options;
    const min = domain[0];
    const max = domain[domain.length - 1];
    return [min, max, tickCount, tickInterval, utc];
  }
  getFormatter() {
    const { mask, utc } = this.options;
    const maskMap = utc ? utcIntervalMap : localIntervalMap;
    const time = utc ? offset : identity4;
    return d => format(time(d), mask || chooseNiceTimeMask(d, maskMap));
  }
  clone() {
    return new Time(this.options);
  }
};

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/sequential.js
import { identity as identity5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
    d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Sequential_1;
function rangeOf(interpolator) {
  return [interpolator(0), interpolator(1)];
}
var normalizeDomain = domain => {
  const [d0, d1] = domain;
  const normalize2 = compose(createInterpolateNumber(0, 1), createNormalize(d0, d1));
  return normalize2;
};
var Sequential = (Sequential_1 = class Sequential2 extends Linear {
  getDefaultOptions() {
    return {
      domain: [0, 1],
      unknown: void 0,
      nice: false,
      clamp: false,
      round: false,
      interpolator: identity5,
      tickMethod: d3Ticks,
      tickCount: 5
    };
  }
  constructor(options) {
    super(options);
  }
  clone() {
    return new Sequential_1(this.options);
  }
});
Sequential = Sequential_1 = __decorate([interpolatize(rangeOf, normalizeDomain)], Sequential);

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/scales/diverging.js
import { identity as identity6 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
    d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Diverging_1;
function rangeOf2(interpolator) {
  return [interpolator(0), interpolator(0.5), interpolator(1)];
}
var normalizeDomain2 = domain => {
  const [d0, d1, d2] = domain;
  const normalizeLeft = compose(createInterpolateNumber(0, 0.5), createNormalize(d0, d1));
  const normalizeRight = compose(createInterpolateNumber(0.5, 1), createNormalize(d1, d2));
  return x => {
    if (d0 > d2) {
      return x < d1 ? normalizeRight(x) : normalizeLeft(x);
    } else {
      return x < d1 ? normalizeLeft(x) : normalizeRight(x);
    }
  };
};
var Diverging = (Diverging_1 = class Diverging2 extends Linear {
  getDefaultOptions() {
    return {
      domain: [0, 0.5, 1],
      unknown: void 0,
      nice: false,
      clamp: false,
      round: false,
      interpolator: identity6,
      tickMethod: d3Ticks,
      tickCount: 5
    };
  }
  constructor(options) {
    super(options);
  }
  clone() {
    return new Diverging_1(this.options);
  }
});
Diverging = Diverging_1 = __decorate2([interpolatize(rangeOf2, normalizeDomain2)], Diverging);

// esm-build-bab16a510b469df5da6c669d3a61def0a7682302-7ea9bbf1/node_modules/@antv/scale/esm/tick-methods/r-pretty.js
var rPretty = (min, max, m = 5) => {
  if (min === max) {
    return [min];
  }
  const n = m < 0 ? 0 : Math.round(m);
  if (n === 0) return [];
  const h = 1.5;
  const h5 = 0.5 + 1.5 * h;
  const d = max - min;
  const c = d / n;
  const base = 10 ** Math.floor(Math.log10(c));
  let unit = base;
  if (2 * base - c < h * (c - unit)) {
    unit = 2 * base;
    if (5 * base - c < h5 * (c - unit)) {
      unit = 5 * base;
      if (10 * base - c < h * (c - unit)) {
        unit = 10 * base;
      }
    }
  }
  const nu = Math.ceil(max / unit);
  const ns = Math.floor(min / unit);
  const hi = Math.max(nu * unit, max);
  const lo = Math.min(ns * unit, min);
  const size2 = Math.floor((hi - lo) / unit) + 1;
  const ticks = new Array(size2);
  for (let i = 0; i < size2; i += 1) {
    ticks[i] = prettyNumber(lo + i * unit);
  }
  return ticks;
};
export {
  Band,
  Base,
  Constant,
  Continuous,
  DURATION_DAY,
  DURATION_HOUR,
  DURATION_MINUTE,
  DURATION_MONTH,
  DURATION_SECOND,
  DURATION_WEEK,
  DURATION_YEAR,
  Diverging,
  Identity,
  Linear,
  Log,
  Ordinal,
  Point,
  Pow,
  Quantile,
  Quantize,
  Sequential,
  Sqrt,
  Threshold,
  Time,
  createInterpolateColor,
  createInterpolateNumber,
  createInterpolateValue,
  d3Log,
  d3Ticks,
  d3Time,
  rPretty,
  wilkinsonExtended
};
