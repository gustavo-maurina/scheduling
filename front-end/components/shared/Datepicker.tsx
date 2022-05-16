import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledDatepicker = styled.input`
  border: none;
  padding: 5px;
  border-radius: 5px;
  width: 250px;
`;

export const Datepicker = (props: InputHTMLAttributes<any>) => {
  return <StyledDatepicker {...props} type="date" />;
};
