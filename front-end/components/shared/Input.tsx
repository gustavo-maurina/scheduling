import { InputHTMLAttributes, Ref } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<any> {
  label: string;
  ref?: Ref<any>;
}

const StyledInput = styled.input`
  margin-top: 2px;
  height: 25px;
  border-radius: 5px;
  border: none;
  padding: 0 8px;
`;

const Container = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;

export const Input = (props: Props) => {
  return (
    <Container>
      {props.label}
      <StyledInput {...props} required />
    </Container>
  );
};
