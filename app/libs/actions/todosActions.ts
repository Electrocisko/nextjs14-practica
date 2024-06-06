'use server'
import { prisma } from "@/app/libs/prismadb";
import {revalidatePath} from "next/cache";


export const createTodo = async (data: FormData) => {

console.log("Server Actions");
const title = data.get("title") as string;
await prisma.todo.create({
  data : {
    title: title
  }
})
revalidatePath("/todo");
}