import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 w-full mx-auto bg-white shadow-md z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
              <Link href="/">About</Link>
            </li>
            <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
              <Link href="/">Services</Link>
            </li>
            <li className="hover:bg-transparent hover:text-blue-700 !hover:bg-transparent">
              <Link href="/">Portfolio</Link>
            </li>
            <li className="hover:bg-transparent hover:text-blue-700 !hover:bg-transparent">
              <Link href="/">Team</Link>
            </li>
            <li>
              <details className="group">
                <summary className="hover:bg-transparent hover:text-blue-700 !hover:bg-transparent">
                  Dropdown
                </summary>
                <ul className="p-2 bg-base-100 !bg-transparent">
                  <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                    <Link href="/">Dropdown1</Link>
                  </li>
                  <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                    <Link href="/">Dropdown2</Link>
                  </li>
                  <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                    <Link href="/">Dropdown3</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-transparent hover:text-blue-700 !hover:bg-transparent">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <a className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-3xl ml-0">
          FlexStart
        </a>
      </div>

      <div className="navbar-center hidden lg:flex px-0">
        <ul className="menu menu-horizontal px-0 scroll-m-20 text-sm font-medium tracking-tight ml-0">
          <li className=" hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
            <Link href="/">About</Link>
          </li>
          <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
            <Link href="/">Services</Link>
          </li>
          <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
            <Link href="/">Portfolio</Link>
          </li>
          <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
            <Link href="/">Team</Link>
          </li>
          <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
            <Link href="/">Blog</Link>
          </li>
          <li>
            <details className="group">
              <summary className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                Dropdown
              </summary>
              <ul className="p-2 bg-base-100 !bg-transparent">
                <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                  <Link href="/">Dropdown1</Link>
                </li>
                <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                  <Link href="/">Dropdown2</Link>
                </li>
                <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                  <Link href="/">Dropdown3</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
          <details className="group">
              <summary className="hover:bg-transparent hover:text-blue-700 !hover:bg-transparent">
                Listing Dropdown
              </summary>
              <ul className="p-2 bg-base-100 !bg-transparent">
                <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                  <Link href="/">Dropdown1</Link>
                </li>
                <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                  <Link href="/">Dropdown2</Link>
                </li>
                <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
                  <Link href="/">Dropdown3</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:bg-transparent hover:text-blue-500 !hover:bg-transparent">
            <Link href="/"> Contact </Link>
          </li>
        </ul>
      </div>
      <div className=" navbar-end">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md ">Get Started</button>
      </div>

      
    </div>
  );
};

export default Navbar;
