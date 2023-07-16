import React, { useContext } from "react";
import AddNewTask from "../Tasks/AddNewTask";
import Todos from "../Tasks/Todos";
import TodoContext from "./../../context/todoContext";
import EditList from "./EditList";
import List from "./List";

const Lists = () => {
  const context = useContext(TodoContext);
  const {
    lists,
    handleDeleteList,
    handleExpandTodos,
    handleAddTask,
    handleEditList,
  } = context;
  return (
    <ul className="list-group list-group-flush">
      {lists.length > 0 ? (
        lists.map((list) => (
          <li key={list.id} className="list-group-item">
            <List
              title={list.title}
              description={list.description}
              deleted={() => handleDeleteList(list.id)}
              expanded={() => handleExpandTodos(list.id)}
              addtask={() => handleAddTask(list.id)}
              edit={() => handleEditList(list.id)}
            />

            {list.expand ? <Todos tasks={list.tasks} listId={list.id} /> : null}
            <hr />
            {list.addtask ? <AddNewTask listId={list.id} /> : null}
            {list.edit ? <EditList listId={list.id} /> : null}
          </li>
        ))
      ) : (
        <div className="alert alert-light mt-3 w-75 mx-auto">
          <p className="text-center">هیچ لیستی برای امروز ثبت نشده</p>
        </div>
      )}
    </ul>
  );
};

export default Lists;
