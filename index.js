// Implement the TodoList interface
var BasicTodoList = /** @class */ (function () {
    function BasicTodoList() {
        this.tasks = [];
    }
    BasicTodoList.prototype.addTask = function (task) {
        var newTask = { task: task, completed: false };
        this.tasks.push(newTask);
        console.log("Task added: ".concat(task));
    };
    BasicTodoList.prototype.completeTask = function (index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
            console.log("Task completed: ".concat(this.tasks[index].task));
        }
        else {
            console.log("Invalid task index");
        }
    };
    BasicTodoList.prototype.listTasks = function () {
        console.log("Tasks:");
        this.tasks.forEach(function (task, index) {
            console.log("".concat(index + 1, ". ").concat(task.completed ? "[X]" : "[ ]", " ").concat(task.task));
        });
    };
    return BasicTodoList;
}());
// Example usage
var todoList = new BasicTodoList();
todoList.addTask("Buy groceries");
todoList.addTask("Read a book");
todoList.listTasks();
todoList.completeTask(1);
todoList.listTasks();
