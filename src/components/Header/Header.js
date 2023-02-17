import { TbMovie } from 'react-icons/tb';
import { HeaderPage, Container, WrapperLogo, LogoList } from './Header.styled';
import { Form } from './Form/Form';
import { Navigation } from './Navigation/Navigation';

const Header = ({ onSearch }) => {
  return (
    <HeaderPage>
      <Container>
        <WrapperLogo>
          <LogoList>
            <TbMovie size={30} fill={'transparent'} stroke={'white'} />
            <a href="#index.htnl">Filmoteka</a>
          </LogoList>
          <div>
            <a href="#index.htnl">Homw</a>
            <a href="#index.htnl">Libary</a>
          </div>
        </WrapperLogo>
        <Form onSearch={onSearch} />
        <Navigation />
      </Container>
    </HeaderPage>
  );
};

export { Header };
