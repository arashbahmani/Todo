import React, { useContext } from "react";
import TodoContext from "./../../context/todoContext";

const AddNewList = () => {
  const context = useContext(TodoContext);

  return (
    <div className="w-50 mx-auto fixed-top mb-5 p-3 wrapper">
      <form
        className="form-inline justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group w-100">
          <input
            type="text"
            className="form-control rounded"
            placeholder="اضافه کردن عنوان لیست جدید"
            value={context.list.title}
            onChange={context.handleListTitleInput}
          />
          <div className="input-group w-75">
            <input
              type="text"
              className="form-control rounded"
              placeholder="اضافه کردن توضیحات لیست جدید"
              value={context.list.description}
              onChange={context.handleListDInput}
            />
          </div>
          <div className="input-group-prepend">
            <button
              type="submit"
              className="btn btn-sm bg-transparent fa fa-plus-square text-light"
              onClick={context.handleCreateNewList}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewList;
