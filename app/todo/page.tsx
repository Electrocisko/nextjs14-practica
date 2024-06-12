import { prisma } from "@/app/libs/prismadb";
import FormTodo from "../components/FormTodo";
import ListTodo from "../components/ListTodo";

const TodoPage = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <h1 className="text-center text-3xl my-10">Todos</h1>

      <FormTodo />
    <ListTodo todos={todos}/>

      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </div>
  );
};

export default TodoPage;
