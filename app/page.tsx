import ContactMeSection from "@/components/shares/ContactMeSection";
import HeroSection from "@/components/shares/HeroSection";
import PersonalProjectsSection from "@/components/shares/PersonalProjectsSection";


export default function HomePage() {
  return (
    <div className="px-2">
      {/* START Hero Section */}
      <HeroSection />
      {/* END Hero Section */}


      {/* START Personal Projects Section */}
      <PersonalProjectsSection />
      {/* END Personal Projects Section */}

      <section className="space-y-6 pt-6 pb-12">
        <h6 className="text-xl font-title">About me</h6>

        <p className="px-4">I felt in love with programming for the first time back in 2022 when I built my own “Hash table” in C in order to store and find English words efficiently. With the concepts I’d learnt with C, then I started playing around in the world of web development mostly JavaScript, TypeScript and React and after coding a couple of mini projects to keep track of my daily routine, I was really into web but I hadn’t considered it as a career path. During the studies of life-science, I realized I had a talent in programming and problem solving and moreover, I showed more interests in computers. So, I decided to go about learning the right path on my own and took some in-depth computer science and web development courses. Now that I’ve completed those and have several reliable projects under my belt, I’m excited for a full time career in software engineering.</p>
      </section>

      {/* START ContactMe Section */}
      <ContactMeSection />
      {/* END ContactMe Section */}
    </div>
  );
}


