import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Logo</h1>
      <div>
        <Link to="/" className="px-4">
          Link 1
        </Link>
        <Link to="/store" className="px-4">
          Link 2
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
