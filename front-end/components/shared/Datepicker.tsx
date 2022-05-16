import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { getTodayDate } from "../../utils/getTodayDate";

const StyledDatepicker = styled.input`
  border: none;
  padding: 5px;
  border-radius: 5px;
  width: 250px;
`;

export const Datepicker = (props: InputHTMLAttributes<any>) => {
  const today = getTodayDate();

  return <StyledDatepicker {...props} type="date" defaultValue={today} />;
};
