const NewTodo: React.FC = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
