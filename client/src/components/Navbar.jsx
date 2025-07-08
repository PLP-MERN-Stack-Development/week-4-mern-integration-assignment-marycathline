// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-purple-700 p-4 text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">MERN Blog</Link>
        <Link to="/create" className="bg-white text-purple-700 px-4 py-1 rounded">
          + New Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
