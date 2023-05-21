import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaEquals, FaRegTimesCircle, } from "react-icons/fa";
import { AuthContext } from "../../Provider/Authprovider";
import logo from '../../assets/logo/Village-Toy-Shop_logo.png'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut();
    };

    return (
        <div className=" mx-auto mt-5 flex justify-between items-center">
            <div className="flex gap-1 items-center justify-center">
                <Link to='/'><img className="w-16 h-8 rounded" src={logo} alt="" /></Link>
                <h2 className="text-4xl font-extrabold text-gray-900">Toy Shop</h2>
            </div>

            <div onClick={() => setOpen(!open)} className="text-sky-500 md:hidden">
                <span>
                    {open == false ? (
                        <FaEquals className="text-orange-500"></FaEquals>
                    ) : (
                        <FaRegTimesCircle className="text-orange-500"></FaRegTimesCircle>
                    )}
                </span>
            </div>

            <nav
                className={`flex flex-col md:flex-row justify-center items-center gap-4 absolute md:static duration-1000 rounded-md ${open ? "top-20 right-6" : "-top-56 right-6"
                    } z-10`}
            >
                <NavLink
                    className={({ isActive }) => (isActive ? "font-bold text-2xl link" : " font-bold text-2xl")}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "font-bold text-2xl link" : "font-bold text-2xl")}
                    to="/toys"
                >
                    Toys
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) => (isActive ? "font-bold text-2xl link " : "font-bold text-2xl")}
                >
                    Blog
                </NavLink>
                {user && (
                    <div
                        className="flex gap-3 items-center justify-center "
                        
                    >
                        <div>
                            <NavLink
                                to="/addToys"
                                className={({ isActive }) => (isActive ? "font-bold text-2xl" : "font-bold text-2xl")}
                            >
                                Add Toys
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/myToys"
                                className={({ isActive }) => (isActive ? "font-bold text-2xl inline" : "font-bold text-2xl")}
                            >
                                My Toys
                            </NavLink>
                        </div>
                        <div className="w-9  ">
                            <img data-tip={user.displayName} className="tooltip-bottom  rounded-full  ring-1 ring-primary tooltip-primary" src={user.photoURL} />
                        </div>
                    </div>
                )}
                {!user ? (
                    <Link to="/login">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
                        >
                            Login
                        </button>
                    </Link>
                ) : (
                    <Link onClick={handleLogout}>
                        <button
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                        >
                            Logout
                        </button>
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default Navbar;