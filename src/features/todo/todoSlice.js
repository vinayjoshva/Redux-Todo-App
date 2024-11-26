//usually we need one method to create the slice but here we're using two
//nanoid() is simply to generate unique IDs
//next create an initial state for our application which can contain [] or {}
// after creating an initial state, time to create a slice which we r going to export for later usage
//we use createSlice() provided by reduxToolkit and ofcourse it consumes objects within
//createSlice has to be named and subsequently would require us to pass intial state to it
//our store was empty till now...and the reason being not declaring our reducers
//reducers hold properties and associated function to it

//now, the reducer functionality was quite similar to contextAPI. However, we used to write the function declaration and not the definition. But, in reduxtoolkit we do both declaration and definition.
//always remember inside function declarations we get two parameters namely "state and action"

//role of "state" is holding the initial state no matter what's in it
//role of action is to provide for any changes required when accessing different functions line 31
//now we started function definition by adding todo which comes from the action.
//we're passing object as we declared our todos as objects...simple
//payload is an object...
//after saving the action, push the action onto the state as in line 40

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hey",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //id which doesn't match the one which payload is sent
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
});

//export the created functionalities - coz through these reducers we update the state orelse they work handy for individual functionality
// we're exporting these individual functionalities to work with them in our components.

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

//we've created the reducers!!! but, our store has no knowledge about our reducers yet because of which it cannot maintain the store
//simply depends on the registered reducers to update further.

export default todoSlice.reducer;
//let's now go to our store.js
