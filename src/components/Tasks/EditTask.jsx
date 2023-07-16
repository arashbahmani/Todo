import React, { useContext } from "react";
import TodoContext from "./../../context/todoContext";

const EditTask = ({ listId, todoId }) => {
  const context = useContext(TodoContext);
  return (
    <div className="w-50 mx-auto fixed-bottom mb-5 p-3 wrapper">
      <form
        className="form-inline justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group w-100">
          <input
            type="text"
            className="form-control rounded"
            placeholder="ویرایش کار"
            value={context.edittodo}
            onChange={context.handleEditTodoInput}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              className="btn btn-sm bg-transparent fa fa-check text-light"
              onClick={() => {
                context.handleEditedTodo(listId, todoId);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
