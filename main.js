'use strict'
const Task1 = require('./lab1/task1');
const Task2 = require('./lab1/task2');
const Task3 = require('./lab1/task3');
const Task4 = require('./lab1/task4');
const Task5 = require('./lab1/task5');
const Task6 = require('./lab1/task6');

var Arr = new Array(4,45,32,8,12,0)
Task1.RandHex();
console.log(Task2.InputStr("my Jeff","name ", 3));
console.log(Task3.Sort(Arr));
var obj = Task4.FindMaxCountElem("simple text");
console.log(obj.letter, ": ", obj.repeats);
console.log(Task5.GetDate());
Task6.DFS();
