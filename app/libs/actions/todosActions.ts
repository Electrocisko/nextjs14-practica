"use server";
import { prisma } from "@/app/libs/prismadb";
import { todoZodSchema } from "@/app/zod-schema/todoZod";
import { revalidatePath } from "next/cache";
import { ZodError } from "zod";

export const createTodo = async (title: string) => {
  try {
    todoZodSchema.parse({ title });
    await prisma.todo.create({
      data: {
        title: title,
      },
    });
    revalidatePath("/todo");
    return {
      success: true,
      message: "Todo successfully added",
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: error.issues[0].message,
      };
    } else {
      return {
        success: false,
        message: "Error",
      };
    }
  }
};

export const deleteTodo = async (id: string) => {

  try {
    if (!id || !id.trim) {
      return {
        success: true,
        message: "Id is requiered (backend)",
      };
    }
    await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/todo");
    return {
      success: true,
      message: "Delete succesfuly",
    };
  } catch (error) {
    return {
      success: false,
      message: "Error can not deleted",
    };
  }
};
