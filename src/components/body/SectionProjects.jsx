import { useReduxState } from "@/custom/useReduxState";
import Image from "next/image";
import { marginBottom } from "@/constants/tailwind-constants";
import projectJson from "../../../projects.json";
const coverStyle = { objectFit: "cover" };

export const SectionProjects = () => {
  const mode = useReduxState();
  return (
    <>
      <h1
        className={`text-lg  rounded-md   md:text-2xl font-bold mb-${marginBottom} ${
          mode ? "text-white" : "text-zinc-900"
        } `}
      >
          <span style={{ marginRight: '0.8rem' }}> 🚀</span> 
          Projects
      </h1>

      <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2">
        {projectJson.map((data, index) => {
          return (
            <a
              key={index}
              href={data.url}
              target="_blank"
              className='w-full h-full  text-white rounded-lg rounded-red-200 border-[1px] border-slate-600 transition-opacity duration-400 ease-in-out hover:opacity-50'
            >
              <Image
                src={data.image}
                width={1000}
                height={0}
                className="rounded-tl-none rounded-tr-none rounded-bl-2xl rounded-br-2xl"
              />
              <div className="p-3">
                <h2 className="text-lg  font-semibold mb-4 text-purple-500 ">
                  {data.title}
                </h2>
                <p
                  className={`text-sm  ${
                    mode ? "text-white font-extralight" : "text-slate-700"
                  }`}
                >
                  {data.description}
                </p>

                <div className="flex flex-wrap mt-10">
                  {data.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="opacity-60 text-center text-sm font-extralight bg-slate-800 rounded-lg m-1 p-2"
                    >
                      #{tag}
                    </p>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};
