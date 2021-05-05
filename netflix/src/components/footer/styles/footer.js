import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 30px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 70px 56px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
