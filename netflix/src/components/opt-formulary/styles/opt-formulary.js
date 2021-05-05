import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  padding: 0 22px;
  row-gap: 10px;

  @media screen and (min-width: 768px) {
    row-gap: 20px;
    padding: 0 66px;
  }
`;

export const Input = styled.input`
  flex-basis: 100%;
  height: 48px;
  padding: 10px 10px 0;
  box-sizing: border-box;
  outline: none;
  position: relative;

  &::placeholder {
    position: absolute;
    font-size: 14px;
    transition: all 0.125s ease-in;
  }
  &:focus::placeholder {
    transform: translateY(-16px);
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    height: 60px;
    flex: 1;

    &::placeholder {
      font-size: 18px;
    }
    &:focus::placeholder {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
  color: #fff;
  min-height: 40px;
  align-self: center;
  background-color: #e50914;
  padding: 10px 16px;
  border: none;
  border-radius: 2px;
  margin: 4px auto;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 10px;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    height: 60px;
    padding: 10px 26px;
    font-size: 26px;
  }
`;

export const Text = styled.p`
  flex-basis: 100%;
  color: white;
  margin: 0;
  text-align: center;
  font-size: 18px;
  padding: 0 40px;
  line-height: 1.2;
`;
