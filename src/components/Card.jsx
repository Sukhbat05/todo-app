export const Card = (props) => {
  return (
    <div className="border w-[300px] h-[400px] bg-white text-black">
      <img className="w-[300px] h-[300px]" src={props.img} alt="" />
      <h2 className="text-green-700 mt-2">{props.title}</h2>
      <p className="text-red-400 mt-3">{props.price}</p>
      <button>Buy it</button>
    </div>
  );
};
