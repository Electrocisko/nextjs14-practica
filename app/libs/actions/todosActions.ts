'use server'
import { prisma } from "@/app/libs/prismadb";
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
    try {
      const response = await prisma.todo.delete({
        where: {
          id,
        }
      })
      return {
        status:"success"
      }
    } catch (error) {
      return {
        status: "error",
        error: "Error in Server"
      }
    }
}