import { Link } from "react-router-dom";
import { Moon, Heart, User } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <h2>🎙 PodcastHub</h2>
      </div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/favourites">
          Favourites
        </Link>

      </nav>

      <div className="header-icons">

        <button>
          <Moon size={20}/>
        </button>

        <button>
          <Heart size={20}/>
        </button>

        <button>
          <User size={20}/>
        </button>

      </div>

    </header>
  );
}

export default Header;