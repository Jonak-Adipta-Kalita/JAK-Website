import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import ProgrammingSkills from "./ProgrammingSkills";
import Testimonials from "./Testimonials";

export default function ProgrammingPage() {
    return (
        <main className="scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-hover:scrollbar-thumb-slate-600 w-full overflow-y-auto scroll-smooth lg:snap-y lg:snap-mandatory">
            <AboutMe />

            <ProgrammingSkills />

            <Testimonials />

            <ContactMe />
        </main>
    );
}
