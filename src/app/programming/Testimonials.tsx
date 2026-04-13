import ScrollSnapSection from "./ScrollSnapSection";

interface Testimonial {
    name: string;
    message: React.ReactNode;
    href: string;
}

const testimonials: Testimonial[] = [];

const Testimonials = () => {
    return (
        <ScrollSnapSection nav="Testimonials" id="testimonials">
            <div></div>
        </ScrollSnapSection>
    );
};

export default Testimonials;
