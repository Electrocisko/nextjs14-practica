"use client";
import { createTodo } from "@/app/libs/actions/todosActions";
import { useRef } from "react";

const FormTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (data: FormData) => {
    const title = data.get("title") as string;
    if (!title || !title.trim()) {
      alert("Campo vacio");
    }
    await createTodo(title);
    formRef.current?.reset();
  };

  return (
    <form 
    ref={formRef}
    action={handleSubmit}>
      <input
        type="text"
        name="title"
        id=""
        placeholder="Ingrese Tarea"
        className="border rounded border-gray-400 mr-2 p-1"
      />
      <button type="submit" className="border rounded border-gray-400 mr-2 p-1">
        Agregar
      </button>
    </form>
  );
};

export default FormTodo;
