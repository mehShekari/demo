import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import useDebounce from '../../helper/useDebouce';

const Nav = styled.nav`
  width: 100%;
  height: 4.52rem;
  background-color: #333;
  .menu_holder {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;

    li {
      margin: 0px 2rem;
      font-size: 1.6rem;
    }

    a{
      padding: 0.7rem 1.2rem;        
      color: #ffff;
    }
  }
`;

const Header = () => {
  const [value, setValue] = useState("");

  useDebounce(() => {
   console.log(value);
  }, 1000, [value]);


  return (
    <Nav>
      <ul className='menu_holder'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
        <input type="text" onChange={({ target }) => setValue(target.value)} />
      </ul>

    </Nav>
  )
}

export default Header