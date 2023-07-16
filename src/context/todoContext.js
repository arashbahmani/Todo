import { createContext } from "react";

const TodoContext = createContext({
    lists: [],
    list: {},
    editList:{},
    todo:"",
    edittodo:"",
    handleCreateNewTodo: () => {},
    handleCreateNewList: () => {},
    handleTodoInput: () => {},
    handleListTitleInput: () => {},
    handleListDInput: () => {},
    handleCompletedTodo: () => {},
    handleDeleteTodo: () => {},
    handleDeleteList: () => {},
    handleExpandTodos: () => {},
    handleAddTask:()=>{},
    handleEditList:()=>{},
    handleEditedList:()=>{},
    handleListEditTitle:()=>{},
    handleListEditDesc:()=>{},
    handleEditTodo:()=>{},
    handleEditTodoInput:()=>{},
    handleEditedTodo:()=>{}
});

export default TodoContext;
