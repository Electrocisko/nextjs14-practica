'use client'
import {createTodo} from "@/app/libs/actions/todosActions"

const FormTodo = () => {

    const handleSubmit = async (data: FormData) => {
        const title = data.get("title") as string
        await createTodo(title)
    }


  return (
    <form action={handleSubmit}>
    <input type="text" name="title" id=""  placeholder="Ingrese Tarea" className="border rounded border-gray-400 mr-2 p-1"/>
    <button type="submit" className="border rounded border-gray-400 mr-2 p-1">Agregar</button>
</form>
  )
}

export default FormTodo