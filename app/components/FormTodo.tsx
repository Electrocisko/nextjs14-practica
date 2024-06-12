"use client";
import { createTodo } from "@/app/libs/actions/todosActions";
import { useRef } from "react";
import ButtonForm from "./ButtonForm";
import toast from 'react-hot-toast';

const FormTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (data: FormData) => {
    const title = data.get("title") as string;
    if (!title || !title.trim()) {
      toast.error("Title is requiered")
    }
    const response  = await createTodo(title);
    if (response.status == "error") {
      toast.error(response.error)
    }
 
    formRef.current?.reset();
  };

  return (
    <div className="mb-3">
      <form ref={formRef} action={handleSubmit}>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Ingrese Tarea"
          className="border rounded border-gray-400 mr-2 p-1 w-3/4 "
        />
        <ButtonForm />
      </form>
    </div>
  );
};

export default FormTodo;
