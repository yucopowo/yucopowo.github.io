/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/avrasm) es2022 development */
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

// esm-build-97bc21b179b3c50c1a375e23b99337ebe651759a-f069c37f/node_modules/highlight.js/lib/languages/avrasm.js
var require_avrasm = __commonJS({
  'esm-build-97bc21b179b3c50c1a375e23b99337ebe651759a-f069c37f/node_modules/highlight.js/lib/languages/avrasm.js'(
    exports,
    module
  ) {
    function avrasm(hljs) {
      return {
        name: 'AVR Assembly',
        case_insensitive: true,
        keywords: {
          $pattern: '\\.?' + hljs.IDENT_RE,
          keyword:
            'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr',
          built_in:
            'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
          meta:
            '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set'
        },
        contains: [
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.COMMENT(';', '$', {
            relevance: 0
          }),
          hljs.C_NUMBER_MODE,
          hljs.BINARY_NUMBER_MODE,
          {
            className: 'number',
            begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)'
          },
          hljs.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: "'",
            end: "[^\\\\]'",
            illegal: "[^\\\\][^']"
          },
          {
            className: 'symbol',
            begin: '^[A-Za-z0-9_.$]+:'
          },
          {
            className: 'meta',
            begin: '#',
            end: '$'
          },
          {
            className: 'subst',
            begin: '@[0-9]+'
          }
        ]
      };
    }
    module.exports = avrasm;
  }
});

// esm-build-97bc21b179b3c50c1a375e23b99337ebe651759a-f069c37f/mod.js
var __module = __toESM(require_avrasm());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
