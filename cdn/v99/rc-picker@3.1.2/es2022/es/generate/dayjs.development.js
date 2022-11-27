/* esm.sh - esbuild bundle(rc-picker@3.1.2/es/generate/dayjs) es2022 development */
// esm-build-874ade737cd324c1d7eba2a10801b66739b89b87-f2656a8e/node_modules/rc-picker/es/generate/dayjs.js
import dayjs from '/cdn/v99/dayjs@1.11.6/es2022/dayjs.development.js';
import { noteOnce } from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import weekday from '/cdn/v99/dayjs@1.11.6/es2022/plugin/weekday.development.js';
import localeData from '/cdn/v99/dayjs@1.11.6/es2022/plugin/localeData.development.js';
import weekOfYear from '/cdn/v99/dayjs@1.11.6/es2022/plugin/weekOfYear.development.js';
import weekYear from '/cdn/v99/dayjs@1.11.6/es2022/plugin/weekYear.development.js';
import advancedFormat from '/cdn/v99/dayjs@1.11.6/es2022/plugin/advancedFormat.development.js';
import customParseFormat from '/cdn/v99/dayjs@1.11.6/es2022/plugin/customParseFormat.development.js';
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(function(o, c) {
  var proto = c.prototype;
  var oldFormat = proto.format;
  proto.format = function f(formatStr) {
    var str = (formatStr || '').replace('Wo', 'wo');
    return oldFormat.bind(this)(str);
  };
});
var localeMap = {
  bn_BD: 'bn-bd',
  by_BY: 'be',
  en_GB: 'en-gb',
  en_US: 'en',
  fr_BE: 'fr',
  fr_CA: 'fr-ca',
  hy_AM: 'hy-am',
  kmr_IQ: 'ku',
  nl_BE: 'nl-be',
  pt_BR: 'pt-br',
  zh_CN: 'zh-cn',
  zh_HK: 'zh-hk',
  zh_TW: 'zh-tw'
};
var parseLocale = function parseLocale2(locale) {
  var mapLocale = localeMap[locale];
  return mapLocale || locale.split('_')[0];
};
var parseNoMatchNotice = function parseNoMatchNotice2() {
  noteOnce(false, 'Not match any format. Please help to fire a issue about this.');
};
var generateConfig = {
  getNow: function getNow() {
    return dayjs();
  },
  getFixedDate: function getFixedDate(string) {
    return dayjs(string, ['YYYY-M-DD', 'YYYY-MM-DD']);
  },
  getEndDate: function getEndDate(date) {
    return date.endOf('month');
  },
  getWeekDay: function getWeekDay(date) {
    var clone = date.locale('en');
    return clone.weekday() + clone.localeData().firstDayOfWeek();
  },
  getYear: function getYear(date) {
    return date.year();
  },
  getMonth: function getMonth(date) {
    return date.month();
  },
  getDate: function getDate(date) {
    return date.date();
  },
  getHour: function getHour(date) {
    return date.hour();
  },
  getMinute: function getMinute(date) {
    return date.minute();
  },
  getSecond: function getSecond(date) {
    return date.second();
  },
  addYear: function addYear(date, diff) {
    return date.add(diff, 'year');
  },
  addMonth: function addMonth(date, diff) {
    return date.add(diff, 'month');
  },
  addDate: function addDate(date, diff) {
    return date.add(diff, 'day');
  },
  setYear: function setYear(date, year) {
    return date.year(year);
  },
  setMonth: function setMonth(date, month) {
    return date.month(month);
  },
  setDate: function setDate(date, num) {
    return date.date(num);
  },
  setHour: function setHour(date, hour) {
    return date.hour(hour);
  },
  setMinute: function setMinute(date, minute) {
    return date.minute(minute);
  },
  setSecond: function setSecond(date, second) {
    return date.second(second);
  },
  isAfter: function isAfter(date1, date2) {
    return date1.isAfter(date2);
  },
  isValidate: function isValidate(date) {
    return date.isValid();
  },
  locale: {
    getWeekFirstDay: function getWeekFirstDay(locale) {
      return dayjs()
        .locale(parseLocale(locale))
        .localeData()
        .firstDayOfWeek();
    },
    getWeekFirstDate: function getWeekFirstDate(locale, date) {
      return date.locale(parseLocale(locale)).weekday(0);
    },
    getWeek: function getWeek(locale, date) {
      return date.locale(parseLocale(locale)).week();
    },
    getShortWeekDays: function getShortWeekDays(locale) {
      return dayjs()
        .locale(parseLocale(locale))
        .localeData()
        .weekdaysMin();
    },
    getShortMonths: function getShortMonths(locale) {
      return dayjs()
        .locale(parseLocale(locale))
        .localeData()
        .monthsShort();
    },
    format: function format(locale, date, _format) {
      return date.locale(parseLocale(locale)).format(_format);
    },
    parse: function parse(locale, text, formats) {
      var localeStr = parseLocale(locale);
      for (var i = 0; i < formats.length; i += 1) {
        var format2 = formats[i];
        var formatText = text;
        if (format2.includes('wo') || format2.includes('Wo')) {
          var year = formatText.split('-')[0];
          var weekStr = formatText.split('-')[1];
          var firstWeek = dayjs(year, 'YYYY')
            .startOf('year')
            .locale(localeStr);
          for (var j = 0; j <= 52; j += 1) {
            var nextWeek = firstWeek.add(j, 'week');
            if (nextWeek.format('Wo') === weekStr) {
              return nextWeek;
            }
          }
          parseNoMatchNotice();
          return null;
        }
        var date = dayjs(formatText, format2, true).locale(localeStr);
        if (date.isValid()) {
          return date;
        }
      }
      if (text) {
        parseNoMatchNotice();
      }
      return null;
    }
  }
};
var dayjs_default = generateConfig;
export { dayjs_default as default };
