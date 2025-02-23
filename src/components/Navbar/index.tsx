import { NavLink } from 'react-router-dom';

import Logo from '../../assets/Logo.png';

const Navbar = () => {

  return (
    <nav className="bg-primary p-4">
      <ul className="flex flex-wrap items-center justify-between">
        {/* Logo */}
        <li className="flex-shrink-0">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="w-20 rounded-full" />
          </NavLink>
        </li>
        <li className="text-2xl text-secondary">
          <div>Let's get physical</div>  
        </li>

        {/* Navigation items centered */}
        <div className="flex space-x-4">
          <li>
            <NavLink to="/" className="text-2xl text-secondary">
             happy 
            </NavLink>
          </li>
     
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
