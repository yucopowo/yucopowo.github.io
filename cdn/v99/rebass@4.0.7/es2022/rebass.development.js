/* esm.sh - esbuild bundle(rebass@4.0.7) es2022 development */
// esm-build-d8f8acba05cded2e83cd4caafb44ed686334cf62-3575f6c0/node_modules/rebass/dist/index.esm.js
import React, { forwardRef } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { Box, Flex } from '/cdn/v99/reflexbox@4.0.6/es2022/reflexbox.development.js';
function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}
var Text = forwardRef(function(props, ref) {
  return React.createElement(
    Box,
    _extends(
      {
        ref,
        tx: 'text'
      },
      props
    )
  );
});
var Heading = forwardRef(function(props, ref) {
  return React.createElement(
    Box,
    _extends(
      {
        ref,
        as: 'h2',
        tx: 'text',
        variant: 'heading'
      },
      props,
      {
        __css: {
          fontSize: 4,
          fontFamily: 'heading',
          fontWeight: 'heading',
          lineHeight: 'heading'
        }
      }
    )
  );
});
var Link = forwardRef(function(props, ref) {
  return React.createElement(
    Box,
    _extends(
      {
        ref,
        as: 'a',
        variant: 'link'
      },
      props
    )
  );
});
var Button = forwardRef(function(props, ref) {
  return React.createElement(
    Box,
    _extends(
      {
        ref,
        as: 'button',
        tx: 'buttons',
        variant: 'primary'
      },
      props,
      {
        __css: {
          appearance: 'none',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: 'inherit',
          textDecoration: 'none',
          fontSize: 'inherit',
          px: 3,
          py: 2,
          color: 'white',
          bg: 'primary',
          border: 0,
          borderRadius: 4
        }
      }
    )
  );
});
var Image = forwardRef(function(props, ref) {
  return React.createElement(
    Box,
    _extends(
      {
        ref,
        as: 'img'
      },
      props,
      {
        __css: {
          maxWidth: '100%',
          height: 'auto'
        }
      }
    )
  );
});
var Card = forwardRef(function(props, ref) {
  return React.createElement(
    Box,
    _extends(
      {
        ref,
        variant: 'card'
      },
      props
    )
  );
});
export { Box, Button, Card, Flex, Heading, Image, Link, Text };
