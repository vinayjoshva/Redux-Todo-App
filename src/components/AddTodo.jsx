import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice"; //we had exported individual reducers so that we could use externally

//so addTodo has to add something on the store in this case todos
//using dispatch we do the process
//dispatch -> using reducers -> makes changes in the store

//Props (todoToEdit, clearEdit):
//todoToEdit: Contains the todo object to be edited.
//clearEdit: Resets todoToEdit to null after editing.
function AddTodo({ todoToEdit, clearEdit }) {
  const [input, setInput] = useState(todoToEdit?.text || "");
  const dispatch = useDispatch();

  // Update input when a todoToEdit is set
  useEffect(() => {
    setInput(todoToEdit ? todoToEdit.text : "");
  }, [todoToEdit]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todoToEdit) {
      dispatch(editTodo({ id: todoToEdit.id, newText: input }));
      clearEdit();
    } else {
      dispatch(addTodo(input)); //we should use the reducer inside dispatch only. we can simply push the state inside the function and the reducer will take care of the rest.
    }
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {todoToEdit ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
