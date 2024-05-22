import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const links = <div className="flex gap-2">
     <NavLink to="/" className="bg-gray-100 px-2 py-1 rounded-md">Home</NavLink> 
      <NavLink to='/listedBooks' className="bg-gray-100 px-2 py-1 rounded-md">Listed Books</NavLink> 
      <NavLink to='/pagesRead' className="bg-gray-100 px-2 py-1 rounded-md">Pages to Read</NavLink> 
    </div>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link className="btn btn-sm bg-[#23BE0A] hover:bg-[#419134] text-white">Sign In</Link>
          <Link className="btn btn-sm bg-[#59C6D2] hover:bg-[#46b1bd] text-white">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
