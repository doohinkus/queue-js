"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t(this,n),this.items=e}var i,o,a;return i=n,(o=[{key:"enqueue",value:function(t){var e,n=0;return t instanceof Array?(n=t.length,(e=this.items).unshift.apply(e,r(t))):this.items.unshift(t),this.items.slice(0,n)}},{key:"dequeue",value:function(){return this.items.length>0?this.items.shift():this.items}},{key:"getItems",value:function(){return this.items}}])&&e(i.prototype,o),a&&e(i,a),Object.defineProperty(i,"prototype",{writable:!1}),n}();module.exports=i;
