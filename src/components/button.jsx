export const Button = ({ title, onClick }) => {
  return (
    <button
      className="gap-[20px]  text-black py-2 px-3 bg-blue-600 h-10"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
