import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 64px;
  }

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  a {
    width: 230px;
    margin-left: auto;
    margin-top: 0;

    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr /* Ou repeat(2, 1fr) */;
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;

      &:not(:first-child) {
        margin-top: 32px;
      }
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
