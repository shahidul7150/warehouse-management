import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navbar.css";
const Navbar = () => {


  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };


    return (
      <div className="navbar bg-base-100 px-12 lg:bg-[#F9FEFF] lg:shadow lg:font-semibold lg:text-green-500">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="rounded-lg ">
                Home
              </NavLink>
            </li>
            <li>
              {user&&<NavLink to="/dashboard" className="rounded-lg ">
                Dashboard
              </NavLink>}
            </li>
            <li>
              <NavLink to="/portfolio" className="rounded-lg ">
                My Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="rounded-lg ">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="rounded-lg ">
                Blogs
              </NavLink>
            </li>
            <li>
              {user ?
                <p onClick={handleSignOut}>Sign Out</p>
                :
                <NavLink to="/login" className="rounded-lg ">
                Login
              </NavLink>}
            </li>
          </ul>
        </div>
        <Link to="/" className="text-sm flex ml-8 md:ml-0 lg:text-2xl font-black bg-amber-200 p-2 rounded-lg">
          <span className="text-red-500 pr-1"> F2C</span> STORE
        </Link>

      
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal ml-44 gap-x-4">
          <li>
            <NavLink to="/" className="rounded-lg ">
              Home
            </NavLink>
          </li>
         
         {user&& <>
          <li>
          <NavLink to="/manage" className="rounded-lg ">
                Manage Inventory
              </NavLink>
          </li>
          <li>
          <NavLink to="/addservice" className="rounded-lg ">
                Add Items
              </NavLink>
          </li>
          <li>
          <NavLink to="/myitem" className="rounded-lg ">
                My items
              </NavLink>
          </li>

         </>
          
          
          }
        
          <li>
              <NavLink to="/about" className="rounded-lg ">
                About us
              </NavLink>
            </li>
          <li>
            <NavLink to="/blogs" className="rounded-lg ">
              Blogs
            </NavLink>
          </li>
        </ul>

      </div>
      <div className="hidden lg:flex navbar-end ">
       
        <div className="menu menu-horizontal " >
        {user ? (
              <div className=' menu menu-horizontal'>
                <button onClick={handleSignOut} className='btn bg-[#570DF8] rounded-xl text-white mr-4'>
                Sign Out
              </button>
                
              </div>
            ) : (
              <NavLink  to="/login" className="btn btn-primary rounded-lg  ">
                Login
              </NavLink>
            )}
            </div>
         
      </div>
    </div>
  );

//  -------------------------------
    // <div className="">
    //   <nav className="navbar navbar-expand-lg bg-yellow ">
    //     <div className="container-fluid">
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarTogglerDemo01"
    //         aria-controls="navbarTogglerDemo01"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //         <Link className="navbar-brand fw-bold text-white" to="/">
    //           <span className="text-white">F2C</span>
    //           STORE
    //         </Link>
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
    //           <li className="nav-item">
    //             <Link className="nav-link  text-white " aria-current="page" to="home">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link text-white " to="about">
    //               About
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link
    //               className="nav-link  text-white"
    //               to="blogs"
    //               aria-disabled="true"
    //             >
    //               Blogs
    //             </Link>
    //           </li>
    //         </ul>

    //         {user ? (
    //           <ul className="privet-nav">
    //             <li className="nav-item">
    //               <Link className="nav-link text-white" to="manage">
    //                 Manage Inventory
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link text-white" to="addservice">
    //                 Add Item
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link className="nav-link text-white" to="myitem">
    //                 My Items
    //               </Link>
    //             </li>
    //             <button
    //               className="btn btn-link text-decoration-none text-white"
    //               onClick={handleSignOut}
    //             >
    //               Sign Out
    //             </button>
    //           </ul>
    //         ) : (
    //           <Link className="text-decoration-none text-white" to="/login">
    //             Login
    //           </Link>
    //         )}
    //       </div>
    //     </div>
    //   </nav>
    // </div>

};

export default Navbar;
