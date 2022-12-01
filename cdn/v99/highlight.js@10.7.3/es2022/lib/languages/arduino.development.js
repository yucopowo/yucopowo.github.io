/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/arduino) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-9a217574260769ce147c0d1c43be57ef5ef7be78-d5d0ae80/node_modules/highlight.js/lib/languages/arduino.js
var require_arduino = __commonJS({
  'esm-build-9a217574260769ce147c0d1c43be57ef5ef7be78-d5d0ae80/node_modules/highlight.js/lib/languages/arduino.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function lookahead(re) {
      return concat('(?=', re, ')');
    }
    function optional(re) {
      return concat('(', re, ')?');
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function cPlusPlus(hljs) {
      const C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$', {
        contains: [
          {
            begin: /\\\n/
          }
        ]
      });
      const DECLTYPE_AUTO_RE = 'decltype\\(auto\\)';
      const NAMESPACE_RE = '[a-zA-Z_]\\w*::';
      const TEMPLATE_ARGUMENT_RE = '<[^<>]+>';
      const FUNCTION_TYPE_RE =
        '(' + DECLTYPE_AUTO_RE + '|' + optional(NAMESPACE_RE) + '[a-zA-Z_]\\w*' + optional(TEMPLATE_ARGUMENT_RE) + ')';
      const CPP_PRIMITIVE_TYPES = {
        className: 'keyword',
        begin: '\\b[a-z\\d_]*_t\\b'
      };
      const CHARACTER_ESCAPES = '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)';
      const STRINGS = {
        className: 'string',
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + '|.)',
            end: "'",
            illegal: '.'
          },
          hljs.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/
          })
        ]
      };
      const NUMBERS = {
        className: 'number',
        variants: [
          {
            begin: "\\b(0b[01']+)"
          },
          {
            begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
          },
          {
            begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
          }
        ],
        relevance: 0
      };
      const PREPROCESSOR = {
        className: 'meta',
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          'meta-keyword': 'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include'
        },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          hljs.inherit(STRINGS, {
            className: 'meta-string'
          }),
          {
            className: 'meta-string',
            begin: /<.*?>/
          },
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      };
      const TITLE_MODE = {
        className: 'title',
        begin: optional(NAMESPACE_RE) + hljs.IDENT_RE,
        relevance: 0
      };
      const FUNCTION_TITLE = optional(NAMESPACE_RE) + hljs.IDENT_RE + '\\s*\\(';
      const COMMON_CPP_HINTS = [
        'asin',
        'atan2',
        'atan',
        'calloc',
        'ceil',
        'cosh',
        'cos',
        'exit',
        'exp',
        'fabs',
        'floor',
        'fmod',
        'fprintf',
        'fputs',
        'free',
        'frexp',
        'auto_ptr',
        'deque',
        'list',
        'queue',
        'stack',
        'vector',
        'map',
        'set',
        'pair',
        'bitset',
        'multiset',
        'multimap',
        'unordered_set',
        'fscanf',
        'future',
        'isalnum',
        'isalpha',
        'iscntrl',
        'isdigit',
        'isgraph',
        'islower',
        'isprint',
        'ispunct',
        'isspace',
        'isupper',
        'isxdigit',
        'tolower',
        'toupper',
        'labs',
        'ldexp',
        'log10',
        'log',
        'malloc',
        'realloc',
        'memchr',
        'memcmp',
        'memcpy',
        'memset',
        'modf',
        'pow',
        'printf',
        'putchar',
        'puts',
        'scanf',
        'sinh',
        'sin',
        'snprintf',
        'sprintf',
        'sqrt',
        'sscanf',
        'strcat',
        'strchr',
        'strcmp',
        'strcpy',
        'strcspn',
        'strlen',
        'strncat',
        'strncmp',
        'strncpy',
        'strpbrk',
        'strrchr',
        'strspn',
        'strstr',
        'tanh',
        'tan',
        'unordered_map',
        'unordered_multiset',
        'unordered_multimap',
        'priority_queue',
        'make_pair',
        'array',
        'shared_ptr',
        'abort',
        'terminate',
        'abs',
        'acos',
        'vfprintf',
        'vprintf',
        'vsprintf',
        'endl',
        'initializer_list',
        'unique_ptr',
        'complex',
        'imaginary',
        'std',
        'string',
        'wstring',
        'cin',
        'cout',
        'cerr',
        'clog',
        'stdin',
        'stdout',
        'stderr',
        'stringstream',
        'istringstream',
        'ostringstream'
      ];
      const CPP_KEYWORDS = {
        keyword:
          'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',
        built_in: '_Bool _Complex _Imaginary',
        _relevance_hints: COMMON_CPP_HINTS,
        literal: 'true false nullptr NULL'
      };
      const FUNCTION_DISPATCH = {
        className: 'function.dispatch',
        relevance: 0,
        keywords: CPP_KEYWORDS,
        begin: concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, hljs.IDENT_RE, lookahead(/\s*\(/))
      };
      const EXPRESSION_CONTAINS = [
        FUNCTION_DISPATCH,
        PREPROCESSOR,
        CPP_PRIMITIVE_TYPES,
        C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        NUMBERS,
        STRINGS
      ];
      const EXPRESSION_CONTEXT = {
        variants: [
          {
            begin: /=/,
            end: /;/
          },
          {
            begin: /\(/,
            end: /\)/
          },
          {
            beginKeywords: 'new throw return else',
            end: /;/
          }
        ],
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: CPP_KEYWORDS,
            contains: EXPRESSION_CONTAINS.concat(['self']),
            relevance: 0
          }
        ]),
        relevance: 0
      };
      const FUNCTION_DECLARATION = {
        className: 'function',
        begin: '(' + FUNCTION_TYPE_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: CPP_KEYWORDS,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          {
            begin: DECLTYPE_AUTO_RE,
            keywords: CPP_KEYWORDS,
            relevance: 0
          },
          {
            begin: FUNCTION_TITLE,
            returnBegin: true,
            contains: [TITLE_MODE],
            relevance: 0
          },
          {
            begin: /::/,
            relevance: 0
          },
          {
            begin: /:/,
            endsWithParent: true,
            contains: [STRINGS, NUMBERS]
          },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: CPP_KEYWORDS,
            relevance: 0,
            contains: [
              C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              CPP_PRIMITIVE_TYPES,
              {
                begin: /\(/,
                end: /\)/,
                keywords: CPP_KEYWORDS,
                relevance: 0,
                contains: [
                  'self',
                  C_LINE_COMMENT_MODE,
                  hljs.C_BLOCK_COMMENT_MODE,
                  STRINGS,
                  NUMBERS,
                  CPP_PRIMITIVE_TYPES
                ]
              }
            ]
          },
          CPP_PRIMITIVE_TYPES,
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          PREPROCESSOR
        ]
      };
      return {
        name: 'C++',
        aliases: ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],
        keywords: CPP_KEYWORDS,
        illegal: '</',
        classNameAliases: {
          'function.dispatch': 'built_in'
        },
        contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, FUNCTION_DISPATCH, EXPRESSION_CONTAINS, [
          PREPROCESSOR,
          {
            begin:
              '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
            end: '>',
            keywords: CPP_KEYWORDS,
            contains: ['self', CPP_PRIMITIVE_TYPES]
          },
          {
            begin: hljs.IDENT_RE + '::',
            keywords: CPP_KEYWORDS
          },
          {
            className: 'class',
            beginKeywords: 'enum class struct union',
            end: /[{;:<>=]/,
            contains: [
              {
                beginKeywords: 'final class struct'
              },
              hljs.TITLE_MODE
            ]
          }
        ]),
        exports: {
          preprocessor: PREPROCESSOR,
          strings: STRINGS,
          keywords: CPP_KEYWORDS
        }
      };
    }
    function arduino(hljs) {
      const ARDUINO_KW = {
        keyword: 'boolean byte word String',
        built_in:
          'KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD ',
        _:
          'setup loop runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put',
        literal:
          'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW'
      };
      const ARDUINO = cPlusPlus(hljs);
      const kws = ARDUINO.keywords;
      kws.keyword += ' ' + ARDUINO_KW.keyword;
      kws.literal += ' ' + ARDUINO_KW.literal;
      kws.built_in += ' ' + ARDUINO_KW.built_in;
      kws._ += ' ' + ARDUINO_KW._;
      ARDUINO.name = 'Arduino';
      ARDUINO.aliases = ['ino'];
      ARDUINO.supersetOf = 'cpp';
      return ARDUINO;
    }
    module.exports = arduino;
  }
});

// esm-build-9a217574260769ce147c0d1c43be57ef5ef7be78-d5d0ae80/mod.js
var __module = __toESM(require_arduino());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
