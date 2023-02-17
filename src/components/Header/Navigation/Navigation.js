import { TbMovie } from 'react-icons/tb';
import {
  WrapperNav,
  LogoList,
  Link,
  WrapperLinkNav,
  LinkNav,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <WrapperNav>
      <LogoList>
        <TbMovie size={30} fill={'transparent'} stroke={'white'} />
        <Link href="#index.htnl">Filmoteka</Link>
      </LogoList>
      <WrapperLinkNav>
        <LinkNav href="#index.htnl">Home</LinkNav>
        <LinkNav href="#index.htnl">Library</LinkNav>
      </WrapperLinkNav>
    </WrapperNav>
  );
};

export { Navigation };
