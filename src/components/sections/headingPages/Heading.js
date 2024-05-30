import { Link } from 'react-router-dom';
export default function Heading() {
  return (
    <header>
      <article className="call-to-action">
        <section className="about-us-section">
          <h1>Little Lemon</h1>
          <p className="subsection">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          <br></br>
          <Link className="action-button" to="/reservations">Reserve a table</Link>
        </section>

        <section className="hero-image">
          <img src={require('../../../assets/background.jpg')} alt="Little Lemon restaurant cuisine"></img>
        </section>
      </article>
    </header>
  );
}