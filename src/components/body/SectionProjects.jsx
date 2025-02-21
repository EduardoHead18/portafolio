import { useReduxState } from "@/custom/useReduxState";
import Image from "next/image";
import projectJson from "../../../projects.json";
import { IoLogoGithub } from "react-icons/io";

export const SectionProjects = () => {
  const mode = useReduxState();
  return (
    <>
      <h1
        className={`title-test text-lg  rounded-md   md:text-2xl font-bold mb-20 mt-20  ${
          mode ? "text-white" : "text-zinc-900"
        } `}
      >
        <span style={{ marginRight: "0.8rem" }}> 🚀</span>
        Projects
      </h1>
      <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        {projectJson.map((data, index) => {
          return (
            <a
              key={index}
              href={data.url}
              target="_blank"
              className={`w-full h-full  text-white rounded-lg rounded-red-200 border-[1px] border-slate-600 transition-opacity duration-400 ease-in-out ${
                mode ? "hover:shadow-sm" : "hover:shadow-md"
              } hover:border-violet-300 card-animation`}
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
        <div className="lg:col-span-1">
          <SeeMoreOnGithubCard />
        </div>
      </div>
    </>
  );
};

const SeeMoreOnGithubCard = ({ mode }) => {
  return (
    <a
      target="_blank"
      href="https://github.com/EduardoHead18"
      className={`w-full h-[200px] flex flex-col items-center justify-center rounded-lg border-[1px] border-slate-600 py-10 ${
        mode ? "hover:shadow-sm" : "hover:shadow-md"
      } hover:border-violet-300 card-animation`}
    >
      <h2 className="text-lg font-bold text-purple-500 mb-2">
        Check out more projects on my github
      </h2>
      <IoLogoGithub size={60} color=" #c0c0c0" />
    </a>
  );
};
