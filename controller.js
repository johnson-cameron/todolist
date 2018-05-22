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

  vm.addTask = (task) => {
    vm.list.push({
      task: task,
      completed: false
    });
    vm.task = "";
  };

  vm.editTask = (index, thing) => {
    vm.showForm = true;

    vm.temptask = {
      task: thing
    };
    vm.tempIndex = index;
  };
  
  vm.updateTask = (index, thing) => {
    vm.list.splice(index, 1, { 
      task: thing,
      completed: false
    });
    vm.tempTask = "";
    vm.showForm = false;
    console.log("shoulda worked");
  };

  vm.removeTask = (index) => {
    vm.list.splice(index, 1);
  };

  vm.completeTask = (index, thing) => {
    vm.list[index].completed = true;
  };
  
}





angular
  .module("TodoApp", [])
  .controller("TodoController", TodoController);