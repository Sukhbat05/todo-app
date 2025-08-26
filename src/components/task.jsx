export const Task = ({
  setTodos,
  setSaved,
  index,
  isDone,
  taskText,
  todos,
}) => {
  const handleOnChange = (event) => {
    setTodos((prev) =>
      prev.map((el, i) => {
        if (i === index) {
          el.isDone = event.target.checked;
        }
        return el;
      })
    );
    setSaved((prev) =>
      prev.map((el, i) => {
        if (i === index) {
          el.isDone = event.target.checked;
        }
        return el;
      })
    );
  };

  const deleteOnChange = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);

    setTodos(newTodos);
    setSaved(newTodos);
  };
  return (
    <div className="w-[345px] h-[62px] flex items-center my-5 px-4 gap-2.5 bg-gray-100 justify-between">
      <div className="flex gap-2.5 w-[208px]">
        <input
          onChange={handleOnChange}
          checked={isDone}
          type="checkbox"
        ></input>

        {isDone ? (
          <div className="text-black line-through w-fit">{taskText}</div>
        ) : (
          <div className="text-black w-fit">{taskText}</div>
        )}
      </div>

      <div>
        {isDone && (
          <button
            onClick={() => deleteOnChange(index)}
            className="p-3 bg-red-50 text-red-500 rounded-xl  "
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
