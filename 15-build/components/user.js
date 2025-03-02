'use strict'

export class USer {
  task;

  constructor(task) {
    this.task = task;
  }

  do() {
    this.task.run();
  }
}
