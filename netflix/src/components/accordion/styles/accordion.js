import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;

  @media screen and (min-width: 480px) {
    padding: 0 26px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  width: 815px;
  margin: 0 auto;
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 1em;
  }
`;

export const Title = styled.h3`
  font-size: 26px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 18px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  img {
    filter: brightness(0) invert(1);
    width: 16px;

    @media screen and (min-width: 768px) {
      width: 18px;
    }
  }
`;

export const Body = styled.div`
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  max-height: 1200px;
  padding: 1.2em;
  font-size: 16px;
  line-height: 22px;
  background-color: #303030;
  white-space: pre-wrap;
  user-select: none;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: normal;
  }
`;

export const Break = styled.p`
  height: 0;
  flex-basis: 100%;
`;
