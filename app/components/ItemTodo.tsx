"use client";
import { TodoInterface } from "../types/todoInterface";
import { FaTrash } from "react-icons/fa";
import { deleteTodo } from "../libs/actions/todosActions";
import { useTransition } from "react";
import { FaSpinner } from "react-icons/fa";
import toast from 'react-hot-toast';

interface ItemTodoProps {
  todo: TodoInterface;
}

const ItemTodo = ({ todo }: ItemTodoProps) => {
  let [isPending, startTransition] = useTransition();

  const deleteItem = async (id: string) => {
   const response =  await deleteTodo(id);
   if (response.status == "error") {
    toast.error(response.error)
  } else {
    toast.success("Success Removed")
  }
  };

  return (
    <div className="border border-gray-400 rounded mb-2 py-2 flex justify-between">
      <span className="ml-1">{todo.title}</span>
      <button
        className="mr-2"
        onClick={() => startTransition(() => deleteItem(todo.id))}
      >
        {isPending ? (
          <span className="block animate-spin">
            <FaSpinner className="transform rotate-90" />
          </span>
        ) : (
          <FaTrash />
        )}
      </button>
    </div>
  );
};

export default ItemTodo;
