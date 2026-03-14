import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import ProgrammingSkills from "./ProgrammingSkills";
import Testimonials from "./Testimonials";

export default function ProgrammingPage() {
    return (
        <main className="lg:snap-y lg:snap-mandatory overflow-y-auto w-full scroll-smooth scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent hover:scrollbar-thumb-slate-600">
            <AboutMe />

            <ProgrammingSkills />

            <Testimonials />

            <ContactMe />
        </main>
    );
}
