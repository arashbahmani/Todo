import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "./../../context/todoContext";
import EditTask from "./EditTask";

const Todos = ({ tasks, listId }) => {
  const context = useContext(TodoContext);
  const { handleDeleteTodo, handleCompletedTodo, handleEditTodo } = context;
  //const list = lists.filter((l) => l.id === listId);
  //const tasklength = list.tasks.length;
  return (
    <ul className="list-group list-group-flush">
      {tasks.length > 0 ? (
        tasks.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <Todo
              text={todo.text}
              isCompleted={todo.completed}
              deleted={() => handleDeleteTodo(listId, todo.id)}
              completed={() => handleCompletedTodo(listId, todo.id)}
              edit={() => handleEditTodo(listId, todo.id)}
            />

            {todo.edit ? <EditTask listId={listId} todoId={todo.id} /> : null}
          </li>
        ))
      ) : (
        <div className="alert alert-light mt-3 w-75 mx-auto">
          <p className="text-center">هیچ کاری برای این لیست ثبت نشده</p>
        </div>
      )}
    </ul>
  );
};

export default Todos;
