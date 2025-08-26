import Todo from "@/app/todo/page";

export const Box = ({
  backgroundColor,
  height,
  color,
  title,
  onClick,
  isActive,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md py-2 px-4 ${
        isActive ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6] text-black"
      }`}
      style={{
        height,
      }}
    >
      {title}
    </button>
  );
};
