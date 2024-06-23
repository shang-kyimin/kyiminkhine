import { contactMeData } from "@/constants/iterableLinks";
import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="relative flex-start flex-col gap-4 md:gap-8 px-8 pt-24 pb-28">
      <div>
        <h1 className="text-sm md:text-lg">Ciao, Io sono Kyi Min Khine.</h1>
        <h1 className="font-title font-medium text-lg md:text-3xl leading-6 mt-0 mb-4 md:mb-6">
          A self-taught <span>software developer</span>,<br />
          Based in Pavia, Italy.
        </h1>

        <h6 className="text-sm md:text-lg">I build software (mostly web-based) that are practical and reliable.</h6>
      </div>

      <nav className="flex justify-start items-center gap-3 md:gap-4 px-1 md:px-3">
        {contactMeData.map(data => (
          <Link key={data.href} href={data.href} target="_blank">
            <Image
              src={data.src}
              alt={`${data.title} asset svg`}
              width={26}
              height={26}
              className="scale-95 md:scale-100 transition-all hover:scale-110"
            />
          </Link>
        ))}
      </nav>

      <Image
        src="/images/gradient-ball.image.svg"
        alt="Gradient-ball image svg"
        width={60}
        height={60}
        className="hidden md:block absolute w-16 max-w-16 -z-10 left-16 top-10 motion-safe:animate-[pulse_6s_ease_infinite]"
      />

      <Image
        src="/images/gradient-ball.image.svg"
        alt="Gradient-ball image svg"
        width={60}
        height={60}
        className="hidden md:block absolute w-12 max-w-12 -z-10 left-1/4 top-8 motion-safe:animate-[pulse_6s_ease_infinite]"
      />

      <Image
        src="/images/gradient-ball.image.svg"
        alt="Gradient-ball image svg"
        width={60}
        height={60}
        className="hidden md:block absolute w-64 max-w-64 -z-10 left-2/4 top-20 motion-safe:animate-[bounce_8s_ease_infinite]"
      />

      <Image
        src="/images/gradient-ball.image.svg"
        alt="Gradient-ball image svg"
        width={60}
        height={60}
        className="block md:hidden absolute w-44 sm:w-52 max-w-52 left-[20%] -z-10 motion-safe:animate-[pulse_8s_ease_infinite]"
      />
    </section>
  );
}


