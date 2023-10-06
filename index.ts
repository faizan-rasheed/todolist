// Define a TodoItem interface
interface TodoItem {
  task: string;
  completed: boolean;
}

// Define a TodoList interface
interface TodoList {
  tasks: TodoItem[];
  addTask(task: string): void;
  completeTask(index: number): void;
  listTasks(): void;
}

// Implement the TodoList interface
class BasicTodoList implements TodoList {
  tasks: TodoItem[] = [];

  addTask(task: string): void {
    const newTask: TodoItem = { task, completed: false };
    this.tasks.push(newTask);
    console.log(`Task added: ${task}`);
  }

  completeTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
      console.log(`Task completed: ${this.tasks[index].task}`);
    } else {
      console.log("Invalid task index");
    }
  }

  listTasks(): void {
    console.log("Tasks:");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.completed ? "[X]" : "[ ]"} ${task.task}`);
    });
  }
}

// Example usage
const todoList: TodoList = new BasicTodoList();

todoList.addTask("Buy groceries");
todoList.addTask("Read a book");
todoList.listTasks();
todoList.completeTask(1);
todoList.listTasks();