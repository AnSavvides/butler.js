//  butler.js 0.0.1
//
//  (c) 2014 Andreas Savvides (twitter.com/andreassavvides)
//
//  This project originally started as a fork of Waitress.js by Bjoern
//  Zinssmeister (twitter.com/zinssmeister)
//
// butler.js may be freely distributed under the MIT license.
//
(function(){
    Butler = function() {

        "use strict";

        this.completed = {};
        this.completedKeys = [];

        this.add = function(task, taskResponse) {
            this.completed[task] = taskResponse;
            this.completedKeys.push(task);
        };

        this.when = function(tasks, callback){
            this.callback = callback;
            var self = this;
            this.i = setInterval(function() {
                self.listenForAll(tasks);
            }, 50);
        };

        this.listenForAll = function(tasks) {
            var notFound = 0,
            keys = [];

            for(var i = 0; i < tasks.length; i++){
                if(this.completedKeys.indexOf(tasks[i]) === -1) notFound++;
            }
            if(notFound === 0) this.ready();
        };
        
        this.ready = function(){
            clearInterval(this.i);
            this.callback(this.completed);
        };
    };
}).call(this);