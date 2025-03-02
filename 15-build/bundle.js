(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  class USer {
    task;

    constructor(task) {
      this.task = task;
    }

    do() {
      this.task.run();
    }
  }

  class Task {
    run() {
      console.log('Писать код');
    }
  }

  const task1 = new Task();
  const user1 = new USer(task1);

  user1.do();

}));
