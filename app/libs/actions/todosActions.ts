'use server'
import { prisma } from "@/app/libs/prismadb";
import { error } from "console";
import {revalidatePath} from "next/cache";


export const createTodo = async (title: string) => {

  if (!title || !title.trim()) {
    return {
      status: "error",
      error: "Title is requiered Server"
    }
  }
  try {
    await prisma.todo.create({
      data : {
        title: title
      }
    })
    revalidatePath("/todo");
    return {
      status: "success",
      error: "Todo successfully added"
    }
  } catch (error) {
    return {
      status: "error",
      error: "Error in Server"
    }
  }

}

export const deleteTodo = async (id: string) => {

 

  if (!id || !id.trim) {
    return {
      error: "Id is requiered (backend)"
    }
  }
    try {
    await prisma.todo.delete({
        where: {
          id,
        }
      })
      revalidatePath("/todo");
      return {
        status:"success",
        error:""
      }
    } catch (error) {
      return {
        status: "error",
        error: "Error can not deleted"
      }
    }
}