import { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';
import Home from './Home';
import Category from './Category';
import Favorites from './Favorites';
import News from './News';
import RecipeList from './RecipeList';


const NavBar = () => {
  const [currentComponent, setCurrentComponent] = useState(<Home />);
  const handleHomeClick = () => setCurrentComponent(<Home />);
  const handleFavoritesClick = () => setCurrentComponent(<Favorites />);
  const handleCategoryClick = () => setCurrentComponent(<RecipeList />);
  const handleSearchClick = () => setCurrentComponent(<Category />);

  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/home" onClick={handleHomeClick} activeStyle>
            Home
          </NavLink>
            <NavLink to="/search" onClick={handleSearchClick} activeStyle>
          Search
          </NavLink>
          <NavLink to="/favorites" onClick={handleFavoritesClick} activeStyle>
            Favorites
          </NavLink>
          <NavLink to="/category" onClick={handleCategoryClick} activeStyle>
            Category
          </NavLink>

        </NavMenu>
      </Nav>
      {currentComponent}
    </>
  );
};

export default NavBar;
