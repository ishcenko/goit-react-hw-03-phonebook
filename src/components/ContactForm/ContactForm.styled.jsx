import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* width: 400px; */
  padding: 12px;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #060000;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  border: 1px solid hsla(0, 72%, 75%, 0.392);
  border-radius: 4px;
  height: 37px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  cursor: pointer;
  background: linear-gradient(45deg, #f5d679, #f3967a);
  align-items: center;

  &:hover,
  &:focus {
    outline: none;
    border-color: #ff0000;
    box-shadow: 0px 0px 21px 14px rgba(216, 255, 166, 0.61);
  }
`;

export const Button = styled.button`
  background: #ebf46a;
  border: none;
  border-radius: 20px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  color: #e80c0c;
  cursor: pointer;
  margin-top: 30px;
  padding: 10px 20px;
  margin-bottom: 50px;
  transition: 1000ms;

  &:hover,
  &:focus {
    outline: none;
    background: linear-gradient(90deg, #bd99f3, #f2b2d1);
    color: #000;
    font-size: 22px;
    width: 250px;
    transform: scale(1.15);
  }
`;
