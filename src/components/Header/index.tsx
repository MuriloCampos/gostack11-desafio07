import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink
            exact
            to="/"
            activeStyle={{ borderBottom: '3px solid orange' }}
          >
            Listagem
          </NavLink>
          <NavLink
            exact
            to="/import"
            activeStyle={{ borderBottom: '3px solid orange' }}
          >
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
