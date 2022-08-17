import  { ReactNode } from 'react'
import Navigation from '../navigation/Navigation';
import styled from "styled-components";
import Container from '@mui/material/Container';

const Header = styled.header`
  width: 100%;
  height: 45px;
  background-color: #333;
`

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

export default Layout