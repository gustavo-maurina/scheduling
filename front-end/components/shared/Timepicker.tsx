import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { AVAILABLE_HOURS } from "../../constants/availableHours";

const TimePicker = styled.select`
  border: none;
  padding: 5px;
  border-radius: 5px;
`;

export const Timepicker = (props: InputHTMLAttributes<any>) => {
  const options = AVAILABLE_HOURS.map((time: string, index) => (
    <option key={index} value={time + ":00"}>
      {time}
    </option>
  ));

  return (
    <TimePicker type="number" {...props}>
      {options}
    </TimePicker>
  );
};
