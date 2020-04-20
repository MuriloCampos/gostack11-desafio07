import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { Container, StyledLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();
  const [page, setPage] = useState(pathname);

  useEffect(() => {
    setPage(pathname);
  }, [pathname]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <StyledLink to="/" currentpage={page === '/'}>
            Listagem
          </StyledLink>
          <StyledLink to="/import" currentpage={page === '/import'}>
            Importar
          </StyledLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
