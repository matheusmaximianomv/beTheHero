import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin-left: 32px;
  max-width: 480px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    text-align: justify;
    max-width: 360px;
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    svg {
      margin-right: 8px;
    }
  }
`;
