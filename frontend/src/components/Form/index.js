import styled from 'styled-components';

const Form = styled.form`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : null)};

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
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

  input {
    & + input {
      margin-top: 8px;
    }

    & + div {
      margin-top: 8px;
    }

    & + textarea {
      margin-top: 8px;
    }
  }

  textarea {
    & + input {
      margin-top: 8px;
    }
  }

  div {
    display: flex;

    input {
      & + input {
        margin: 0px 0px 0px 8px;
      }
    }
  }
`;

export default Form;
