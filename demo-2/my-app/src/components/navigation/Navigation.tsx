import { Container, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Badge from '@mui/material/Badge';
import { useShoppingContext } from '../../context/StoreContext';

const StyledNav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    padding: 0px 10px;
  }

  .active {
    color: royalblue;
  }
`

const Navigation = () => {
  const { OpenCard, totalQuantity } = useShoppingContext();

  return <Container style={{ height: '100%' }}>
    <StyledNav>
      <div>
        <NavLink
          to="/"
          className={
            ({ isActive }) => isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/store"
          className={
            ({ isActive }) => isActive ? "active" : ""
          }
        >
          Store
        </NavLink>

        <NavLink
          to="/about"
          className={
            ({ isActive }) => isActive ? "active" : ""
          }
        >
          about
        </NavLink>
      </div>

      <div>
        <Stack>
          <IconButton
            aria-label="store"
            onClick={OpenCard}
            style={{ color: 'whitesmoke' }}
          >
            <Badge
              badgeContent={totalQuantity()}
              color="info"
            >
              <LocalGroceryStoreIcon />
            </Badge>
          </IconButton>
        </Stack>
      </div>
    </StyledNav>
  </Container>
}

export default Navigation