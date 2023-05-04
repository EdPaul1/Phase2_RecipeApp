import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
}  from './NavbarElements';
import Home from "../../Home";
import About from "../../About";
import Favorites from "../../FavoriteButton"
import News from '../../News';
  
const Navbar = () => {
 return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/favorites' activeStyle>
           Favorites
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/news' activeStyle>
            News
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;