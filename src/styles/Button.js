import styled from "styled-components";

export const Button = styled.button`
  padding: 0.7rem 1.7rem;
  border: 1px solid rgb(251, 176, 64);
  background: ${(props) =>
    props.primary ? "rgb(251, 176, 64)" : "transparent"};
  border-radius: 5px;
  color: #fff;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    border: 1px solid rgb(255, 250, 243);
  }
`;
