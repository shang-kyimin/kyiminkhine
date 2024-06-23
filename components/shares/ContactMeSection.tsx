import { contactMeData } from "@/constants/iterableLinks";
import Image from "next/image";


export default function ContactMeSection() {
  return (
    <section className="space-y-6 pt-6 pb-12">
      <h6 className="text-xl font-title">
        Get in touch
      </h6>

      <div className="space-y-3 md:space-y-4 flex flex-col items-start">
        {contactMeData.map(data => (
          <a key={data.href} href={data.href} target="_blank" className="flex justify-start items-center px-4 gap-2 group">
            <Image
              src={data.src}
              alt={`${data.title} asset svg`}
              width={40}
              height={40}
              className="p-2 group-hover:scale-110 transition-all"
            />
            <div className="leading-4">
              <p className="text-sm">{data.title}</p>
              <p className="font-normal">{data.display}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


