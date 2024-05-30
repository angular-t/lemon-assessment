import image from "../../../assets/background.jpg";
export default function Login() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={image}
        alt="Little Lemon"
      ></img>
      <div className="reserve-header-text">
        <h1>Login</h1>
      </div>
    </header>
  );
}
