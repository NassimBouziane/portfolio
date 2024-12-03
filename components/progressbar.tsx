export default function ProgressBar(props: any) {
  return (
    <div className="flex flex_competences md:gap-[10%] xl:gap-[4rem] items-center ml-[12px]  md:ml-28">
      <p className=" text-xs md:text-2xl mt w-[15%]"> {props.name} </p>
      <img
        src={`${props.progress}.png`}
        alt="Progress bar"
        width="400"
        className="h-[10px] md:w-[500px] 2xl:w-[500px]"
      ></img>
      <p className=" text-xs md:text-xl whitespace-nowrap">
        {' '}
        {props.progress} %
      </p>
    </div>
  );
}
