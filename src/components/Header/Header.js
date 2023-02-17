import { HeaderPage, Container } from './Header.styled';
import { Form } from './Form/Form';
import { Navigation } from './Navigation/Navigation';

const Header = ({ onSearch }) => {
  return (
    <HeaderPage>
      <Container>
        <Navigation />

        <Form onSearch={onSearch} />
      </Container>
    </HeaderPage>
  );
};

export { Header };
