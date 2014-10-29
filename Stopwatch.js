var Stopwatch = function () {
  "use strict";
  
  var esto = this, running = true, laps = [], i_time, f_time, p_time, e_time;
  
  this.start = function () {
    esto.restart();
  };
  
  this.pause = function () {
    p_time = new Date();
    p_time = p_time.getTime();
    running = false;
  };
  
  this.stop = function () {
    f_time = new Date();
    f_time = f_time.getTime();
    running = false;
    return esto.getElapsedTime();
  };
  
  this.lap = function () {
    laps[laps.length] = esto.getElapsedTime();
  };
  
  this.restart = function () {
    p_time = 0;
    i_time = new Date();
    i_time = i_time.getTime();
    running = true;
  };
  
  this.getElapsedTime = function () {
    return f_time - i_time - p_time;
  };
};