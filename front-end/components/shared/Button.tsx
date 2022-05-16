import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  color?: string;
  centered?: boolean;
  width?: string;
}

const StyledButton = styled.button<ButtonProps>`
  border-radius: 5px;
  border: none;
  color: white;
  background-color: ${(props) => props.color ?? "#414141"};
  width: ${(props) => props.width ?? "250px"};
  height: 30px;
  cursor: pointer;
  margin: ${(props) => (props.centered ? "auto" : "")};
`;

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};
