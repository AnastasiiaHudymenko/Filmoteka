import styled from 'styled-components';

export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;
`;

export const Field = styled.input`
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.33;
  font-weight: 400;
  width: 280px;
  border-bottom: 0.5px solid #ffffff;
  outline: none;
  padding-left: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: -2px;
  right: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  position: relative;
`;

export const Span = styled.span`
position: absolute;
    top: 40px;
    left: 4px;
    color: red;
}
`;

// .form__notification {
//   visibility: hidden;
//   margin-top: 16px;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 16px;
//   display: flex;
//   align-items: center;
//   color: #ff001b;
// }
