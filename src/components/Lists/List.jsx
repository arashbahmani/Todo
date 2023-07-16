import React, { Fragment } from "react";

const List = ({ title, description, deleted, expanded, addtask, edit }) => {
  return (
    <Fragment>
      <div className={"todo-indicator"}></div>
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-right flex1">
            <div className="widget-heading">
              <h4>{title}</h4>
            </div>
          </div>
          <div className="widget-content-right flex1">
            <div className="widget-heading">
              <h6>{description}</h6>
            </div>
          </div>
          <div className="widget-content-left">
            {" "}
            <button
              className="border-0 btn-transition btn btn-outline-success"
              onClick={edit}
            >
              {" "}
              <i className="fa fa-pencil"></i>{" "}
            </button>{" "}
            <button
              className="border-0 btn-transition btn btn-outline-danger"
              onClick={addtask}
            >
              {" "}
              <i className="fa fa-plus-square"></i>{" "}
            </button>{" "}
            <button
              className="border-0 btn-transition btn btn-outline-success"
              onClick={expanded}
            >
              {" "}
              <i className="fa fa-bars"></i>
            </button>{" "}
            <button
              className="border-0 btn-transition btn btn-outline-danger"
              onClick={deleted}
            >
              {" "}
              <i className="fa fa-trash"></i>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default List;
