/* esm.sh - esbuild bundle(stringify-entities@4.0.3) es2022 development */
// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/core.js
function core(value, options) {
  value = value.replace(options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g, basic);
  if (options.subset || options.escapeOnly) {
    return value;
  }
  return value
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate)
    .replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, basic);
  function surrogate(pair, index, all) {
    return options.format(
      (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
      all.charCodeAt(index + 2),
      options
    );
  }
  function basic(character, index, all) {
    return options.format(character.charCodeAt(0), all.charCodeAt(index + 1), options);
  }
}
function charactersToExpression(subset) {
  const groups = [];
  let index = -1;
  while (++index < subset.length) {
    groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'));
  }
  return new RegExp('(?:' + groups.join('|') + ')', 'g');
}

// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/util/to-hexadecimal.js
function toHexadecimal(code, next, omit) {
  const value = '&#x' + code.toString(16).toUpperCase();
  return omit && next && !/[\dA-Fa-f]/.test(String.fromCharCode(next)) ? value : value + ';';
}

// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/util/to-decimal.js
function toDecimal(code, next, omit) {
  const value = '&#' + String(code);
  return omit && next && !/\d/.test(String.fromCharCode(next)) ? value : value + ';';
}

// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/util/to-named.js
import { characterEntitiesLegacy } from '/cdn/v99/character-entities-legacy@3.0.0/es2022/character-entities-legacy.development.js';
import { characterEntitiesHtml4 } from '/cdn/v99/character-entities-html4@2.1.0/es2022/character-entities-html4.development.js';

// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/constant/dangerous.js
var dangerous = ['cent', 'copy', 'divide', 'gt', 'lt', 'not', 'para', 'times'];

// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/util/to-named.js
var own = {}.hasOwnProperty;
var characters = {};
var key;
for (key in characterEntitiesHtml4) {
  if (own.call(characterEntitiesHtml4, key)) {
    characters[characterEntitiesHtml4[key]] = key;
  }
}
function toNamed(code, next, omit, attribute) {
  const character = String.fromCharCode(code);
  if (own.call(characters, character)) {
    const name = characters[character];
    const value = '&' + name;
    if (
      omit &&
      characterEntitiesLegacy.includes(name) &&
      !dangerous.includes(name) &&
      (!attribute || (next && next !== 61 && /[^\da-z]/i.test(String.fromCharCode(next))))
    ) {
      return value;
    }
    return value + ';';
  }
  return '';
}

// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/util/format-smart.js
function formatSmart(code, next, options) {
  let numeric = toHexadecimal(code, next, options.omitOptionalSemicolons);
  let named;
  if (options.useNamedReferences || options.useShortestReferences) {
    named = toNamed(code, next, options.omitOptionalSemicolons, options.attribute);
  }
  if ((options.useShortestReferences || !named) && options.useShortestReferences) {
    const decimal = toDecimal(code, next, options.omitOptionalSemicolons);
    if (decimal.length < numeric.length) {
      numeric = decimal;
    }
  }
  return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
}

// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/util/format-basic.js
function formatBasic(code) {
  return '&#x' + code.toString(16).toUpperCase() + ';';
}

// esm-build-1a39208189616a1b48aeb24f4028c501f6271b68-7adc8390/node_modules/stringify-entities/lib/index.js
function stringifyEntities(value, options) {
  return core(
    value,
    Object.assign(
      {
        format: formatSmart
      },
      options
    )
  );
}
function stringifyEntitiesLight(value, options) {
  return core(
    value,
    Object.assign(
      {
        format: formatBasic
      },
      options
    )
  );
}
export { stringifyEntities, stringifyEntitiesLight };