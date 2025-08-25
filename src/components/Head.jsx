export const Head = (props) => {
  return (
    <div className="flex justify-around items-center gap-120 h-20">
      <div className="text-2xl">{props.title}</div>
      <div className="flex gap-4">
        <div>{props.a}</div>
        <div>{props.b}</div>
        <div>{props.c}</div>
      </div>
    </div>
  );
};
