import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos =[
        {
          id: 123456789,
          text: "Do More",
          complete: false
        },
        {
          id: 123456790,
          text: "Hug Mue",
          complete: true
        },
      ];
  }

  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore;

export default TodoStore;
