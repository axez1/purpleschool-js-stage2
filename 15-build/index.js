'use strict'

import { USer } from "./components/user.js";
import { Task } from "./components/task.js";

const task1 = new Task();
const user1 = new USer(task1);

user1.do();