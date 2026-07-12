import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <i className="fa-solid fa-podcast"></i>
        <h1>PodcastApp</h1>
      </div>

      <div className="header-icons">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-user"></i>
      </div>
    </header>
  );
}

export default Header;