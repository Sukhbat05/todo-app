export const Task = (props) => {
  return (
    <div className="w-[345px] h-[62px] flex items-center my-5 px-4 gap-2.5 bg-gray-100">
      <input defaultChecked={props.isCompleted} type="checkbox"></input>
      <div className="text-black">{props.taskText}</div>

      {props.isCompleted && (
        <button className="p-3 bg-red-50 text-red-500 rounded-xl  ">
          Delete
        </button>
      )}
    </div>
  );
};
