export default function AboutUs() {
    return (
        <article className="about-us">
            <section className="about-us-section">
                <h1>Little Lemon</h1>
                <p className="subsection">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </section>

            <section className="double-image">
                <img className="about" src={require('../../../assets/background.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
            </section>
    </article>
    );
}