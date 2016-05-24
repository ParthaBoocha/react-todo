import { combineReducers } from 'redux';
import todos from './todos-reducer.jsx';
import visibilityFilter from './visibility-filter-reducer.jsx'

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

export default todoApp;
