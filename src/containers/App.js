import React, { useState } from "react";
import TodoContext from "../context/todoContext";
import  {v4 as uuidv4}  from 'uuid';
import AddNewList from './../components/Lists/AddNewList';
import Lists from './../components/Lists/Lists';

const App = () => {
    const [getTodo, setTodo] = useState("");
    const [getEditTodo, setEditTodo] = useState("");
    const [getLists, setLists] = useState([]);
    const [getList, setList] = useState({});
    const [getEditList, setEditList] = useState({});
    
    const handleCreateNewList = () => {
        const tasks=[];
        const lists = [...getLists];
        const list = {
            id: uuidv4(),
            title:getList.title,
            description:getList.description,
            tasks:tasks,
            expand:false,
            addtask:false,
            edit:false
        };
        if (getList.title !== "" && getList.title !== " " && getList.title !== undefined) {
            lists.push(list);
            setLists(lists);
            setList({
                title:"",
                description:"",
                tasks:[]
            });
        }
    };

    const handleDeleteList = id => {
        const lists = [...getLists];
        const filteredLists = lists.filter(l => l.id !== id);
        setLists(filteredLists);
    };
    const handleEditList=id=>{
        const lists=[...getLists];
        const listIndex=getLists.findIndex(l=>l.id===id);
        const list=lists[listIndex];
        list.edit=!list.edit;
        lists[listIndex]=list;
        setLists(lists);
    }
    const handleEditedList=id=>{
        const lists=[...getLists];
        const listIndex=getLists.findIndex(l=>l.id===id);
        const list=lists[listIndex];
        list.title=getEditList.title;
        list.description=getEditList.description;
        list.edit=!list.edit;
        lists[listIndex]=list;
        setEditList({});
        setLists(lists);

    }

    const handleListTitleInput = event => {
        setList({
            title:event.target.value,
            description:getList.description
        });
    };
    const handleListDInput = event => {
        setList({
            title:getList.title,
            description:event.target.value
        });
    };
    const handleListEditTitle = event => {
        setEditList({
            title:event.target.value,
            description:getEditList.description
        });
    };
    const handleListEditDesc = event => {
        setEditList({
            title:getEditList.title,
            description:event.target.value
        });
    };
    const handleCreateNewTodo = (id) => {
        const listIndex=getLists.findIndex(l=>l.id===id);
        const todos = [...getLists[listIndex].tasks];
        let lists=[...getLists];
        const todo = {
            id: uuidv4(),
            text: getTodo,
            completed: false,
            edit:false
        };
        if (getTodo !== "" && getTodo !== " ") {
            todos.push(todo);
            lists[listIndex].tasks=todos;
            setTodo("");
            lists[listIndex].addtask=!lists[listIndex].addtask;
            setLists(lists);

        }
    };

    const handleCompletedTodo = (listId,todoId) => {
        const listIndex=getLists.findIndex(l=>l.id===listId);
        const todos = [...getLists[listIndex].tasks];
        const todoIndex=todos.findIndex(l=>l.id===todoId);
        let lists=[...getLists];
        const todo = todos[todoIndex];
        todo.completed = !todo.completed;
        todos[todoIndex] = todo;
        lists[listIndex].tasks=todos;
        
        setLists(lists);


    };

    const handleDeleteTodo = (listId,todoId) => {
        const listIndex=getLists.findIndex(l=>l.id===listId);
        const todos = [...getLists[listIndex].tasks];
        const lists=[...getLists];
        const updatedtodos=todos.filter(t=>t.id!==todoId);
        lists[listIndex].tasks=updatedtodos;
        setLists(lists);
    };

    const handleEditTodo=(listId,todoId)=>{
        const listIndex=getLists.findIndex(l=>l.id===listId);
        const todos = [...getLists[listIndex].tasks];
        const lists=[...getLists];
        const updatedTodoIndex=todos.findIndex(t=>t.id===todoId);
        const todo=todos[updatedTodoIndex];
        todo.edit=!todo.edit;
        todos[updatedTodoIndex]=todo;
        lists[listIndex].tasks=todos;
        setLists(lists);
    }

    const handleEditedTodo=(listId,todoId)=>{
        const lists=[...getLists];
        const listIndex=getLists.findIndex(l=>l.id===listId);
        const todos = [...getLists[listIndex].tasks];
        const updatedTodoIndex=todos.findIndex(t=>t.id===todoId);
        const todo=todos[updatedTodoIndex];
        todo.text=getEditTodo;
        todo.edit=!todo.edit;
        todos[updatedTodoIndex]=todo;
        lists[listIndex].tasks=todos;
        setEditTodo("");
        setLists(lists);
    }

    const handleTodoInput = (event) => {
        setTodo(event.target.value);
    };
    const handleEditTodoInput = (event) => {
        setEditTodo(event.target.value);
    };
    const handleExpandTodos=(id)=>{
        const lists=[...getLists];
        const listIndex=getLists.findIndex(l=>l.id===id);
        const list=lists[listIndex];
        list.expand=!list.expand;
        lists[listIndex]=list;
        setLists(lists);
    }
    const handleAddTask=(id)=>{
        const lists=[...getLists];
        const listIndex=getLists.findIndex(l=>l.id===id);
        const list=lists[listIndex];
        list.addtask=!list.addtask;
        lists[listIndex]=list;
        setLists(lists);
    }

    return (
        <TodoContext.Provider
            value={{
                lists: getLists,
                list: getList,
                todo:getTodo,
                edittodo:getEditTodo,
                editList:getEditList,
                handleCreateNewTodo: handleCreateNewTodo,
                handleCreateNewList: handleCreateNewList,
                handleTodoInput: handleTodoInput,
                handleListTitleInput: handleListTitleInput,
                handleListDInput: handleListDInput,
                handleCompletedTodo: handleCompletedTodo,
                handleDeleteTodo: handleDeleteTodo,
                handleDeleteList: handleDeleteList,
                handleExpandTodos:handleExpandTodos,
                handleAddTask:handleAddTask,
                handleEditList:handleEditList,
                handleEditedList:handleEditedList,
                handleListEditTitle:handleListEditTitle,
                handleListEditDesc:handleListEditDesc,
                handleEditTodoInput:handleEditTodoInput,
                handleEditTodo:handleEditTodo,
                handleEditedTodo:handleEditedTodo
            }}
        >
            <div className="d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <Lists/>
                    </div>
                </div>
            </div>
            <AddNewList />
        </TodoContext.Provider>
    );
};

export default App;
