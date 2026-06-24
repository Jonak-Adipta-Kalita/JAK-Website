import ScrollSnapSection from "./ProgrammingSection";

interface Testimonial {
    name: string;
    message: React.ReactNode;
    href: string;
}

const testimonials: Testimonial[] = [];

const Testimonials = () => {
    return (
        <ScrollSnapSection nav="Testimonials" id="testimonials"
            className="flex w-full items-center justify-center"
        >
            <div></div>
        </ScrollSnapSection>
    );
};

export default Testimonials;
