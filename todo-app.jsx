import React from 'react';
import AddTodo from './add-todo-connect.jsx';
import VisibleTodoList from './visible-todo-list.jsx';
import Footer from './footer-component.jsx';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
