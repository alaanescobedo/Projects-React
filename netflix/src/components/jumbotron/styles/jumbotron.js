import styled from 'styled-components/macro';

export const Item = styled.div`
  padding: 50px 5%;
  color: #fff;
  border-bottom: 8px solid #222;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: ${({ direction }) => direction};
  }
`;

export const Container = styled.div``;

export const Panel = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
