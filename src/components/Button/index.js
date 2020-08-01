import styled from "styled-components";

const Button = styled.button`
  color: var(--primary);
  border: 1px solid var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  /* transition: opacity 0.3s; */
  @media (min-width: 801px) {
    &:hover,
    &:focus {
      opacity: 0.5;
      /* color: var(--white);
    border: var(--white); */
    }
  }

  @media (max-width: 800px) {
    position: fixed;
    color: var(--white);
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;

export default Button;
