var StringBuffer = function () {
  "use strict";

  var buffer = [];
  
  this.append = function (s) {
    buffer[buffer.length] = s;
  };
  
  this.toString = function () {
    return buffer.join('');
  };
};