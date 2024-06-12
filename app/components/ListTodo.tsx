import { TodoInterface } from "../types/todoInterface";
import ItemTodo from "./ItemTodo";

interface ListTodoProps {
  todos: TodoInterface[];
}



const ListTodo = ({ todos }: ListTodoProps) => {
  if (todos.length == 0) return <h2>No hay Tareas Pendientes</h2>;

  return (
    <div>
      <h1>List Todo</h1>
      <ul>
        {todos.map((todo) => (
          <ItemTodo   todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
