import React from 'react';
import { connect } from 'react-redux';

let nextId = 0;
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
      input = node;
    }} />
        <button onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            text: input.value ? input.value :
              'todo #' + (nextId + 1),
            id: nextId++
          });
        input.value = '';
        }}>
        Add Todo
        </button>
    </div>
  );
};

export default connect()(AddTodo);
