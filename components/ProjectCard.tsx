/* eslint-disable @next/next/no-img-element */
export default function ProjectCard(props: any) {
  const { list } = props;

  return (
    <div
      className="flex_Project_card flex-col mb-[4%] box_project min-h-[20rem] max-h-[46rem] xl:max-h-[80rem] "
      id="TESTO"
    >
      <img
        src={`/${props.src}`}
        alt="image of project presented"
        className="w-[100%] max-h-[300px] xl:max-h-[600px]"
      ></img>
      <div className="mb-[10%] ">
        {' '}
        <p className="text-center text-2xl">{props.name}</p> <br />
        <p className="m-[10px]"> {props.descripton}</p>
        <div className=" ml-5 mb-5 mt-5 flex">
          {list
            ? list.map((element: string) => (
                  <div>
                    <img src={element} className="w-12 h-12 ml-3" alt='Image of technologies used in the project'></img>
                  </div>
            ))
            : null}
        </div>
      </div>
    </div>
  );
}
