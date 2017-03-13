angular.module('app', []);

angular.module('app').controller('HomeController', HomeController)

function HomeController(){
  var vm = this;

  vm.item = [];

  vm.todos = [];

  vm.order = '';

  vm.priorities = [
			["High", 1, "list-group-item list-group-item-danger"],
			["Medium", 2, "list-group-item list-group-item-warning"],
			["Low", 3, "list-group-item list-group-item-success"]
		]; // collects priority level
// this collects the name of the list item

  vm.addTodo = function() {
  		vm.todos.push([vm.todoName, vm.priority[1], vm.priority[2]]);
  		vm.todoName = "";
  		vm.priority= "";
  	}

  vm.byHigh = function() {
		vm.order="1";
	}

	vm.byLow = function() {
		vm.order="-1";
	}

	vm.byAlphabet = function() {
		vm.order="0";
	}

};
