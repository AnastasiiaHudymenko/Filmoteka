import styled from 'styled-components';

export const WrapperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoList = styled.div`
display: flex;
    align-items: center;
    gap: 10px;
}
`;

export const Link = styled.a`
  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: block;
    color: #ffffff;
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
  }
`;

export const WrapperLinkNav = styled.div`
  display: flex;
  gap: 40px;
`;

export const LinkNav = styled.a`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  text-transform: uppercase;

  color: #ffffff;
`;
