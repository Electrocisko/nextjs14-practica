import { TodoInterface } from "../types/todoInterface"
import {FaTrash} from "react-icons/fa"

interface ItemTodoProps {
    todo: TodoInterface
}


const ItemTodo = ({todo}: ItemTodoProps) => {
  return (
    <div className="border border-gray-400 rounded mb-2 py-2 flex justify-between">
        <span className="ml-1">{todo.title}</span>
        <button className="mr-2"><FaTrash/></button>
        
        
        </div>
  )
}

export default ItemTodo