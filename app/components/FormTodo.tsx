"use client";
import { createTodo } from "@/app/libs/actions/todosActions";
import { useRef } from "react";
import ButtonForm from "./ButtonForm";
import toast from 'react-hot-toast';
import { todoZodSchema} from "../zod-schema/todoZod";
import { ZodError } from "zod";

const FormTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (data: FormData) => {
    const title = data.get("title") as string;
    try {
  
      //todoZodSchema.parse({ title });
      const response  = await createTodo(title);
      console.log(response);
      if (!response.success) {
    
        toast.error(response.message);
      } else {
        toast.success('Successfully !')
      }
     


    } catch (error) {
      if (error instanceof ZodError) {
        return error.issues.map((issue) => toast.error(issue.message));
      }
    } finally {
      formRef.current?.reset();
    }

    return


    
 
 
    
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
