import styled from 'styled-components';
import bcg from '../bcg.jpg';
import bcgMobile from '../bcg-mobile.jpg';
import bcgTablet from '../bcg-tablet.jpg';

export const HeaderPage = styled.header`
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #2f303a;
  padding-top: 40px;
  padding-bottom: 90px;
  background-image: url(${bcgMobile});

  @media screen and (min-width: 768px) {
    padding-bottom: 80px;
    background-image: url(${bcgTablet});
  }

  @media screen and (min-width: 1200px) {
    max-width: 1600px;
    padding-bottom: 44px;
    background-image: url(${bcg});
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;

    padding-left: 32px;
    padding-right: 32px;
  }
`;
