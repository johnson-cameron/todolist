"use strict";

function TodoController(){
  const vm = this;
  vm.list = [
    {
      task: "Go to the grocery store",
      completed: false
    },
    {
      task: "Apply to 3 jobs",
      completed: false
    },
    {
      task: "Meet family Downtown",
      completed: true
    },
    {
      task: "Clean House",
      completed: false
    },
    {
      task: "Take out trash",
      completed: true
    }
  ]
}





angular
  .module("TodoApp", [])
  .controller("TodoController", TodoController);