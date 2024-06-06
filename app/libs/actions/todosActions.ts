'use server'
import { prisma } from "@/app/libs/prismadb";
import {revalidatePath} from "next/cache";


export const createTodo = async (title: string) => {

await prisma.todo.create({
  data : {
    title: title
  }
})
revalidatePath("/todo");
}