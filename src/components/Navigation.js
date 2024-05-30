import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("../assets/logo.jpg")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="nav-link" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="nav-link" to="/about-us">
        <h1>About Us</h1>
      </Link>
      <a
        className="nav-link"
        href={require("../assets/menu.jpg")}
        target="_self"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a>
      <Link className="nav-link" to="/reservations">
        <h1>Reservations</h1>
      </Link>
      <Link className="nav-link" to="/order">
        <h1>Order</h1>
      </Link>
      <Link className="nav-link" to="/login">
        <h1>Login</h1>
      </Link>
    </menu>
  );
}
