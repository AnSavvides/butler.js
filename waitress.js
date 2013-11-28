//  Waitress.js 0.0.1

//  (c) 2013 Bjoern Zinssmeister
//  Waitress may be freely distributed under the MIT license.
//  twitter.com/zinssmeister
//
(function(){
  Waitress = function(){

    "use strict";

    this.completed = {};
    this.completedKeys = [];
    this.add = function(task, taskResponse){
      this.completed[task] = taskResponse;
      this.completedKeys.push(task);
    };
    this.when = function(tasks, callback){
      this.callback = callback;
      var self = this;
      this.i = setInterval(function(){
        self.listenForAll(tasks);
      },50);
    };
    this.listenForAll = function(tasks){
      var notFound = 0,
          keys = [];

      for(var t = 0; t < tasks.length; t++) keys.push(tasks[t]);
      for(var i = 0; i < keys.length; i++){
        if(this.completedKeys.indexOf(keys[i]) === -1) notFound++;
      }
      if(notFound === 0) this.ready();
    };
    this.ready = function(){
      clearInterval(this.i);
      this.callback(this.completed);
    };
  };
}).call(this);