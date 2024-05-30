import bgImage from "../../../assets/background.jpg";

export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={bgImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
      </div>
    </header>
  );
}
