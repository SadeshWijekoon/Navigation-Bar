import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import closeMenu from '../images/close.svg';
import menu from '../images/menu.svg';

const Header = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  // Hide the menu when the route changes
  useEffect(() => {
    setClick(false);
  }, [location]);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>Sadesh<span>Wijekoon</span></h1>
      </HeaderLeft>
      <HeaderRight $menuClick={click}>
        <img onClick={() => setClick(prev => !prev)} src={menu} alt='menu' />
        <ol>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/project'>Project</Link></li>
        </ol>
        <ul>
          <img onClick={() => setClick(false)} src={closeMenu} alt='Close menu' />
          <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/project'>Project</Link></li>
          </div>
        </ul>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #b9d492;
`;

const HeaderLeft = styled.div`
  h1 {
    font-size: 1.5rem;
    span {
      font-weight: normal;
    }
  }
`;

const HeaderRight = styled.nav`
  position: relative;
  ol {
    display: none;
  }
  img {
    width: 24px;
    object-fit: contain;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    img, ul {
      display: none;
    }
    ol {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 10px 0;
      font-size: 0.9rem;
    }
  }

  ul {
    position: absolute;
    z-index: 110;
    top: -20px;
    right: ${({ $menuClick }) => $menuClick ? `-22px` : `-200px`}; 
    padding: 10px;
    background-color: #74e846;
    transition: all 400ms ease-in;

    div {
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    li {
      font-size: 0.9rem;
    }
  }
`;
