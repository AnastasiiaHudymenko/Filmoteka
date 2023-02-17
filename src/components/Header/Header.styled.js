import styled from 'styled-components';

export const HeaderPage = styled.header`
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #2f303a;
  height: 230px;

  @media screen and (min-width: 768px) {
    height: 216px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1600px;
    padding-top: 40px;
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoList = styled.div`
display: flex;
    align-items: center;
    gap: 10px;
}
`;
