'use server'
import { prisma } from "@/app/libs/prismadb";
import { todoZodSchema } from "@/app/zod-schema/todoZod";
import { error } from "console";
import {revalidatePath} from "next/cache";
import { ZodError } from "zod";

export const createTodo = async (title: string) => {
  try {
    todoZodSchema.parse({title})



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
    if (error instanceof ZodError) {
      return {
        status:"error",
        error: error.issues[0].message
      }
    }
  }

}

export const deleteTodo = async (id: string) => {

  if (!id || !id.trim) {
    return {
      status:"error",
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