import {revalidatePath} from "next/cache";
import { prisma } from "@/app/libs/prismadb";

const TodoPage = async () => {
const todos = await prisma.todo.findMany();

const createTodo = async (data: FormData) => {
    'use server'
console.log("Server Actions");
const title = data.get("title") as string;
await prisma.todo.create({
  data : {
    title: title
  }
})
revalidatePath("/todo");
}

  return (
    <div>
        <h1 className="text-center text-3xl my-10">Todos</h1>
        <form action={createTodo}>
            <input type="text" name="title" id=""  placeholder="Ingrese Tarea" className="border rounded border-gray-400 mr-2 p-1"/>
            <button type="submit" className="border rounded border-gray-400 mr-2 p-1">Agregar</button>
        </form>
       <pre>
        {JSON.stringify(todos,null, 2)} 
       </pre>
        
        
        </div>
  )
}

export default TodoPage