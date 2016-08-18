import React  from 'react'

import Todo from '../components/Todo'

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
      ],
    };
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
    <div>
      <h1>Todos</h1>
      <ul>{TodoComponents}</ul>
    </div>
    );
  }
}
