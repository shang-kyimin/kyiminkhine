import { personalProjectsData } from "@/constants/iterableLinks";
import Image from "next/image";
import Link from "next/link";


export default function PersonalProjectsSection() {
  return (
    <section className="space-y-6 pt-6 pb-12">
      <h6 className="text-xl font-title">
        Personal Projects
      </h6>

      <div className="p-4 rounded-3xl max-w-2xl mx-auto space-y-6">
        {personalProjectsData.map(data => (
          <div key={data.appName} className="flex flex-col gap-3 md:gap-4 justify-center items-center p-3">
            <Link href={data.appLive} target="_blank" className="overflow-hidden transition-all z-10 rounded-3xl bg-muted border-8 border-muted">
              <Image
                src={data.src}
                alt={`${data.appName} image`}
                width={1440}
                height={860}
                className="rounded-3xl w-96 focus-within:scale-105 hover:scale-105 duration-300"
              />
            </Link>
            <div className="w-full mb-2">
              <Link href={data.appSourceCode} className="group">
                <h6 className="flex justify-start items-center gap-1">
                  <span className="text-lg font-medium">{data.appName}</span>
                  <Image
                    src="/assets/arrow-right.asset.svg"
                    alt="Arrow-right asset svg"
                    width={24}
                    height={24}
                    className="w-6 h-6 inline-block transition-all group-hover:translate-x-1"
                  />
                </h6>
                <p>{data.description}</p>
              </Link>
            </div>

            <div className="flex flex-wrap self-start gap-1">
              {data.techStacks.map(tech => (
                <span key={tech} className="px-2 pt-1 pb-0 border border-p-dark text-[15px] rounded-sm">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


