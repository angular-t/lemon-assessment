import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards">
        <TestimonialCard
          name="Marcus Alvarez"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies metus egestas nisi feugiat pharetra. Fusce sit amet mollis ante. Mauris elementum posuere blandit."
        />
        <TestimonialCard
          name="Damon Wilkerson"
          description="Vivamus quis consectetur magna."
        />
        <TestimonialCard
          name="Rahim Pierce"
          description="Ut nec enim scelerisque, eleifend ante sed, sollicitudin quam. Integer et mauris aliquet libero molestie ullamcorper. "
        />
        <TestimonialCard
          name="Ellie-May Vargas"
          description="Donec auctor ut quam porttitor maximus."
        />
        <TestimonialCard
          name="Tony Mitchell"
          description="Donec nunc neque, mattis sit amet ullamcorper in, placerat ac libero."
        />
        <TestimonialCard
          name="Henri Smith"
          description="Morbi magna lacus, condimentum at felis tristique, aliquet gravida dolor."
        />
        <TestimonialCard
          name="Alysha Owens"
          description="Sed ornare mi vel maximus vehicula."
        />
      </section>
    </section>
  );
}