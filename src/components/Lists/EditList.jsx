import React, { useContext } from "react";
import TodoContext from "./../../context/todoContext";

const EditList = ({ listId }) => {
  const context = useContext(TodoContext);
  const listIndex = context.lists.findIndex((l) => l.id === listId);
  const list = context.lists[listIndex];
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
            placeholder="ویرایش عنوان لیست"
            value={context.editList.title}
            onChange={context.handleListEditTitle}
          />
          <div className="input-group w-75">
            <input
              type="text"
              className="form-control rounded"
              placeholder="ویرایش توضیحات لیست"
              value={context.editList.description}
              onChange={context.handleListEditDesc}
            />
          </div>
          <div className="input-group-prepend">
            <button
              type="submit"
              className="btn btn-sm bg-transparent fa fa-check text-light"
              onClick={() => context.handleEditedList(list.id)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditList;
