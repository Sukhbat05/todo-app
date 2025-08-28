export const Task = ({ setTodos, isDone, taskText, todos, id }) => {
  const handleOnChange = (event) => {
    setTodos((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          el.isDone = event.target.checked;
        }
        return el;
      })
    );
  };

  const deleteOnChange = () => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };
  return (
    <div className="p-4  flex items-center my-5 gap-2.5 bg-gray-100 ">
      <div className="flex gap-2.5 w-[245px]">
        <input
          onChange={handleOnChange}
          checked={isDone}
          type="checkbox"
        ></input>

        {isDone ? (
          <div className="text-black line-through   w-fit overflow-hidden wrap-break-word">
            {taskText}
          </div>
        ) : (
          <div className="text-black w-fit overflow-hidden wrap-break-word">
            {taskText}
          </div>
        )}
      </div>

      <div>
        {isDone && (
          <button
            onClick={() => deleteOnChange(id)}
            className="p-1 bg-red-50 text-red-500 rounded-xl  "
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
