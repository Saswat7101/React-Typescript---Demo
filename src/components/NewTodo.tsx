import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      // Optionally, you can add some error handling here
      return;
    }

    todosCtx.addTodo(enteredText!);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
